import { defineConfig } from 'rolldown'
import { getWorkSpaceConfig } from './utils/build'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const config = getWorkSpaceConfig()

const packages = config?.packages?.map(path => path?.slice(0, -2))!

let arr: any = []

packages.forEach(path => {
  const dirs = readdirSync(resolve(process.cwd(), path))
  dirs.forEach(dir => {
    arr.push({
      pkgName: path,
      path: `${path}/${dir}`,
    })
  })
})

const configs = arr.map(item => ({
  input: `${item?.path}/index.ts`,
  output: {
    file: `${item?.path}/dist/bundle.js`,
  },
}))

console.log('configs -> ', configs)

export default defineConfig(configs)
