#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:f1anderz/dish-roulette.git master:gh-pages

cd -