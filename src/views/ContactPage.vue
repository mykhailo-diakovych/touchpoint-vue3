<template>
  <div class="contact-page">
    <PagePath />
    <ContactHead @changeTab="changeTab" />

    <div class="row">
      <div class="col col-md-8 contact-page__content">
        <component :is="components[activeTab]" :title="activeTab" />
      </div>

      <DetailsCont class="col-6 col-md-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Component } from "vue";
import PagePath from "@/components/general/PagePath.vue";
import ContactHead from "@/components/contact/ContactHead.vue";
import DetailsCont from "@/components/contact/DetailsCont.vue";
import Activities from "@/components/contact/ContactActivities.vue";
import ComingSoon from "@/components/contact/coming-soon/ComingSoon.vue";

const components = ref<{ [key: string]: Component }>({
  activities: Activities,
  logs: ComingSoon,
  visits: ComingSoon,
  files: ComingSoon,
});

const activeTab = ref("");
const changeTab = (val: string) => {
  activeTab.value = val;
};
</script>
