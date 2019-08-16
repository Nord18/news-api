<template>
  <div id="app">
    <v-app>
      <v-card class="mb-10">
        <v-toolbar color="teal" dark>
          <router-link class="app__title" tag="v-toolbar-title" to="/">News API PWA</router-link>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn @click="selectCategory(category)" text class="d-none d-md-flex" v-for="category in categories" :key="category">{{category}}</v-btn>
            <v-menu left bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" class="d-md-none">
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="category in categories" :key="category">
                  <v-list-item-title @click="selectCategory(category)">{{category}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
      <v-content>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categories: ['general', 'technology', 'science', 'sports', 'business', 'entertainment', 'health']
      }
    },
    methods: {
      selectCategory(category) {
        this.$store.dispatch('fetchData', category);
        this.$store.getters.getTime
      }
    },
    created() {
      this.$store.dispatch('fetchData', 'general');
      setTimeout(() => {
        this.$store.getters.getTime
      }, 1000)
    }
  }
</script>

<style lang="scss">
  @import "~vuetify/dist/vuetify.min.css";
  .app {
    &__title {
      cursor: pointer;
    }
  }
</style>
