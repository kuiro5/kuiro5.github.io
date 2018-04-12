import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '14px',
  //baseLineHeight: 1.45,
  headerFontFamily: [
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace',
  ],
  headerGray: 0,
  bodyFontFamily: [
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace',
  ],
  bodyGray: 0,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    //body: {
    //color: 'black',
    //},
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
