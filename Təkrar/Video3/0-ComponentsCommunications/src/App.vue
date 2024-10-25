<template>
  <div class="main">
    <div class="title">bu menim esas seh</div>
  </div>
  <UserSection/>
</template>

<script>
import UserSection from "./components/UserSection.vue";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: { 
        userList: ["Yusif", "Fatima", "Zehra", "Karim", "Aysel"],
      },
    };
  },
  methods:{
addNewItem(item){
    this.provideData.userList.push(item)
    // console.log("item nedi",item)
    // console.log("provideData",this.provideData)
}
  },
  provide(){
    return{
        userList: this.provideData.userList,
        addNewItem:this.addNewItem
    }
  }
};
</script>
