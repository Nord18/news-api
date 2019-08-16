<template>
  <div>
    <div class="cont">
      <div class="mb-10 item" v-for="(news, index) in newsList" :key="index">
        <div class="inner">
          <v-card-title>{{news.title}}</v-card-title>
          <p class="text--primary text">{{news.description}}</p>
          <p class="text--primary text">{{news.source.name}}</p>
          <v-card-text>{{$store.state.time}}</v-card-text>
          <v-card-actions>
            <v-btn :href="news.url" target="_blank" text color="teal">View</v-btn>
          </v-card-actions>
        </div>
        <div>
          <img class="pic" :src="news.urlToImage" alt="news_pic"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newsList() {
      return this.$store.state.newsList;
    }
  }
}
</script>

<style scoped lang="scss">
.text {
  margin-bottom: 0;
  padding: 0 16px;
}

.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  display: flex;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  justify-content: space-between;
  align-items: center;
  flex-basis: 90%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
}

.pic {
  width: 500px;
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
}
</style>
