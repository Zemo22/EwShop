<template>
  <div class="home">
    {{banner}}
  </div>
</template>

<script>
import {onMounted,ref} from 'vue'
import {getHomeAllData,getBanner} from '../network/home'
export default {
  name: 'home',
  setup(){
    const banner = ref([])
   onMounted(() => {
     getHomeAllData().then(res => {
       console.log(res)
       banner.value = res.slides;
     })
   })

    return {banner}
  },
  components: {
  }
}
</script>
<style scoped>

</style>
