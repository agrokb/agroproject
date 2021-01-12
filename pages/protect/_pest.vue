<template>
    <div>
        <h3 class="subtitle">可能的病蟲害</h3>
        <ul>
            <li v-for="(item,index) in rawUrl">
                <NuxtLink :to="{name: 'prescription-pest', params: { pest:item.pest }}">{{ item.pest}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rawUrl:{}
        }
    },
    created(){
        this.createArray()
    },
    methods:{
        createArray(){
            let dataArray = this.$route.query.sendurl;
            dataArray.forEach((value, index) => {
                this.rawUrl[index] = {"pest":value}
            })
        }
    },
}
</script>
