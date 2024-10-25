<template>
  <Modal>
    <template #title>
      <div class="title">Fatime</div>
      <hr />
    </template>


    <template #content>
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        corporis nisi, molestias sint quam incidunt velit eaque labore itaque
        dolorum dolor omnis animi tempora quo quaerat! Natus quas accusantium
        neque?
      </div>
      <hr />
    </template>


    <template #footer>
      <div class="footer" >
        <button>Add</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default{
    components:{
        Modal
    }
}
</script>