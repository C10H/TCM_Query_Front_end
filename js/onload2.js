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

var form=document.getElementById("form")
	
function Button_onClick() {
	code=document.getElementById("input").value;
	form.setAttribute("action","http://www.landspark.cn/api/Traditional-Chinese-Medicine/medicine/"+code+"/image/upload")
}