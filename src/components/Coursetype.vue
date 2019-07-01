<template>
    <div>
        <div class="course">
            <span>课程类型：</span>
            <strong  :class="{active:num1==index}" @click="num1=index" href="###" v-for="(item,index) in course" :key='item'>{{item}}</strong>
        </div>
        <div class="type">
            <span>授课方式：</span>
            <strong :class="{active:num2==index}" @click="num2=index" href="###" v-for="(item,index) in way" :key='item'>{{item}}</strong>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num1:0,
            num2:0,
            course:['全部','声乐','器乐','瑜伽','舞蹈','其他'],
            way:['全部','双师','直播','录播','面授','一对一约课','其他']
        }
    },
}
</script>
<style scoped>
.course,.type {
    height: 46px;
    line-height: 46px;
    border-bottom:1px solid #e8e8e8;
}
.course span,.type span {
    margin-right: 20px;
}
    strong {
        font-weight: 400;
        color:rgba(0, 0, 0, .65);
        font-size: 14px;
        margin-right: 32px;
        display: inline-block;
        line-height: 22px;
        cursor: pointer;
    }
    .active {
        
        /* width:44px;
        height:22px; */
        background-color: #00A94E;
        color: #fff;
        text-align: center;
        border-radius: 4px;
    }
</style>
