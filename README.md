# Limport

Limport is a simple library that allows you to easily import several javascript files.

## Downloading

### Use as submodule
If you want your project to keep the latest Limport updates, you can use it as a submodule of your git repository.
```
cd my-project
git submodule add https://github.com/piponsio/Limport
```

### Just download
1. Enter https://github.com/piponsio/Limport
2. Click on the "Code" button 
3. Click on "Download Zip" 

## Implement
For the correct implementation of Limport it is necessary to insert 2 script tags inside the .html file in which you want all your scripts to be executed.

**Example:**
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Change_me</title>

	<script type="text/javascript" src="./Limport/Limport.js"></script>
	<script type="text/javascript" src="./Limport-list.js"></script>

</head>

<body>
 
</body>
</html>
```

**Example of ./Imports.js**
```
Limport.add(./script/my-script.js);
Limport.add(./script/my-script2.js);
Limport.add(./script/my-script3.js);
Limport.add(./script/my-script4.js);
Limport.add(./script/my-script5.js);
```


*Note: All paths must be absolute.*