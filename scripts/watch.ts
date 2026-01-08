import { watch } from "chokidar";
import { resolve } from "node:path";

const yamlConfigPath = resolve(process.cwd(), 'test.yaml');

const watcher = watch(yamlConfigPath, {
  persistent: true,
  ignoreInitial: false
})

console.log(`开始监听YAML配置文件变化: ${yamlConfigPath}`);

watcher.on('all', (event, filePath) => { 
 if (event === 'add' || event === 'change') {
    console.log(`检测到文件 ${event}: ${filePath}`);
  }
})

console.log('path', yamlConfigPath);