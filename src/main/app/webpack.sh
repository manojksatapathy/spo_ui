projectHomePath=$(dirname "$PWD")
mainPath=$projectHomePath/spo/src/main
cd $mainPath/app
cp -r ./src/image ../webapp/src/image
webpack -p --output-path $mainPath/webapp/