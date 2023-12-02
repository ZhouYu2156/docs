// 获取目录层级的功能
const fs = require('fs');
const path = require('path');


// 获取文件路径
function getFilePath(dir) {
  // 获取指定目录的文件系统状态
  const stats = fs.statSync(dir);

  // 如果指定路径是一个目录
  if (stats.isDirectory()) {
    // 获取指定目录下的所有子目录的路径
    const children = fs.readdirSync(dir).map(child => {
      // 拼接子目录的路径
      const childPath = path.join(dir, child);
            });

    // 返回当前目录的目录树
    return {
      type: 'directory',
      name: path.basename(dir),
      children,
    };
  } else {
    // 如果指定路径是一个文件
    return {
      type: 'file',
      name: path.basename(dir),
    };
  }
}

// function generateDirectoryTree(dir) {
//   // 获取指定目录的文件系统状态
//   const stats = fs.statSync(dir);

//   // 如果指定路径是一个目录
//   if (stats.isDirectory()) {
//     // 获取指定目录下的所有子目录的路径
//     const children = fs.readdirSync(dir).map(child => {
//       // 拼接子目录的路径
//       const childPath = path.join(dir, child);
//       // 递归调用generateDirectoryTree函数，获取子目录的目录树
//       return generateDirectoryTree(childPath);
//     });

//     // 返回当前目录的目录树
//     return {
//       type: 'directory',
//       name: path.basename(dir),
//       children,
//     };
//   } else {
//     // 如果指定路径是一个文件
//     return {
//       type: 'file',
//       name: path.basename(dir),
//     };
//   }
// }

// // 示例：获取当前工作目录的目录树
// const currentDirectory = process.cwd();
// // 调用generateDirectoryTree函数，获取当前工作目录的目录树
// const tree = generateDirectoryTree(currentDirectory);

// // 打印当前工作目录的目录树
// console.log(JSON.stringify(tree, null, 2));
