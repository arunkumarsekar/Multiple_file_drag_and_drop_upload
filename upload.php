<?php
if($_SERVER['REQUEST_METHOD'] == "POST"){
	if(move_uploaded_file($_FILES['file']['tmp_name'], "uploads/".$_FILES['file']['name'])){
		echo($_POST['index']);
	}
	exit;
}
?>