---
title: My Discoveries - Lots of Tips and Resources to Hopefully Help Others in iOS Development
date: '2014-04-25T00:00:00.000-07:00'
author: Matthew Wyskiel
layout: post
category: posts
modified_time: '2014-04-25T03:45:13.226-07:00'
image_url: http://1.bp.blogspot.com/-OZGfJpEWwYI/U087X34PQ9I/AAAAAAAAAMA/cf9JODov6wk/s72-c/C2D-iOS-app-ad.png
blogger_id: tag:blogger.com,1999:blog-4972357101260263864.post-7548808535127343523
blogger_orig_url: http://matthewwyskiel.blogspot.com/2014/04/my-discoveries-lots-of-tips-and.html
id: 3
excerpt: I have recently updated my app, Call2Disciple, to version 1.1. This seems like it would not be that significant, but...
---

I have recently updated my app, [Call2Disciple](http://appstore.com/call2disciple), to version 1.1. This seems like it would not be that significant, but [in the words of Michael Fisher from pocketnow.com](http://pocketnow.com/2014/04/14/windows-phone-8-1-review-video),

> _"Of all the understatements and mischaracterizations of the tech world, probably the most ignominious is the point-upgrade."_

This reigns true also for this app, for in a single point upgrade, many important features and changes, on both the user side and the development side, were implemented in the short month before this update. As an indie/intermediate developer, I have also learned many things and found a multitude of resources, that I'd like to share with the world so that you would not have to go through all the troubles I have gone through (and so that I have writing to go back on if I forget any of this).

### Cocoapods

[![](http://www.alexcurylo.com/wp-content/uploads/2012/06/Screen-Shot-2012-06-06-at-7.25.00-AM.png)](http://www.alexcurylo.com/wp-content/uploads/2012/06/Screen-Shot-2012-06-06-at-7.25.00-AM.png)

Yes. I have only _just_ discovered the sheer power and might of [Cocoapods](http://cocoapods.org/), "The dependency manager for Objective-C." It is very helpful and manages everything for me when it comes to third-party libraries. And even if the official developer does not make the library available on Cocoapods, someone else usually makes the .podspec for them! (Search any Objective-C third party framework/library on [cocoapods.org](http://cocoapods.org/); it will come up - amazing!)

A few tips, however (based on my experience):

*   **Do NOT edit your podfile in TextEdit or use the plugin available in [Alcatraz](http://alcatraz.io/);** the syntax and formatting, especially of the single-quotes (' '), is askew - thus, Cocoapods will generate errors when you try to run `$ pod install`
*   **Either start off your project using Cocoapods or make sure you run these changes in the master branch of your version control.** This was a pain for me because Git was having issues with the brand new .xcworkspacedata files that were created when I attempted to merge the branches (I was working on the "1.1" branch trying to merge it with the master branch). I eventually just had to delete the master branch and rename the "1.1" branch to "master." Just avoid this situation altogether by making sure that the cocoapods addition is already in the master so you don't have to worry about merging a completely new workspace into the master branch.

### Instabug

![Example usage snapshots provided by the Instabug website](https://instabug.com/images/website/Landing-Page/Landing_Page.png")

Have you ever had trouble finding a relatively simple way to receive feedback for your app, while getting the most out of the feedback you can get? Enter [Instabug](http://www.instabug.com/), a framework which simplifies the bug reporting process for your users and makes the process even fun! All the user has to do is shake the device, and then instantly a snapshot is taken of the current screen (that they can draw on), and then they can write their feedback. You can even use your own key colors for the window that appears.

### DEBUG preprocessor macro

![The section of "Build Settings" where this macro is found. See the NOTE below.](http://4.bp.blogspot.com/-BG81QDOWtCI/U1MlkNo-piI/AAAAAAAAAMU/ALvlau7nFII/s1600/Screen+Shot+2014-04-19+at+9.40.09+PM.png "The section of "Build Settings" where this macro is found. See the NOTE below.")

If you ever wanted a way to determine whether the app is in debug mode or not, fear not! Xcode actually defines a macro (search "Preprocessor Macros" in Build Settings) for determining whether the app is in debug mode with a nice DEBUG=1 definition in the "Debug" section.

> **NOTE**: If you want to use this in code, you need to add the opposite part of the boolean (DEBUG=0) into the "Release" section of the build setting. Otherwise, when you build for Profiling/Archiving, there will be an undeclared variable error.

### Conclusion
I hope that you found some help from this post and that you might use some of these resources and techniques to make your lives easier. I know it has for me!
