<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail,Addtips,Home">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <tabbar v-if="route.meta.isShow"></tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Tabbar from "./components/common/tabbar/tabbar.vue";
export default defineComponent({
  name: "App",
  components: { Tabbar },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>

<style scoped>
@import url("./assets/css/base.css");
</style>
