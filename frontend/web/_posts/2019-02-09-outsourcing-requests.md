---
date: '2019-02-09T02:25:22+05:00'
author: Matthew Wyskiel
tags:
- ios
- app
- facebook
- url
- request
- api
- apple
layout: post
category: posts
title: Outsourcing Requests - Retaining Control of Application Stability
id: 14
excerpt: As applications grow more and more complex, they may have to call an increasing number of external web APIs. As we build more features, we may depend on servies that we do not control, for the sake of gaining functionality we wouldn't be able to implement ourselves. That's great! What's not so great is when one of those services goes down, or has a major breaking change, or goes away altogether. Then, if we have not planned correctly, we may completely break our app with no immediate fix available. This is why I propose that to retain complete control over user experience, it is important that we maintain complete control over every external web call that goes in and out of our app.
---

I have been reading many articles lately raising concerns about being dependent on third-party libraries for our mobile applications. Felix Krause did a great [write-up](https://krausefx.com/blog/trusting-sdks) on the dangers of trusting third-party SDKs that everyone should read. There is also an excellent [article](https://sandofsky.com/blog/third-party-libraries.html) by Benjamin Sandofsky entitled When To Avoid Libraries which goes a bit broader into how and why to scale back on third-party library usage.

I view the scaling back on the use of third-party dependencies as a way to take control of the app development process, because if this scaling-back occurs, our schedule and workload is not anymore at the whim of outside people and organizations deciding to make breaking changes to your code or inadvertently exposing some security flaw that you otherwise would not have had to deal with.

However, it turns out that libraries are not the only third-party dependency that can get us tripped up when making apps. The thing that trips us up could be as simple as a URL.

As applications grow more and more complex, they may have to call an increasing number of external web APIs. As we build more features, we may depend on servies that we do not control, for the sake of gaining functionality we wouldn't be able to implement ourselves (like push notifications, payment processing, in-app purchases, social feeds, etc.) That's great!

What's not so great is when one of those services goes down, or has a major breaking change, or goes away altogether. Then, if we have not planned correctly, we may completely break our app with no immediate fix available (as the App Stores insist on [reviewing every update of every app](https://news.ycombinator.com/item?id=13817557) before the user is able to use it).

This is why I propose that to retain complete control over user experience, it is important that we maintain complete control over every external web call that goes in and out of our app.

Let's take an example: For a recent project I was working on ([an iOS app for a local coffee chain](http://mattwyskiel.com/portfolio/)), one of the features for consideration<sup>1</sup> called for a feed of updates, derived from a Facebook page, custom-styled for the application.

One way to solve this problem is to download the Facebook SDK for iOS, set it up in the app project, use it to make a call to the Facebook API for a list of page updates, and then translate those to the screen in the application.

There are two problems with this. Firstly, we are adding [at least 25.2 MB](https://developers.facebook.com/docs/ios/componentsdks) and a ton of functionality to our application when we only need one API call. Secondly, we are now deppendent on Facebook to maintain compatibility with our business requirements (as far as iOS version compatibility and security are concerned). We have lost control of some key aspects of our project!

So since including a full library is not a good option, couldn't we just make a manual call in the app to the Facebook Pages API at its URL and then work with that information? That certainly removes the app size issue, as a web request only takes a few lines of code with the [main iOS SDK](https://developer.apple.com/documentation/foundation/urlsession). We also control the code in terms of application security, and we can ensure that our code meets our business requirements for iOS version compatibility.

What's wrong with this solution, then? We are forgetting that Facebook still retains control over the URL we use to get access to the Pages API. They have the ability to [remove API access](https://developers.facebook.com/blog/post/2018/04/04/facebook-api-platform-product-changes/) and to make breaking changes to the data we get back. And because mobile applications are installed and slow-to-update compared to the web, if an external web API we directly access within the app breaks then we cannot do much to alleviate the situation quickly.

What we need to do is *control the URL*. 

The solution I used when building out this feature was to move the retrieving of updates to the backend. Our Node.js server would do the work of calling the Facebook Pages API, receiving the data, and send it over as a response when requested. The iOS app simply calls an endpoint on our backend, and it can either expect the data, or an error.

From the App side, we define a new URL as part of our unified set of API endpoints, and can easily integrate it into whatever we are doing for network abstraction. It's the ["Set it, and forget it"](https://www.youtube.com/watch?v=AXup055Btts) approach!

This solution works best because if the Facebook API goes down or breaks for some reason, we am not stuck with it. We can provide a hotfix to the server to either fix the API call to Facebook, provide some contingency data, or change the data source to something potentially more reliable. We are free to make those decisions as needed, as quickly as possible!

A bonus we get for doing this is that we can define the schema of our response - we're not dependedent on Facebook for that either! We take what we need and discard the rest! It also helps for if we were to need to switch away from Facebook; we can adapt just about any data source to my schema and the app will work just the same!

In the end, I think the dependency-skeptics have a point. If the goal of software engineering is to have stable software made quickly, having part of that software dependent on a third-party resource will always hinder that goal. We will never have a perfect solution, as no one should [reinvent the wheel](https://www.scalablepath.com/blog/third-party-libraries/). But, hitting the sweet spot between speed and stability is a good goal.

<br>
<br>
<sup>1</sup>   Around the time as I was working on the app, the Cambridge Analytica scandal hit and Facebook began strongly restricting API use. Since I did not own the Facebook Page I needed data from with my account, I could not test the API, and I haven't been able to put it through App Review because of this complication. If anyone from Facebook App Review is reading this, is there a way I can get access to the *public feed* of a specific Facebook page and get it speedily through review so I can keep working on this feature? Please contact me!