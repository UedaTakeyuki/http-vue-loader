<template>
  <v-app>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
//import Home from '@/views/Home.vue'
import httpVueLoader from "httpVueLoader";
const Home = httpVueLoader('/src/views/Home.vue')
export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
