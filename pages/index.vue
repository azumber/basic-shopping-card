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
      card:{
        id: 0,
        productName: "",
        category: "",
        price: 0,
        quantity: 0
      },
      basket: [],
      productList: Products,
    }
  },
  methods:{
    addToList(id, name, category, price, quantity){
      this.card = { id: id, productName: name, category: category, price: price, quantity: quantity }
      if (this.card.id == 1) {
        let product1 = JSON.stringify(this.card)
        localStorage.setItem('item1',product1)
      } 
      else if (this.card.id == 2) {
        let product2 = JSON.stringify(this.card)
        localStorage.setItem('item2',product2)
      } 
      else if (this.card.id == 3){
        let product3 = JSON.stringify(this.card)
        localStorage.setItem('item3',product3)
      }
      else if (this.card.id == 4){
        let product4 = JSON.stringify(this.card)
        localStorage.setItem('item4',product4)
      }
      else if (this.card.id == 5){
        let product5 = JSON.stringify(this.card)
        localStorage.setItem('item5',product5)
      }
      else if (this.card.id == 6){
        let product6 = JSON.stringify(this.card)
        localStorage.setItem('item6',product6)
      }
      this.basket.push({ id: id, productName: name, category: category, price: price, quantity: quantity })
      console.log(this.basket)
    }
  },
  mounted(){
    localStorage.clear()
  }
}
</script>

<style scoped>

</style>
