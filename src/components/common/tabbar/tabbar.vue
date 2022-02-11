<!--  -->
<template>
  <div id="tab-bar">
    <tabbar-item path="/home" activeColor="skyblue">
      <template v-slot:item-icon><img src="../../../assets/img/index.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="../../../assets/img/index-active.svg" alt=""></template>
      <template v-slot:item-txt>笔记</template>
    </tabbar-item>
    <tabbar-item path="/wait" activeColor="skyblue">
      <template v-slot:item-icon><img src="../../../assets/img/wait.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="../../../assets/img/wait-active.svg" alt=""></template>
      <template v-slot:item-txt>代办</template>
    </tabbar-item>
  </div>
</template>

<script>
import tabbarItem from "./tabbarItem.vue";
export default {
  components: { tabbarItem },
  setup() {},
};
</script>

<style  scoped>
#tab-bar {
  display: flex;
  width: 100%;
  background-color: #f2f3f5;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
#tab-bar img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  /* 去除图片下默认的3像素 */
  vertical-align: middle;
}
</style>
