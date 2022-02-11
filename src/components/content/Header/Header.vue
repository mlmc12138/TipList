<template>
  <div class="header">
    <img src="../../../assets/img/return.svg" @click="backHome" alt="">
    <img src="../../../assets/img/save.svg" @click="saveTip" alt="">
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: '',
  setup(props,{emit}) {
    const router = useRouter()
    // 方法
    const backHome = function() {
      router.go(-1)
    }
    const saveTip = function() {
      emit('saveTips')
    }
    return {
      backHome,
      saveTip
    }
  },
}

</script>
<style scoped>
.header {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}
.header img {
  width: 10%;
}
</style>