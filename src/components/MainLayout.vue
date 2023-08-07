<template>
    <div class="page">
      <PageBody />
      <!-- <PageFooter class="foots"/> -->
    </div>
  </template>
  
  <script>
  import PageBody from '@/components/PageBody.vue';
  // import PageFooter from '@/components/PageFooter.vue';
  
  export default {
    name: 'MainLayout',
    components: {
      PageBody,
    //   PageFooter,
    },
  };
  </script>

<style scoped>
    div {
        height: 100%;
        width: 100%;
    }  
    .page {
      margin: 0;
      padding: 0;
    }
</style>
