<template>
  <div>
    <nav-bar>
      <template v-slot:center>Profile</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "Profile",
  components: {NavBar}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>