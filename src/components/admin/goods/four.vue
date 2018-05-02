<template>
  <div class="page">
    <div class="h5videodiv" v-for="(item,index) in videoList" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)">
      <video class="h5video" id="h5sVideo1" autoplay ref="video">

      </video>
      <img class="playpause" src="../../../../static/imgs//media_play_pause_resume.png" @click="playpause(index)">
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
    </div>
  </div>
</template>

<script>
  export default {
    data() { 
      return {
           videoList: []
      };
    },
    created(){
      this.getList();
    },
    methods: {
          // 按钮控制播放暂停
    playpause(index) {
      var video = this.$refs.video[index];
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
    //获取视频数据，并添加到videoList里
    getList() {
      this.$http.get("http://192.168.0.10:8080/api/v1/GetSrc").then(res => {
        this.videoList = res.data.src;
      });
    },
      enter(index) {
        this.$refs.video[index].classList.add("vdactive");
        this.$refs.ContentControl[index].style.opacity = 1;
        
      },
      leave(index) {
        this.$refs.video[index].classList.remove("vdactive");
        this.$refs.ContentControl[index].style.opacity = 0;
        
      },
      // 全屏且调出控制浮动层
      allscreen(index) {
        var video = this.$refs.video[index];
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen();
        }
      }
    },
    components: {}
  };

</script>

<style scoped>
  .h5video {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: #000000;
  }

  .h5videodiv {
    width: 49%;
    margin-left: 1%;
    /* margin-left: 10%; */
    display: inline-block;
    position: relative;
  }

</style>
