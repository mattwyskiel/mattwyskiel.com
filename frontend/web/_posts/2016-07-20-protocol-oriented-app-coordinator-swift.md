---
date: '2016-07-20T23:11:01+20:00'
author: Matthew Wyskiel
tags:
- app
- ios
- coordinator
- swift
- protocol
- pop
layout: post
category: posts
title: Protocol-Oriented App Coordinators in Swift
id: 12
excerpt: As a result of reading many blog posts and watching many videos from the iOS developer community on app architecture over the past year, I grew incredibly dissatisfied with the bloat and complexity of my app's typical MVC architecture. I did some research into some alternatives such as MVVM but was also unimpressed with the complexity that came with them. For example, the ideal way to implement MVVM is by using functional reactive programming, which introduces a completely different programming paradigm with a steep learning curve. But then I found a new pattern for architecting apps, which was a dramatic change from traditional MVC, yet very familiar. This pattern is called the App Coordinator pattern.
---
*Introduction:*

One of my favorite things to do as an app developer is to refactor. I am often inspired from online articles, [Realm videos](https://realm.io/news/tags/apple/), or developer conferences such as [WWDC](https://developer.apple.com/videos/wwdc2016) and [AltConf](http://altconf.com/schedule/) to think of more efficient, creative, and "Swifty" ways to improve my code. A few months ago I decided I would try to perform a complete refactor of my [Call2Disciple](https://itunes.apple.com/us/app/call2disciple/id833015192?mt=8) app. I completely rewrote the app in Swift -- freeing me from any hindrances that come with Swift/Objective-C interoperability. I was able to use the Swift language to the fullest extent of its capability. I was also able to stretch my mind into solving old problems with new, "Swifty" solutions that are indeed unique to this project. I hope to use the next few blog posts to document some of these.

--

As a result of reading many blog posts and watching many videos from the iOS developer community on app architecture over the past year, I grew incredibly dissatisfied with the bloat and complexity of my app's typical MVC architecture. I did some research into some alternatives such as [MVVM](http://artsy.github.io/blog/2015/09/24/mvvm-in-swift/) and [VIPER](https://www.objc.io/issues/13-architecture/viper/) but was also unimpressed with the complexity that came with them. For example, the ideal way to implement MVVM is by using functional reactive programming, which introduces a completely different programming paradigm with a steep learning curve.

What I really wanted was what everyone else who searches for a new iOS app architecture wants: to get rid of the [Massive View Controller](https://realm.io/news/andy-matuschak-refactor-mega-controller/) -> a play-of-words on Model-View-Controller that emphasizes the reality that most functionality that is not explicitly Model or View tends to be placed in the Controller (usually the View Controller). This makes the Controller unnecessarily complex and bloated, and makes the app in general hard to maintain or test.

But then I found a new pattern for architecting apps, which was a dramatic change from traditional MVC, yet very familiar. This pattern is called the [App Coordinator](http://khanlou.com/2015/10/coordinators-redux/) pattern, and it was introduced in a [talk at NSSpain](https://vimeo.com/144116310) by [Soroush Khanlou](http://khanlou.com).

What do App Delegates, Massive View Controllers and Storyboards all have in common? They all directly handle navigation at one point or another. App Delegates handle incoming URLs, Notifications, and User Activities and navigate the user to the correct location. Storyboards handle navigation between declaratively-defined IB-View-Controllers, and typical View Controllers also tend to handle their own navigation stack, especially with the `present(_:, animated:, completion:)` and `dismiss(animated:)` APIs.

App Coordinators take all of the navigation functionality in an app and abstract it out of each of these problem points. (Yes, this means I also ditched storyboards for NIBs). All of this functionality ends up in a specific coordinator class, which handles navigation between view controllers. This helps get rid of some of the functionality from the View Controller, and further specifying what it was meant to do -> handle the display of a view and its subviews. App Coordinators further allow for self-containment of View Controllers, because they do not need to know about anything else in their navigation stack.

## How It Was Implemented

Inspired by many WWDC talks (like [Session 408 from 2015](https://developer.apple.com/videos/play/wwdc2015/408/) and [Session 419 from 2016](https://developer.apple.com/videos/play/wwdc2016/419/)), I decided to use protocols to implement this app-level functionality.

Now, my app was a `UITabBar`-based application, so my coordinators would be structured with that in mind.

```swift
protocol TabCoordinator {
  associatedtype RootType: UIViewController
  var rootController: RootType { get }
  var tabBarItem: UITabBarItem { get }
}
```

The initial protocol would include a root controller that can be of any type that inherits from `UIViewController`, as well as a `UITabBarItem` that would determine the look of the tab itself. So, for example:

```swift
class AboutTabCoordinator: TabCoordinator {
  var rootController: UINavigationController
  var tabBarItem: UITabBarItem = UITabBarItem(title: "About", image: UIImage(named: "AboutTabBarIcon"), selectedImage: UIImage(named: "AboutTabBarIcon_Filled")

  init() {
    let homeVC = AboutRootViewController()
    rootController = UINavigationController(rootViewController: homeVC)
    homeVC.delegate = self
    rootController.tabBarItem = tabBarItem
  }
}
```

As the `init()` method suggests, navigation will be handled through delegation, as there are no storyboards. All delegate methods, especially those involving navigation from one controller to another, are implemented in the `TabCoordinator `object.

```swift
extension AboutTabCoordinator: AboutRootViewControllerDelegate {
  // ...
  func handleFeedbackButton() {
    // open email dialog
  }

  func showContactUs() {
    // show contact us
  }

  func rateApp() {
    // go to app store to rate app
  }
  // ...
}
```

This setup works really well. I can separate the navigation from the view controller logic. View controllers are self-contained, and thus can be reused.

However, it is when I tried to put it all together in a central `AppCoordinator` object that I experienced some problems. Specifically, I could not create an array of `TabCoordinator`s that didn't constrain the type of `TabCoordinator`. This is because I have an `associatedtype` property requirement in my `TabCoordinator` protocol. I was not prepared to give up the ease of use that came with that `associatedtype` in my `TabCoordinator` classes. I decided to create a type-erased version of my `TabCoordinator` so that I could use multiple types of `TabCoordinator` conformants in a single array.

```swift
class AnyTabCoordinator {
  var rootController: UIViewController
  var tabBarItem: UITabBarItem

  init<T: TabCoordinator>(_ tabCoordinator: T) {
    rootController = tabCoordinator.rootController
    tabBarItem = tabCoordinator.tabBarItem
  }
}
```

I also wrote an easy way to be able to "de-genericize" the different `TabCoordinator`s so that they would be able to interact nicely with each other when I needed to combine them in the base array of `Coordinator`s

```swift
func deGenericize<T: TabCoordinator>(_ coordinator: T) -> AnyTabCoordinator {
  return AnyTabCoordinator(coordinator)
}
```

The final `AppCoordinator` class ends up like this:

```swift
class AppCoordinator {
  var tabBarController: UITabBarController
  var tabs: [AnyTabCoordinator] = [deGenericize(AboutTabCoordinator())/*, ...*/]

  init(tabBarController: UITabBarController) {
    self.tabBarController = tabBarController
  }

  func start() {
    tabBarController.viewControllers = tabs.map { (coordinator) -> UIViewController in
      return coordinator.rootController
    }
  }
}
```

The final step is to set the `AppCoordinator` up in `application(_:, didFinishLaunchingWithOptions:)`:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
  // Override point for customization after application launch.
  configureAppServices()
  window = UIWindow()

  configureAppStyle()

  tabBarController = UITabBarController()
  window?.rootViewController = tabBarController

  appCoordinator = AppCoordinator(tabBarController: tabBarController)
  appCoordinator.start()

  window?.makeKeyAndVisible()
  return true
}
```

For more, see a library I just released (fittingly called AppCoordinator) [here](https://github.com/mattwyskiel/AppCoordinator).
