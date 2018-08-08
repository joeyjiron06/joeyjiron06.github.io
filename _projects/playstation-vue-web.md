---
layout: project
title: Playstation Vue Web
subtitle: A single page application for streaming video written in Ember.js 
date: "2017-01-14"
order : 1

img_folder : /img/baroness
img_preview : /img/baroness/baroness1.png
---


I worked as a front-end developer on [Playstation Vue](https://vue.playstation.com/watch/) for the web. I worked to build the application from ground zero all the way to production and continued to maintain it and add new features. Among the many things I have learned a Sony here are some of them.


### Test Driven Development (TDD)

I am the biggest fan of [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) (author of TDD) and his methodologies. I read many of his books and put his teachings into practice. I used TDD (the red green refactor principle) to implement business rules for the video player system based on legal agreements between content partners and Vue.

### Authentication Architecture

I implemented the authentication system on Playstation Vue for the web. This required coordinating with external and internal teams for a secure oAuth communication between our application and Playstation as a whole.

### Video Player Architecture

I implented the Video Player system on the web. I created an architecture that is capable of using different video player SDKs under the hood, but is wrapped by business rules and requirements. This allowed the team to launch to production with the Adobe Flash Video Player and later easily switch to an HTML 5 Video Player implementation post initial release. I created a plugin architecture so that future developers could manage code in small units of code and easily test them in their plugin.

### Creating/Maintaining Javascript Libraries

I helped create, develop, maintain and publish javascript libraries that are used by 6 different Playstation Vue clients. These libraries are meant for requesting data from our backend as well as maintaining business rules. This library saved the company time, energy and resources by allowing the code I wrote to be reused.

### UI Components

I developed various components such as tiles, selectable tabbed lists, video player UI, authentication UI, and more. Here I worked by separating components into "smart" and "dumb" components. The difference being that the former has access to the world around it, whereas the latter just displays what is given to it.

### Mentoring

Probably the most rewarding part of my time at Playstation was mentoring. I taught new team members, interns, and anyone else who would listen to me, all that I knew. I taught good component design, application architecture, css, and implementation patterns. Many of these categories I have learned from experience or others with expience and from the many books I've read by seasoned veterans.


### Awards

During my time at Sony Playstation I worked the hardest I have ever worked and strove to push myself past my limits. I was only able to do that because I loved the work that I was doing. My hard work was recognized and I received multiple awards for it (see my [resume](/resume) for more details).


### Tech Stack

I have worked with many different tech components and here is a list of some of them:

- Ember.js
- jQuery
- QUnit
- ES6
- Docker
- Drone.io
- Jenkins
- Node / NPM
- React
- Redux
- Hls
- Html 5
- PostCSS
- GitHub
- Mocha
- Chai
- Akamai phased deployments
- Selenium/WebdriverIO Testing
