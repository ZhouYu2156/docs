# !/bin/bash

set -x

git remote add githubware git@github.com:ZhouYu2156/docs.git
git remote add docs git@github.com:ZhouYu2156/zhouyu2156.github.io.git

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
  echo "Pushing to githubware is Successful!"
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
  if [ $? -eq 0 ]; then
    cd ./dist
    git add .
    git commit -m "$1"
    # git branch -m master main
    # git pull docs main --allow-unrelated-histories
    if [ $? -eq 0 ]; then
      echo "Pushing to docs"
    else
      echo "Error pushing to docs"
      exit 1
    fi
    git push -f docs main
    echo "Pushing to docs is Successful!"
  else 
   echo "Error building static site"
  fi 
else 
  echo "开发源代码推送失败！"
fi








