// 不能使用 require 动态导入
const fs = require('fs');
// import fs from 'node:fs';
function generatePathList(path) {
    const result = [];
    const files = fs.readdirSync(path);

    files.forEach((file) => {
        let filePath = (path + file).concat('/');
        result.push(filePath);
    });

    return result;
}
function findTextBetweenSlashes(paths) {
    const regex = /\/([^\/]+)\/$/;
    const result = paths.match(regex);
    return result ? result[1] : null;
}

function generaterRoutes(dirList) {
    console.log('当前项目根目录: ', process.cwd());
    const result = dirList.map((dir) => {
        console.log(dir);
        return ({ text: findTextBetweenSlashes(dir), link: dir })
    }
    )
    return result;
}
// console.log(generaterRoutes(generatePathList('./src/content/technology/')));

console.log(generaterRoutes(generatePathList('../content/technology/')))
module.exports = {
    generatePathList,
    generaterRoutes
}