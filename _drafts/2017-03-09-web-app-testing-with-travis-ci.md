---
published: false
---
## Web App Testing with TravisCI (CI)

For those of you who may not know CI/CD stands for Continuous Integration / Continuous Devliver. I am a huge fan of test driven development and one of the first things that is recommended by Steve Freeman and Nat Pryce in their book [Growing Object Oriented Software Guided by Test](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627) when starting a project is getting your environment setup because it can take some time to do. The goal is to have continuous feedback on the health of the software you write.


There are countless tutorials our there that explain all the different peices that make up CI/CD, from the setup of testing, to running browser tests on on a GUI-less linux machine, to running tests on pull requests and merges. 

### Goals
Goals of this Post are setting up a testing environment where you will have the following:

- Acceptance and Unit tests being run on each pull request and merge into master
- Testing your web app in as many browsers as you can think of!


I will show how to do all this with all open source tools which means everything is FREE!