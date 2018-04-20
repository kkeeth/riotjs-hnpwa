import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import progress from 'rollup-plugin-progress'
import commonjs from 'rollup-plugin-commonjs'
import prettier from 'rollup-plugin-prettier'
import buble from 'rollup-plugin-buble'
import riot from 'rollup-plugin-riot'

export default {
   input: 'src/js/app.js',
   output: {
      file: 'public/js/app.js',
      format: 'iife',
      name: 'riothn',
      sourceMMap: false,
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
      buble(),
      progress()
   ]
}
