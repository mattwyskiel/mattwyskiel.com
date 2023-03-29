---
date: '2016-04-19T23:11:01+20:00'
author: Matthew Wyskiel
tags:
- wwdc
- apple
- music
- siri
- API
- xcode
- ios
- tvos
- watchos
- osx
layout: post
category: posts
title: My WWDC 2016 Wish List
id: 12
excerpt: I write this in mid-April of 2016, just 3 short months from this year's edition of Apple's Worldwide Developers Conference (WWDC). This year's conference is slated to preview all-new, feature packed releases of Apple's operating systems (iOS 10, OS X 10.12, watchOS 3, and tvOS 10). As such, there are already rumors and wish lists for what people want to see from this year's WWDC announcements. Allow me to throw in my two cents.
---
I write this in mid-April of 2016, just [2 short months from this year's edition of Apple's Worldwide Developers Conference (WWDC)](https://developer.apple.com/wwdc/). This year's conference is slated to preview all-new, feature packed releases of Apple's operating systems: [iOS 10](http://www.macworld.co.uk/feature/iphone/ios-10-release-date-feature-rumours-siri-2016-apple-wwdc-june-concept-3628012/), [OS X 10.12](http://9to5mac.com/2016/02/24/apple-siri-osx-10-12-2016/), [watchOS 3](http://www.gottabemobile.com/2016/02/17/8-apple-watch-features-we-want-to-see-in-watchos-3/), and [tvOS 10](https://www.reddit.com/r/appletv/comments/3vd6jr/what_do_we_want_from_next_version_of_tvos/). As such, there are already rumors and wish lists for what people want to see from this year's WWDC announcements. Allow me to throw in my two cents.

_Note: My wish list is more developer- and API-centric than user-experience-centric. If you want a list that tips the balance of dev- and UX-centricity the other direction, [click here](http://blog.steventroughtonsmith.com/post/140141855080/wwdc-wish-list)._

## Siri API
I feel like I asked for this last time, too.

At WWDC 2015, we got one step closer to third-party interaction with Siri through the announcement of the [CoreSpotlight API](https://developer.apple.com/library/ios/documentation/CoreSpotlight/Reference/CoreSpotlight_Framework/). We developers were given the ability to export information from our apps into native on-device search results. This improvement brought us closer to the Holy Grail of Apple OS system integration: [Siri](http://www.fastcompany.com/3035823/tired-of-waiting-for-a-siri-developers-take-matters-into-their-own-hands). As it is rumored that the smart, useful, and witty digital assistant will be brought to the Mac with OS X 10.12, one would only hope that this would be the year we are able to integrate with and expand Siri's functionality.

Ideally, a developer would be able to export commands from our apps to the Siri engine, and then our apps could handle the command/request from within our App using an UIApplicationDelegate method. This would work similarly to how CoreSpotlight works today, utilizing [Handoff](https://developer.apple.com/handoff/).

## Apple Music API
I am a subscriber to [Apple Music](http://www.apple.com/music/) - even switched _to_ it _from_ [Spotify](https://www.spotify.com/us/) - and I agree with Apple that this is the best possible music streaming option available.

That being said, there is one area in which Spotify has one leg up on Apple, and that is music manipulation. Meaning: apps like [Djay](https://www.algoriddim.com/djay-ipad) are able to, by accessing [Spotify's API](https://developer.spotify.com/), download a version of a given track to be used/manipulated/sped up/slowed down/tuned up and down/etc. Apple Music does not provide a similar API, which sucks as Djay is one of my favorite apps to use. Currently-available APIs only provide access to songs bought without the service subscription - the rest of the Apple Music library is [DRM-protected, unplayable using anything other than the Apple Music application](https://www.reddit.com/r/AppleMusic/comments/47x36k/we_need_an_apple_music_api/). The current Apple Music API in iOS 9.3 allows only [straight playback](https://developer.apple.com/library/ios/releasenotes/General/WhatsNewIniOS/Articles/iOS9_3.html) - no MP3 access.

So, I propose this: why not automatically check to see if a user is logged in to Apple Music, and if so just give the developers programmatic access to a pure, unprotected MP3 of the requested track? This would do wonders to face up to the competition, and it would increase the service's likability in the minds of its users (like me).

## Open Source Xcode
Yes, you read that correctly.

We all know that Xcode is an [infamously buggy and bloated IDE](http://devcodehack.com/xcode-sucks-and-heres-why/) that no one really likes to use but needs to use because this is the best first-party option out there. In fact, the only thing I like about it is the code completion.

Hopefully, Apple has learned with Swift that great things can come from community input. If Apple was to open-source Xcode in the same way they did with Swift, many problems we all have with the IDE could be fixed - and many new features could be added as well. For example, what if we could make the opening of storyboard files much quicker? What if we could add CocoaPods/Carthage/SPM support right into the IDE?

On another note, what if Apple finally supported and documented custom plugin creation? Wouldn't that be great?

## Xcode Plugins
For years, savvy developers have been able to add functionality to Xcode using an officially-unsupported and undocumented plugin system. In fact, someone even made a "plugin manager" plugin called Alcatraz to deal with this problem.

However, with great advances in plugin development, came greater attempts by Apple to stop it. Nowadays, Xcode gives very stern warnings upon open whenever there are plugins enabled (for the first time, granted) that they most likely are unsafe to use because they are not supported by Apple.

I propose that Apple opens up Xcode plugin development, so that we developers can add bits of functionality where needed. It's the least they can do to help with a sometimes lacking IDE.

## Bug Reporter
We all know that the way Apple handles bug reporting is horrible. From an outdated design to a clunky issue creation workflow to poor response experience.

That this old bug reporting system still exists is baffling, because Apple has already implemented two other great issue-related systems for other purposes: the Apple Developer Forums and the issue tracker for Open-Source Swift. So why have they not likewise revamped their main bug reporter tool?

There are many podcasts and articles that discuss this at length. I hope that Apple gets its act together on this at this year's conference.

They may also want to use Google and others as examples of what user-friendly bug reporters look like.


---


## Conclusion
I think that Apple has done a good job the past couple of years in giving the developers the features and openness they have so desperately desired since the days of Steve Jobs. With these reasonable requests granted, the company gains more credence and higher reputation among its developers, which would be only beneficial the Apple as a business.
