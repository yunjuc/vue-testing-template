<template>
  <div id="app">
    <h1>Count It</h1>
    <counter/>
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  components: { Counter }
}
</script>

<style>
@import './assets/style.css';

#app {
  color: white;
  padding: 40px;
  height: 100%;
  font-family: Arial;
  text-align: center;
}
</style>
