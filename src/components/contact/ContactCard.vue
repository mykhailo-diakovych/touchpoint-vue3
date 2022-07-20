<template>
  <div class="row contact-card">
    <q-avatar
      size="36px"
      font-size="12px"
      color="white"
      class="q-mt-sm q-mr-sm contact-card__icon"
    >
      <span :class="`icon-${icon}`" />
    </q-avatar>

    <q-card flat class="contact-card__card">
      <div class="row items-center justify-between q-mb-sm">
        <div class="contact-card__type">{{ type }}</div>
        <div v-if="date" class="contact-card__date">{{ date }}</div>
      </div>

      <div v-if="title" class="contact-card__title q-mb-sm row items-center">
        <span>{{ title }}</span>

        <StatusButton
          v-if="titleTag"
          class="q-ml-sm"
          :title="titleTag.label"
          :color="titleTag.color"
          :bg-color="titleTag.bgColor"
          :border-color="titleTag.borderColor"
        />
      </div>
      <div v-if="description" class="contact-card__description q-mb-sm">
        {{ description }}
      </div>
      <div class="row items-center justify-between">
        <div class="row items-center">
          <StatusButton
            title="Need attention"
            color="#746197"
            border-color="#C7BBDD"
            bg-color="#F7F5FA"
            class="q-mr-md"
          />
        </div>

        <q-avatar v-if="photo" size="1.5rem">
          <img
            src="@/assets/img/components/contact/photo.png"
            alt="Photo icon"
          />
        </q-avatar>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import StatusButton from "@/components/universal/StatusButton.vue";

withDefaults(
  defineProps<{
    icon?: string;
    type?: string;
    date?: string | null;
    title?: string | null;
    description?: string | null;
    photo?: string | null;
    titleTag?: {
      label: string;
      color: string;
      bgColor: string;
      borderColor: string;
    } | null;
    otherData?: object | null;
  }>(),
  {
    icon: "tasks",
    type: "",
    date: null,
    title: null,
    description: null,
    photo: null,
    titleTag: null,
    otherData: null,
  }
);
</script>
