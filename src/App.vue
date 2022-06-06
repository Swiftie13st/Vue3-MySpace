<template>
  <NavBar />
  <router-view :key="$route.fullPath" /><!-- `:key="$route.fullPath` 用完整路径来判重-->
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"; 
import NavBar from "./components/navbar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style></style>
