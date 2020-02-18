var app = new Vue({
	el: '#app',
	data: {
		keywords: '许嵩',
		songArray: [],
		imgUrl: '',
		commentList: [],
		playerUrl: '',
		nowName: '',
		singer: '',
		index: -1,
		mvID: 0,
		showMvFlag: false,
		mvUrl: ''
	},



	mounted: function() {
		this.searchSong();
	},

	methods: {
		showMV: function(index) {
			//先暂停音乐:
			let audio = document.querySelectorAll('audio')[0];
			audio.pause();

			//修改mv播放数据
			this.mvID = this.songArray[index].mvid;
		/* 	console.log('https://autumnfish.cn//mv/detail?mvid=' + this.mvID) */
			var that = this;

			axios.get('https://autumnfish.cn//mv/detail?mvid=' + this.mvID).then(function(response) {
				var array = response;
				/* console.log(array)
				console.log(array.data.data.brs[480]) */
				if (array.status == 200) {
					if (array.data.data.brs[480] != null) {
						that.mvUrl = array.data.data.brs[480];
						that.showMvFlag = true;
					} else if (array.data.data.brs[240] != null) {
						that.mvUrl = array.data.data.brs[240];
						that.showMvFlag = true;
					} else if (array.data.data.brs[720] != null) {
						that.mvUrl = array.data.data.brs[720];
						that.showMvFlag = true;
					} else if (array.data.data.brs[1080] != null) {
						that.mvUrl = array.data.data.brs[1080];
						that.showMvFlag = true;
					} else {
						alert("该视频清晰度有点奇怪,暂无法播放")
					}
				} else {
					alert("???出了点小问题...")
				}
			}, function(error) {
				alert("连接出了点小问题...(可能是后台服务器关闭)")
			})


			// this.mvUrl='https://autumnfish.cn//mv/detail?mvid='+mvID
		},

		showMV2: function() {
			//先暂停音乐:
			let audio = document.querySelectorAll('audio')[0];
			audio.pause();

			//修改mv播放数据
			/* console.log('https://autumnfish.cn//mv/detail?mvid=' + this.mvID) */
			var that = this;

			axios.get('https://autumnfish.cn//mv/detail?mvid=' + this.mvID).then(function(response) {
				var array = response;
				/* console.log(array)
				console.log(array.data.data.brs[480]) */
				if (array.status == 200) {
					if (array.data.data.brs[480] != null) {
						that.mvUrl = array.data.data.brs[480];
						that.showMvFlag = true;
					} else if (array.data.data.brs[240] != null) {
						that.mvUrl = array.data.data.brs[240];
						that.showMvFlag = true;
					} else if (array.data.data.brs[720] != null) {
						that.mvUrl = array.data.data.brs[720];
						that.showMvFlag = true;
					} else if (array.data.data.brs[1080] != null) {
						that.mvUrl = array.data.data.brs[1080];
						that.showMvFlag = true;
					} else {
						alert("该视频清晰度有点奇怪,暂无法播放")
					}
				} else {
					alert("???出了点小问题...")
				}
			}, function(error) {
				alert("连接出了点小问题...(可能是后台服务器关闭)")
			})


			// this.mvUrl='https://autumnfish.cn//mv/detail?mvid='+mvID
		},

		isPlaying: function(index) {
			if (index == this.index) {
				/* console.log('here:' + index); */
				return true
			}

			return false
		},

		searchSong: function() {
			var that = this;
			axios.get('https://autumnfish.cn/search?keywords=' + this.keywords).then(function(response) {
				/* 	console.log(response); */
				if (response.statusText == 'OK') {
					that.songArray = response.data.result.songs;
				}


			}, function(error) {
				console.log('fail')
				console.log(error)
			})
		},
		playMusic: function(index) {
			// console.log(index);
			// console.log(this.songArray[index].artists[0].img1v1Url)
			this.mvID = 0;
			this.imgUrl = this.songArray[index].artists[0].img1v1Url;
			var that = this;
			this.index = index;
			this.nowName = this.songArray[index].name;
			this.singer = this.songArray[index].artists[0].name
			this.playerUrl = 'https://music.163.com/song/media/outer/url?id=' + this.songArray[index].id;
			if (this.songArray[index].mvid != 0) {
				this.mvID = parseInt(this.songArray[index].mvid);
				/* console.log(this.mvID) */
			}


			axios.get('https://autumnfish.cn/comment/music?id=' + this.songArray[index].id + '&limit=1').then(function(
				response) {
				/* console.log(response.data.hotComments); */
				that.commentList = response.data.hotComments;
			}, function(error) {
				console.log('error:' + error)

			})
		},
		nextSong: function() {
			this.index = this.index < this.songArray.length ? this.index + 1 : 1;
			this.playMusic(this.index);
		},

		exit: function() {
			let video = document.querySelectorAll('video')[0];
			video.pause();
			this.showMvFlag = false;
			this.mvID = 0;
		}
	}
})
