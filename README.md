<h1 align="center">React Component Library</h1>


## Install

```sh
npm run i
```

## Build

```sh
npm run build
```

Compiled code is commited into VCS. This way it is possible to get away without creating your own npm registry (check out Verdaccio if you feel for it) or compiling on every install.


## Use

```sh
npm i git+https://github.com/ravendyg/my-react-component-library.git
```

```js
import { MyComponent } from 'ui-kit'; // all code
import { MyComponent } from '@thmsgbrt/my-react-component-library/dist/my-component'; // one component only
```


## TODO

* Copy some real components. Check whether it is still working.
* Add storybook.
