<template>
  <q-card flat class="contact-details">
    <div class="row items-center justify-between q-mb-md q-pb-xs">
      <h3>Contact Details</h3>
      <span class="icon-settings-dark cursor-pointer"></span>
    </div>

    <div v-for="item in items" :key="item.id" class="contact-details__item">
      <div v-if="item.title" class="row items-end q-mb-sm">
        <div class="contact-details__title q-mr-xs">{{ item.title }}</div>
        <div v-if="item.subtitle" class="contact-details__subtitle">
          ({{ item.subtitle }})
        </div>
      </div>

      <div class="row items-center">
        <q-avatar v-if="item.data.avatar" size="1.5rem" class="q-mr-sm">
          <img
            src="@/assets/img/components/contact/details/avatar.png"
            alt="Avatar"
          />
        </q-avatar>

        <div v-if="item.data.text" class="contact-details__text q-mr-xs">
          {{ item.data.text }}
        </div>

        <span v-if="item.data.icon" :class="`icon-${item.data.icon}`" />
      </div>

      <StatusButton
        v-if="item.data.status"
        :color="item.data.status.color"
        :title="item.data.status.val"
        :bg-color="item.data.status.bgColor"
        :border-color="item.data.status.color"
      />

      <div
        v-if="item.data.tags && item.data.tags.length"
        class="row item-center"
      >
        <TagButton
          v-for="(tag, i) in item.data.tags"
          :key="i"
          :title="tag"
          class="q-mr-sm"
        />
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TagButton from "@/components/universal/TagButton.vue";
import StatusButton from "@/components/universal/StatusButton.vue";

interface DetailItem {
  id: string;
  title?: string;
  subtitle?: string;
  data: {
    avatar?: string;
    text?: string;
    status?: {
      val: string;
      color: string;
      bgColor: string;
    };
    icon?: string;
    tags?: string[];
  };
}

const items = ref<DetailItem[]>([
  {
    id: "1",
    title: "Assigned to",
    data: {
      avatar: "avatar.png",
      text: "Franklin Strickland",
    },
  },
  {
    id: "2",
    title: "Status",
    data: {
      status: {
        val: "Lead",
        color: "#6D9F4F",
        bgColor: "#F8FCF7",
      },
    },
  },
  {
    id: "3",
    title: "Email",
    subtitle: "Work",
    data: {
      text: "kenzilaw@textmagic.com",
    },
  },
  {
    id: "4",
    title: "Phone",
    subtitle: "Mobile",
    data: {
      text: "(850) 678-9080",
      icon: "danger",
    },
  },
  {
    id: "5",
    title: "Phone",
    subtitle: "Home",
    data: {
      text: "(990) 338-9983",
    },
  },
  {
    id: "6",
    title: "Country",
    data: {
      text: "Oregon, USA",
    },
  },
  {
    id: "7",
    title: "Time",
    data: {
      text: "4:24 pm (UTC-4)",
    },
  },
  {
    id: "8",
    title: "Tags",
    data: {
      tags: ["Sales", "United States"],
    },
  },
  {
    id: "9",
    title: "Lists",
    data: {
      tags: ["Key account", "Important"],
    },
  },
  {
    id: "6",
    title: "Followers",
    data: {
      text: "4 followers",
    },
  },
]);
</script>
