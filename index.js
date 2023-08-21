const http = require('http');
const path = require('path');

const findAvailablePort = (port, maxPort, callback) => {
  if (port > maxPort) {
    console.error('Nenhuma porta disponível encontrada.');
    process.exit(1);
  }

  const server = http.createServer();

  server.listen(port, () => {
    server.close();
    callback(port);
  });

  server.on('error', () => {
    findAvailablePort(port + 1, maxPort, callback);
  });
};

const startServer = (port) => {
  const scriptPath = 'index.mjs'; // Substitua pelo caminho correto do seu script
  const cwd = process.cwd();

  const { exec } = require('child_process');
  exec(`node ${scriptPath} ${path.resolve(cwd)} ${port}`, (error, stdout, stderr) => {
    if (stdout) {
      console.log(stdout);
    }

    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Erro padrão do comando: ${stderr}`);
      return;
    }

    console.log("== Tudo pronto para começar ==");
  });
};

const maxPort = 3100; // Escolha o máximo de portas a verificar (ou ajuste conforme necessário)
findAvailablePort(3000, maxPort, (availablePort) => {
  console.log(`Usando a porta ${availablePort}`);
  startServer(availablePort);
});
