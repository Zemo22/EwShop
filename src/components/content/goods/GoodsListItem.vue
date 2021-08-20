<template>
  <div class="goods-item">
    <img v-lazy="product.cover_url" alt="">
    <div class="goods-info">
      <p>{{ product.title }}</p>
      <span class="price"><small>$</small>{{ product.price }}</span>
      <span class="collect"><i class="iconfont icon-shoucang1"></i>{{product.collects_count}}</span>
    </div>

  </div>
</template>

<script>
export default {
name: "GoodsListItem",
  props:{
  product: {
    type: Object,
    default(){
      return {}
    }
  }
  }
}
</script>

<style scoped lang="scss" >
.goods-item{
  width: 45%;
  padding-bottom: 40px;
  position: relative;
  img{
    border-radius: 3%;
    width: 100%;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;

    }

    .price{
      color: red;
      margin-right: 20px;

    }
    .collect{
      position: relative;


    }
  }
}
</style>