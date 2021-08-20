<template>
  <div>
    <nav-bar>
      <template v-slot:center>Detail</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  name: "Detail",
  components: {NavBar},
  setup(){
    const route = useRoute()
    let id = ref(0);
    id.value = route.query.id
    console.log(id)
    return{
      id
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>