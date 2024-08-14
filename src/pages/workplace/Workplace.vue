<template>
  <div class="workplace grid grid-rows-none gap-4 mt-xxs">
    <div class="overview grid grid-cols-12 gap-4">
      <active-users class="col-span-12 xlx:col-span-6 xxlx:col-span-5 drop-shadow-sm" />
      <sales-overview class="col-span-12 xlx:col-span-6 xxlx:col-span-7 drop-shadow-sm" />
    </div>
    <div class="project-list grid grid-cols-12 gap-4">
      <projects class="col-span-12 xlx:col-span-7 xxlx:col-span-8 drop-shadow-sm" />
    
    </div>
    <about-us />
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import ActiveUsers from './ActiveUsers.vue';
  import SalesOverview from './SalesOverview.vue';
  import Projects from './Projects.vue';
  import AboutUs from './AboutUs.vue';
  import { useUnbounded } from '@/utils/useTheme';

  // useUnbounded();
</script>

