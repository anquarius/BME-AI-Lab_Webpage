<template>
  <div class="section-container">
    <div class="maintenence-container">
      <img src="../assets/maintenence_v2.jpeg" />
    </div>
  </div>
  <!-- <div class="container">
    <div class="row">
      <h1>
        Fixed &amp; Transparent Nav
      </h1>
      <p>
        The man in black fled across the desert and the gunslinger followed. 
      </p>
    </div>
  </div> -->
  
  <!-- <div class="container">
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
  </div> -->
</template>

  
<script lang="ts">
import { defineComponent } from 'vue';
import API from '@/api/public';
  
export default defineComponent({
  components: {
  },
  data() {
    let people: any[] = [];

    return {
      people: people,
    }
  },
  methods: {

    getAllPeople() {

      const params = {

      };

      // console.log("getAllPeople()", params);
      
      API.webpage.getAllPeople(params).then((response) => {
        
        console.log("response", response);

        if (response.meta.code == "200.00") {
            this.people = response.data.route_list;
        }

      }).catch((error) => {
        console.log("getAllPeople() error", error);
      });
    }
  },
  mounted() {
    this.getAllPeople();
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
