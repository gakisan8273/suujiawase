<template>
  <div class="main-game-container">
  <!-- <div class='container'>
    <div class='main'>
      <div class='main-container'> -->
        <ShowNextNumber />
        <Panels/>
      <!-- </div>
    </div>
  </div> -->
  </div>

</template>

<script>
import Panels from '@/components/panels/Panels.vue'
import ShowNextNumber from '@/components/showNextNumber/showNextNumber.vue'

export default {
  name: 'Game',
  components: { Panels, ShowNextNumber }
}
</script>