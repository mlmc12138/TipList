<template>
  <div>
    <Header></Header>
    <todolist></todolist>
  </div>
</template>

<script>
import todolist from "../components/content/Wait/TodoList.vue";
import Header from "./HomeChildren/Header.vue"
export default {
  name: "",
  components: { todolist, Header },
  setup() {
    return {};
  },
};
</script>
<style scoped>
</style>