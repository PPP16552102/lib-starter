import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { load } from 'js-yaml'

export function getWorkSpaceConfig() {
  try {
    const path = resolve(process.cwd(), 'pnpm-workspace.yaml')
    const content = readFileSync(path, 'utf-8')

    const config = load(content)

    return config
  } catch (error) {
    console.log('err', error)
  }
}
