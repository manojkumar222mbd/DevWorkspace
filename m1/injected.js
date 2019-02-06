$( document ).ready(function() {
        chrome.storage.sync.get(function(items) {
        if(items.lunch){ 
        	window.open('/mind/Lists/Menu/DispMenu.aspx','Menu','width=360,height=410,noresize=1,noscroll=1','');
        	setTimeout(function(){ chrome.storage.sync.set({lunch:false}, function() { });  },2000);
        }
        if(items.clExt){
        	var username=items.username;
        	var password =items.password;
        	var code=items.code;
        	var clUrl=items.clUrl;
        	var forAdmin=items.isAdmin;
        	var interval=setInterval(function(){
        		if($("#username").length > 0 ){
        			$("#username").val(username);
        			$("#password").val(password);
        			$("#code").val(code);
        			setTimeout(function(){ $("#signin").click();  },1200);
        			if(forAdmin){
        				setTimeout(function(){ 
        					window.open(clUrl+'/admin', '_blank');
        				},2000);
        			}
        			chrome.storage.sync.clear();
        			chrome.storage.sync.set({clExt:false}, function() { });
        			clearInterval(interval);
        		}
        	},100);
        	setTimeout(function(){ 
        		chrome.storage.sync.clear();
        		chrome.storage.sync.set({clExt:false}, function() { });
        		clearInterval(interval);
        	},20000);
        }
        if(items.isExt){ 
	          if($('a[id="AppNameProject Management System"]').length > 0){
	          	window.open("/mind/CreateAppUrl.aspx?app=pms");
	          }else{
	          	if (window.location.href=='https://pmsnew.mindeservices.com/inner.jsp') {
		            var myEntry=items.pmsEntry;
		            var c=parseInt(items.taskOrder);
		              setTimeout(function(){
		              window.frames[1].document.querySelectorAll('a')[4].click();
		                var interval1=setInterval(function(){
		                    if(window.frames[1].document.querySelectorAll("input[type='button']").length > 0){
		                      window.frames[1].document.querySelectorAll("input[type='button']")[0].click();
		                      var interval2 = setInterval(function() {
		                              if(window.frames[1].document.querySelectorAll('textarea').length>0) {
		                                var daily_ts="input[name=daily_ts"+c+"]";
		                                var percent="input[name=percent"+c+"]";
		                                var chk="input[name=chk"+c+"]";
		                                  window.frames[1].document.querySelectorAll(daily_ts)[0].value=8.75;
		                          window.frames[1].document.querySelectorAll(percent)[0].value=1;
		                          window.frames[1].document.querySelectorAll(chk)[0].checked=true;
		                          window.frames[1].document.querySelectorAll('textarea')[c-1].value=myEntry;
		                          setTimeout(function(){
		                             window.frames[1].document.querySelectorAll("input[type='submit']")[0].click();
		                             chrome.storage.sync.set({pmsEntry: '',taskOrder:1,isExt:false}, function() { });
		                          },1000);
		                                  clearInterval(interval2);
		                              }
		                          }, 100);
		                          clearInterval(interval1);
		                    } 
		              },100);
		            },1000);
		            setTimeout(function(){ clearInterval(interval1);clearInterval(interval2);  },15000);
	            }
	            setTimeout(function(){ chrome.storage.sync.set({pmsEntry: '',taskOrder:1,isExt:false}, function() { });  },15000);
	        }
        }
      });

    if (window.location.href=='http://intranet.mind-infotech.com/mind/CreateAppUrl.aspx?app=ats') {

    }
    if (window.location.href=='http://intranet.mind-infotech.com/mind/default.aspx?tmp=lunch') {
          window.open('mind/Lists/Menu/DispMenu.aspx','Menu','width=360,height=410,noresize=1,noscroll=1','');
    }
    if (window.location.href=='https://betalaunchpad.classlink.com/home') {
        
    }
});