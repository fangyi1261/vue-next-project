<template>
  <div class="home">
    <p>{{counter}}</p>
    <button @click="add">click me</button>
    <br/>
    <br/>
    <div class="border-1px"></div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const counter = ref(0)
    const add = () => {
      counter.value += 1
    }
    return {
      counter,
      add
    }
  }
}
</script>

<style scoped lang='less'>
.border-1px {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  /* border: 1px solid #999; */
  position: relative;

  &:after {
    position: absolute;
    top: 0;

  }
}
</style>
