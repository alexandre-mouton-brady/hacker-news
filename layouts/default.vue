<template>
  <div>
    <header>
      <nav class="flex justify-around f4 code pa1">
        <nuxt-link class="link underline-hover" to="/">Home</nuxt-link>
        <nuxt-link class="link underline-hover" to="/new">New</nuxt-link>
        <nuxt-link class="link underline-hover" to="/show">Show</nuxt-link>
        <nuxt-link class="link underline-hover" to="/ask">Ask</nuxt-link>
        <nuxt-link class="link underline-hover" to="/job">Job</nuxt-link>
      </nav>
    </header>
    <nuxt/>
  </div>
</template>

<style>
.link__active {
  text-decoration: underline;
  font-weight: bold;
}
</style>

