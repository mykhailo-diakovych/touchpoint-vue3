<template>
  <div class="page-path row items-center">
    <router-link to="/" class="page-path__back">
      <span class="icon-page-path"></span>
    </router-link>

    <router-link
      :to="path"
      v-if="name"
      class="page-path__route page-path__item"
      >{{ name }}</router-link
    >

    <div v-if="query" class="page-path__query page-path__item row items-center">
      <span class="icon-arrow-right"></span>
      <div>{{ query }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const name = computed(() => route.name);
const query = computed(() => route.query.contact);
const path = computed(() => route.path);
</script>
