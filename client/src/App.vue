<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">CRUD-APP</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/berita" class="nav-link">Berita</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.container {
  margin-left: 30px;
  margin-right: auto;
}
</style>
