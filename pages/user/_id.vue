<template>
  <div class="pa4 code">
    <p>{{ user.id }} has been a user for {{ user.created | timeSince }}</p>
    <p>Karma count: {{ user.karma }}</p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData({ route }) {
    const response = await axios.get(`/user/${route.params.id}.json`)

    return { user: response.data }
  }
}
</script>

