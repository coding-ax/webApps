var util=require('../utils/util.js')
class DBPost{
	constructor(postId) {
	    this.storageKeyName='postList';
		this.postId=postId;
	}
	//得到全部文章信息
	getAllPostData(){
		var res=wx.getStorageSync(this.storageKeyName);
		if(!res){
			res=require('../data/data.js').postList;
			this.execSetStorageSync(res);
		}
		return res;
	}
	
	//保存或者更新缓存数据
	execSetStorageSync(data){
		wx.setStorageSync(this.storageKeyName,data);
	}
	
	//获取指定id号的文章数据
	getPostItemById(){
		var postsData=this.getAllPostData();
		var len=postsData.length;
		for(var i=0;i<len;i++){
			if(postsData[i].postId==this.postId){
				return {
					//当前文章在缓存数据库数组中的序号
					index:i,
					data:postsData[i]
				}
			}
		}
	}
	
	//收藏文章
	collect(){
		return this.updatePostData('collect');
	}
	
	//点赞
	up(){
		return this.updatePostData('up');
	}
	
	//更新本地的点赞,评论,收藏,阅读量
	updatePostData(category,newComment){
		var itemData=this.getPostItemById(),
		postData=itemData.data,
		allPostData=this.getAllPostData();
		switch(category){
			case 'collect':
			//处理收藏
			if(!postData.collectionStatus){
				postData.collectionNum++;
				postData.collectionStatus=true;
			}
			else{
				postData.collectionNum--;
				postData.collectionStatus=false;
			}
			break;
			case 'up':
			//处理点赞
			if(!postData.upStatus){
				postData.upNum++;
				postData.upStatus=true;
			}
			else{
				postData.upNum--;
				postData.upStatus=false;
			}
			break;
			case 'comment':
			postData.comments.push(newComment);
			postData.commentNum++;
			break;
			default:
			break;
		}
		//更新缓存数据库:
		allPostData[itemData.index]=postData;
		this.execSetStorageSync(allPostData);
		return postData;
	}
	getCommentData(){
		var itemData=this.getPostItemById().data;
		//按时间降序排列评论
		itemData.comments.sort(this.compareWithTime);
		var len=itemData.comments.length,
		comment;
		for(var i=0;i<len;i++){
			//将comment中的时间戳转换为可阅读格式
			comment=itemData.comments[i];
			comment.create_time=util.getDiffTime(comment.create_time,true);
		}
		return itemData.comments;
	}
	compareWithTime(value1,value2){
		var flag=parseFloat(value1.create_time)-parseFloat(value2.create_time);
		if(flag<0){
			return 1;
		}else if(flag>0){
			return -1;
		}else{
			return 0;
		}
	}
	
	//新增评论:
	newComment(newComment){
		this.updatePostData('comment',newComment);
	}
};
export{DBPost};