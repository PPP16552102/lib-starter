import { resolve } from "node:path";
import { watch } from 'chokidar';
import { spawn } from "node:child_process";

const isDaemon = process.env.IS_DAEMON === 'true';

if (!isDaemon) { 
  console.log('🔧 启动配置文件监视器 (后台模式)...');

  const child = spawn('node', ['./scripts/hello.js'], {
    detached: true,
  })

  child.unref()
  console.log('✅ 配置文件监视器已在后台启动。');
  process.exit(0)
}

// const yamlConfigPath = resolve(process.cwd(), 'test.yaml');

// const watcher = watch(yamlConfigPath, {
//   persistent: true,
//   ignoreInitial: false
// })

// console.log(`开始监听YAML配置文件变化: ${yamlConfigPath}`);

// watcher.on('all', (event, filePath) => { 
//  if (event === 'add' || event === 'change') {
//     console.log(`检测到文件 ${event}: ${filePath}`);
//   }
// })

// console.log('path', yamlConfigPath);
