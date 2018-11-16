---
published: true
---
# Running eslint before commit with Husky

There's nothing more frustrating than committing your code, pushing up to your git server, then seeing your lint fail. Luckily there's an easy way to ensure that you never commit files that fail eslint (or whatever linter you may have). Just follow these steps and you'll be on your way to committing lint free code.

## Install Husky & Lint-Staged

Install [husky](https://www.npmjs.com/package/husky) whick is an awesome package that will give you git hooks to run your scripts. Also install [lint-staged](https://www.npmjs.com/package/lint-staged) which allows you to only lint the files you are about to commit (the staged files)


```bash
npm install --save-dev husky lint-staged eslint
```

## Add precommit Hook

Open your `package.json` and under scripts add the following:

```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.js\"",
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "src/**/*.js": "eslint",
      "test/**/*.js": "eslint"
    }
  },
}
```

So let's break down what's going on here. 

`scripts > lint` can be used by your CI server that can simply run `npm run lint`. Make sure that you add the double quotes around your glob filenames, eslint will **NOT** work. Read more about that [here](https://eslint.org/docs/user-guide/command-line-interface).

`husky > hooks > pre-commit` this is a command that will run before your changes are commited. There are other git hooks that you can use to add more commands, but keeping it simple here.

`lint-staged > linters` this is the config for lint-staged. Here we are telling eslint to run for all our `src` javascript files and our `test` javascript files.



Happy coding 😊!

*Related Links*
https://www.npmjs.com/package/lint-staged
https://www.npmjs.com/package/husky
