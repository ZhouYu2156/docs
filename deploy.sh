#!/usr/bin/env sh

set -x  # 这里是为了看错误日志
export PRO=git@github.com:ZhouYu2156/zhouyu2156.github.io.git
export DEV=git@github.com:ZhouYu2156/docs.git

# 打包项目
npm run build

# git init
git add -A
git commit -m '提交开发项目'

#git pull githubware master
# 将打包后的文件推送到指定分支
git push -f githubware master


# 进入打包后的文件夹，再推送打包后的 dist 到github上
cd ${PWD}/dist/
pwd
# 打包之后，dist目录会被情况，所以重新初始化一下
git init
git config user.name "ZhouYu2156"
git config user.email "1043744584@qq.com"
git add -A
git commit -m "提交打包后的项目"
git pull ${PRO} master
git push -f ${PRO} master