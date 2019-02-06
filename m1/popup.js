$("#pms").on("click", function() { 
  var pmsEntryVal=$('#pmsentry').val();
  var pmsTaskOrder=$('input[name=options]:checked').val();
  if(!pmsEntryVal || pmsEntryVal=='' || pmsEntryVal=='undefined'){
    pmsEntryVal='';
  }
  chrome.storage.sync.set({pmsEntry: pmsEntryVal,taskOrder:pmsTaskOrder,isExt:true}, function() { });
  chrome.tabs.create({url: 'http://intranet.mind-infotech.com/mind/default.aspx'});
  return false;
});

$("#ats").on("click", function() {
  chrome.tabs.create({url: 'http://intranet.mind-infotech.com/mind/CreateAppUrl.aspx?app=ats'});
  return false;
});


$("#intranet").on("click", function() { 
  chrome.tabs.create({url: 'http://intranet.mind-infotech.com/mind/default.aspx'});
  return false;
});

$("#lunch").on("click", function() { 
  chrome.storage.sync.set({lunch: true}, function() { });
  chrome.tabs.create({url: 'http://intranet.mind-infotech.com/mind/default.aspx?tmp=lunch'});
  return false;
});

$("#jira").on("click", function() { 
  chrome.tabs.create({url: 'https://classlink.atlassian.net/issues/?filter=-1'});
  return false;
});

$("#gmail").on("click", function() { 
  chrome.tabs.create({url: 'https://gmail.com'});
  return false;
});

$("#clLaunch").on("change", function() { 
   var clUser=$("#clLaunch").val();
   var forAdmin=$("#foradmin").prop('checked');
    if(clUser){
      var clPlatform=$('input[name=clPlatform]:checked').val();
      var str=clUser.split("|");
      var uname=str[0];
      var pwd=str[1];
      var scode=str[2];
      if(uname=='tadmin@classlink.com' && (clPlatform=='betalaunchpad' || clPlatform=='local')){
        pwd="password";
      }
      if(clPlatform=='local'){
        chrome.storage.sync.set({isAdmin:forAdmin,clUrl:'http://172.29.36.98:8080',username:uname,password:pwd,code:scode,clExt: true}, function() { });
        chrome.tabs.create({url: 'http://172.29.36.98:8080/logout'});
      }
      else{
        chrome.storage.sync.set({isAdmin:forAdmin,clUrl:'https://'+clPlatform+'.classlink.com',username:uname,password:pwd,code:scode,clExt: true}, function() { });
        chrome.tabs.create({url: 'https://'+clPlatform+'.classlink.com/logout'});
      }
      return false;
  }
});


// $("#proxy").on("click", function() {
//  chrome.proxy.settings.set({value:{mode: "system",rules: {proxyForHttp: {scheme: "http",
//       host: "http://proxy.internal.mind-infotech.com",port:8080},bypassList: [] } }, scope: 'regular'},
//       function() {});
//   chrome.notifications.create('reminder', {
//         type: 'basic',
//         iconUrl: 'smg.png',
//         title: "MIND proxy changed successfully.",
//         message: "http://proxy.internal.mind-infotech.com:8080"
//   }, function(notificationId) {});
// });
