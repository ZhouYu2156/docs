# !/bin/bash

set -e

# git remote add githubware git@github.com:ZhouYu2156/docs.git
# git remote add docs git@github.com:ZhouYu2156/zhouyu2156.github.io.git

# 检查是否提供了提交信息
if [ -z "$1" ]; then
    echo "错误：请提供提交信息。"
    echo "用法: sh docs-dev.sh <提交信息>"
    exit 1
fi

# 提交源代码
git add .
git commit -m "$1"
git push githubware main

if [ $? -eq 0 ]; then
  echo "提交成功！"
fi

