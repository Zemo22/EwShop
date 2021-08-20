<template>
 <div>
   <nav-bar>
     <template v-slot:center>ShopCart</template>
   </nav-bar>
 </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "ShopCart",
  components: {NavBar}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>