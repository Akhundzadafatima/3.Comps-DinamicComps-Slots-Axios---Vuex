<template>
  <div class="container">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste ipsum veritatis dolorem quas eligendi, aliquam aperiam eaque autem accusantium alias maxime? Ad nisi maxime repellendus qui aut aperiam debitis!</p>
<p>{{ $store.state.person }}</p>
<p>{{ $store.state.permissions }}</p>
<ul>
  <li v-for="permission in $store.state.permissions" :key="person">{{ permission }}</li>
</ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }, 
  created(){
    console.log(this.$store.state.person);
    console.log(this.$store.state.theme);
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
