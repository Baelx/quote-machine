#!/bin/bash

prod() {
    local search="assets\/src"
    local replace="assets\/dist"
    sed -i "s/${search}/${replace}/g" $1
}
dev() {
	local search="assets\/dist"
	local replace="assets\/src"
	sed -i "s/${search}/${replace}/g" $1
}
if [ $1 == "-help" ]
then
	echo "Simple script to switch links and srcipts in HTML document\nto point from dev assets to prod assets and vice versa."
	echo "FLAGS:\n-d	Convert to dev links. Points to the src directory.\n-p    Conver to prod links. Points to the dist directory.\n"
fi
