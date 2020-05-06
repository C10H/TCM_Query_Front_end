// JavaScript Document


var protocol = "https://";
var HostName = "www.landspark.cn";
var MedQueryByName = "/api/Traditional-Chinese-Medicine/medicine/search?name=";
var MedQueryByCode = "/api/Traditional-Chinese-Medicine/medicine/";
var MedImgQuery = "/image";
var PreQueryByName = "/api/Traditional-Chinese-Medicine/prescription/search?name=";
var PreQueryByCode = "/api/Traditional-Chinese-Medicine/prescription/";
var QueryType = "MedQuery";  //MedQuery表示药物查询，PreQuery表示方剂查询
var MedQueryResult = {};
var PreQueryResult = {};

var code=window.location.href.split("=")[1];
document.getElementById("TCM_code").innerHTML="当前中药代码："+code;

window.onload=function()
{
	if (code==undefined){
	code=="unDefined";
	initImageUpload();
	window.location.href="onload.html?+code="+code;
	window.location.reload;
	
}
}


/*if (code==undefined){
	alert("请输入中药代码！")
}*/

//console.log(document.cookie) //测试代码，用于检查是否收到cookie
if (sessionStorage.getItem("status")=="0")
	{
		alert("未登陆，请登陆后再操作");
		window.location.href="login.html";
	}


function initImageUpload(){
	

//$("#imgUpload").fileinput("refresh",{uploadUrl:protocol+HostName+MedQueryByCode+code+MedImgQuery+"/upload"});
$("#imgUpload").fileinput("refresh",{
	uploadUrl:protocol+HostName+MedQueryByCode+code+MedImgQuery+"/upload",
	uploadAsync:false,
	enctype : 'multipart/form-data',
	maxFileCount:1,
	showBrowse:true,
	showUpload: true,
	showCaption: true,
	dropZoneEnabled: true,
	uploadLabel: "Upload",
	browseLabel:"Browse",
	fileActionSettings:{
		showRemove: true,
		showUpload: true,
		showDownload: false,
		showZoom: false,
		showDrag: false,
		removeIcon:"<i class='fa fa-trash'></i>",
		uploadIcon:'<i class="fa fa-upload"></i>',
		uploadRetryIcon:'<i class="fa fa-upload"></i>'
	},
	browseClass: "btn btn-primary",
	previewFileIcon: "<i class='glyphicon glyphicon-king'></i>"
	
	
}).on('filebatchuploadsuccess',function(event,data){
	alert("Upload successful");
})
	
}

initImageUpload();

function Button_onClick(){
	code=document.getElementById("input").value;
	document.getElementById("TCM_code").innerHTML="当前中药代码："+code;
	initImageUpload();
	window.location.href='onload.html?code='+code;
	window.location.reload;
	
	
	
}

function logout(){
	var xmlhttp;
			xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function()
			{
					if (xmlhttp.readyState==4&&xmlhttp.status==200)
						{
								//alert(xmlhttp.responseText);
								//console.log(xmlhttp.responseText)
								if (xmlhttp.responseText=="因你未登录，访问被拒止，故显示此消息。")
									{
										alert("因你未登录，访问被拒止，故显示此消息。");
										window.location.href="login.html?code="+code;
										sessionStorage.setItem("status","0");
										
									}
								else
								{
									alert("logout success");
									//alert("document.cookie="+document.cookie) //测试点，查看有没有收到cookie
									window.location.href="login.html?code="+code;
									sessionStorage.setItem("status","0");
								}
						}
			}
			xmlhttp.open("POST","https://www.landspark.cn/api/Traditional-Chinese-Medicine/Account/Logout/",true);
			xmlhttp.send();
}