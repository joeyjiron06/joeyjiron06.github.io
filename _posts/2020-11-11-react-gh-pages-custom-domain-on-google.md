---
published: true
---
## How to publish your React app to a custom domain using Github Pages and Google Domains

This post will walk you through publishing your React app to a custom domain. No need to setup a server since we will be using the free Github pages to serve your react app. Follow the steps below and you will have your webpage deployed in no time! 

*Note: this may take up to 24 hours to full work over https. Details below*

## 1. Create a domain on [domains.google.com](https://domains.google.com)

- Buy a new google domain or use an existing one
- Click on your domain from the main page
- Click DNS in the left menu
- Scroll to the bottomg and create a type `A` resource and add these domains for github 
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Add a CNAME resource with domain `yourUsername.github.io.`. Notice the period at the end


## 2. Setup your React project to use custom domain

Now it's time to configure your react app to work with the domain.

- Add a file called CNAME to your /public folder. The file should contain one line with your custom domain (e.g. `https://example.com`)
- If using React Router , then update your `package.json` to have a homepage property that looks like this

  ```json
  {
    "homepsage": "https://example.com"
  }
  ```
- If you are using React Router, then make sure to use a basename with the following data

```jsx
  <Router basename={process.env.PUBLIC_URL || ''}>
```

## 3. Setup a github workflow to auto deploy everytime you merge to master

In this step we setup a CI/CD flow with Github so that everytime you merge your code to master, it will automatically build your React app and deploy it to Github Pages. You can skip this step if you want to do a manual deployment process.

- Install gh-pages npm package `npm i --save-dev gh-pages` as a dev dependency
- Create a github action workflow file at the root of your project named `.github/workflows/nodejs.yml`
- Fill out the contents so it looks like the following config

  ```yaml
  name: Node CI

  on:
    push:
      branches:
        - master

  jobs:
    build:

      runs-on: ubuntu-latest

      strategy:
        matrix:
          node-version: [10.x]

      steps:
      - uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: build
        run: |
          npm install
          npm run build
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v1.2.5
        with:
          build_dir: 
            build
        env:
          CI: true
          GITHUB_PAT: ${{ secrets.GITHUB_PAT }}
  ```
  [example](https://github.com/joeyjiron06/clock-timer/blob/master/.github/workflows/nodejs.yml)

- Create a github personal access token as described [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
- Copy that personal access token to your clipboard
- Create a new Github secret by going to your github repo > settings > secrets and click "New Repository Secret"
- Name should be `GITHUB_PAT` which is referenced in the yaml file. Paste the github personal access token in "Value" input field.
- Click save

## 4. Setup github pages to point to your custom domain

Github Pages needs to be configured to point to your custom domain. You can read more about it [here](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site).

- Go to your github repo > settings
- Scroll down until you see the section with github pages
- Add your domain to the custom domain input field and click save

*Note: It may take up to 24 hours to see the option to enforce https*

## Finish

It may take 24 hours to see your new domain working because Github Pages needs to configure it properly. Once it's done doing what it needs to do, you should be good to go!
