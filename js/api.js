var key = "7eD5be%2Fby%2FPLL5EeqoTnJ8j3G%2FZQMxo5gzGl5h0r63ed2YgArMVYY%2BBi0Na4LYHcDCXhULdEO2%2F8vFInRJT3Mw%3D%3D";
$(".view").hide();

/* 후보자 정보 조회 */
function getCandidate(f) {
  var sgCode = f.sgCode.value;
  var sdName = f.sdName.value;
  var sggName = f.sggName.value;
  if (sgCode == "") {
    alert("선거명을 선택해주세요");
    return;
  }
  if (sdName == "") {
    alert("지역을 선택해주세요");
    return;
  }
  $(".view ul li").remove();
  var url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire'; /*URL*/
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/
  url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*한 페이지 결과 수*/
  url += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20180613'); /*선거ID*/
  url += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent(sgCode); /*선거종류코드*/
  url += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent(sdName); /*선거종류코드*/
  url += '&' + encodeURIComponent('sggName') + '=' + encodeURIComponent(sggName); /*선거종류코드*/
  console.log(url);
  $.get(url, function (res) {
    var items = $(res).find("item");
    if (items.length == 0) {
      console.log("검색 결과가 없습니다");
    }
    for (let i = 0; i < items.length; i++) {
      var name = $(items[i]).find("name").text();
      var jdName = $(items[i]).find("jdName").text();
      var giho = $(items[i]).find("giho").text();
      var list = "<li>" +
        "<p>" + name + "</p>" +
        "<p>" + jdName + "</p>" +
        "<p>" + giho + "번</p>" +
        "</li>"
      $(".view ul").append(list);
    }
  });
}

/* 투표소 정보 조회 */
function getPolling(f) {
  var sdName = f.sdName.value;
  var sggName = f.sggName.value;
  if (sdName == "") {
    alert("지역을 선택해주세요");
    return;
  }
  if (sggName == "") {
    alert("시군구를 선택해주세요");
    return;
  }

  $(".view p").empty();
  $(".view ul li").remove();
  $(".view table").remove();
  $(".content #con12").hide();
  $(".content #con22").hide();
  $(".view").show();

  var title = sdName + " " + sggName + " 투표소 정보";
  $(".view p").append(title);

  var url = "http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPolplcOtlnmapTrnsportInfoInqire";
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/
  url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*한 페이지 결과 수*/
  url += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20180613'); /*선거ID*/
  url += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent(sdName); /*선거종류코드*/
  url += '&' + encodeURIComponent('wiwName') + '=' + encodeURIComponent(sggName); /*선거종류코드*/

  $.get(url, function (res) {
    var items = $(res).find("item");
    console.log(res);
    for (let i = 0; i < items.length; i++) {
      var sdName = $(items[i]).find("sdName").text();
      var wiwName = $(items[i]).find("wiwName").text();
      var emdName = $(items[i]).find("emdName").text();
      var placeName = $(items[i]).find("placeName").text();
      var addr = $(items[i]).find("addr").text();
      var list = "<li>" + sdName + " " + wiwName + " " + emdName + " " + placeName + "</li>"
      $(".view .vote").append(list);
    }
  });
}

/* 개표 결과 조회 */
function getResult(f) {
  var sgCode = f.sgCode.value;
  var sdName = f.sdName.value;

  if (sgCode == "") {
    alert("선거명을 선택해주세요");
    return;
  }
  if (sdName == "") {
    alert("지역을 선택해주세요");
    location.reload();
  }

  $(".view p").empty();
  $(".view ul li").remove();
  $(".content #con13").hide();
  $(".content #con23").hide();
  $(".view").show();

  var url = 'http://apis.data.go.kr/9760000/VoteXmntckInfoInqireService2/getXmntckSttusInfoInqire'; /*URL*/
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/
  url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*한 페이지 결과 수*/
  url += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20180613'); /*선거ID*/
  url += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent(sgCode); /*선거종류*/
  url += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent(sdName); /*시도명*/

  $.get(url, function (res) {
    var items = $(res).find("item");
    console.log(res);
    if (items.length == 0) {
      alert("검색 결과가 없습니다");
      return;
    }
    for (let i = 0; i < 1; i++) {
      var jd01 = $(items[i]).find("jd01").text(); /*정당1*/
      var jd02 = $(items[i]).find("jd02").text(); /*정당2*/
      var jd03 = $(items[i]).find("jd03").text(); /*정당3*/
      var hbj01 = $(items[i]).find("hbj01").text(); /*사람1*/
      var hbj02 = $(items[i]).find("hbj02").text(); /*사람2*/
      var hbj03 = $(items[i]).find("hbj03").text(); /*사람3*/
      var dugsu01 = $(items[i]).find("dugsu01").text(); /*투표1*/
      var dugsu02 = $(items[i]).find("dugsu02").text(); /*투표2*/
      var dugsu03 = $(items[i]).find("dugsu03").text(); /*투표3*/
      var a = parseInt(dugsu01);
      var b = parseInt(dugsu02);
      var c = parseInt(dugsu03);
      var max = Math.max(a, b, c);
      var img = "<img src='./img/crown.png'>";
      var sum = a + b + c;
      if (jd02 == "" && dugsu02 == "") {
        jd02 = "";
        dugsu02 = "";
      }
      if (jd03 == "" && dugsu02 == "") {
        jd03 = "";
        dugsu02 = "";
      }
      var title = "<p>" + sdName + " 개표 정보" + "</p>"
      var hlist = "<tr><th scope='col'>#</th><th scope='col'>후보자</th><th scope='col'>득표수</th><th scope='col'>당선</th></tr>";
      var blist = "<tr><th scope='row'>1</th><td>" + hbj01 + " (" + jd01 + ")</td><td>" + dugsu01 + "</td><td>" + img + "</td></tr>";
      blist += "<tr><th scope='row'>2</th><td>" + hbj02 + " (" + jd02 + ")</td><td>" + dugsu02 + "</td><td></td></tr>";
      blist += "<tr><th scope='row'>3</th><td>" + hbj03 + " (" + jd03 + ")</td><td>" + dugsu03 + "</td><td></td></tr>";
      blist += "<tr><th scope='row'></th><td>합계</td><td>" + sum + "</td><td></td></tr>";
      $(".view p").append(title);
      $(".view .table thead").append(hlist);
      $(".view .table tbody").append(blist);
    }
  });
}


