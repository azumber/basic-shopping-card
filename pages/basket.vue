<template>
   <div>
       <Navbar/>
      <!--Container-->
      <div class="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2 m-10"> 
			<!--Card-->
			 <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
				<table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
					<thead>
						<tr>
							<th data-priority="1">Product Name</th>
							<th data-priority="2">Category</th>
							<th data-priority="3">Price</th>
                            <th data-priority="4">Quantity</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item of productsInBasket" :key="item.id">
							<td>{{ item.productName }}</td>
                            <td>{{ item.category }}</td>
                            <td>{{ item.price }}</td> 
                            <td>{{ item.quantity }}</td>
                            <button @click="addOneMore(item.id)" class="bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-2 border border-gray-200 rounded shadow m-2">+</button>
                            <button @click="removeOne(item.id)" class="bg-white hover:bg-red-100 text-red-800 font-semibold py-2 px-2 border border-gray-200 rounded shadow m-2">-</button>
                            <button @click="removeItem(item.id)" class="bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow m-2">X</button>
						</tr>	
					</tbody>
                    <br>
				</table>	
			</div>
            <button @click="removeAll" class="bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow mt-3">Empty the Basket</button>
			<!--/Card-->
      </div>
      <!--/container-->
   </div>
</template>

<script>

export default {
    name: 'basket',
    data(){
        return{
            realPrice: 0,
            productsInBasket: []
        }
    },
    methods:{ 
        removeAll(){
            this.productsInBasket = null
        },
        addOneMore(itemID){
            this.productsInBasket.forEach(product => {
                if (product.id == itemID) {
                    product.quantity += 1
                    this.realPrice = product.price 
                    product.price += this.realPrice
                }
            })
            console.log(itemID)
        },
        removeOne(itemID){
            let value = 0
            this.productsInBasket.forEach(product => {
                if (product.id == itemID && product.quantity == 1){
                    this.productsInBasket = this.productsInBasket.filter(x => x.id !== product.id)
                }
                if (product.id == itemID && product.quantity > 1) {
                    this.realPrice = product.price
                    product.quantity -= 1
                    product.price = this.realPrice + product.price
                }
            })
        },
        removeItem(itemID){
            this.productsInBasket = this.productsInBasket.filter(product => product.id !== itemID)
        }
    },
    mounted(){
        if (localStorage.getItem('item1') != null) {
            this.productsInBasket.push(JSON.parse(localStorage.getItem('item1')))
        }
        if (localStorage.getItem('item2') != null) {
            this.productsInBasket.push(JSON.parse(localStorage.getItem('item2')))
        }
        if (localStorage.getItem('item3') != null) {
            this.productsInBasket.push(JSON.parse(localStorage.getItem('item3')))
        }
        if (localStorage.getItem('item4') != null) {
            this.productsInBasket.push(JSON.parse(localStorage.getItem('item4')))
        }
        if (localStorage.getItem('item5') != null) {
            this.productsInBasket.push(JSON.parse(localStorage.getItem('item5')))
        }
        if (localStorage.getItem('item6') != null) {
            this.productsInBasket.push(JSON.parse(localStorage.getItem('item6')))
        } 
        
    }
}
</script>

<style scoped>

</style>