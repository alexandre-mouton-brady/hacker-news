<template>
  <li class="pl2">
    <div class="mb4 pa3 comment">
      <div class="mb1">
        <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link>
      </div>
      <p class="f6" v-html="item.text"></p>
    </div>


    <ul class="ml3 list">
      <comment v-for="id in item.kids" :key="id" :id="id" />
    </ul>
  </li>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'comment',

  data() {
    return {
      item: {},
      kids: {}
    }
  },

  props: ['id'],

  beforeMount() {
    axios.get(`item/${this.id}.json`).then(res => {
      this.item = res.data
    })
  },

  mounted() {
    if (this.item.kids) {
      const idToPromise = id => axios.get(`item/${id}.json`)
      const kidPromises = this.item.kids.map(idToPromise)
      Promise.all(kidPromises).then(values => {
        this.kids = values.map(res => res.data)
      })
    }
  }
}
</script>

<style scoped>
.comment {
  background: rgba(0, 0, 0, 0.1);
}
</style>
