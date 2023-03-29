---
date: '2016-02-07T23:11:01+20:00'
author: Matthew Wyskiel
tags:
- parse
- shutdown
- alternatives
- firebase
- appcelerator
- arrow
- nodejs
- express
- heroku
- mongolab
layout: post
category: posts
title: Parse is Moving On, So Now Must We
id: 11
excerpt: When Parse out of nowhere announced its yearlong shutdown process on January 28, many developers were left in shock. The backend-as-a-service has been used by thousands upon thousands of apps to enhance their backend capabilities without having to maintain said backend themselves. Everyone was caught by surprise, and are now rushing to migrate their data and services elsewhere. That being the case, only good news that can come of this is the plethora of options of where to go from here.
---
When Parse out of nowhere [announced](http://blog.parse.com/announcements/moving-on/) its yearlong shutdown process on January 28, many developers were left in shock. The backend-as-a-service has been used by thousands upon thousands of apps to enhance their backend capabilities without having to maintain said backend themselves. These range from big, well-known apps like [Quip](http://blog.parse.com/customers/quip-goes-global-with-parse-push/) and [Orbitz](http://blog.parse.com/non-technical/orbitz-app-uses-parse-push-analytics-and-core-to-keep-users-updated/), to small apps like my very own [Call2Disciple](https://itunes.apple.com/us/app/call2disciple/id833015192?mt=8). Needless to say, everyone was caught by surprise, and are now rushing to migrate their data and services elsewhere. That being the case, there are a plethora of options of where to go from here.

## Other BaaS's
The first impulse for many of us following the announcement was to search high and low for a new service that was comparable to the functionality of Parse. Github user [relatedcode](https://github.com/relatedcode) compiled an extensive [list of alternatives](https://github.com/relatedcode/ParseAlternatives) and I recommend everyone effected to take a look at this list. Here are some of the ones that caught my attention.

### Firebase
![firebase logo](/assets/img/Firebase.png){: .center-image }
<br/>
The night the announcement was sent out by Parse, their closest competition took notice, writing this on Twitter:

<center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Google is 100% behind Firebase.</p>&mdash; Google Developers (@googledevs) <a href="https://twitter.com/googledevs/status/692865746800521216">January 29, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></center>

This was a jab at Facebook, which owns Parse.

Google and Firebase made a point to assure developers that Firebase would not be in the same position as Parse had been.

<center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Not a great day for app developers :( Firebase is healthy &amp; actively working on many new exciting features here at Google <a href="https://twitter.com/hashtag/parse?src=hash">#parse</a></p>&mdash; Firebase (@Firebase) <a href="https://twitter.com/Firebase/status/692845862527995904">January 28, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></center>

This is all well and good; so what exactly is Firebase, and why would a Parse user want to switch to it?

Firebase's main feature is that it is a realtime database, or a database which is constantly updating itself and its clients. This is different from a conventional database which store persistent data unaffected by time.

> Data is stored as JSON, synced to all connected clients in realtime, and available when your app goes offline. ([Firebase](https://www.firebase.com))

Similarly to Parse, Firebase also has an authentication service and static web hosting (but no Cloud Code, sorry).

Learn more at [http://www.firebase.com](http://www.firebase.com).


### Appcelerator Arrow
![appcelerator-logo](/assets/img/appcelerator-logo.png){: .center-image }\\
This service consists of two services: Arrow Cloud which is a realtime database similar to Firebase, and Arrow Builder -- the one most interesting to me.

The premise to Arrow Builder is that it is an API builder; a "powerful new opinionated framework for building APIs." ([Appcelerator](http://www.appcelerator.com/mobile-app-development-products/mbaas-arrow/))

You basically create model objects and it can expose a web API for you, and it will auto-generate documentation as well!

Arrow as a whole also offers Parse-similar features such as Push Notifications, ACL's, Mobile Analytics, and support for Cloud Code and website hosting.

Appcelerator has actually released a blog post advertising itself as an option for Parse users; [I recommend you read it.](http://www.appcelerator.com/blog/2016/02/your-very-own-mbaas-how-to-move-from-parse-to-appcelerator-arrow/)

## Self-Hosting the Parse Server
A major announcement that came in the ["Moving On" blog post from Parse](http://blog.parse.com/announcements/moving-on/) was the open-sourcing of their [Server API](https://github.com/ParsePlatform/parse-server); basically, we are all able to run the Parse API on our own servers using [Node.js](https://nodejs.org) and [Express](http://expressjs.com). They even posted a [migration guide](https://parse.com/docs/server/guide#migrating) on how to do this with some recommended services.

Put simply, the process is as follows:

1. Set up your MongoDB database, and transfer your Parse data to it.
2. Set up [Parse Server](https://github.com/ParsePlatform/parse-server) on your local machine and TEST.
3. Deploy Parse Server, either on your own or to an infrastructure provider of your choice (more on that later).
4. Point your clients to the new backend and push updates to those clients.

I find it ironic that they recommend other BaaS's such as [Heroku](https://www.heroku.com) and [MongoLab]() after we as a community have been implicitly warned with this whole announcement not to trust backend providers they may go away without warning.

I also note that the free versions of these two specific services they recommend are severely lacking (see [Heroku](https://www.heroku.com/pricing) and [MongoLab](https://mongolab.com/plans/)) while Parse itself had an excellent free plan.

## Conclusion
The only good news that came from the Parse shutdown announcement is that there are a multitude of options on how to move forward. These range from moving to another backend-as-a-service, to self-hosting the Parse API on your own backend, to even just going back to the drawing board and completely writing a new API for yourself (the easiest method using [Express](http://expressjs.com)). Here's to hoping this is a smooth transition for us all.
