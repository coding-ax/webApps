//post.js
import{DBPost}from '../../db/DBPost.js';
// var DBPost=require('../../db/DBPost.js').DBPost;
Page({
	data:{
		
	},
	onLoad:function(options){
		var dbPost=new DBPost();
		this.setData({
			postList:dbPost.getAllPostData()
		})
		// console.log("onLoad:"+new Date());
	},
	onTapToDetail(event){
		var postId=event.currentTarget.dataset.postId;
		console.log(postId);
		wx.navigateTo({
			url:'post-detail/post-detail?id='+postId,
		})
	},
	/* onShow:function(options){
		console.log("onShow:"+new Date());
	},
	onReady:function(options){
		console.log("onReady:"+new Date());
	},
	onHide:function(options){
		console.log("onHide:"+new Date());
	},
	onUnload:function(options){
		console.log("onUnload:"+new Date());
	}, */
})