const { spawn } = require('child_process');

const serverProcess = spawn('node', ['.output/server/index.mjs'], {
  stdio: 'inherit', // Permite que a saída do processo filho seja exibida no console pai
});

serverProcess.on('close', (code) => {
  console.log(`O servidor foi encerrado com o código de saída ${code}`);
});
