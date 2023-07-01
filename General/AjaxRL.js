// Can contribute, to help with AJAX
rsp=(function ajax(){ var o=new XMLRequestObject(); var rt=null; o.onload=(()=>{ rt=this.responseText }); o.open("GET", prompt("url")); o.send(); while(rt==null){}; return rt; })();
