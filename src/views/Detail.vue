<template>
  <div class="detail">
    <Header @saveTips="updateTip"></Header>
    <textarea class="title" v-if="data" v-model="data.title"></textarea>
    <textarea class="content" v-if="data" v-model="data.content"></textarea>
  </div>
</template>

<script>
import { ref,toRaw } from 'vue'
import { useRoute } from 'vue-router'
import {Notify} from 'vant'
import axios from 'axios'
import Header from '../components/content/Header/Header.vue'
export default {
  components: { Header },
  name: 'Detail',
  setup() {
    const route = useRoute()
    const baseUrl = "/api"
    let data = ref(null)
    // 方法
    const updateTip = ()=>{
      axios.post(baseUrl+'/updateTip',{
        data: data
      })
      .then(()=> {
        Notify({ type: "success", message: "更改成功" });
      })
    }
    // 网络请求
    axios.post(baseUrl+'/getDetail',{
      data: route.query.id
    })
    .then((res)=>{
      data.value = res.data
    })
    return {
      route,
      data,
      updateTip
    }
  },
}

</script>
<style scoped>
.detail {
  width: 95%;
  margin: 0 auto;
}
.title {
  font-size: 2rem;
}
.content {
  width: 100%;
  height: 80vh;
}
</style>