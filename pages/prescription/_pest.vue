<template>
    <div>
        <LazyBls  v-if="this.$route.params.pest =='紋枯病'" />
        <LazyShbl v-if="this.$route.params.pest =='白葉枯病'" />
        <LazyBug  v-if="this.$route.params.pest =='褐飛蝨'" />
         <NuxtLink :to="{name: 'prescription-calculation-cal', params: { 'cal':this.$route.params.pest }}">
               
        </NuxtLink>

    </div>
</template>
<script>
export default {
    
}
</script>
