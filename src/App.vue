<template>
  <div>
    <homeWeb></homeWeb>
  </div>
</template>

<script>
import homeWeb from './components/HomeWeb.vue'
export default {
  name: 'app',
  components: {
    homeWeb
  }
}
</script>

<style>
body{
  margin: unset;
}
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}
</style>
