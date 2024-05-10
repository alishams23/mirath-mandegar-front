<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { useUserStore } from '~/store/user';


export default {
  beforeMount() {
    const userStore = useUserStore();

    // Load token from cookie when the layout is created
    userStore.loadTokenAndUsernameFromCookie();
  },
}
</script>
