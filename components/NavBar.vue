<template>
    <div class="sticky top-0 left-0 flex w-screen h-16 bg-customOrang  justify-center items-center">
           <div class="navContent flex h-full min-w-[90%]  max-w-[90%] justify-between items-center">
               <nuxt-link to="/" class="text-customWhite text-3xl ml-10 font-bold">Foodopia</nuxt-link>
    
               <div class="intercation flex justify-between w-[20%] items-center">

                   <div class="search flex relative top-0 ">
                       <div class="searchIcon">
                           <img src="@/static/assets/icons/searchIcon.svg" alt="searchIcon" class="absolute top-2 left-2" >
                       </div>
                        <input type="search" placeholder="Search Recipe..." class="px-10 py-2 rounded-full outline-none border-none text-customOrang focus:shadow-sm focus:shadow-customBlack hover:shadow-sm hover:shadow-customBlack transition-all duration-600  " >
                   </div>
                    <nuxt-link to="" class="">
                        <div class="user w-10 h-10 border-customWhite border-[1px] rounded-full flex justify-center hover:shadow-md hover:shadow-customBlack transition-all duration-600 ">
                            <img src="@/static/assets/icons/userIcon.svg" alt="userIcon"  class="m-auto">
                        </div>
                    </nuxt-link>
               </div>
               

           </div> 
       
        

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>