<template>
  <div style="width:100%">
    <div class="header">
        <!-- 面包屑 -->
      <div class="title">
        <a-breadcrumb :routes="routes">
          <template slot="itemRender" slot-scope="{route, params, routes, paths}">
            <span v-if="routes.indexOf(route) === routes.length - 1">{{route.breadcrumbName}}</span>
            <router-link v-else :to="`${basePath}/${paths.join('/')}`">{{route.breadcrumbName}}</router-link>
          </template>
        </a-breadcrumb>
        
       
      </div>
      <!-- 下载双师客户端 -->
      <div class="download">
        <a-icon type="download"/>下载双师客户端
      </div>
    </div>

    <div class="coursetab">
        <coursetype></coursetype>
    </div>

    <div class="search">
        <a-input-search placeholder="请输入"  enterButton="搜索"  />
    </div>

    <div class="table">
        <ul class="title">
            <li>课程名称</li>
            <li>课程类型</li>
            <li>授课方式</li>
            <li>主讲老师</li>
            <li>课程章节数量</li>
            <li>课程截止时间</li>
            <li>已授权</li>
            <li>操作</li>
        </ul>
        <ul class="list">
            <li></li>
        </ul>
    </div>
  </div>
</template>
<script>
import coursetype from '@/components/Coursetype'
export default {
  components:{coursetype},
  data() {
    const { lang } = this.$route.params
      return {
        basePath: `/${lang}/components/breadcrumb`,
        routes: [{
          path: 'index',
          breadcrumbName: '已购课程'
        }, {
          path: 'first',
          breadcrumbName: '排课信息'
        }
        ],
      }
    },
};
</script>
<style scoped>
.header {
   margin-bottom: 43px;
    width:100%;
  display: flex;
  justify-content: space-between;
}
.download:hover {
    color:#00A94E;
}
.download i {
    margin-right: 5px;
    cursor: pointer;
}
.search {
    margin:28px 0 32px 0;
    width: 320px;
}
.ant-btn-primary {
    background-color: #00A94E!important;
    border-color:#00A94E!important;
}
.table .title  {
    height: 54px;
    display: flex;
    width: 100%;
    background: #FAFAFA;
    border-radius: 4px 4px 0px 0px;
    padding-left: 16px;
}
.table .title  li {
    color:rgba(0, 0, 0, .85);
    font-size: 14px;
    font-weight: 500;
    line-height: 54px;
    margin-right: 40px;
}
</style>


