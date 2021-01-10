<template>
    <div>
        <h3 title="subtitle">請選擇</h3>
       <label class="checkbox">
        <input type="checkbox" name="shbl" value="shbl">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        </label>
        <br>
        <label class="checkbox">
        <input type="checkbox" name="bls" value="bls">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        </label>
        <br>
        <label class="checkbox">
        <input type="checkbox" name="bug" value="bug">
        <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        </label>
        <label>
      
      <input type="checkbox" v-bind="$attrs" v-bind:value="value" v-on="inputListeners">
    </label>
    </div>
</template>
<script>
export default {
    data() {
         return {    
    }
},
  props: ['label', 'value']
,
 computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
}
}
</script>