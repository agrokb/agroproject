<template>
    <div>
        <LazyImageleaf      v-if="this.$route.params.category =='leaf'" @my-select="onChange($event)" />
        <LazyImageleafbase  v-if="this.$route.params.category =='leafbase'" />
        <LazyImagebase      v-if="this.$route.params.category =='base'"/>
        {{ checkData[1] }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            category:this.$route.params.category,
            checkData:[]
        }
    },
    methods: {
        onChange($event){
            this.checkData = $event
        }
    },
}
</script>