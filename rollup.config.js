import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';


function makeConfig(componentName) {
  return {
    input: `src/${componentName}/index.tsx`,
    output: [
      {
        file: `playground/src/component-lib/${componentName}/index.js`,
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: `dist/${componentName}/index.cjs.js`, format: 'cjs' },
      { file: `dist/${componentName}/index.esm.js`, format: 'esm' },
    ],
    plugins: [
      del({ targets: [`dist/${componentName}/*`, 'playground/src/component-lib'] }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  };
}

export default [
  'my-component',
  'another-component'
].map(makeConfig);
