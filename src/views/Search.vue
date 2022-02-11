<template>
  <div class="search">
    <van-sticky>
      <van-search
        shape="round"
        placeholder="搜索便签"
        background="#f2f3f5"
        @search="onSearch"
      >
      </van-search>
    </van-sticky>
    <h1>{{route.query.value}}</h1>
  </div>
</template>

<script>
import { useRouter,useRoute } from "vue-router";
export default {
  name: "",
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
};
</script>
<style scoped>
</style>