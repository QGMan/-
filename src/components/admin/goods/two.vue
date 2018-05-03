<template>
  <div class="page">
    <div class="h5videodiv" v-for="(item,index) in currentvideo" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)"  @click="playpause(index)">

      <video class="h5video" src="../../../../static/video/h5ssample.mp4" ref="video" @click="changeIsactive" >

      </video>
      <img class="playpause" v-show="isactive" src="../../../../static/imgs//media_play_pause_resume.png" @click="playpause(index)">
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
      <div>{{item.strName}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    //  找到这里说明你摊上大事了，这个bug我只能说非常难解决，不过呢我这里有一个好消息和一个坏消息：
    //  坏消息是bug真的很难，好消息是我已经解决了
    return {
      videoList: [], //视频源列表
      currentPage: 0, //当前页
      isactive: true //控制播放暂停时是否显示
    };
  },
  computed: {
    List() {
      let initV = this.currenPage * 2;
      return this.videoList.splice(initV, 2);
    }
  },
  created() {
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
    changeIsactive() {
      this.isactive = !this.isactive;
    },
    //获取视频数据，并添加到videoList里
    getList() {
      this.$http.get("http://192.168.0.10:8080/api/v1/GetSrc").then(res => {
        this.videoList = res.data.src;
      });
    },
    enter(index) {
      this.$refs.video[index].classList.add("vdactive");
      // 控制层显示
      this.$refs.ContentControl[index].style.opacity = 1;
      // $('.ContentControl').css('opacity',1)
    },
    leave(index) {
      this.$refs.video[index].classList.remove("vdactive");
      $(".ContentControl").css("opacity", 0);
    },
    // full and调出控制浮动层
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
  components: {},
  // 计算
  computed: {
    currentvideo() {
      let initV = this.currentPage * 2;
      return this.videoList.splice(initV, 2);
    }
  }
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
  /* min-width: 300px; */
  /* height:300px; */
  margin-left: 1%;
  display: inline-block;
  position: relative;
  float: left;
}
</style>
