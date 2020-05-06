// JavaScript Document

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
		window.location.href="../prescription/TCM_PreQuery_Moreinfo.html?code="+row["方剂代码"];
		localStorage.setItem("name",row["方剂名称"]);
		
	}
}

var code=window.location.href.split("=")[1];
if (code!==""||code!==undefined)
	{
		//ajax下载json文件
	$.ajax({
		type:"GET",
		url:protocol+HostName+MedQueryByCode+code,
		dataType: 'json',
		jsonp: "callback",
		data:{},
		async:false,
		error:function(XMLHttpReuqest,textStautus){
			alert("请求错误");
			alert(XMLHttpRequest.status);
			alert(textStautus);
			//window.location.href=protocol+HostName;
		},
		success:function(result){
			//console.log(result); 测试代码 注释日期：2020.1.24
			//console.log(protocol+HostName+MedQueryByCode+code)
			MedQueryResult = result;
			//console.log(MedQueryResult); 测试代码 注释日期：2020.1.25
			if (typeof(Storage)=="undefined")
				{
					alert("您的浏览器版本过低，请更新您的浏览器！");
					window.history.back();
				}
		}
	});
	}


var name=MedQueryResult["table"][0]["品名"];

var fig=document.getElementById("fig");

//console.log(protocol+HostName+MedQueryByCode+MedImgQuery+code)//测试用句2020.1.31
fig.innerHTML="<img class='figure-img img-fluid rounded' src='"+protocol+HostName+MedQueryByCode+code+MedImgQuery+"'>"+"<figcaption class='figure-caption'>"+name+"</figcaption>";

var table_data=[];
for (var key in MedQueryResult["table"][0])
	{
		table_data.push({column1:key,column2:MedQueryResult["table"][0][key]});
	}
//console.log(table_data)
//console.log(MedQueryResult["table1"]) 测试代码 2020.2.1


$("#table").bootstrapTable({
	data:table_data,
	search:false,
	searchOnEnterKey:false,
	pagination:true,
	pageNumber:1,
	pageSize:25,
	showRefresh:true,
	searchAlign:"right",
	buttonsAlign:"left",
	showToggle:true,
	uniqueId:"ID",
	fixedColumns:true,
	fixedNumber:1,
	columns:[
		{
			field:"column1",
			title:"#"
		},
		{
			field:"column2",
			title:"value"
		}
	]
})

$("#table1").bootstrapTable("destroy");

$("#table1").bootstrapTable({
	data:MedQueryResult["table1"],
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
			field:"方剂出处",
			title:"方剂出处"
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

function admin(){
	if(document.cookie!==""){
		window.location.href="../onload.html?code="+code;
	}
	else{
		window.location.href="../login.html?code="+code;
	}
}



