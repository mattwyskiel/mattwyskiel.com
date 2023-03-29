---
title: A Commentary on Mobile Purchasing
date: '2014-05-09T12:05:00.000-07:00'
author: Matthew Wyskiel
layout: post
category: posts
modified_time: '2014-06-27T11:03:12.308-07:00'
blogger_id: tag:blogger.com,1999:blog-4972357101260263864.post-2161833238946548277
blogger_orig_url: http://matthewwyskiel.blogspot.com/2014/05/a-commentary-on-mobile-purchasing.html
image_url: http://us.123rf.com/450wm/iamnee/iamnee1310/iamnee131000102/22773625-a-shopping-cart-full-with-ram-computer-graphic-card-or-video-card-power-supply-unit-for-computer-and.jpg
id: 4
excerpt: Because Call2Disciple has an online store that is an integral part of their business, I thought it was wise to look into ways to be able to purchase physical goods via an avenue other than In-App Purchase for its iOS app...
---
[![](http://us.123rf.com/450wm/iamnee/iamnee1310/iamnee131000102/22773625-a-shopping-cart-full-with-ram-computer-graphic-card-or-video-card-power-supply-unit-for-computer-and.jpg)](http://us.123rf.com/450wm/iamnee/iamnee1310/iamnee131000102/22773625-a-shopping-cart-full-with-ram-computer-graphic-card-or-video-card-power-supply-unit-for-computer-and.jpg){: .center-image}

Because [Call2Disciple](https://itunes.apple.com/us/app/call2disciple/id833015192?mt=8&amp;ign-mpt=uo%3D4) has an [online store](http://www.call2disciple.com/#!shop/cfqo) that is _an integral part of their business_, I thought it was wise to look into ways to be able to purchase physical goods via an avenue other than In-App Purchase for its iOS app, which [Apple's Review Guidelines document](https://developer.apple.com/appstore/resources/approval/guidelines.html#purchasing-currencies)&nbsp;_clearly_&nbsp;states,</span>

> _"Apps using IAP to purchase physical goods or goods and services used outside of the App will be rejected."_

Call2Disciple sells physical resources such as books, CDs, and DVDs; so this rule would ruin chances of being in the App Store, and thus actually being available.

Since Call2Disciple already uses [PayPal](https://www.paypal.com/home) in their online shopping efforts on the web, I thought I'd start there. Lo and behold, they provide a "[Mobile SDK](https://developer.paypal.com/webapps/developer/docs/integration/mobile/mobile-sdk-overview/)" for iOS (and Android as well, which will be helpful for my port to Android).

So I dug deeper, found exactly how to use this SDK, and was satisfied. Until I got to the last step in the Getting Started Guide: "[Verify a Mobile Payment](https://developer.paypal.com/webapps/developer/docs/integration/mobile/verify-mobile-payment/)," and the link brought me to a page that told me that I needed a server to verify a payment.

Look, I'm a teenager. As geeky and really into this software development business as I am, I _really_ do not want to have to touch a server as much as I can; at least until I have the money (and possibly more maturity) to buy and run and maintain a server. I know Parse has "[Cloud Code](https://parse.com/docs/cloud_code_guide)" that can let me run my custom JavaScript code on their servers, that means I would have to _learn_ and actually be _semi-fluent_ in JavaScript. I know it a little bit, but obviously not that well.

That brings me to the recent news that Apple is [hiring for positions in mobile payments](http://www.cnet.com/news/apple-said-to-be-serious-about-moving-into-mobile-payments/). That is GREAT news. That means that I won't have to outsource yet another piece of functionality to a third party, and along with that have all the complications of library install and project configuration, etc. But better yet, maybe Apple might implement its own payment validation system. I could have access to both versions of the payment, Apple's server's version and my app's, and make sure they are the same. It would make perfect sense, and make our lives a heck of a lot easier.

I get the security implications of this idea, but I think Apple needs to find a way make it so "it just works."

Because the idea of having to buy a server on your own or pay money for someone else to host it for you is a real pain. It just is.

But for now I'm just going to have to go along with continued learning refreshes on [codecademy.com](http://codecademy.com/)&nbsp;of JavaScript and deploy it to Parse's Cloud Code. But with June 2nd less than a month away, Apple could make an announcement that changes everything. And we all are hoping they do.
