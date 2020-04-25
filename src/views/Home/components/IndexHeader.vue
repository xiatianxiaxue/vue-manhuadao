<template>
  <header class="index-header">
    <router-link to="/my" tag="a">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </router-link>
    <div class="header-logo"></div>
    <router-link to="/search" tag="a">
      <div class="header-search"></div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.index-header {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 45px;
  // height: 1.2133rem;
  box-sizing: border-box;
  // border-bottom: 1px solid #e9e9e9;
  .user-btn {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/user-btn.png") no-repeat;
    background-size: 100%;
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url("~@/assets/logo.png") no-repeat;
    background-size: 100%;
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/search.png") no-repeat;
    background-size: 100%;
  }
}
</style>
