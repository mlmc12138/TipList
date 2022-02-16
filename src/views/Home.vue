<template>
  <div id="Home">
    <Header></Header>
    <Search @goSearch="onSearch"></Search>
    <tip-list :tipList="tipComputed" @deleteTip="removeTip"></tip-list>
    <div class="addTip">
      <img src="../assets/img/addTip.svg" @click="addTip" alt="" />
    </div>
    <div style="height: 44px"></div>
  </div>
</template>

<script>
import { ref, reactive, computed, toRefs, onMounted, toRaw } from "vue";

// 组件
import TipList from "./HomeChildren/TipList.vue";
import Search from "./HomeChildren/Search.vue";
import Header from "./HomeChildren/Header.vue";

// 方法
import { getTipList } from "../network/home";
import { useRouter } from "vue-router";
import store from "../stores/index";
import axios from "axios";
import debouce from "../hock/fangdong"
export default {
  name: "Home",
  components: { TipList, Search, Header },
  setup(props) {
    let value = ref(null);
    const state = reactive({
      // 列表数据
      result: [],
      // 搜索结果
      nullResult: [],
      // searchValue: store.state,
      // 通过搜索框的值去筛选后的新列表数据
      tipComputed: computed(() => {
        // 判断是否输入框是否输入了筛选条件，如果没有返回原始的 news 数组
        if (store.state.searchValue) {
          return state.result.filter((item) => {
            if (item.title.indexOf(store.state.searchValue) >= 0) {
              return item;
            }
          });
        } else {
          return state.result;
        }
      }),
    });
    const onSearch = ()=> {
       debouce(getList(),500)
    }
    const baseUrl = "/api";
    const getList = () => {
      getTipList().then((res) => {
        state.result = res.data;
      });
    };
    // 首页加载时执行
    onMounted(() => {
      getList();
    });

    // 路由相关
    const router = useRouter();
    const addTip = () => {
      router.push({
        path: "/addtips",
        query: {
          id: value,
        },
      });
    };

    const removeTip = (index) => {
      axios
        .post(baseUrl + "/deleteTip", {
          data: index,
        })
        .then(() => {
          getList();
        });
    };
    return {
      getTipList,
      addTip,
      removeTip,
      value,
      ...toRefs(state),
      onSearch
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