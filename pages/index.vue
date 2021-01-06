<template>
<div class="container m-5">
    <h4 class="title is-4">台梗九號病蟲害警報</h4>
    <div class="alarm">
        請選擇縣市
    </div>
    <div class="select">
        <select v-model="selected" @change="onChange($event)">
            <option disabled value="">Please select one</option>
            <option value = "新北市">新北市</option>
            <option value = "桃園縣">桃園縣</option>
            <option value = "新竹縣">新竹縣</option>
            <option value = "新竹市">新竹市</option>
            <option value = "苗栗縣">苗栗縣</option>
            <option value = "銅鑼鄉">銅鑼鄉</option>
            <option value = "頭份鎮">頭份鎮</option>
            <option value = "公館鄉">公館鄉</option>
            <option value = "臺中市">臺中市</option>
            <option value = "彰化縣">彰化縣</option>
            <option value = "溪州鄉">溪州鄉</option>
            <option value = "二水鄉">二水鄉</option>
            <option value = "田中鎮">田中鎮</option>
            <option value = "南投縣">南投縣</option>
            <option value = "名間鄉">名間鄉</option>
            <option value = "竹山鎮">竹山鎮</option>
            <option value = "雲林縣">雲林縣</option>
            <option value = "斗南鎮">斗南鎮</option>
            <option value = "莿桐鄉">莿桐鄉</option>
            <option value = "林內鄉">林內鄉</option>
            <option value = "嘉義縣">嘉義縣</option>
            <option value = "鹿草鄉">鹿草鄉</option>
            <option value = "民雄鄉">民雄鄉</option>
            <option value = "大林鄉">大林鄉</option>
            <option value = "嘉義市">嘉義市</option>
            <option value = "臺南市">臺南市</option>
            <option value = "東山區">東山區</option>
            <option value = "後壁區">後壁區</option>
            <option value = "六甲區">六甲區</option>
            <option value = "高雄市">高雄市</option>
            <option value = "美濃區">美濃區</option>
            <option value = "大寮區">大寮區</option>
            <option value = "屏東縣">屏東縣</option>
            <option value = "崁頂鄉">崁頂鄉</option>
            <option value = "萬丹鄉">萬丹鄉</option>
            <option value = "臺東縣">臺東縣</option>
            <option value = "鹿野鄉">鹿野鄉</option>
            <option value = "關山鎮">關山鎮</option>
            <option value = "花蓮縣">花蓮縣</option>
            <option value = "玉里鄉">玉里鄉</option>
            <option value = "富里鄉">富里鄉</option>
            <option value = "宜蘭縣">宜蘭縣</option>
            <option value = "金門縣">金門縣</option>
            <option value = "連江縣">連江縣</option>
            <option value = "澎湖縣">澎湖縣</option>
            <option value = "基隆市">基隆市</option>
            <option value = "臺北市">臺北市</option>
        </select>
    </div>
    <div class="table-container">
        <table class="table" v-if="selected != ''">
            <thead>
                <tr>
                    <th>白葉枯病  </th>
                    <th>褐飛蝨    </th>
                </tr>
                <tr> 
                    <td>{{  blsShow }}</td>
                    <td>{{  bugShow }}</td>
                </tr>
            </thead>
        </table>
        </div>
        <div class="buttons">
            <NuxtLink to="/infectpart">
                <button class="button is-link">線上診斷</button>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
import axios from "../.nuxt/axios";
export default {
  data() {
    return {
      SourcericeAlarmDatas: "",
      postion: "",
      bls: "",
      bug: "",
      selected: "",
      blsShow: "",
      bugShow: "",
    };
  },
  created() {
    this.scrAlarmData();
    navigator.geolocation.getCurrentPosition(this.positionSuccess);
  },
  methods: {
    scrAlarmData: async function() {
      let blsData = null;
      await this.$axios.$get(process.env.baseUrl).then(res => {
        let blsResult = [];
        let bugResult = [];
        for (let i = 2; i < 4; i++) {
          // data get
          let rawData = res[i];
          //delete unnecessery data
          delete rawData.id;
          delete rawData.BUG;
          delete rawData.LIGHTS01;
          delete rawData.LIGHTS02;
          delete rawData.LIGHTS03;
          delete rawData.LIGHTS04;
          delete rawData.LIGHTS05;
          delete rawData.LIGHTS06;

          for (const data in rawData) {
            //city name
            let cityData = rawData[data].split(/[\":]+/);

            if ((cityData[1] = "ADADAD")) {
              cityData[1] = "";
            }
            const resultData = [cityData[0].trim(), cityData[1].trim()];
            if (i == 2) {
              blsResult.push(resultData);
            }
            if (i == 3) {
              bugResult.push(resultData);
            }
          }
          //bls data get
          this.bls = blsResult;
          this.bug = bugResult;
        }
      });
    },
    positionSuccess(pos) {
      this.postion = pos.coords;
    },
    onChange(event) {
      let blsraw = this.bls;
      let bugraw = this.bug;
      for (const data in blsraw) {
        if (event.target.value == blsraw[data][0]) {
          this.blsShow = blsraw[data][1];

          if (this.blsShow == "") {
            this.blsShow = "無災情";
          }
        }
      }
      for (const data in bugraw) {
        if (event.target.value == bugraw[data][0]) {
          this.bugShow = bugraw[data][1];

          if (this.bugShow == "") {
            this.bugShow = "無災情";
          }
        }
      }
    },
  },
};
</script>

<style>
</style>
