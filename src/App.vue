<template>
  <q-layout view="lHh Lpr fFf" container style="height: 100vh">
    <Header />
    <SideBar />
    <q-page class="default-wrapper">
      <q-page-container class="q-px-lg q-py-md">
        <RouterView />
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import Header from "@/components/general/HeaderMain.vue";
import SideBar from "@/components/general/SideBar.vue";
</script>
