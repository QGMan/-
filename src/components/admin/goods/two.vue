<template>
  <div class="page">
    <div class="h5videodiv" v-for="(item,index) in videoList" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)">

      <video class="h5video" :src="item.strUrl" :id="item.videoid" autoplay ref="video">

      </video>
      <img class="playpause" src="../../../../static/imgs//media_play_pause_resume.png">
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
        videoList:[    
      //     {
      //       "nType": "H5_STREAM",
      //       "strName": "Stream 1",
      //       "strToken": "token1",
      //       "strUrl": "http://localhost:8080/rtsp://192.168.0.103/11",
      //       "strUser": "admin",
      //       "strPasswd": "******",
      //       "bPasswdEncrypt": false,
      //       "bEnableAudio": false,
      //       "nConnectType": "H5_AUTO",
      //       "nRTSPType": "H5_RTSP_AUTO",
      //       "strSrcIpAddress": "192.168.0.103",
      //       "strSrcPort": "80",
      //       "nChannelNumber": 1,
      //       "bOnvifProfileAuto": true,
      //       "strOnvifAddr": "/onvif/device_service",
      //       "strOnvifProfileMain": "Profile_1",
      //       "strOnvifProfileSub": "Profile_2",
      //       "bOnline": true,
      //       "strSnapshotUrl": "/api/v1/GetImage?token=token1",
      //       "strServerToken": "",
      //       "strOriginalToken": ""
      //     },
      //     {
      //       "nType": "H5_FILE",
      //       "strName": "Stream 2",
      //       "strToken": "token2",
      //       "strUrl": "../../../../static/video/h5ssample.mp4",
      //       "strUser": "admin",
      //       "strPasswd": "******",
      //       "bPasswdEncrypt": false,
      //       "bEnableAudio": false,
      //       "nConnectType": "H5_AUTO",
      //       "nRTSPType": "H5_RTSP_AUTO",
      //       "strSrcIpAddress": "192.168.0.1",
      //       "strSrcPort": "80",
      //       "nChannelNumber": 1,
      //       "bOnvifProfileAuto": true,
      //       "strOnvifAddr": "/onvif/device_service",
      //       "strOnvifProfileMain": "Profile_1",
      //       "strOnvifProfileSub": "Profile_2",
      //       "bOnline": true,
      //       "strSnapshotUrl": "/api/v1/GetImage?token=token2",
      //       "strServerToken": "",
      //       "strOriginalToken": ""   
      //       }
        ] //视频源列表
      };
    },
    computed:{
      List(){
        let initV=this.currenPage*2;
        return this.videoList.splice(initV,2)
      }
    },

    methods: {
      //获取视频数据，并添加到videoList里
      getList(){
        
      }
      ,
      enter(index) {
        this.$refs.video[index].classList.add("vdactive");
        // 控制层显示
        this.$refs.ContentControl[index].style.opacity = 1;
        // $('.ContentControl').css('opacity',1)
      },
      leave(index) {
        this.$refs.video[index].classList.remove("vdactive");
        $('.ContentControl').css('opacity', 0)

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
    /* min-width: 300px; */
    /* height:300px; */
    margin-left: 1%;
    display: inline-block;
    position: relative;
    float: left;
  }

</style>
