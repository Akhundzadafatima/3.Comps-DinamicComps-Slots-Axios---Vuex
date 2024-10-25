<template>
  <div class="inpBtn">
    <ListSection/>
    <AddSection/>

  </div>
</template>

<script>
import ListSection from "@/components/ListSection.vue";
import AddSection from "./AddSection.vue";
export default {
  components: {
    ListSection,
    AddSection
  },
};
</script>
