// pages/post/post-comment/post-comment.js
import{ DBPost }from '../../../db/DBPost.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
	userKeyboardFlag:true,
  },
  
  //切换输入方式
  switchInputType:function(event){
	  // console.log("userKeyboardFlag="+this.data.userKeyboardFlag)
	  // var userKeyboardFlag=!this.data.userKeyboardFlag;
	  this.setData({
		 userKeyboardFlag:!this.data.userKeyboardFlag
	  })
  },
  
  //获取用户输入,
  bindCommentInput:function(event){
	  var val=event.detail.value;
	  // return val.replace(/qq/g,'*')
	  //console.log(val)
	  this.data.keyboardValue=val;
  },
  
  
  //检测点击发送
  submitComment:function(event){
	  console.log("来了")
	  var newData= {
      username: "青石",
      avatar: "/image/avatar/avatar-3.jpg",
      create_time: new Date().getTime()/1000,
      content: {
        txt: this.data.keyboardValue,
      }
    }
	if(!newData.content.txt){
			  return ;
	}
	//保存到数据库
	this.dbPost.newComment(newData);
	console.log("保存成功")
	//展示评论成功
	this.showCommitSuccessToast();
	console.log("展示成功")
	//重新渲染并绑定所有评论
	this.bindCommentData();
	console.log("恢复成功")
	//恢复初始状态
	this.resetAllDefaultStatus();
	console.log("初始化成功")
  },
  
  //评论成功
  showCommitSuccessToast:function(){
	  //显示操作结果
	  wx.showToast({
		  title:"评论成功",
		  duration:1000,
		  icon:"success"
	  })
  },
  
  //绑定评论数据
  bindCommentData:function(){
	  var comments=this.dbPost.getCommentData();
	  //绑定评论数据
	  this.setData({
		  comments:comments
	  })
  },
  
  //将所有相关的按钮状态,输入状态清空:
  resetAllDefaultStatus:function(){
	  this.setData({
		  keyboardInputValue:""
	  })
  },
  
  previewImg:function(event){
	  //获取评论序号
	  var commentIdx=event.currentTarget.dataset.commentIdx,
	  //获取评论的图片序号
	  imgIdx=event.currentTarget.dataset.imgIdx,
	  //获取全部的图片
	  imgs=this.data.comments[commentIdx].content.img;
	  wx.previewImage({
		  current:imgs[imgIdx],//当前显示图片的http链接
		  urls:imgs//需要预览图片的http链接列表
	  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	var postId=options.id;
	this.dbPost=new DBPost(postId);
	var comments=this.dbPost.getCommentData();
	
	//绑定评论数据
	this.setData({
		comments:comments
	});
  },
	
	
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
	
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})