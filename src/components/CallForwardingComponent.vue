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
      Forward to Phone
    </div>
    <div v-if="obj.data.number != null" class="vjs-callflow-node-text">
      {{ obj.data.number }}
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="success">
      Success
      <div class="vjs-callflow-connect" data-vjs-source="true" />
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="no-answer">
      No Answer
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true" />
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="busy">
      Busy
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true" />
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="decline">
      Decline
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true" />
    </div>
    <div class="vjs-callflow-condition" data-vjs-port="error">
      Error
      <div class="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true" />
    </div>
  </div>
</template>
