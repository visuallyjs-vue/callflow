<script setup lang="ts">

import { ALL_KEYS } from "../constants"

import { VueWrapperProps } from "@visuallyjs/browser-ui-vue"
const {model, vertex} = defineProps<VueWrapperProps>()
</script>

<template>
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" @click="model.removeNode(vertex)"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon" />
      Keypad Entry
    </div>
    <div class="vjs-callflow-keypad">
      <div v-for="k in ALL_KEYS" :key="k" class="vjs-callflow-keypad-key" :data-vjs-port="k">
        <span>{{ k }}</span>
        <div class="vjs-callflow-connect" data-vjs-source="true" />
      </div>
    </div>
  </div>
</template>
