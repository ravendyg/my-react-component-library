import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';


const override = { compilerOptions: { declaration: false } };

function makeConfig(componentName) {
  return {
    input: `src/${componentName}/index.tsx`,
    output: [
      { file: `dist/${componentName}/index.js`, format: 'cjs' },
    ],
    plugins: [
      typescript({
        tsconfigOverride: override,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  };
}

export default [
  // declarations and everything together
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  // separate components
  ...[
    'my-component',
    'another-component'
  ].map(makeConfig)
];
