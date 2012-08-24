<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Image upload</title>
<link href='http://fonts.googleapis.com/css?family=Boogaloo' rel='stylesheet' type='text/css'>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script type="text/javascript" src="js/multiupload.js"></script>
<link href="css/style.css" type="text/css" rel="stylesheet" />
</head>
<body lang="en">
<center><h1 class="title">Multiple Drag and Drop File Upload</h1></center>
<div id="dragAndDropFiles" class="uploadArea">
	<h1>Drop Images Here</h1>
</div>
<form name="demoFiler" id="demoFiler" enctype="multipart/form-data">
<input type="file" name="multiUpload" id="multiUpload" multiple />
</form>
<div class="progressBar">
	<div class="status"></div>
</div>
</body>
</html>