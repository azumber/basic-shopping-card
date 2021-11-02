<template>
  <div>
    <Navbar/>
    <div class="grid grid-rows-3 grid-flow-col">
      <Card 
      class="pt-2 -m-3.5"
      v-for="item in this.productList.Products" 
      :key="item.id" 
      :imgSrc="item.img" 
      :productName="item.productName"
      :price="item.price"
      :desc="item.description"
      :category="item.category"
      />
    </div>
  </div>
</template>

<script>
import Products from '../static/Products.json'

export default {
  data(){
    return{
      productList: Products
    }
  },
  methods:{
    getProducts() {
      console.log(this.productList.Products[0])
    }
  },
}
</script>

<style scoped>

</style>
