// Not open to contributing
var url=prompt("url");
var i=0;
var handle=setInterval(()=>{ window.open(url); i++; } , parseInt(prompt("interval (ms)")));
document.getElementsByTagName("body")[0].onclick=(()=>{ clearInterval(handle); });
