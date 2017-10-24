<template>
  <div>
    <h1>Show stories</h1>

    <Items />
  </div>
</template>

<script>
import Items from '~/components/Items'

export default {
  components: {
    Items
  },
  async fetch({ store }) {
    await store.dispatch('LOAD_ITEMS', 'showstories.json')
  }
}
</script>

