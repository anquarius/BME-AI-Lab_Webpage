<template>
  <div class="section-container">
    <div class="maintenence-container">
      <img src="../assets/maintenence_v2.jpeg" />
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/_HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
});
</script>

<style scoped lang="scss">
.home-container {
  padding-top: 150px;
  padding-bottom: 150px;
  padding-left: 25px;
  padding-right: 25px;
}
</style>
