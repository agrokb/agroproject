<template>
    <div>
        {{ this.$route.query }}
        <ul id="example-1">
            <li v-for="item in sendurl" v-bind:key="item.id">
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
            sendurl:this.$route.query.sendurl
        }
    },
    created(){
    },
    methods:{

    }
}
</script>
