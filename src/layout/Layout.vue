<template>
  <div class="grid-layout">
    <header-layout class="header-layout" />
    <sidebar class="sidebar-layout" />
    <router-view class="content-layout" />
    <footer-layout class="footer-layout" />
  </div>
</template>

<script>
import HeaderLayout from "./Header";
import Sidebar from "./Sidebar";
import FooterLayout from "./Footer";
export default {
  components: {
    HeaderLayout,
    Sidebar,
    FooterLayout,
  },
};
</script>
