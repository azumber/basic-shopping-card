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
						<tr>
							<td></td>
							<td></td>
							<td></td>
                            <td><input type="number" id="tentacles" name="tentacles" min="1" max="100" value=quantity></td>
                            <button class="bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow m-2">X</button>
						</tr>	
					</tbody>
                    <br>
				</table>	
			</div>
            <button @click="fetchData" class="bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow mt-3">Empty the Basket</button>
			<!--/Card-->
      </div>
      <!--/container-->
   </div>
</template>

<script>
import home from './index.vue'

export default {
    name: 'basket',
    data(){
        return{
            productsInBasket: []
        }
    },
    methods:{ 
        fetchData(){
            this.productsInBasket = home.data().basket
            console.log(home.data())
        }
    }
}
</script>

<style scoped>

</style>