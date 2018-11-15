---
published: true
---
## Using Import syntax with Node and jest

I am counting down the days when node will support es6 modules. I am glad they are making progress with being able to try it out in experimental mode in certain versions of node. In the meantime we will need to use babel. It's pretty easy to do, it just requires a lot of dependencies. Just do the following

```bash
 npm i --save-dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime jest
```

Then add a `.babelrc` in your root project like this:

```json
{
  "presets": ["@babel/env"]
}
	
```


inspired by https://jestjs.io/docs/en/getting-started.html#using-babel