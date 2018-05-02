<template>
  <div class="layout">
    <el-row>
      <!-- 左侧导航部分 -->
      <el-col :span="leftCol">
        <div class="layout menu">
          <img src="../../../static/imgs/yun.png" alt="" width="100%">
          <div style="height:94px" v-if="isCollapse"></div>
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
    
          <!-- 设备库 -->
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-message"></i><span v-if="!isCollapse">云服务</span></template>
            <el-menu-item-group>
              <router-link to="/admin/one"><el-menu-item index="5-1"><i class="el-icon-star-off"></i>设备库</el-menu-item></router-link>                
                        <el-menu-item index="5-2"><i class="el-icon-star-off" ></i>厂家管理</el-menu-item>
              <el-menu-item index="5-3"><i class="el-icon-star-off"></i>用户管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
       
        </el-menu>
        </div>
      </el-col>
      <!-- 右侧部分 -->
      <el-col :span="rightCol">
        <!-- 顶部 -->
        <div class="topbg">
        <el-row>
          <el-col :span="1">
            <i class="layout el-icon-menu area" @click="toogle"></i>
          </el-col>
          <el-col :span="23">
            <span>欢迎，QGMan登录</span>
            <el-dropdown>
              <el-button type="primary">
                更多功能<i class="el-icon-caret-bottom el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>待添功能</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <router-link to="/login"><el-dropdown-item>注销登录</el-dropdown-item></router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        </div>
        <el-row>
          <el-col>
            <!-- 内容 -->
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse:false,//控制左侧展开与收缩
      leftCol:4,//左侧默认占列
      rightCol:20,//右侧默认占列
    };
  },
  methods: {
    toogle(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse){
        this.leftCol = 1;
        this.rightCol = 23;
      }else{
        this.leftCol = 4;
        this.rightCol = 20;
      }
    }
  }
};
</script>
<style scoped>
.menu h1 {
  color: #fff;
  font-size: 26px;
  padding: 30px 0;
  text-align: center;
}
</style>
