function multiUploader(config){
  
	this.config = config;
	this.items = "";
	var self = this;
	
	multiUploader.prototype._init = function(){
		if (window.File && 
			window.FileReader && 
			window.FileList && 
			window.Blob) {
			 document.getElementById("multiUpload").addEventListener("change", this._read, false);
			 document.getElementById("dragAndDropFiles").addEventListener("dragover", function(e){ e.stopPropagation(); e.preventDefault(); }, false);
			 document.getElementById("dragAndDropFiles").addEventListener("drop", this._dropFiles, false);
		} else
			console.log("Browser supports failed");
	}
	
	multiUploader.prototype._preview = function(){
		if(this.items.length > 0){
			var html = "";
			for(var i = 0; i<this.items.length; i++){
				var sampleIcon = '<img src="images/image.png" />';
				var errorClass = "";
				if(typeof this.items[i] != undefined){
					if(self._validate(this.items[i].type) <= 0) {
						sampleIcon = '<img src="images/unknown.png" />';
						errorClass =" invalid";
					} 
					html += '<div class="dfiles'+errorClass+'" rel="'+i+'"><h5>'+sampleIcon+this.items[i].name+'</h5><div id="stat_'+i+'" class="progress"><img src="images/ajax-loader.gif" /></div></div>';
				}
			}
			$("#dragAndDropFiles").append(html);
		}
	}

	multiUploader.prototype._read = function(evt){
		self.items = evt.target.files;
		if(self.items){
			self._upload();
		} else 
			console.log("Failed file reading");
	}
	
	multiUploader.prototype._validate = function(format){
		var arr = this.config.support.split(",");
		return arr.indexOf(format);
	}
	
	multiUploader.prototype._dropFiles = function(e){
		e.stopPropagation();
		e.preventDefault();
		self.items = e.dataTransfer.files;
		self._upload();
	}
	multiUploader.prototype._startUpload = function(index){
		data = new FormData();
		if(typeof this.items[index] != undefined && self._validate(this.items[index].type) > 0){
			data.append('file',this.items[index]);
			data.append('index',index);
			$("#stat_"+index).show();
			$.ajax({
				type:"POST",
				url:this.config.uploadUrl,
				data:data,
				cache: false,
				contentType: false,
				processData: false,
				success:function(rponse){
					$("#stat_"+index).hide();
					var obj = $(".dfiles").get();
					$.each(obj,function(k,fle){
						if($(fle).attr("rel") == rponse){
							$(fle).slideUp("normal", function(){ $(this).remove(); });
							if (index+1 < self.items.length) {
								self._startUpload(index+1);
							}
						}
					});
				}
			});
		} else
			console.log("invalid file format found");
	}
	
	multiUploader.prototype._upload = function(){
		if(this.items.length > 0){
			self._preview(this.items);
			var data = null;
			setTimeout(function(){ self._startUpload(0); }, 5000);
		}
	}	
	this._init();
}
var config = {
	support : "image/jpg,image/png,image/bmp,image/jpeg,image/gif",
	type : "multiple",
	uploadUrl: "upload.php"
}
$(document).ready(function(){
	new multiUploader(config);
});