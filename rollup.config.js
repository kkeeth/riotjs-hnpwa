import nodeResolve from '@rollup/plugin-node-resolve'
import progress from 'rollup-plugin-progress'
import commonjs from '@rollup/plugin-commonjs'
import prettier from 'rollup-plugin-prettier'
import riot from 'rollup-plugin-riot'

export default {
   input: 'src/app.js',
   output: {
      file: 'public/js/bundle.js',
      sourcemap: false,
      format: 'iife',
      strict: true
   },
   context: 'window',
   plugins: [
      riot(),
      nodeResolve({
         jsnext: true,
         main: true,
         browser: true
      }),
      commonjs(),
      prettier(),
      progress()
   ]
}
