#!/bin/bash

# Build
mkdir dist
cp favicon.ico dist/favicon.ico
cp index.html dist/index.html
cp about.html dist/about.html
cp -r assets dist/assets

# Navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:xxzbuckxx/Portfolio.git main:gh-pages
