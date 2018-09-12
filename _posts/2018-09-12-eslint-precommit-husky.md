---
published: true
---
# Running eslint before commit with Husky

There's nothing more frustrating than committing your code, pushing up to your git server, then seeing eslint fail. Luckily there's an easy way to ensure that you never commit files that fail eslint (or whatever linter you may have). Just follow these steps and you'll be on your way to committing lint free code.

## Install Husky

Install [husky](https://www.npmjs.com/package/husky) whick is an awesome package that will give you git hooks to run your scripts. Read more about it [here](https://www.npmjs.com/package/husky).

```bash
npm install husky
```

## Add precommit Hook

Open your `package.json` and under scripts add the following:

```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.js\"",
    "prepush": "npm run lint",
  }
}
```

Make sure that you add the double quotes around your glob filenames, otherwise it will **NOT** work. Read more about that [here](https://eslint.org/docs/user-guide/command-line-interface).

Happy coding 😊!
