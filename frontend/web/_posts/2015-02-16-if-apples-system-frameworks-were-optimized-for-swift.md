---
date: '2015-02-16T19:55:57+19:00'
author: Matthew Wyskiel
tags:
- swift
- standard
- library
- objective-c
- wrapper
- blocks
- closures
- protocols
- operator
- overloading
- type
layout: post
category: posts
title: If Apple's System Frameworks Were Optimized For Swift
id: 7
excerpt: Although Apple has taken great strides to optimize its frameworks for Swift, they haven't quite gotten there yet because they've also had to support Objective-C. As well, all of Apple's frameworks are *written* in Objective-C! Wouldn't life be so much better if there was a wrapper for the Apple frameworks in Swift that takes advantage of some of the niceties of the language that annoy us the most in the interop-from-Objective-C transition, plus some extras? I'd say so!
---

Although Apple has taken great strides to optimize its frameworks for Swift, they haven't quite gotten there yet because they've also had to support Objective-C. As well, all of Apple's frameworks are *written* in Objective-C! Wouldn't life be so much better if there was a wrapper for the Apple frameworks in Swift that takes advantage of some of the niceties of the language that annoy us the most in the interop-from-Objective-C transition, plus some extras? I'd say so!

So what would such a wrapper look like, and what would it include feature-wise?


## Typed Arrays for Arguments and Properties
Who else gets really annoyed when you see a declaration like this?

~~~ swift
var pathComponents: [AnyObject] { get }
~~~

The culprit? The `NSArray` type from Objective-C being translated into Swift as an array of `AnyObject`s.

Why don't we get rid of the abstraction and head-scratching and get at what the types of the objects in the array are?

~~~ swift
var pathComponents: [String] { get }
~~~


## Operator Overloading
Objective-C is known for its verbosity, no doubt about it. But Swift can take advantage of **operator overloading**, meaning you can have a simple base name for your function, and have different sets of arguments for whatever use cases you need. This is the crux of `init()`; instead of `initWithString(aString)` the syntax is `init(string: aString)`. Apple was on to something here.

## Defaults for Arguments
Depending on the use case, it may be easier to declare one function with arguments that have a default value than multiple functions that all call back to the mother function with the multitude of arguments. I'm just saying, if there was only one version of `presentPopover()` to worry about instead of the currently 2 or 3 to choose from, I'd be one happy duckling.

## Scoped Namespacing
Goodbye, `NS`- or `UI`-whatever! I could call the `viewDidLoad()` method on `ViewController`, and use a `Label` and an `AlertView` as well! Oh, how much simpler that would be!

## Closures instead of selectors and protocols
The classes that Apple introduced long ago, like `UIButton` or `UIAlertView` or `MFMailComposeViewController` had to utilize the technologies from long ago to handle events. However, now we have Objective-C blocks and their equivalent in Swift: closures. With the exception of `UIAlertView` (which was moved into a new class bundled with `UIActionSheet`), Apple doesn't seem to have caught up its classes to the full potential of these new technologies. Open-source libraries like [BlocksKit](https://github.com/zwaldowski/BlocksKit) have stepped in to fill in the gap for this omission, and they would be an important part of a wrapper like this.

## Literal Convertibles and other protocol-sourced goodness
Again, here's where open source has been very good about standing in the gap between the omission of this great enhancement brought by the Swift language from the standard libraries that came from Foundation and other frameworks. [Literally](https://github.com/mattt/Literally) from [Mattt Thompson](http://mattt.me) is a great example of how this could and should work out for the standard libraries.

# How could all this be implemented?
I see four ways one could do this, either separately or together: (1) **Class Extensions** (in order to get all that nice new functionality we want); (2) **Typaliasing** - in order to achieve those succinct class names; (3) **Subclassing**; (4) **Private instance of original class** to call methods on and get properties from

### Conclusion
All these requirements for a Swift set of frameworks would constitute a truly updated set of system libraries, ready for use in Swift. Sadly, Apple hasn't truly gotten to that point yet with its developer tooling and frameworks. I will use this post as a starting point to see if, as a personal exercise, can make this ideal of a Swift-updated wrapper for the system libraries a reality. Stay tuned.
