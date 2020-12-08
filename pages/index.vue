<template>
<div class="container m-5">
    <h1 class="title">水稻病蟲害警報</h1>
    <div class="alarm">
        {{ riceAlarmDatas}}
    </div>
    <h1 class="title">天氣資訊</h1>
        {{  postion.latitude  }}
        {{  postion.longitude }}
    <h1 class="title">線上診斷</h1>
</div>
</template>

<script>
import axios from '../.nuxt/axios';

export default {
     data() {
         return {
             riceAlarmDatas: '',
             postion:''
         }
     },
     created(){
       this.riceAlarmData()
       navigator.geolocation.getCurrentPosition(this.positionSuccess)
     },
     methods:{
         riceAlarmData(){
            this.$axios.$get(`http://localhost:3000/api/data.coa.gov.tw/Service/OpenData/EIR3010304.aspx`).then((res) => {     
              this.riceAlarmDatas = res
           })
         },
         positionSuccess(pos){
                this.postion = pos.coords;
         }
     },
     
}
</script>

<style>

</style>
