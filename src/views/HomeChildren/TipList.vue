<template>
  <div id="TipList">
    <ul>
      <li v-for="(item, id) in tipList" :key="id" @click="showDetail(id)">
        <van-swipe-cell>
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </div>
          <template #right>
            <div class="delete" @click="deleteTip(id)">
              <p>删除</p>
            </div>
          </template>
        </van-swipe-cell>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter,useRoute } from "vue-router";
export default {
  name: "TipList",
  props: {
    tipList: {
      type: Object,
      default: {},
    },
  },
  setup(props,{emit}) {
    const router = useRouter();
    const baseUrl = "/api";
    const showDetail = function (index) {
      router.push({
        path: "/detail",
        query: {
          id: index,
        },
      });
    };
    const deleteTip = (id) => {
      emit("deleteTip",id)
    };
    return {
      showDetail,
      deleteTip,
    };
  },
};
</script>
<style scoped>
#TipList {
  width: 95%;
  margin: 1vh auto;
}
ul {
  width: 90%;
  margin: 0 auto;
  column-count: 2;
  column-gap: 5vw;
}
ul li {
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 1vh;
  /* 避免元素内部分裂 */
  -webkit-column-break-inside: avoid;
  padding: 3%;
}
.delete-button {
  height: 100%;
}
.delete {
  width: 20px;
  height: 100%;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>