<template>
    <div>
        <LazyImageleaf      v-if="this.$route.params.category =='leaf'" @my-select="onChange($event)" />
        <LazyImageleafbase  v-if="this.$route.params.category =='leafbase'" @my-select="onChange($event)" />
        <LazyImagebase      v-if="this.$route.params.category =='base'" @my-select="onChange($event)"/>
        <NuxtLink :to="{name: 'protect-pest', query: { sendurl }}">
          <button class="button is-link">確定送出</button>
       </NuxtLink>
        {{ checkdata }}
        {{ sendurl   }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            category:this.$route.params.category,
            checkdata:{},
            rawurl:[],
            sendurl:[]
        }
    },
    methods: {
        onChange($event){
            this.checkdata = $event;
            let items = this.checkdata;
            this.rawurl = [];
            for (let item in items) {
 
                if(items[item] == true){
                     item = item.split('-');
                     item = item[0];
                     item.trim();
                     console.log(item);
                    this.rawurl.push(item.trim())
                }
            }
           const rawurl =  this.rawurl;
           let sendurl = rawurl.reduce((unique,item)=>unique.includes(item) ? unique : [...unique,item],[])
           this.sendurl = sendurl;

        }
    },
}
</script>