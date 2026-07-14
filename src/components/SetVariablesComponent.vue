<script setup lang="ts">
import { VueWrapperProps } from "@visuallyjs/browser-ui-vue"

const {model, vertex, data} = defineProps<VueWrapperProps>()

</script>

<template>
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" @click="model.removeNode(vertex)"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon" />
      Set Variables
    </div>

    <div v-for="variable in data.variables" :key="variable.id" class="vjs-callflow-variable">
      <span class="vjs-callflow-variable-name">{{ variable.name }}</span>
      =
      <span class="vjs-callflow-variable-value">{{ variable.value }}</span>
    </div>

    <div class="vjs-callflow-connect" data-vjs-source="true" />
  </div>
</template>
