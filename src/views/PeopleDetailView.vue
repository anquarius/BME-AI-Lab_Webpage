<template>
    <div class="container">
      <div class="row">
        <h1>
          People Detial Page
        </h1>
        <p>
         People Id: {{ id }}
        </p>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <h1>
          Section
        </h1>
        <p>
          The man in black fled across the desert and the gunslinger followed. 
        </p>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <h1>
          Section
        </h1>
        <p>
          The man in black fled across the desert and the gunslinger followed. 
        </p>
      </div>
    </div>
  </template>
  
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from '@/components/_HelloWorld.vue'; // @ is an alias to /src
  
  export default defineComponent({
    data() {
      return ({
        id: this.$route.params.id,
      })
    },
  })
  </script>
    
  
  <style scoped lang="scss">
  .container {
    padding-top: 150px;
    padding-bottom: 150px;
    padding-left: 25px;
    padding-right: 25px;
  }
  
  .row {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  