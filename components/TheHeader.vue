<template>
 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
    <a role="button" class="navbar-burger burger" :class="{'is-active':active}" @click="onButton" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':active}">
    <div class="navbar-start">
      <a class="navbar-item">
        首頁
      </a>

      <a class="navbar-item">
         水稻病蟲害警報
      </a>
          
      <a class="navbar-item">
          生物農藥施用
      </a>
          
      <a class="navbar-item">
          台梗九號簡介
      </a> 

       <a class="navbar-item">
          台梗九號病蟲害防治
       </a> 
    </div>
  </div>
</nav>
</template>
  <script>
  export default {
    data() {
      return {
        login:false,
        active:false,
      }
    }, 
    methods:{
      onButton:function(){
         this.active =!this.active
      }
    }
  }
  </script>
  