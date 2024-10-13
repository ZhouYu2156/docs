# !/bin/bash

set -e

echo "Commit message: $1"

if [ -z "$1" ]; then
  echo "Commit message cannot be empty"
  exit 1
fi

git add .

git commit -m "$1"

git push githubware main

if [ $? -eq 0 ]; then
  echo "\n"
  echo "Pushing to githubware is Successful!"
  echo "\n"
else
  echo "Error pushing to githubware"
  exit 1
fi

echo "\nCommit pushed successfully\n"


if [ $? -eq 0 ]; then
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









