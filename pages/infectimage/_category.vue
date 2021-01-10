<template>
    <div>
        <LazyImageleaf      v-if="this.$route.params.category =='leaf'" @my-select="onChange($event)" />
        <LazyImageleafbase  v-if="this.$route.params.category =='leafbase'" @my-select="onChange($event)" />
        <LazyImagebase      v-if="this.$route.params.category =='base'" @my-select="onChange($event)"/>
        <NuxtLink :to="{name: 'protect-pest', query: { checkdata }}">
          <button class="button is-link">確定送出</button>
       </NuxtLink>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            category:this.$route.params.category,
            checkdata:[]
           
        }
    },
    methods: {
        onChange($event){
           this.checkdata = $event;
        }
    },
}
</script>