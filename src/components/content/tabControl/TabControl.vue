<template>
  <div class="tab-control">
    <div class="tab-control-item "
         v-for="(item,i) in title"
         :key="i"
         @click="itemClick(i)"
         :class="{ isActive : i == currentIndex}"
    ><span>{{ item }}</span></div>

  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props,{emit}){
    let currentIndex = ref(0)
    const itemClick = (i) => {
      currentIndex.value = i
      emit('tabClick',i)

    }
    return{currentIndex,itemClick}
  }
}
</script>

<style scoped lang="scss">
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  width: 100%;
  position: sticky;
  top: 44px;
  z-index: 9;
  background-color: #fff;

  .tab-control-item {
    flex: 1;

    span {
      padding: 5px;

    }


  }

  .isActive {
    color: var(--color-tint);

    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }


}

</style>