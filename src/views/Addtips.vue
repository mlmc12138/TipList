<template>
  <div class="addTip">
    <Header @saveTips="addTip"></Header>
    <textarea class="title" placeholder="标题" v-model="data.title"></textarea>
    <textarea
      class="content"
      placeholder="内容"
      v-model="data.content"
    ></textarea>
  </div>
</template>

<script>
import Header from "../components/content/Header/Header.vue";
import { Notify } from "vant";
import axios from "axios";
export default {
  name: "Addtips",
  components: { Header },
  setup() {
    const baseUrl = "/api";
    const data = {};
    const addTip = () => {
      axios
        .post(baseUrl + "/addTip", {
          data: data,
        })
        .then(() => {
          Notify({ type: "success", message: "添加成功" });
        });
    };
    return {
      addTip,
      data,
    };
  },
};
</script>
<style scoped>
.addTip {
  width: 95%;
  margin: 0 auto;
}
.title {
  border: none;
  font-size: 2rem;
  background-color: #f2f3f5;
}
.content {
  border: none;
  width: 100%;
  height: 80vh;
  background-color: #f2f3f5;
}
</style>