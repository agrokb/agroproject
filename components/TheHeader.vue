<template>
 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        首頁
      </a>

      <a class="navbar-item">
        水稻病蟲害警報
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          更多
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            褐飛斯
          </a>
          <a class="navbar-item">
            白葉枯病
          </a>
          <a class="navbar-item">
            紋枯病
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" v-if = "login == false">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" v-if = "login == true">
            Log out
          </a>
          <a class="button is-light" v-else>
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
  <script>
  export default {
    data() {
      return {
        login:false
      }
    },
  }
  </script>
  