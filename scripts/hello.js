import { watch } from "chokidar";
import { resolve } from "node:path";
import { writeFile } from 'node:fs'

const yamlConfigPath = resolve(process.cwd(), 'test.yaml');

const watcher = watch(yamlConfigPath, {
  persistent: true,
  ignoreInitial: false
})

console.log(`开始监听YAML配置文件变化: ${yamlConfigPath}`);

watcher.on('all', (event) => { 
 if (event === 'add' || event === 'change') {
   writeFile('test.txt', 'content', (err) => { 
     if (err) return;
   })
  }
})