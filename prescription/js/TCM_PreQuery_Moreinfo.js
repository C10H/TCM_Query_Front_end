// JavaScript Document

var protocol = "https://";
var HostName = "www.landspark.cn";
var MedQueryByName = "/api/Traditional-Chinese-Medicine/medicine/search?name=";
var MedQueryByCode = "/api/Traditional-Chinese-Medicine/medicine/";
var MedImgQuery = "/image";
var PreQueryByName = "/api/Traditional-Chinese-Medicine/prescription/search?name=";
var PreQueryByCode = "/api/Traditional-Chinese-Medicine/prescription/";
var QueryType = "PreQuery";  //MedQuery表示药物查询，PreQuery表示方剂查询
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
		window.location.href="../medicine/TCM_MedQuery_Moreinfo.html?code="+row["中药代码"];
		localStorage.setItem("name",row["品名"]);
		
	}
}

var code=window.location.href.split("=")[1]
if (code!==""||code!==undefined||code==null)
{
	//ajax下载json文件
	$.ajax({
		type:"GET",
		url:protocol+HostName+PreQueryByCode+code,
		dataType: 'json',
		jsonp: "callback",
		data:{},
		async:false,
		error:function(XMLHttpReuqest,textStautus){
			alert("请求错误");
			alert(protocol+HostName+PreQueryByCode+code)
			alert(XMLHttpRequest.status);
			alert(textStautus);
			//window.location.href=protocol+HostName;
		},
		success:function(result){
			//console.log(result); //测试代码 注释日期：2020.1.24
			//console.log(protocol+HostName+MedQueryByCode+code)
			PreQueryResult = result;
			//console.log(MedQueryResult); //测试代码 注释日期：2020.1.25
			if (typeof(Storage)=="undefined")
				{
					alert("您的浏览器版本过低，请更新您的浏览器！");
					window.history.back();
				}
		}
	});

}

var table_data=[];
for (var key in PreQueryResult["table"][0])
	{
		table_data.push({column1:key,column2:PreQueryResult["table"][0][key]});
	}

$("#table").bootstrapTable({
	data:table_data,
	search:true,
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
	data:PreQueryResult["table1"],
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
			field:"方剂别名",
			title:"方剂别名"
		},
		{
			field:"别名出处",
			title:"别名出处"
		},
		{
			field:"说明",
			title:"说明"
		}
	]
})

$("#table2").bootstrapTable("destroy");

$("#table2").bootstrapTable({
	data:PreQueryResult["table2"],
	search:true,
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
	cardView:cardView,
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
			field:"炮灸方法",
			title:"炮灸方法"
		},
		{
			field:"Button",
			title:"详情",
			events: operateEvents,  
			formatter: AddFunctionAlty
		}
	]
})


