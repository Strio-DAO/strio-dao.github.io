#!/bin/bash

line="\n#######################################################################\n";
build_folder=dist

#git branch -D gh-pages
#git checkout --orphan gh-pages

git checkout  gh-pages

npm run build

# add CNAME file to dist/
mv CNAME dist/

# commit changes on branch gh-pages
git --work-tree $build_folder add --all
git --work-tree $build_folder commit -m gh-pages

# push branch gh-pages
git push origin HEAD:gh-pages --force

rm -f $build_folder

git checkout -f master
#git branch -D gh-pages