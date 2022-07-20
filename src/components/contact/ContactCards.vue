<template>
  <div class="contact-cards">
    <q-expansion-item expand-separator default-opened>
      <template #header>
        <div class="contact-cards__header row items-center">
          <h3 class="q-mr-sm">Open activities</h3>
          <span>4</span>
        </div>
      </template>

      <ContactCard
        v-for="item in cards"
        :key="item.id"
        class="q-mb-sm"
        :icon="item.type.icon"
        :type="item.type.title"
        :title="item.title"
        :titleTag="item.titleTag"
        :description="item.description"
        :date="item.date"
        :photo="item.avatar"
      />
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CONTACTS_CARDS } from "@/constants/contacts-cards";
import type { ContactsCardItem } from "@/constants/contacts-cards";
import ContactCard from "@/components/contact/ContactCard.vue";

interface Card {
  id: string;
  type: ContactsCardItem;
  title: string;
  date: string;
  description: string;
  avatar: string;
  titleTag?: {
    label: string;
    color: string;
    bgColor: string;
    borderColor: string;
  };
}

const cards = ref<Card[]>([
  {
    id: "1",
    type: CONTACTS_CARDS["TASK"],
    title: "Product demo call with Ruth",
    date: "19 Jun, 2021 09:35 am",
    description:
      "Please call and explain the customer about our product and answer.",
    avatar: "photo.png",
  },
  {
    id: "2",
    type: CONTACTS_CARDS["DEAL"],
    title: "Harrison & Co Summer Order",

    date: "23 Jun, 2021 01:17 pm",
    description:
      "The company has increased the usage of our services and grew the number of...",
    avatar: "photo.png",
  },
  {
    id: "3",
    type: CONTACTS_CARDS["TICKET"],
    title: "I need help with my invoice!",
    date: "16 Apr, 12:22 am",
    description:
      "How to connect PayPal? Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    avatar: "photo.png",
  },
  {
    id: "4",
    type: CONTACTS_CARDS["EMAIL_CAMPAIGN"],
    title: "Newsletter January 2021 Harrison & Co Summer Or..",
    titleTag: {
      label: "A/B TEST",
      color: "#D8902A",
      bgColor: "#FEF9F2",
      borderColor: "#F7D6A6",
    },
    date: "19 Jun, 2021 09:35 am",
    description: "Campaign sent to someone@apple.com",
    avatar: "photo.png",
  },
]);
</script>
