set projectHomePath=C:\manoj\ibm\clients\SPO\ws\spo_ui
set mainPath=%projectHomePath%\src\main
cd %mainPath%\app
COPY %mainPath%\app\src\image %mainPath%\webapp\image
webpack --output-path %mainPath%\webapp\