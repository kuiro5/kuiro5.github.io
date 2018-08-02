import Typography from 'typography'

const fontFamilies = [
  'Consolas',
  'Liberation Mono',
  'Menlo',
  'Courier',
  'monospace',
]

const typography = new Typography({
  baseFontSize: '14px',
  headerFontFamily: fontFamilies,
  headerColor: 'black',
  bodyFontFamily: fontFamilies,
  bodyColor: 'black',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
