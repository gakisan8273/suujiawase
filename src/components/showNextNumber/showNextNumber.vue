<template>
<div class='main-next'>
  <p class="main-next-sentence">この すうじを さがしてね</p>
  <p class="main-next-number">{{ this.$store.getters.getNextNumber }}</p>
</div>
</template>

<style>
 .main-next{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .main-next-sentence{
   font-size: 30px;
   font-weight: 100;
   color: #707070;
 }
 .main-next-number{
   margin-top: 20px;
  font-size: 40px;
   font-weight: 100;
   color: #707070;
 }
</style>