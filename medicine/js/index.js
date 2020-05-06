// JavaScript Document
// version: 2020.1.25
// Author: Zhu.H.Jin
// index.html

var protocol = "https://";
var HostName = "www.landspark.cn";
var MedQueryByName = "/api/Traditional-Chinese-Medicine/medicine/search?name=";
var MedQueryByCode = "/api/Traditional-Chinese-Medicine/medicine/";
var MedImgQuery = "/image";
var PreQueryByName = "/api/Traditional-Chinese-Medicine/prescription/search?key=";
var PreQueryByCode = "/api/Traditional-Chinese-Medicine/prescription/";
var QueryType = "MedQuery";  //MedQuery表示药物查询，PreQuery表示方剂查询
var MedQueryResult = {};
var PreQueryResult = {};

document.onkeydown=function(ev)
		{
			var event=ev;
			if (event.keyCode==13) //按了enter键
			{
				var name=document.getElementById("input").value;
				if (name!==''&&name!==undefined){
					window.location.href="TCM_MedQuery.html?name="+name;
				}
				else
				{
					alert("请输入药物名称!");
				}
			}
		}

 function Query_Button_onClick()
//点击查询按钮后触发
{
	 var name=document.getElementById("input").value;
	 //alert(name);
	 //console.log(protocol+HostName+MedQueryByName+name);
	 //console.log(protocol+HostName+PreQueryByName+name); //测试代码，注释日期 2020.1.25 Zhu.H.Jin
	if (name!==''&&name!==undefined){
		window.location.href="TCM_MedQuery.html?name="+name;
	}
	else
				{
					alert("请输入药物名称!");
				}
}
