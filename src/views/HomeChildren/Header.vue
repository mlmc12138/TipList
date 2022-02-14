<template>
  <div>
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value1" :options="option1"/>
      <van-dropdown-item v-model="value2" :options="option2"/>
    </van-dropdown-menu>
  </div>
</template>

<script>
  import {ref} from "vue";

  export default {
    name: "",
    setup() {
      const value1 = ref(0);
      const value2 = ref("a");
      const option1 = [
        {text: "全部分类", value: 0},
        {text: "未分类", value: 1},
        {text: "我的收藏", value: 2},
      ];
      const option2 = [
        {text: "默认排序", value: "a"},
        {text: "按创建时间排序", value: "b"},
        {text: "按大小排序", value: "c"},
      ];

      return {
        value1,
        value2,
        option1,
        option2,
      };
    },
  };
</script>
<style scoped>
  :root {
    --van-dropdown-menu-background-color: #edeef0;
  }
</style>