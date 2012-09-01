# Multiple File Drag and Drop Upload

Multiple File Drag and Drop Upload this will work in modern browsers (HTML 5), File uploads happening through ajax
for this i used [Form Data] (http://www.w3.org/TR/FileAPI/) and [File Reader] (http://www.w3.org/TR/2010/WD-XMLHttpRequest2-20100907/) javascript API.

## File & Folders

 - /images 		Required images
 - /css 		Stylesheet files
 - /js  		Javascript files and libraries
 - /uploads  	New files holder
 - index.php	Client side File
 - upload.php	Server Side File

## Requirements

	- Jquery Library
	- HTML5

## How to use
	
### Config
	
All Fields required.
	
	support : "image/jpg,image/png,image/bmp,image/jpeg,image/gif",		// Valid file formats
	form: "demoFiler",					// Form ID
	dragArea: "dragAndDropFiles",		// Upload Area ID
	uploadUrl: "upload.php"				// Server side file url
	
### Init

 Its simple init. Just call with required configurations.
 
 	initMultiUploader(config);	

	
	

	