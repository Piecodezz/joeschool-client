<template>
    <nav>
          <NavBar />
    </nav>
    <router-view/>
 </template>

<script>
import NavBar from "@/components/Nav-bar.vue"

export default {
     components:{
          NavBar,
     }
}
</script>

<style>

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

</style>
