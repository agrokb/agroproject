<template>
    <div>
        <LazyImageleaf  v-if="this.$route.params.category =='leaf'"/>
        <LazyImageleafbase  v-if="this.$route.params.category =='leafbase'"/>
        <LazyImagebase v-if="this.$route.params.category =='base'"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            category:this.$route.params.category
        }
    },
}
</script>