---
date: '2015-06-09T15:04:00-04:00'
author: Matthew Wyskiel
tags:
- swift
- standard
- library
- swift2
- protocols
- array
- dictionary
- generic
- objective-c
- type
layout: post
category: posts
title: Swift 2.0 and the State of my SwiftSystem Project
id: 8
excerpt: The WWDC 2015 keynote has come and gone. There were great announcements, from iOS 9 and OS X El Capitan, to watchOS 2 and even the unified Developer Program. I am not here to talk about any of those announcements; I'm here to talk about Swift.
---
The [WWDC 2015](https://developer.apple.com/wwdc/) keynote has come and gone. There were great announcements, from [iOS 9](http://developer.apple.com/ios/pre-release/) and [OS X El Capitan](http://developer.apple.com/osx/pre-release/), to [watchOS 2](http://developer.apple.com/watchos/pre-release/) and even the unified [Developer Program](https://developer.apple.com/programs/). I am not here to talk about any of those announcements; I'm here to talk about Swift.

![Swift icon](https://developer.apple.com/assets/elements/icons/128x128/swift.png){: .center-image}

You may remember a [post](http://mattwyskiel.github.io/posts/2015/02/16/if-apples-system-frameworks-were-optimized-for-swift.html) I wrote in February that described the ideal Swift-ified system frameworks for the Cocoa SDKs. I had also posted a [tweet](https://twitter.com/MattWyskiel/status/574040424832090112) with a preview of the proposed library I was working on. With the announcement of Swift 2, almost none of that is necessary enough to invest time in making a library. Here's why:

- Lightweight Generics in Objective-C provide a way to provide the type of  NSDictionary, NSArray, or NSSet objects, so that Swift knows the type of the array, dict, or set that the Objective-C API is working with.
- There is a brand new error handling system that is meant to be a modern, better version of the NSError pointer system. This eliminates the immediate need to find a better way to handle errors and the methods that throw them via a third party i.e. [BlocksKit](https://github.com/zwaldowski/BlocksKit).
- Nullability annotations in Objective-C allow the Swift compiler to determine the nullability of a certain type in its context. No more implicitly unwrapped optionals!

With these three issues taken care of by the good folks at Apple, now this project is unnecessary; it would be just some typealiases and BlocksKit. Not worth making an entirely new library.

I am very thankful that Apple got the message about these user experience issues that seemed to stick out like a sore thumb. I am very excited to begin testing and developing with these improvements.
