//index.js
//获取应用实例
const app = getApp()

Page({
onTapJump:function(event){
		  wx.navigateTo({
			  url:"../post/post",
			  success:()=>{
				  console.log("Jump success")
			  },
			  fail:()=>{
				  console.log("Jump fail")
			  },
			  complete:()=>{
				  console.log("Jump complete")
			  }
		  })
	},
	onHide:function(event){
		console.log("OnHide");
	},
	onUnload:function(event){
		console.log("OnUnload");
	}
})
