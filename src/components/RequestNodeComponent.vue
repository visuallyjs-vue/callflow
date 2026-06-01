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
      Request
    </div>
    <div class="vjs-callflow-request-url">
      {{ obj.data.url }}
    </div>
    <div class="vjs-callflow-request-port" data-vjs-port="condition">
      <span>condition</span>
      <div class="vjs-callflow-connect" data-vjs-source="true" />
    </div>
    <div class="vjs-callflow-request-port" data-vjs-port="else">
      <span>Else</span>
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true" />
    </div>
    <div class="vjs-callflow-request-port" data-vjs-port="failure">
      <span>Failure</span>
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true" />
    </div>
  </div>
</template>
