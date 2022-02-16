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
import store from "../../stores/index";
export default {
  name: "",
  setup(props,{emit}) {
    const state = reactive({
      searchValue: "",
    });
    watch(
      () => {
        return state.searchValue;
      },
      () => {
        store.setSearchValue(state.searchValue);
        emit("goSearch")
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