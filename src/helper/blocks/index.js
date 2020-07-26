function getFileName (str) {
  const pos1 = str.lastIndexOf('/')
  const pos2 = str.lastIndexOf('.')
  return str.substring(pos1 + 1, pos2)
}

const blocks = require.context('./', false, /^(?!index).*.js$/)

const blockConfigs = blocks.keys().reduce((acc, file) => {
  if (file !== './index.js') {
    acc[getFileName(file)] = blocks(file).default
  }
  return acc
}, {})

export default blockConfigs
