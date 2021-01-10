<template>
    <div>
        {{ this.$route.query }}
        <ul id="example-1">
            <li v-for="item in checkDatas" v-bind:key="item.id">
                {{ item }}
                {{ item.id }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
               
            ],
            checkDatas:this.$route.query.checkData
        }
    },
    created(){
        this.getData(checkDatas)
    },
    methods:{
        // getData(data){
        //     data.forEach(e => {
        //         let e = e.trim();
        //         if(e == "白葉枯病"){
                    
        //         } 
        //         if(e == "白葉枯病"){
                    
        //         } 
        //         if(e == "白葉枯病"){
                    
        //         } 
        //     });
        // }
    }
}
</script>
