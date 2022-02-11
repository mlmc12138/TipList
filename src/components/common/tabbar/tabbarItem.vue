<!--  -->
<template>
  <div class="tab-bar-item" @click="btnClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- 插槽会被覆盖所以使用 div 来实现样式 -->
    <div :style="activeStyle">
      <slot name="item-txt"></slot>
    </div>
  </div>
</template>

<script>
export default {
 
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    btnClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
</style>
