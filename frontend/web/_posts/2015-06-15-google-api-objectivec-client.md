---
date: '2015-06-15T15:04:00-04:00' #change to date finished
author: Matthew Wyskiel
tags:
- swift
- google
- library
- API
- client
- objective-c
- cocoapods
- ios
- io2015
layout: post
category: posts
title: The Current State of the Google API Client for Cocoa
id: 9
excerpt: A lot of us probably use at least one of Google's public data APIs. It's unavoidable. From YouTube to Google+ to even the URL Shortener, it is inevitable that we will use one of Google's APIs because they are so useful. Those of us using Cocoa and Cocoa Touch to access those APIs are directed by the APIs' documentation to the open-source Google APIs Objective-C Client for implementation help. But now it's out of date, and Google hasn't done anything about it.
---
![Google APIs Objective-C Client header](/assets/img/google-api-objectivec-client.png){: .center-image}
<br/>

A lot of us probably use at least one of Google's public data APIs. It's unavoidable. From [YouTube](https://developers.google.com/youtube/) to [Google+](https://developers.google.com/+/) to even the [URL Shortener](https://developers.google.com/url-shortener/), it is inevitable that we will use one of Google's APIs because they are so useful. Those of us using Cocoa and Cocoa Touch to access those APIs are directed by the APIs' documentation to the open-source [Google APIs Objective-C Client](https://code.google.com/p/google-api-objectivec-client/) for implementation help. But now it's out of date, and Google hasn't done anything about it.

Some things in life age well; this library is not one of them. And Google hasn't helped by basically ignoring their client library in these ways. Google's API client for Objective-C was good for what it was in 2011, but that was before Swift, modern Objective-C, CocoaPods, and even [Automatic Reference Counting](https://code.google.com/p/google-api-objectivec-client/source/browse/trunk/Source/Objects/GTLObject.m)!

- Only [recently](https://code.google.com/p/google-api-objectivec-client/source/detail?r=444) have they updated their property definitions to use the `nonatomic` keyword.
- Automatic Reference Counting is an afterthought, and only used in the service-specific files. [The base classes use Manual Reference Counting.](https://code.google.com/p/google-api-objectivec-client/source/browse/trunk/Source/Objects/GTLObject.m)
- The repository uses [SVN](https://code.google.com/p/google-api-objectivec-client/source/checkout) for source control, so it's almost impossible to contribute as it is so dated.
- It is so complex that it's a challenge just to [import the library into your project](https://www.youtube.com/watch?v=5zGSqiyCXa0), and there are so many hacks one can perform to achieve just that.
- There is no support for clang modules in this library (even in its severely-outdated [CocoaPod](https://github.com/CocoaPods/Specs/blob/master/Specs/Google-API-Client/1.0.422/Google-API-Client.podspec.json)), which means more work for Swift developers just to be able to use this library in adding a Bridging Header etc.
- The [podspec](https://github.com/CocoaPods/Specs/blob/master/Specs/Google-API-Client/1.0.422/Google-API-Client.podspec.json), not even maintained by Google, that does exist is horribly out-of-date.
They don't even support this library in their new [CocoaPods-based library distribution system](https://developers.google.com/ios/cocoapods#cocoapods_published_by_google)! (Don't be fooled: "Google APIs for iOS" is just an aggregation pod for all the other "modern" libraries that Google supports with this distribution flow, obviously not including the aforementioned Data APIs Client)

So what do we as developers do? This library is still a helpful way to immediately have access to all those great APIs without a lot of boilerplate and setup. However, it is really old, and has lost effective support from the majority of Google, besides the people who have actually been maintaining it for the past few years. If it weren't for the few maintainers who kept the project up and running and still as useful as it currently is, we would be in a much worse situation than we have now.

I thought that I needed an upgrade. I decided I would try something new. Something that would actually utilize current technologies. Something that would be actually nice for developers to use. I hoped I could find someone who was already ahead of me and implemented their own library, even if it had just a bare-bones implementation, but I could not find even that.

Thus, I decided to build one myself. I call it the [Google APIs Swift Client](https://github.com/mattwyskiel/GoogleAPISwiftClient), after its spiritual predecessor.

Using [Alamofire](https://github.com/Alamofire/Alamofire) for its networking, [ObjectMapper](https://github.com/Hearst-DD/ObjectMapper) for model mapping, and protocols at its core, I think this library could become something great and innovative.

The current version as of this posting only contains the base model and fetcher protocols and classes (respectively), as well as a hand-made implementation of the [Discovery API](https://developers.google.com/discovery/). I hope to use this initial implementation to make a ServiceGenerator akin to the one [Google uses](https://code.google.com/p/google-api-objectivec-client/wiki/ServiceGenerator) for its Objective-C library.

This library addresses each of the specific complaints above:

- It not only supports Swift and modules, but it is *written* in Swift!
- Because it is written in Swift (and was written in 2015), the **entirety** of this library uses Automatic Reference Counting.
- It uses Git for source control, is hosted on GitHub, which makes contribution that much easier!
- It supports CocoaPods and its simple method of library installation right out of the gate, with the current version of this library in the [CocoaPods Specs repo](https://github.com/CocoaPods/Specs/tree/master/Specs/GoogleAPISwiftClient) right now!

Please feel free to help move this project along in any way you see fit, whether it be filing issues or submitting pull requests. Even starring helps me know this project is worth working on.

So what is the current state of Google's API Client for Cocoa and Cocoa Touch? Well, not great. It is an old library in need of a reboot. Since Google as a whole seems to not want to help us out with the needed updates and upgrades to this library, and because the library is so bulky and complex and messy, it is up to us as a community to rectify this situation on our own. My "startup" library is an option I'm putting out there, and one I'll certainly begin using once it supports the services I need, like Blogger and YouTube.

_Update (8/16/15):_ I opened an issue in the Google API repository on Google Code regarding the issues described in this post: [Click here to see it.](https://code.google.com/p/google-api-objectivec-client/issues/detail?id=90)
