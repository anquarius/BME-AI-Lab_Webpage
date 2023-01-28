<template>
    <div class="container">
      <div class="row">
        <h1>
          People Detial Page
        </h1>
        <p>
         People Id:
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
    // import { Google }
    // import google_apikeys from "../../api/googleAuth2.json";

    // const client = new google.auth.OAuth2(
    //   google_apikeys.web.client_id,
    //   google_apikeys.web.client_secret,
    //   google_apikeys.web.redirect_uris[0]
    // );
    
  export default defineComponent ({
    data() {
      return ({
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
  