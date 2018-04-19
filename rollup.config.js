import {rollup} from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import progress from 'rollup-plugin-progress'
import commonjs from 'rollup-plugin-commonjs'
import riot from 'rollup-plugin-riot'

export default {
   input: 'src/app.js',
   output: {
      file: 'public/js/app.js',
      sourcemap: false,
      format: 'iife',
      strict: true
   },
   context: 'window',
   plugins: [
      riot(),
      nodeREsolve({
         jsnext: true,
         main: true,
         browser: true
      }),
      commonjs(),
      buble(),
      progress()
   ]
}
