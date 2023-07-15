const { exec } = require('child_process');
const path = require("path");

console.log("===Instalando dependências===");

exec(`node .output/server/index.mjs ${path.resolve(process.cwd())}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log("==Tudo pronto para começar==")
});