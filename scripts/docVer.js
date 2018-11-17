'use strict'

const fs = require('fs')

const tpl = `# Padchat Sdk $ver$ Documentation

`

console.log(`args: ${process.argv}`)

try {
  const tmpBuf = fs.readFileSync('./package.json')
  const data   = JSON.parse(String(tmpBuf))
  const ver    = String(data.version || '')
  const str    = tpl.replace('$ver$', `v${ver}` || 'Unknown version')

  fs.writeFileSync('docs/index.md', str)
} catch (e) {
  console.error(e)
  process.exit(-1)
}

