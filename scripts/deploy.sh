#! /bin/bash
set -e

yarn build --prod
rm -rf public/*
mv build/* public/

