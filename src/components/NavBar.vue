<template>
  <div class="nav-container" :class="{ 'solid-nav': isSolid, 'hidden-nav': isHidden, }" ref="navContainer">
    <AccessBar />
    <div class="nav-row">
      <!-- <div class="nav-logo">
        <router-link to="/">Home</router-link>
      </div> -->
        <router-link to="/">Home</router-link> |
        <!-- <img alt="BME AI Lab logo" src="../assets/logo-bme-ai-lab.jpg" /> -->
        <!-- <router-link to="/about">About</router-link> | -->
        <router-link to="/people">People</router-link> |
        <router-link to="/research">Research</router-link> |
        <router-link to="/partnership">Partnership</router-link> |
        <router-link to="/contact">Contact</router-link> |
    </div>
  </div>
</template>

<script lang="ts">
import { isString } from '@vue/shared';
import { defineComponent, ref } from 'vue';
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, reactive } from 'vue';
import AccessBar from './AccessBar.vue';

export default defineComponent({
  // setup() {
  //   const state = reactive({

  //   });

  //   // onMounted() {
  //   //   window.addEventListener
  //   // }
  // },
  components: {
    AccessBar,
  },
  data() {
    // let navHeight = ref<number | undefined>(undefined);
    // let navContainer = ref<HTMLDivElement>();
    // const position = ref<number>();
    
    return {
      // scrollPotision: window.top?.scrollY,
      position: 0,
      navContainer: new HTMLDivElement(),
      isSolid: false,
      isHidden: false,
    }
  },
  methods: {
    handleScroll(event: Event) {
      const currentPosition = window.top?.scrollY;
      const navHeight = this.navContainer?.clientHeight;
      console.log("Solid", (navHeight as number)-80, currentPosition);
      console.log("Hidden", this.position, currentPosition);

      if (currentPosition !== undefined && navHeight) { 
        if (currentPosition > 0 && currentPosition > this.position) {
          console.log("hidden!!")
          this.isHidden = true;
        } else {
          console.log("appear!!")
          this.isHidden = false;        
          if (currentPosition >= (navHeight - 80)) {
            console.log("solid!!")
            this.isSolid = true;
          } else {
            console.log("transparent!!")
            this.isSolid = false;
          }
        }
        this.position = currentPosition;
      }

    },
  },
  mounted() {
    console.log("Nav Bar mounted");
    // console.log(typeof(thi))
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  $refs: {
    navContainer: HTMLDivElement,
  }
})
</script>

<style scoped lang="scss">
.nav-container {
  height: 130px;
  width: 100%;
  position: fixed;
  color: rgb(0, 0, 0);
  letter-spacing: 0.025em;
  transition: background-color 0.2s linear;
  // background-color: rgb(128, 187, 128);
  
  &.solid-nav {
    background-color: rgb(128, 187, 128);
    transition: background-color 0.2s linear;
  }

  &.hidden-nav {
    top: -130px;
  }
  
  .nav-row {
    width: 100%;
    text-transform: uppercase;
    text-align: center;

    // max-width: 1200px;
    margin: 0 auto;
    // padding-right: 25px;
    // padding-left: 25px;
    // padding-top: 20px;
    position: absolute;
    bottom: 0;
    
    // .nav-logo {
    //   display: inline-block;
    //   font-weight: 900;
    // }
  
    a {
      padding-left: 20px;
      font-weight: bold;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
        transition: opacity .125s linear;
      }

      &:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}

// a {
//   display: inline-block;
//   list-style: none; 
//   text-decoration: none;
//   color: rgb(0, 0, 0);
//   transition: opacity .125s linear;
  
//   &:hover {
//     opacity: 0.5;
//     cursor: pointer;
//     transition: opacity .125s linear;
//   }
  
//   &:visited {
//     color: inherit;
//     text-decoration: none;
//   }
// }
</style>
