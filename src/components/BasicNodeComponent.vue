<script setup lang="ts">
import { VueWrapperProps } from "@visuallyjs/browser-ui-vue"
import { getNodeLabel } from "../node-types"

const {model, vertex, data} = defineProps<VueWrapperProps>()

const label = getNodeLabel(vertex.type)

function removeNode() {
  model.removeNode(vertex)
}
</script>

<template>
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" @click="removeNode()"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon" />
      {{ label }}
    </div>
    <div v-if="data.text" class="vjs-callflow-node-text">{{ data.text }}</div>
    <div class="vjs-callflow-connect" data-vjs-source="true" />
  </div>
</template>
