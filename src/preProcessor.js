import { registerPreprocessor } from '@riotjs/compiler'
import sass from 'node-sass'

registerPreprocessor('css', 'scss', function(code, { options }) {
  const { file } = options

  const {css} = sass.renderSync({
    data: code
  })

  return {
    code: css.toString(),
    map: null
  }
})