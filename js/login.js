// JavaScript Document
var protocol = "https://";
var HostName = "www.landspark.cn";

//请求路径
var url=protocol+HostName+'/api/Traditional-Chinese-Medicine/Account/Login';

//获取药物代码
var code=window.location.href.split("=")[1];

//若已登陆，则直接跳转至图片上传页
if (sessionStorage.length!==0)
	{
		if (sessionStorage.getItem("status")=="1")
			{
				window.location.href="onload.html?code="+code;
			}
	}

//数据请求
function bunOnClick(){
	//alert("button onclick")
	var username=document.getElementById("exampleInputEmail1").value;
	var password=document.getElementById("exampleInputPassword1").value;
	//alert(username)
	//alert(password)
		
			var xmlhttp;
			xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function()
			{
					if (xmlhttp.readyState==4&&xmlhttp.status==200)
						{
								//alert(xmlhttp.responseText);
								//console.log(xmlhttp.responseText)
								if (JSON.parse(xmlhttp.responseText)[0]["authorized"]=="1")
									{
										alert("login success");
										//alert("document.cookie="+document.cookie) //测试点，查看有没有收到cookie
										window.location.href="onload.html?code="+code;
										sessionStorage.setItem("status","1");
									}
								else
								{
									
									alert("Wrong password");
								}
						}
			}
			xmlhttp.open("POST",url,true);
			xmlhttp.setRequestHeader("content-type",'application/x-www-form-urlencoded');
			var data="username="+username+"&password="+password;
			xmlhttp.send(data);
		
	
}