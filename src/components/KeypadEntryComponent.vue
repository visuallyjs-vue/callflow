<script setup lang="ts">

import { ALL_KEYS } from "../constants"

import { VueWrapperProps } from "@visuallyjs/browser-ui-vue"
const {model, obj} = defineProps<VueWrapperProps>()

function removeNode() {
  model.removeNode(obj)
}
</script>

<template>
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" @click="removeNode"></div>
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
