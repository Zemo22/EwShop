<template>
  <div class="backTop" @click="backTop">

  </div>
</template>

<script>
export default {
  name: "BackTop",
  setup(props,{emit}) {
    const backTop = () => {
      emit('btop');
    }
    return{
      backTop
    }
  }
}
</script>

<style scoped lang="scss" >
  .backTop{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 80px;
    right: 30px;
    z-index: 9;
    box-shadow: 5px 5px 5px #888888;
    border-radius: 50%;
    background: #FCFCFC url('../../../assets/css/icon/up.png') no-repeat center center;
  }
</style>