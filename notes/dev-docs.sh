# !/bin/bash

set -x

echo "Commit message: $1"

# 提交源代码

if [ -z "$1" ]; then
  echo "Commit message cannot be empty"
  exit 1
fi

git add .

git commit -m "$1"

git push githubware main

if [ $? -eq 0 ]; then
  echo ""
  echo "Pushing to githubware is Successful!"
  echo ""
else
  echo "Error pushing to githubware"
  exit 1
fi

echo "Commit pushed successfully"

# 构建静态站点

if [ $? -eq 0 ]; then
  cd ./notes
  npm run build

  # 提交静态资源
  cd ./notes/dist
  # git init
  # git branch -m master main
  git add .
  git commit -m "$1"
  git remote add docs git@github.com:ZhouYu2156/zhouyu2156.github.io.git
  git pull docs main --allow-unrelated-histories
  if [ $? -eq 0 ]; then
    echo "Pushing to docs"
  else
    echo "Error pushing to docs"
    exit 1
  fi
  git push -f docs main
else
  echo "Error pushing to github"
  exit 1
fi








