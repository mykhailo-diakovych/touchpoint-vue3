<template>
  <div class="row contact-create-new-card">
    <q-avatar class="q-mr-sm">
      <img src="@/assets/img/components/contact/photo.png" alt="Profile icon" />
    </q-avatar>

    <div class="contact-create-new-card__content">
      <NavTabs
        :items="tabs"
        :active-tab="activeTab"
        @changeTab="activeTab = $event"
      />

      <InternalNote :title="addNew[activeTab]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavTabs from "@/components/universal/NavTabs.vue";
import InternalNote from "@/components/contact/InternalNote.vue";
import type { TabItem } from "@/constants/types";

interface AddNew {
  "internal-note": string;
  task: string;
  deal: string;
  ticket: string;
  reminder: string;
}

const addNew = ref<AddNew>({
  "internal-note": "note",
  task: "task",
  deal: "deal",
  ticket: "ticket",
  reminder: "reminder",
});

const activeTab = ref<keyof AddNew>("internal-note");
const tabs = ref<TabItem[]>([
  { id: "internal-note", title: "Internal note" },
  { id: "task", title: "Task" },
  { id: "deal", title: "Deal" },
  { id: "ticket", title: "Ticket" },
  { id: "reminder", title: "Reminder" },
]);
</script>
