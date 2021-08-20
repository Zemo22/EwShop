<template>
  <div>
    <nav-bar>
      <template v-slot:center>Category</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
export default {
name: "Category",
  components: {NavBar}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>