import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
const entryName = require('./package.json').main.replace(/\.js$/, '');

function bundle(config) {
  return {
    ...config,
    input: 'src/index.ts',
    external: (id) => !/^[./]/.test(id),
  };
}

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${entryName}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${entryName}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${entryName}.d.ts`,
      format: 'es',
    },
  }),
];
