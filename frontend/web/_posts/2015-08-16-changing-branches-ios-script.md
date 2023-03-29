---
date: '2015-08-16T23:11:01+20:00'
author: Matthew Wyskiel
tags:
- xcode
- derived
- data
- git
- gitignore
- branch
- clean
- folder
- objective-c
- app
- swift
- ios
layout: post
category: posts
title: Switch Git Branches for Your iOS Project Easily and Safely
id: 10
excerpt: I had to deal with errors a while back whose troubleshooting strategy was to run pod install, clean the project, and nuke the derived data. Everything seemed fine after that, until I wanted to work on a different branch. It seemed that every time I switched branches the same errors would pop up, and I would have to repeat the same process to fix it. It soon became very tedious to have to fix these errors every single time I switched a branch. So I thought, Why not automate this process on branch switch? So I did.
---
First the backstory.

[Call2Disciple](http://appstore.com/call2disciple) was my first iOS app, and to this day is the most complex app I work on. I take advantage of Git branches to implement any new features; these branches are isolated from the master branch, which I try to keep as stable as possible. Thus, only fully completed and stable features go into master, and then out to the App Store. I also put the `Pods/` directory in the `.gitignore` as it was giving me a load of trouble before, and it saves unnecessary and tedious commit work.

A while back I began experiencing weird build and linking errors in building the Call2Disciple app target. These errors were very cryptic and it took multiple Google and Stack Overflow searches to ultimately run `pod install`, clean the project, and nuke the derived data; and the errors were fixed.

Everything seemed fine after that, until I wanted to work on a different branch. It seemed that every time I switched branches the same build and linking errors would pop up, and I would have to repeat the same process to fix it. After a few branch switches and subsequent troubleshooting sessions it became very tedious to have to fix these errors every single time I switched a branch. So I thought, Why not automate this process _on branch switch_? So I did.

It turns out, Swift is a great scripting language. I was able to, with some help from some gists to get me programmatic access to the command line, create a simple script to:

1. Switch to the specified branch
2. Run `pod install`
3. Delete the Derived Data folder
4. Clean the project

It's very bare-bones, but it gets the job done.

So, I've in turn posted the code as a gist. It includes places in the code that you need to customize to fit your own needs. The code that does most of the work is towards the bottom; A lot of it is code to access the command line.

<script src="https://gist.github.com/mattwyskiel/4885af4a4c556c07898c.js"></script>

Enjoy.
