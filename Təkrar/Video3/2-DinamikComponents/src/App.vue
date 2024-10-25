<template>
  <div class="container">
    <div>
      <input type="text" v-model="test" />
    </div>
    <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
    <button class="red" @click="activeComponent = 'Red'">Red</button>
    <button class="green" @click="activeComponent = 'Green'">Green</button>

    <!-- <Blue v-if="activeComponent == 'blue'" />
    <Red v-if="activeComponent == 'red'" />
    <Green v-if="activeComponent == 'green'" /> -->

    <keep-alive>
    
      <component :is="activeComponent" :test="test"></component>
    </keep-alive>
  </div>
</template>
<script>
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";
import Blue from "./components/Blue.vue";

export default {
  data() {
    return {
      test: "salam",
      activeComponent: "",
    };
  },
  components: {
    Blue,
    Red,
    Green,
  },
};
</script>
