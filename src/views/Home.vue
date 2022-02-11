<template>
  <div id="Home">
    <van-sticky>
      <van-search
        shape="round"
        placeholder="搜索便签"
        background="#f2f3f5"
        @search="onSearch"
        v-model="value"
      />
    </van-sticky>
    <tip-list :tipList="result" @deleteTip="removeTip"></tip-list>
    <div class="addTip">
      <img src="../assets/img/addTip.svg" @click="addTip" alt="" />
    </div>
    <div style="height: 44px"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import TipList from "./HomeChildren/TipList.vue";
import { getTipList } from "../network/home";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "Home",
  components: { TipList },
  setup(props) {
    let value = ref(null);
    let result = ref(null);
    const baseUrl = "/api";
    getTipList().then((res) => {
      result.value = res.data;
    });
    const router = useRouter();
    const addTip = () => {
      router.push({
        path: "/addtips",
        query: {
          id: value,
        },
      });
    };
    const onSearch = () => {
      router.replace({
        path: "/search",
      });
    };
    const removeTip = (index) => {
      axios
        .post(baseUrl + "/deleteTip", {
          data: index,
        })
        .then(() => {
          getTipList().then((res) => {
            result.value = res.data;
          });
        });
    };
    return {
      result,
      getTipList,
      addTip,
      onSearch,
      value,
      removeTip,
    };
  },
};
</script>
<style scoped>
#Home {
  background-color: #f2f3f5;
}
.addTip img {
  position: fixed;
  right: 2%;
  bottom: 10%;
  width: 15%;
}
</style>