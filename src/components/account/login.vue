<template>
    <div id="app">
        <div class="box">
            <div class="center">
                <h2>最优秀的平台</h2>
                <div class="sign">                   
                    <header>不舍科技云</header>
                    <div class="image">
                        <img src="../../../static/imgs/header.png" alt="">
                    </div>
                    <div class="ipt1">
                        <!-- <img src="../../../static//imgs/user.png" alt=""> -->
                        <input  onfocus='if(this.value=="QGMan"){this.value="";}; ' onblur='if(this.value==""){this.value="QGMan";};' class="user" type="text" name="userName">
                    </div>
                    <div class="ipt2">
                        <input class="paw" type="password" name="password">
                    </div>
                    <footer>
                        <h1>Login</h1>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style>
  @import "../../../static/css/login.css"
</style>