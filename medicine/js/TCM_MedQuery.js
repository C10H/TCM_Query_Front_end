// JavaScript Document
// version: 2020.1.25
// Author: Zhu.H.Jin
// index.html
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
var QueryType = "MedQuery";  //MedQuery表示药物查询，PreQuery表示方剂查询

var cardView;
if (document.body.clientWidth<=600){
	cardView=true;
}
else{
	cardView=false;
}

var MedQueryResult = {};
var PreQueryResult = {};

function AddFunctionAlty(value,row,index){
	return '<button id="MoreInfoQuery" type="button" class="btn btn-primary">详情</button>';
}

window.operateEvents = {
	"click #MoreInfoQuery":function(e,value,row,index){
		//console.log(e,value,row,index) //测试用代码 2020.1.31
		window.location.href="TCM_MedQuery_Moreinfo.html?code="+row["中药代码"];
		localStorage.setItem("name",row["品名"]);
		
	}
}

var name=window.location.href.split("=")[1]; //提取name数值
//alert(name) 测试代码
if (name!==""||name!==undefined)
	{
		 //ajax下载json文件
	$.ajax({
		type:"GET",
		url:protocol+HostName+MedQueryByName+name,
		dataType: 'json',
		jsonp: "callback",
		data:{},
		async:false,
		error:function(XMLHttpReuqest,textStautus){
			alert("请求错误，退回到主页");
			alert(protocol+HostName+MedQueryByName+name)
			alert(XMLHttpRequest.status);
			alert(textStautus);
			window.location.href=protocol+HostName;
		},
		success:function(result){
			//console.log(result); 测试代码 注释日期：2020.1.24
			MedQueryResult = result;
			//console.log(MedQueryResult); //测试代码 注释日期：2020.1.25
			if (typeof(Storage)=="undefined")
				{
					alert("您的浏览器版本过低，请更新您的浏览器！");
					window.history.back();
				}
		}
	});
	}



$("table").bootstrapTable({
	data:MedQueryResult["table"],
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
			field:"中药代码",
			title:"中药代码"
		},
		{
			field:"顺序号",
			title:"顺序号"
		},
		{
			field:"品名",
			title:"品名"
		},
		{
			field:"别名",
			title:"别名"
		},
		{
			field:"药材名",
			title:"药材名"
		},
		{
			field:"药物来源",
			title:"药物来源"
		},
		{
			field:"切制规格",
			title:"切制规格"
		},
		{
			field:"炮炙方法",
			title:"炮炙方法"
		},
		{
			field:"Button",
			title:"详情",
			events: operateEvents,  
			formatter: AddFunctionAlty
		}
	]
})




