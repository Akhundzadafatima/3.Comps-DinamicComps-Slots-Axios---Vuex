<template>
  <main>
    <div class="container">
      <h3>Alış-veriş listi</h3>
      <hr />
      <input
        type="text"
        placeholder="Nə alacaqsınız?"
        @keydown.enter="onSave"
      />

      <ul>
        <li v-for="item in itemList" :key="item">
          <span>{{ item.title }}</span>
          <button class="delete" @click="onDelete(item)" >Sil</button>
        </li>
        <small v-if="itemList.length>0">{{ itemList.length }} ədəd məhsul var</small>
        <small class="any" v-else>Heç nə əlavə olunmayıb.</small>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList:[]
    };
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        createdTime: new Date(),
        complated: false,
      };
      axios
      .post("http://localhost:3000/items", saveObject)
      .then((save_response) => {
        console.log(save_response);
        e.target.value=""
        this.itemList.push(save_response.data)
      });
    },


    onDelete(item){
axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response=>{
  console.log(delete_response);
  this.itemList=this.itemList.filter(i=>i.id !== item.id)
  
})
    }
  },


  mounted(){
    axios
    .get("http://localhost:3000/items")
    .then((item_response) => {
      console.log(item_response);
      this.itemList=item_response.data || []
    });

  },
};
</script>
