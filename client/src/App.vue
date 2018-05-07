<template>
  <div id="app">
    <!-- vuetify must have v-app -->
    <v-app>
      <app-header></app-header>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
