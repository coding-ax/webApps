//app.js
App({
  onLaunch:function(){
	 /* wx.setStorage({
		  key:'postList',
		  data:dataObj.postList,
		  success:function(){
		  	//success
		  },
		  fail:function(){
		  	//fail
		  },
		  complete:function(){
		    //complete
		  }
		  }) */
		  /* var storageData=wx.getStorageSync('postList');
		  if(!storageData){ */
			var dataObj=require("data/data.js");
			wx.clearStorage(); 
			   wx.setStorageSync('postList',dataObj.postList);
		  //}
		 
  }
})




























