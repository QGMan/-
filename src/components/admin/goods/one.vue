<template>
  <div class="page">
    <div class="h5videodiv"  v-for="(item,index) in currentvideo" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)" @click="playpause(index)">

      <video class="h5video" src="../../../../static/video/h5ssample.mp4" ref="video" @click="changeIsactive">
      <!-- <video class="h5video" src="http://rtsp://192.168.0.103/15" ref="video"> -->

      </video>
      <img class="playpause" v-show="isactive" src="../../../../static/imgs//media_play_pause_resume.png">
      <i class="el-icon-rank fullscreen" @click="allscreen(index)">全屏</i>
      <div class="ContentControl" ref="ContentControl">
        <div class="control">
          <div class="radio">
            <div id="up"></div>
            <div id="left"></div>
            <div id="middle">
              <div id="center"></div>
            </div>
            <div id="down"></div>
            <div id="rights"></div>
          </div>
          <div class="change_size">
            <div class="magnify">放大</div>
            <div class="reduce">缩小</div>
          </div>
        </div>
        
      </div>
        <div>{{ item.strName }}</div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0, //当前页码
      videoList1: [],
      isactive: true //控制播放暂停时是否显示
    };
  },
  created() {
    this.getList();
  },
  methods: {
    enter(index) {
      this.$refs.video[index].classList.add("vdactive");
      this.$refs.ContentControl[index].style.opacity = 1;
    },
    leave(index) {
      this.$refs.video[index].classList.remove("vdactive");
      this.$refs.ContentControl[index].style.opacity = 0;
    },

    // 按钮控制播放暂停
    playpause(index) {
      var video = this.$refs.video[index];
      if (video.paused) {
        video.play();
      } else {
        video.pause();        
      }
    },
    changeIsactive(){
      this.isactive=!this.isactive
    },
    changeIsplay() {},
    getList() {
      this.$http.get("http://192.168.0.10:8080/api/v1/GetSrc").then(res => {
        this.videoList1 = res.data.src;
        console.log(this.videoList1);
      });
    },
    // 全屏且调出控制浮动层
    allscreen() {
      var video = this.$refs.video;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      }
    }
  },
  
  watch: {},
  // 计算
  computed: {
      currentvideo(){
        let initV=this.currentPage;
        return this.videoList1.splice(initV++,1)
      }
  }
};
</script>

<style scoped>
.h5video {
  width: 100%;
  height: 80%;
  border: 1px solid black;
  background-color: #000000;
}

.h5videodiv {
  width: 80%;
  margin-left: 10%;
  display: inline-block;
  position: relative;
}
</style>
