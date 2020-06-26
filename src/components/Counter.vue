<template>
  <div>
    <button @click="add">+</button>
    <span>{{count}}</span>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    add() {
      this.count++
    },
    sub() {
      this.count--
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
}
</style>
