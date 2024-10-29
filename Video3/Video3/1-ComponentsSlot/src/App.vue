<template>
<Modal>


    <template #title>
      <h3>Slot ile gelen title</h3>
    </template>


    <template v-slot:content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
      obcaecati quaerat! Ad quod voluptas molestias? Dolorum alias sint modi
      tempore maxime, in vitae ape riam vel est inventore nihil, velit assumenda.
    </template>
  

    <template #default>
      Bu bir default slotdur
    </template>
  
  </Modal>
</template>





<script>
import Modal from "./components/Modal.vue";

export default {
  components: {
    Modal,
  },
  methods: {
    onSave() {
      alert("Saved!!");
    },
  },
};
</script>