/* 당선인 정보 조회 */
function getElection(f) {

  var sgCode = f.sgCode.value;
  var sdName = f.sdName.value;

  if (sgCode == "") {
    alert("선거명을 선택해주세요");
    return;
  }
  if (sdName == "") {
    alert("지역을 선택해주세요");
    return;
  }

  $(".view p").empty();
  $(".view ul li").remove();
  $(".view table").remove();
  $(".content #con14").hide();
  $(".content #con24").hide();
  $(".view").show();

  var title = sdName + " 당선 정보";
  $(".view p").append(title);

  var url = "http://apis.data.go.kr/9760000/WinnerInfoInqireService2/getWinnerInfoInqire";
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/
  url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*한 페이지 결과 수*/
  url += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20180613'); /*선거ID*/
  url += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent(sgCode); /*선거ID*/
  url += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent(sdName); /*선거종류코드*/

  $.get(url, function (res) {
    var items = $(res).find("item");
    console.log(res);
    if (items.length == 0) {
      alert("검색 결과가 없습니다");
      return;
    }
    for (let i = 0; i < items.length; i++) {
      var name = $(items[i]).find("name").text();
      var hanja = $(items[i]).find("hanjaName").text();
      var jdName = $(items[i]).find("jdName").text();
      var jdimg;
      if (jdName == '' || jdName == '무소속') {
        jdimg = "./img/mu.png";
      }
      if (jdName == '더불어민주당') {
        jdimg = "./img/d.png";
      }
      if (jdName == '자유한국당') {
        jdimg = "./img/j.png";
      }
      if (jdName == '정의당') {
        jdimg = "./img/jd.png";
      }
      if (jdName == '민중당') {
        jdimg = "./img/m.png";
      }
      if (jdName == '민주평화당') {
        jdimg = "./img/min.png";
      }
      if (jdName == '') {
        jdName = "없음";
      }
      var gender = $(items[i]).find("gender").text(); //성별
      var job = $(items[i]).find("job").text(); //직업
      var edu = $(items[i]).find("edu").text(); // ?
      var list = "<li onclick='pops();'><span>" + name + "(" + gender + ")" + "</span><img src='" + jdimg + "'></li>";
      var img;
      if (gender == "여") {
        img = "<img src='./img/woman.png'>";
      }
      if (gender == "남") {
        img = "<img src='./img/man.png'>";
      }
      var pop = "<div class='pop_box'>" + img + "<div class='pop_view'><p>" + name + "(" + hanja + ")</p><p>정당 : " + jdName + "</p><p>직업 : " + job + "</p><p>학력 : " + edu + "</p></div></div>"
      $(".view .ele").append(list);
      $(".modal .popup").append(pop);
    }
  });
}

/* 공통 - 선거명 조회 */
function getSgcode() {
  var url = 'http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList'; /*URL*/
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/

  $.get(url, function (res) {
    var items = $(res).find("item");
    for (let i = 1; i < items.length; i++) {
      var sgName = $(items[i]).find("sgName").text();
      var sgTypecode = $(items[i]).find("sgTypecode").text();
      var option = "<option value='" + sgTypecode + "'>" + sgName + "</option>"
      $(".sgCode").append(option);
    }
  });
}
getSgcode();

/* 공통 - 지역 조회 */
function getSdname() {
  var url = "http://apis.data.go.kr/9760000/CommonCodeService/getCommonSggCodeList";
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/
  url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('30'); /*한 페이지 결과 수*/
  url += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20180613'); /*선거ID*/
  url += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent('11'); /*선거종류코드*/

  $.get(url, function (res) {
    var items = $(res).find("item");
    for (let i = 0; i < items.length; i++) {
      var sdName = $(items[i]).find("sdName").text();
      var sggName = $(items[i]).find("sggName").text();
      var option = "<option value='" + sggName + "'>" + sdName + "</option>"
      $(".sdName").append(option);
    }
  });
}
getSdname();

/* 공통 - 시군구 조회 */
function getGusigun(sdName) {
  var gusigun = gusigun ? gusigun : "";
  var url = 'http://apis.data.go.kr/9760000/CommonCodeService/getCommonGusigunCodeList'; /*URL*/
  url += '?' + encodeURIComponent('ServiceKey') + '=' + key; /*Service Key*/
  url += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(key); /*공공데이터포털에서 받은 인증키*/
  url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('30'); /*한 페이지 결과 수*/
  url += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20180613'); /*선거ID*/
  url += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent(sdName); /*선거종류코드*/

  $.get(url, function (res) {
    var items = $(res).find("item");
    for (let i = 1; i < items.length; i++) {
      var wiwName = $(items[i]).find("wiwName").text();
      var option = "<option value='" + wiwName + "'>" + wiwName + "</option>"
      $(".sggName").append(option);
    }
  });
}

/* 공통 - 지역이 바뀌었을 때 조회 */
$('.sdName').change(function () {
  var sdName = $(this).val();
  $(".sggName option").remove();
  $(".sggName").append("<option value=''>시군구 선택</option>");
  getGusigun(sdName);
});