
// JavaScript Document
// version: 2020.1.25
// Author: Zhu.H.Jin
// 
//批量生成navbar

var navBar=document.getElementById("navBar");
navBar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light");
navBar.innerHTML=
       '<a class="navbar-brand" href="https://www.landspark.cn">中医药信息服务公益平台</a>'+
       '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
       '<span class="navbar-toggler-icon"></span>'+
       '</button>'+
       '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
          '<ul class="navbar-nav mr-auto">'+
             '<li class="nav-item active">'+
                '<a class="nav-link" href="https://www.landspark.cn">主页 <span class="sr-only">(current)</span></a>'+
             '</li>'+
             '<li class="nav-item dropdown">'+
                '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                '功能'+
                '</a>'+
                '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
					'<a class="dropdown-item" href="https://www.landspark.cn/Traditional-Chinese-Medicine/index.html">药物与方剂查询</a>'+	
                   '<a class="dropdown-item" href="#">药物与方剂学习</a>'+
                   '<div class="dropdown-divider"></div>'+
                   '<a class="dropdown-item" href="https://www.landspark.cn/Traditional-Chinese-Medicine/login.html">管理员维护</a>'+
                '</div>'+
             '</li>'+
           '</ul>'+ 
       '</div>';