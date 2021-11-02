<template>
    <div>
        <div id="card" class="m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full w-48 mt-5 ml-3 p-5" :src="imgSrc" style="float: left; width:auto; heigth: auto; object-fit: cover; overflow: none;">
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ category }}</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ productName }}</a>
                    <p class="mt-2 text-gray-500">{{ desc }}</p>
                    <div class="flex justify-between">
                        <p class="mt-3 px-1 py-1 block text-lg leading-tight font-medium text-black hover:underline"><span>$</span>{{ price }}</p>
                        <button class="btn-indigo">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['productName','imgSrc','price','category','desc'],
    data (){
        return{
            
        }
    }
}
</script>

<style scoped>


</style>