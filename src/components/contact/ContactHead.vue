<template>
  <div class="contact-head">
    <div class="contact row items-center">
      <q-avatar size="3.5rem" class="contact__photo">
        <img
          src="@/assets/img/components/contact/photo.png"
          alt="Contact photo"
        />
      </q-avatar>

      <div class="contact__data">
        <h3>Jennifer Crowford</h3>
        <p>Sunflower Limited <span class="icon-arrow"></span></p>
      </div>
    </div>

    <div class="row items-center justify-between">
      <NavTabs
        :items="tabItems"
        :active-tab="activeTab"
        @changeTab="$emit('changeTab', $event)"
      />

      <div class="row items-center">
        <ActionButton
          v-for="item in buttons"
          :key="item.id"
          :title="item.title"
          :link="item.link"
          :icon="item.icon"
          class="q-mr-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ActionButton from "@/components/universal/ActionButton.vue";
import NavTabs from "@/components/universal/NavTabs.vue";
import type { TabItem } from "@/constants/types";

interface Button {
  id: string;
  link?: string;
  title?: string;
  icon?: string;
}

const buttons = ref<Button[]>([
  { id: "1", link: "/", title: "Call", icon: "phone" },
  { id: "2", link: "/", title: "Email", icon: "tickets" },
  { id: "3", link: "/", title: "Text", icon: "text" },
  { id: "4", link: "/", title: "Edit", icon: "edit" },
  { id: "5", link: "/", title: "More", icon: "more" },
]);

const activeTab = ref("activities");
const tabItems = ref<TabItem[]>([
  { id: "activities", title: "Activities" },
  { id: "logs", title: "Logs" },
  { id: "visits", title: "Visits" },
  { id: "files", title: "Files", count: 8 },
]);
</script>
