// JavaScript Document
// version: 2020.1.25
// Author: Zhu.H.Jin
// index.html
var MedQueryResult = {};
var PreQueryResult = {};
var protocol = "https://";
var HostName = "www.landspark.cn";
var MedByName="/Traditional-Chinese-Medicine/medicine/search?name=";
var PreByName="/Traditional-Chinese-Medicine/prescription/search?key=";
var MedByCode="/Traditional-Chinese-Medicine/medicine/";
var PreByCode="/Traditional-Chinese-Medicine/prescription/";
var MedQueryByName = "/api/Traditional-Chinese-Medicine/medicine/search?name=";
var MedQueryByCode = "/api/Traditional-Chinese-Medicine/medicine/";
var MedImgQuery = "/image";
var PreQueryByName = "/api/Traditional-Chinese-Medicine/prescription/search?key=";
var PreQueryByCode = "/api/Traditional-Chinese-Medicine/prescription/";
var QueryType = "PreQuery";  //MedQuery表示药物查询，PreQuery表示方剂查询

var cardView;

if (document.body.clientWidth<=600){
	cardView=true;
}
else{
	cardView=false;
}

function AddFunctionAlty(value,row,index){
	return '<button id="MoreInfoQuery" type="button" class="btn btn-primary">详情</button>';
}

window.operateEvents = {
	"click #MoreInfoQuery":function(e,value,row,index){
		//console.log(e,value,row,index) //测试用代码 2020.1.31
		window.location.href="TCM_PreQuery_Moreinfo.html?code="+row["方剂代码"];
		localStorage.setItem("name",row["方剂名称"]);
		
	}
}

var name=window.location.href.split("=")[1]; //提取key数值
if (name!==""||name!==undefined)
	{
		//ajax下载json文件
	$.ajax({
		type:"GET",
		url:"https://www.landspark.cn/api/Traditional-Chinese-Medicine/prescription/search?key="+name,
		dataType: 'json',
		jsonp: "callback",
		data:{},
		async:false,
		error:function(XMLHttpReuqest,textStautus){
			alert("请求错误，退回到主页");
			alert(protocol+HostName+PreQueryByName+name)
			alert(XMLHttpRequest.status);
			alert(textStautus);
			window.location.href=protocol+HostName;
		},
		success:function(result){
			//console.log(result); 测试代码 注释日期：2020.1.24
			PreQueryResult = result;
			//console.log(MedQueryResult); 测试代码 注释日期：2020.1.25
			if (typeof(Storage)=="undefined")
				{
					alert("您的浏览器版本过低，请更新您的浏览器！");
					window.history.back();
				}
		}
	});
	}

$("table").bootstrapTable({
	data:PreQueryResult["table"],
	search:false,
	searchOnEnterKey:false,
	pagination:true,
	pageNumber:1,
	pageSize:5,
	showRefresh:true,
	searchAlign:"right",
	buttonsAlign:"left",
	showToggle:true,
	uniqueId:"ID",
	fixedColumns:true,
	fixedNumber:1,
	cardView: cardView,
	columns:[
		{
			field:"方剂代码",
			title:"方剂代码"
		},
		{
			field:"方剂名称",
			title:"方剂名称"
		},
		{
			field:"方剂别名",
			title:"方剂别名"
		},
		{
			field:"出处",
			title:"出处"
		},
		{
			field:"功用类别",
			title:"功用类别"
		},
		{
			field:"功效",
			title:"功效"
		},
		{
			field:"Button",
			title:"详情",
			events: operateEvents,  
			formatter: AddFunctionAlty
		}
	]
})




