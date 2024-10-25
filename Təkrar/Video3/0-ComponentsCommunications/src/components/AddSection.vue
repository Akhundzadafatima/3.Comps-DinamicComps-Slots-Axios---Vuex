<template>
  <button @click="addNewItem(new Date().getTime())">Add</button>
</template>
<script>
export default{
    inject:["addNewItem"],
}
</script>
