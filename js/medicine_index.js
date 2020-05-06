// JavaScript Document
// version: 2020.1.25
// Author: Zhu.H.Jin
// index.html

var protocol = "https://"
var HostName = "www.landspark.cn"
var MedQueryByName = "/api/Traditional-Chinese-Medicine/medicine/search?name="
var MedQueryByCode = "/api/Traditional-Chinese-Medicine/medicine/"
var MedImgQuery = "/image"
var PreQueryByName = "/api/Traditional-Chinese-Medicine/prescription/search?name="
var PreQueryByCode = "/api/Traditional-Chinese-Medicine/prescription/"
var QueryType = "MedQuery"  //MedQuery表示药物查询，PreQuery表示方剂查询
var MedQueryResult = {}
var PreQueryResult = {}


function Option_Button_MedQuery_onClick()
//点击“药物查询”下拉菜单按钮后触发
{
	QueryType="MedQuery";
	var input=document.getElementById("input");
	input.placeholder = "药物查询";
}

function Option_Button_PreQuery_onClick()
//点击“方剂查询”下拉菜单按钮后触发
{
	QueryType="PreQuery";
	var input=document.getElementById("input");
	input.placeholder = "方剂查询";
}

 function Query_Button_onClick()
//点击查询按钮后触发
{
	 var name=document.getElementById("input").value;
	 //console.log(name);
	 //console.log(protocol+HostName+MedQueryByName+name);
	 //console.log(protocol+HostName+PreQueryByName+name); 测试代码，注释日期 2020.1.25 Zhu.H.Jin
	 
	 if(QueryType=="MedQuery"){
		 //药物查询请求
		 $.ajax({
    		type:"GET",
    		url:protocol+HostName+MedQueryByName+name,
    		dataType: 'json',
    		jsonp: "callback",
    		data:{},
		async:true,
		error:function(XMLHttpReuqest,textStautus){
			alert("网络错误");
		    alert(XMLHttpRequest.status);
		    alert(textStautus);
		},
		success:function(result){
			//console.log(result); 测试代码 注释日期：2020.1.24
			MedQueryResult = result;
			//console.log(MedQueryResult); 测试代码 注释日期：2020.1.25
			if (typeof(Storage)=="undefined")
				{
					alert("您的浏览器版本过低，请更新您的浏览器！");
				}
			//向TCM_MedQuery.html传值
		
			var str = JSON.stringify(result);
			if (str !== '{"table":[]}')
			{
				localStorage.setItem("MedResult",str);
				//alert("添加成功！"); 测试代码 注释日期：2020.1.25
				window.location.href="TCM_MedQuery.html";
			}
			else 
				{
					alert("您所查询的药物不存在！")
				}
			
			
		}
    	});
	 }
	 if(QueryType=="PreQuery"){
		  //方剂查询请求
		 $.ajax({
    		type:"GET",
    		url:protocol+HostName+PreQueryByName+name,
    		dataType: 'json',
    		jsonp: "callback",
    		data:{},
		async:true,
		error:function(XMLHttpReuqest,textStautus){
		    alert(XMLHttpRequest.status);
		    alert(textStautus);
		},
		success:function(result){
			//console.log(result); 测试代码 注释日期：2020.1.24
			PreQueryResult = result;
			//console.log(PreQueryResult); 测试代码 注释日期：2020.1.24
			if (typeof(Storage)=="undefined")
				{
					alert("您的浏览器版本过低，请更新您的浏览器！");
				}
			//向TCM_PreQuery.html传值
		
			var str = JSON.stringify(result);
			if (str !== '{"table":[]}')
			{
				localStorage.setItem("PreResult",str);
				//alert("添加成功！"); 测试代码 注释日期：2020.1.25
				window.location.href="TCM_PreQuery.html";
			}
			else 
				{
					alert("您所查询的方剂不存在！")
				}
		}
    	});
	 }
	 



	
	 
}
