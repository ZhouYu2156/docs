#!/usr/bin/env sh

set -x  # 这里是为了看错误日志

# 打包项目
# npm run build

# 进入打包后的文件夹
# cd ${PWD}/dist/

# git init
git add .
git commit -m 'auto_deploy'

# git pull githubware master:notes
# 将打包后的文件推送到指定分支
git push githubware master
