---
layout: project
title: Playstation Vue FireTV
subtitle: A hybrid web/android application for the Amazon FireTV written in Ember.js
date: "2015-01-14"
order : 2

img_folder : /img/destro
img_preview : /img/destro/destro3.jpg
---

I worked as a front-end developer on the FireTV platform or the Playstation Vue product. The project was a hybrid Web/Android application. I worked in both layers of the application. I developed the bridging layer between the two applications. I also archiected and implemented the video player system.

### Javascript / Android Bridge

I Developed a protocol for communicating between the Android layer and Javascript web app. The protocol was based on JSON requests, responses, and events. This bridge system allowed the Android video player view to communicate with the javascript UI layer. I created extensive documentation for the protocol for future developers as well as the developer that was working on the video player implementation. This documentation allowed us to successfully work hundreds of miles apart (me in San Francisco, him in San Diego) without having to be on the phone all the time. This architecture also allowed for swapping out video players and making the application reusable on different platforms.

### Program Details Page

I wrote UI components for the program details page which allows users to get more information on a program. The user sees episodes for a specific series, a summary of the program, and related programs.

### Javascript Library

Developed a javascript library that was published on an internal Sony npm registry. The library is an API to the backend. It takes simple JSON responses and turns them into rich Javascript objects. It also contains business rules that were required by our legal contracts.

### Tech Stack

I have worked with many different tech components and here is a list of some of them:

- Ember.js
- jQuery
- QUnit
- ES6 Javscript
- Drone.io
- Node / NPM
- Html 5
- Sass
- GitHub
- Android
- Java
