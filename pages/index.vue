<script setup lang="ts">
useHead({
  title: 'Anjishnu Ganguly',
  meta: [
    {
      name: 'description',
      content:
        "Hi ! I'm Anjishnu Ganguly, a fullstack developer passionate about fullstack dev. I use React and Nextjs for frontend and Nodejs and Golang for backend.",
    },
  ],
  script: [
    {
      tagPosition: 'bodyClose',
    },
  ],
});
</script>

<template>
  <NuxtLayout name="page">
    <HomeHeroSection />
    <HomePortfolio />
    <HomeAbout />
    <HomeContact />
    <BaseFooter />
  </NuxtLayout>
</template>
