<template>

    <SubjectCard 
        v-for="subs in sub"
        :key="subs._id"
        :subj="subs"
    />

</template>

<script>
import SubjectCard from "@/components/SubjectCard.vue"

export default{
    components:{SubjectCard},
    name:'SubjectCards',
    props:['sub'],
    }


</script>

<style scoped>

    

</style>
