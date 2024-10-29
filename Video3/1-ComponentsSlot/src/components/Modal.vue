<template>
  <div class="container">



    <div class="header">
      <h1><slot name="title" /></h1>
    </div>


    <div class="content">
      <slot name="content" />
    </div>


    <div class="footer">
      <div><button>Aç</button></div>
      <div><button class="green" @click="onSave">Saxla</button></div>
      <!-- <div><button class="green">Saxla</button></div> -->
    </div>


    <div class="default"> 
      <slot name="default" />
    </div>



  </div>
</template>










<script>
export default {
  props: ["title", "onSave", "content"],
};
</script>
