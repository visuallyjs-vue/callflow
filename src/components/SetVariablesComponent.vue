<script setup lang="ts">
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
      Set Variables
    </div>

    <div v-for="variable in obj.data.variables" :key="variable.id" class="vjs-callflow-variable">
      <span class="vjs-callflow-variable-name">{{ variable.name }}</span>
      =
      <span class="vjs-callflow-variable-value">{{ variable.value }}</span>
    </div>

    <div class="vjs-callflow-connect" data-vjs-source="true" />
  </div>
</template>
