<script setup lang="ts">
useHead({
  titleTemplate: 'Anjishnu Ganguly | %s',
});
</script>

<template>
  <NuxtLayout name="page">
    <ContentDoc tag="article" />
    <BaseFooter />
  </NuxtLayout>
</template>

<style lang="scss">
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @include screens.laptop {
    gap: 6rem;
  }
}
</style>
