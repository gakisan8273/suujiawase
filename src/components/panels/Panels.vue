<template>
  <transition-group tag="div" class="main-panels">
    <Panel v-for="item in getPanels" v-bind="item" :key="item.id" v-bind:class="item.classObj"></Panel>
  </transition-group>
</template>

<style>
.v-move{
  transition: transform 1s;
}
</style>

<script>
import Panel from '@/components/panels/panel.vue'
export default {
  name: 'Panels',
  components: {Panel},
  methods: {
  },
  computed: {
    getPanels() {
      return this.$store.getters.getPanels;
    }
  }
}
</script>

