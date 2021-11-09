<template>
  <div>
    <Navbar :productCount=this.basket.length :currentBasket=this.basket id="navb"/>
    <div class="grid grid-rows-3 grid-flow-col mt-5">
      <Card 
      id="shop-card"
      class="pt-2 -m-3.5"
      v-for="item in this.productList.Products" 
      :key="item.id" 
      :imgSrc="item.img" 
      :productName="item.productName"
      :price="item.price"
      :desc="item.description"
      :category="item.category"
      @add="addToList(item.id, item.productName, item.category, item.price, item.quantity)"
      />
    </div>
  </div>
</template>

<script>
import Products from '../static/Products.json'

export default {
  data(){
    return{
      basket: [],
      productList: Products,
    }
  },
  methods:{
    addToList(id, name, category, price, quantity){
      this.basket.push({ id: id, productName: name, category: category, price: price, quantity: quantity })
      console.log(this.basket)
    }
  }
}
</script>

<style scoped>

</style>
