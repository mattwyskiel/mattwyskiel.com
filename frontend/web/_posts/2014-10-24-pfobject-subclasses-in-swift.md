---
title: PFObject Subclasses in Swift
date: '2014-10-24T18:07:00.000-07:00'
author: Matthew Wyskiel
tags:
- dynamic
- swift
- properties
- pfobject
- ios
- pfsubclassing
- parse
- subclass
layout: post
category: posts
modified_time: '2014-10-24T18:12:01.485-07:00'
blogger_id: tag:blogger.com,1999:blog-4972357101260263864.post-8417932852938563946
blogger_orig_url: http://matthewwyskiel.blogspot.com/2014/10/pfobject-subclasses-in-swift.html
id: 6
excerpt: So with the new Swift programming language came a whole lot of improvements to the development workflow. It also came with a lot of headaches, of which I will demonstrate right now.
---

So with the new Swift programming language came a whole lot of improvements to the development workflow. It also came with a lot of headaches, of which I will demonstrate right now.

I am making an app where I want to use Parse as a backend. Thus, I decided I needed to subclass PFObject to make my data model come to life. As you've probably seen online, there has been a lot of trouble trying to get this to work in Swift, so I offer my solution to you all:

~~~ swift
//
//  API.swift
//
//  Created by Matthew Wyskiel on 10/21/14.
//  Copyright (c) 2014 Matthew Wyskiel. All rights reserved.
//

import UIKit
import Parse

public class API: PFObject, PFSubclassing {

    override public class func load() {
    	registerSubclass()
    }

    public class func parseClassName() -> String! {
    	return "API"
    }

    @NSManaged public var name: String!
    @NSManaged public var url: String!
    @NSManaged public var icon: PFFile!
    @NSManaged public var descriptionString: String!
    @NSManaged public var supportURLs: [NSString: String]!
    @NSManaged public var librariesURLs: [NSString: String]!

}
~~~

Firstly you may notice that I can just import Parse as I can a system framework. This is because Parse included a .modulemap file in their framework in order for it to become modularized, so it will work as an Objective-C Module. I love this a lot because I can just Option-Click  a class name (such as PFFile) and immediately see the public methods in Swift format, just like system headers!

Let's see how I made this happen!

###1. Import Parse, Subclass PFObject, and conform to PFSubclassing
This is a fairly straightforward step as it just involves adding an import and editing the class hierarchy:

~~~ swift
import UIKit
import Parse

public class API: PFObject, PFSubclassing {
~~~

###2. Override required PFSubclassing methods
This is made easier for you by the framework: there are originally 5 reqired methods for override of a class that conforms to PFSubclassing, but PFObject already implements 3 of those 4 of those methods; all you need to implement is `parseClassName()`:

~~~ swift
public class func parseClassName() -> String! {
	return "API"
}
~~~

Then you need to "register" the class with the Parse SDK. It's best to do this before the setApplicationKey() call in the app delegate. The best way you can do this is by overriding the class function `load()`:

~~~ swift
override public class func load() {
   	registerSubclass()
}
~~~

Great. No Swift interference, right? Well, it's coming.

###3. Add your properties
Now, the Parse docs want us to use the `@dynamic` keyword when using Objective-C. However, the `dynamic` attribute in Swift is different from `@dynamic`. The closest Swift equivalent for `@dynamic` is `@NSManaged`, which the Apple documentation claims is reserved for Core Data. I beg to differ because it works for what Parse wants to do. I just didn't realize it until I tried it.

~~~ swift
@NSManaged public var name: String!
@NSManaged public var url: String!
@NSManaged public var icon: PFFile!
@NSManaged public var descriptionString: String!
@NSManaged public var supportURLs: [NSString: String]!
@NSManaged public var librariesURLs: [NSString: String]!
~~~

##Yay!
Put together, you get a darn good class. And it works too; just try it with your Parse app. Hope this helps confusion!

##Note
If you use Parse in your app as well as in an internal framework used for your app, you need to call `setApplicationKey()` in **both** targets (I learned that the hard way.) The way I handled this is by creating an `initialize()` class method in the principal class of the framework:

~~~ swift
public class func initialize() {
	Parse.setApplicationId("<APP_ID>", clientKey: "<CLIENT_KEY>")
}
~~~

Then I call this method in my app delegate as well as the `setApplicationId()` method, and everything just works!!

*Update:*
With Swift 1.2 and later, overriding `load()` causes a build error because that function was associated with Objective-C (try it; that's actually the error). so just change `load` to `initialize` (which does practically the same thing) and it should work just fine.
