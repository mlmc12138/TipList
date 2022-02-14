<template>
  <div class="search">
    <van-sticky>
      <van-search
        shape="round"
        placeholder="搜索便签"
        background="#f2f3f5"
        v-model="searchValue"
      >
      </van-search>
    </van-sticky>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import {useRouter} from  'vue-router'
import store from "../../stores/index";
export default {
  name: "",
  setup() {
    const router = useRouter()
    const state = reactive({
      searchValue: "",
    });
    watch(
      () => {
        return state.searchValue;
      },
      () => {
        store.setSearchValue(state.searchValue);
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
</style>