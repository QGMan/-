<template>
  <div class="arttmpl">
    <!-- 面包屑 -->
    <div class="abread bt-line">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设备列表</el-breadcrumb-item>
        <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 操作区 -->
    <div class="operation">
      <el-row>
        <!-- 功能 -->
        <el-col :span="20">
          <router-link to="/admin/goodsadd">
            <el-button type="success">
              <i class="el-icon-plus"></i> 新增</el-button>

          </router-link>

          <el-button type="danger" @click="del">
            <i class="el-icon-delete2"></i> 删除</el-button>
          <el-button type="primary">
            <i class="el-icon-edit"></i>修改</el-button>

        </el-col>
        <!-- 搜索框 -->

        <el-col :span="4">
          <el-input placeholder="请输入搜索内容" icon="search" v-model="searchvalue" style="float:right">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <!-- 内容展示区 -->
    <el-tabs type="border-card" style="margin-bottom:10px">
      <el-tab-pane>
        <span slot="label">
          <router-link to="/admin/one">单屏</router-link>
        </span>
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <router-link to="/admin/two">双屏</router-link>
        </span>
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="四屏">
        <span slot="label">
          <router-link to="/admin/four">四屏</router-link>
        </span>
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="八屏">
        <span slot="label">
          <router-link to="/admin/eight">八屏</router-link>
        </span>
        <router-view></router-view>
      </el-tab-pane>
      <!-- <div style="width:100px;height:100px;background:red"></div> -->
    </el-tabs>

    <!-- 分页 -->
    <div class="block" style="padding:10px;">
   
      <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="size"
        layout="prev, pager, next, jumper" :total="10">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchvalue: "",
      dataList: [],
      totalcount: "",
      loading: true,
      currentPage: 1, //当前页码
      size: 2
    };
  },
  created() {
    // this.getList();
  },
  computed: {
    List() {
      let initV = this.currenPage * 2;
      return this.videoList.splice(initV, 2);
    }
  },
  methods: {
    //登陆状态请求接口
    getshu() {
      this.$http.get("/Login?user=admin&password=12345").then(Response => {
        console.log(response);
      });
    },


    //获取接口数据
    // getList() {
    //   this.$http.get("http://192.168.0.10:8080/api/v1/GetSrc").then(res => {
    //     console.log(res);
        
    //   });
    // },
 
    /* 选择显示条数 */
    sizeChange(sizeIndex) {
      this.loading = true;
      this.pageSize = sizeIndex;
      // this.getList();
    },
    /* 页数 */
    currentChange(pageIndex) {
      this.loading = true;
      this.currentPage = pageIndex;
      // this.getList();
    },
    del() {
    }
  }
};

</script>
<style>
/* video选中样式 */
.vdactive {
  box-shadow: 0px 0px 10px 1px orange;
}
.h5videodiv .fullscreen {
  position: absolute;
  right: 0;
  bottom: 0;
  background: white;
  opacity: 0.1;
  font-size: 10px;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
}

.h5videodiv .fullscreen:hover {
  opacity: 1;
}
.playpause {
  position: absolute;
  width: 8%;
  /* height: 20%; */
  left: 50%;
  top: 50%;
  margin-left: -5%;
  margin-top: -7%;
  opacity: 0;
  transition: opacity 1s;
  cursor: pointer;
}

.h5videodiv:hover .playpause {
  opacity: 1;
}
</style>
