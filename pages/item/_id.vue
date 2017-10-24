<template>
  <div class="pa4 code">
    <div class="f4 mb2">
      <span>{{item.title}}</span>
      <template v-if="item.url">
        - <a :href="item.url">{{item.url | hostname }}</a>
      </template>
    </div>
    <div class="f3">
      <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link>
      <span class="i"> - posted {{ item.time | timeSince }}</span>
    </div>

    <ul class="list">
      <comment v-for="id in item.kids" :key="id" :id="id" />
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import comment from '~/components/Comment'

export default {
  async asyncData({ route }) {
    const response = await axios.get(`item/${route.params.id}.json`)

    return { item: response.data }
  },

  components: {
    comment
  }
}
</script>
