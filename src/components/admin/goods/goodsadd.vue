<template>
<div>
    <el-row>
            <el-col :span="24">
                <div class="abread bt-line">
                    <!-- 使用elementUI中的面包屑导航组件完成 -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>设备管理</el-breadcrumb-item>
                        <el-breadcrumb-item>设备新增</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>

        <!-- 表单元素布局 -->
        <el-row class="martop">
            <el-col :span="19">
                <!-- 定义一个表单 -->
                <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <!-- 定义表单元素- 标题 -->
                    
                    <el-form-item label="设备名">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="厂家" prop="sub_title">
                        <el-input v-model="form.sub_title"></el-input>
                    </el-form-item>
           
                
             
                    <el-form-item label="用户">
                        <el-input v-model="form.goods_no"></el-input>
                    </el-form-item>
                    <el-form-item label="端口号" prop="stock_quantity">
                        <el-input v-model="form.stock_quantity"></el-input>
                    </el-form-item>
                    <el-form-item label="IP地址" prop="market_price">
                        <el-input v-model="form.market_price"></el-input>
                    </el-form-item>
               
                 

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
</div>
</template>
<script>
        // import { quillEditor } from 'vue-quill-editor'

    export default {
        // 注册私有组件
        // components:{
        //     quillEditor
        // },
        data() {
            var checkNumber = (rule, value, callback) => {
                // 非空验证
                if (!value) {
                 return callback(new Error('不能为空'));
                }

                if(isNaN(value)){
                    return callback(new Error('输入的值必须是一个数字'));
                }else{
                 callback();
                }
            };
            return {
                form: {
                    // 代表标题文本框的值
                    title: '',
                    sub_title: '',
                    category_id: '',
                    status: true,
                    is_slide: true,
                    is_top: true,
                    is_hot: true,
                    goods_no:'',
                    stock_quantity:0,
                    market_price:0,
                    sell_price:0,
                    content:'',
                    imgList:[], 
                    fileList:[] 
                },
                rules: {
       
                }
            }
        },
        created() {
           
        },
        methods: {
           
        }
    }
</script>
<style>
    .martop{
        margin-top :10px;
    }
</style>
