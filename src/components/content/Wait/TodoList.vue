<template>
  <div class="todo-list">
    <img
      src="../../../assets/img/addTip.svg"
      class="add"
      v-if="tipList.length == 0"
      alt=""
      @click="addList"
    />
    <img
      class="null"
      v-if="!isShow"
      src="../../../assets/img/null.jpg"
      alt=""
    />
    <div class="addList" v-if="isShow">
      <input type="text" v-model="newList" />
      <van-button size="small" icon="plus" type="primary" @click="addEvent" />
    </div>
    <div class="list">
      <label v-for="(item, index) in tipList" :key="index">
        <input type="checkbox" /><span>{{ item }}</span> 
      </label>
    </div>
    <div style="height: 44px"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "",
  setup() {
    const data = reactive({
      isShow: false,
      newList: "",
      tipList: [],
    });
    function addEvent() {
      data.tipList.push(data.newList);
    }
    function addList() {
      data.isShow = true;
    }
    return {
      ...toRefs(data),
      addEvent,
      addList,
    };
  },
};
</script>
<style scoped>
.todo-list {
  height: 95vh;
  background-color: #f2f3f5;
}
.add {
  width: 15%;
  position: fixed;
  bottom: 10%;
  right: 2%;
}
.null {
  width: 100%;
}
.addList {
  width: 90%;
  padding-top: 20%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
}
.addList input {
  width: 88%;
  border-radius: 5rem;
  border: none;
  padding-left: 1rem;
}
.list {
  width: 90%;
  margin: 5% auto;
}
.list label {
  display: block;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 2rem;
}
.list label input {
  width: 25px;
  height: 25px;
  text-indent: 20px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.1s;
  transition: background-color ease 0.1s;
  margin-right: 1rem;
}
.list label input:checked {
  text-decoration: line-through;
  background: #1673ff;
}
.list label input:checked + span{
  color: gainsboro;
}
.list label input:checked::after {
  content: "";
  top: 5px;
  left: 5px;
  position: absolute;
  background: transparent;
  border: #fff solid 2px;
  border-top: none;
  border-right: none;
  height: 6px;
  width: 10px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>