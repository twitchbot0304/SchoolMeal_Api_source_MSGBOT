/**
 * SchoolMeal_Api_source_MSGBOT create by Twitchbot at 2020.10.27.
 * last edit at 2020.10.27.
 * Copyright (C) Twitchbot
 * all rights reserved.
 */

importClass(org.jsoup.Jsoup);

var nYear= "2020";

var nMonth = "09";

var nDate = "11";

시간 = new Date().toISOString().replace(/-/g,"").slice(0,8);

날짜 = new Date().toLocaleString().split("일")[0]+"일"; 

var Allsee="\u200b".repeat(500); 

var NN = "\n\n";


//Made by 트위치봇

function response(room, msg, sender, isGroupChat, replier, packageName, threadld) {


var site1 = 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=이곳에키값입력&Type=json&plndex=1&pSize=100';

var site_1 = '&ATPT_OFCDC_SC_CODE=J10(J10지우고 스쿨코드 입력​

&SD_SCHUL_CODE=*******(7자리의 스쿨코드 입력)&MLSV_MYD=' + 시간;

var site_2 = '&MLSV_FROM_YMD=' + 시간 + '&MLSV_TO_YMD=' +"20211231";

var gup = site1 + site_1 + site_2;


var res0 = Jsoup.connect(gup).get().text();

var res = JSON.stringify(JSON.parse(org.jsoup.Jsoup.connect(gup).ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text()), null, 4);

var res2 = JSON.parse(res0).mealServiceDietInfo[1].row[0].DDISH_NM;


var a=[];

for(i=0 ; i<6 ; i++) {

a.push(JSON.parse(res0).mealServiceDietInfo[1].row[i].MLSV_TO_YMD+"메뉴 : " + JSON.parse(res0).mealServiceDietInfo[1].row[i].DDISH_NM);

}

a.join("\n\n");


//replier.reply(res0); 기본값

//replier.reply(시간);


if(msg==('/급식')){

try{


replier.reply("[급식봇] "+날짜+" 급식입니다.\n\n"+res2);

} catch (e) {

replier.reply(e);

}

}


if(msg.includes('/주간급식')){

try{

replier.reply("[급식봇] 주간 급식입니다.\n\n전체보기를 눌러 확인하세요."+Allsee+NN+a.join("\n\n"));

} catch(e){ 

  replier.reply(e);

  }

  }


if(msg.includes('!급식 ')){

  try{

  var 커스텀타임 = msg.substr(4);

 

  var Csite1 = 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=키값을 넣으세요&Type=json&plndex=1&pSize=100';

  var Csite_1 = '&ATPT_OFCDC_SC_CODE=B00(B00지우고 동일한형식의 스쿨코드 입력)&SD_SCHUL_CODE=*******(7자리 스쿨코드입력)&MLSV_MYD=' + 시간;

  var Csite_2 = '&MLSV_FROM_YMD=' + 커스텀타임;

  var Cgup = Csite1 + Csite_1 + Csite_2;


  var Cres0 = Jsoup.connect(Cgup).get().text();

  var Cres2 = JSON.parse(Cres0).mealServiceDietInfo[1].row[0].DDISH_NM;

  

  replier.reply("[급식봇]"+커스텀타임+"\n급식입니다.\n\n"+Cres2);

  

}

catch(e){

  replier.reply(e);

  

}

}

}

