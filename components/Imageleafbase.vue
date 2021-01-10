<template>
    <div>
        <h3 title="subtitle">請選擇</h3>
        <label class="checkbox">
        <input type="checkbox" name="shbl[]" value="shbl" v-model="checkname" @change="send">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        </label>
        <br>
        <label class="checkbox">
        <input type="checkbox" name="bls[]" value="bls" v-model="checkname" @change="send">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        </label>
        <br>
        <label class="checkbox">
        <input type="checkbox" name="bug[]" value="bug" v-model="checkname" @change="send">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        </label>
    </div>
</template>
<script>
export default {
  data() {
      return {
       checkname:[]
      }
  },
  methods: {
      send(){
          this.$emit("my-select", this.checkname);
      }
  },
}
</script>