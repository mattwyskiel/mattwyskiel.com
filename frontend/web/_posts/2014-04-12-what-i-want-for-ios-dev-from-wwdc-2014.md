---
title: What I Want for iOS Dev from WWDC 2014
date: '2014-04-12T08:58:00.000-07:00'
author: Matthew Wyskiel
layout: post
category: posts
modified_time: '2014-04-12T10:23:52.325-07:00'
image_url: http://1.bp.blogspot.com/-UhBVfvvZnp4/UsR-qDmWQaI/AAAAAAAAGH8/kx5VvnyEoMI/s72-c/iOS+8.png
blogger_id: tag:blogger.com,1999:blog-4972357101260263864.post-3139837039127960316
blogger_orig_url: http://matthewwyskiel.blogspot.com/2014/04/what-i-want-for-ios-dev-from-wwdc-2014.html
id: 2
excerpt: Ok. It’s official. WWDC 2014 will happen from June 2-6. Now comes all the speculation about what will come out of this. I have my opinions about what Apple should do to up its game, and this blog is the perfect way to get out my personal thoughts!
---

Ok. It’s official. [WWDC 2014 will happen from June 2-6.](https://developer.apple.com/wwdc/) Now comes all the speculation about what will come out of this. I have my opinions about what Apple should do to up its game, and this blog is the perfect way to get out my personal thoughts! I will put this post in categories because I really have a lot that I to say.
<br/>
<br/>
##iOS 8

I believe that Apple did really well last year with the announcement of iOS 7. I spent the next few days just ogling over the software. They did a great job for developers. The dynamic type, motion effects, Text Kit, background notifications, etc. really allowed for us to create some amazing apps. The new design didn’t hurt, either. :D However, as in all things, there are things that us as developers would love to take advantage of that Apple hasn’t exposed to us yet.

### Siri

I would like to see Apple release some APIs to allow third-party apps to respond to commands given to Siri. I want to be able to give some strings to the system (like intent filters in Android) and if those commands are said, it would either automatically open in the app (like “let me write a new email”) when the app is either alone in being able to process the base command or the app is specified in the command (“...in Gmail”). The data from the command (e.g. which command was invoked) would be passed to the application in the same way that local and push notifications are: either in applicationDidFinishLauchingWithOptions: or in a separate delegate method specifically written for Siri commands. This would be very helpful and very up-to-date competition-wise (see [Android Wear](http://developer.android.com/wear/index.html) and [Microsoft's Cortana](http://www.windowsphone.com/en-us/features-8-1#Cortana))

### Touch ID

Developers should have secure access to Touch ID. Let me elaborate on that a little: I mean that we should be able to ask the system to do a fingerprint test (if available on the device) and then it would return a BOOL of whether it was successful or not. We would not have access to the fingerprint itself. It would stay on the chip where it’s supposed to.

### TestFlight

OK. This section is just gonna be me venting out all my anger about this. Recently Apple bought TestFlight, which was a very popular beta testing platform that many developers used. It was especially popular for its SDK, which allowed for data to come back to you about crashes or logs or feedback. The way both Apple and Burstly (TestFlight’s parent company, which Apple actually bought, gaining all its products) handled this and explaining to us developers what the heck was going on was not great, to say the least. Actually it was quite awful.

Their first course of action let us know that something was up: they discontinued their Android support. The next thing they did was take away the SDK from anyone who had not uploaded their first build with the SDK before they announced these “policy changes.” This sucked for me because I had just integrated their SDK into my app and was ready to start beta testing. And then slowly, and surely, all of Burstly’s web core started to disappear from the internet. Their blogs went down. Their homepage is just icons of their services. They removed their FlightPath service from the world. Also, to confused developers on Twitter, TestFlight would not tweet any info, instead replying and asking the developers to contact them privately via a “contact us” form on their website. I would think this is worth at least making one public announcement to clear things up.

While getting extremely angry with all the stuff going on; I looked and found that Apple had in fact bought Burstly, and apparently they already brought some of their staff to their offices. Then it clicked: Apple needs to do something amazing with this team NOW or all the secrecy and urgency was for nothing. Since they already have competition in the beta testing world with Google Play’s [beta testing and staged rollouts service](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en), using TestFlight’s technology and integrating it **directly** into the iOS SDK and iTunes Connect would be great for competition. So Apple, on behalf of all the dazed and confused developers that were negatively affected by the way you handled this acquisition, you can make it up to us. PLEASE do something for us and give these services, whatever branding is used, back to us. A WWDC announcement would be nice.

### Same-Day release (or at least GM)

Apple shines when it comes to surprises, sometimes. Last year’s Mac Pro, and the availability of OS X Mavericks free of charge were just last year’s examples. We as a world would love a few “One More Thing”s this time around. One of them would be the OS coming out the same day. It might not be practical for same day public release, but maybe a week or two later. The developers would get a GM version to develop on. The release could coincide with the next iPhone.

<br/>
## _Conclusion_

Apple can do great things. They just need to do them NOW to get ahead of the competition. They already are behind on some of the great innovations in the smartphone world. If they put their creative minds to work, then they can achieve great things, and make lots of money in the process.
