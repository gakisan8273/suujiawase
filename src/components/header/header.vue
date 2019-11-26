<template>
    <header class="header">
      <div class="header-container">
      <h1 class='header-title'>すうじあわせ</h1>
      <img src="@/assets/train_baner1.png" alt="" v-if="this.$route.path === '/'" class="header-train">
      <nav class='header-nav' v-if="this.$route.path !== '/'">
        <ul class='header-nav-list'>
          <li class='header-nav-list-item header-nav-list-color'>
            <ChangeColor v-show="this.$route.path === '/game'"/>
            <!-- 画面がTOPのとき、Gameのとき、Resultのとき、で変わる様にする -->
          </li>

          <li class='header-nav-list-item header-nav-list-panel'>
            <Replace  v-show="this.$route.path === '/game'" />
          </li>

          <li class='header-nav-list-item header-nav-list-restart'>
            <Restart  v-show="this.$route.path === '/result' " />
          </li>

          <li class='header-nav-list-item header-nav-list-end'>
            <End  v-show="this.$route.path === '/game' || this.$route.path === '/result' "/>
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import ChangeColor from '@/components/header/changecolor.vue'
import Replace from '@/components/header/replace.vue'
import Restart from '@/components/header/restart.vue'
import End from '@/components/header/end.vue'

export default {
  name: 'Header',
  components:{ ChangeColor, Replace, Restart, End }
}
</script>

<style>
.header-nav-list-img{
  float:right;
}
.header-train{
  width:60%;
}
</style>