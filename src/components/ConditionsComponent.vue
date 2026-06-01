<script setup lang="ts">
import { Node } from "@visuallyjs/browser-ui"
import { VueWrapperProps } from "@visuallyjs/browser-ui-vue"
const {model, obj} = defineProps<VueWrapperProps>()

function removeNode() {
  model.removeNode(obj)
}

function editCondition(id: string) {
  const port = obj.getPort(id)
  if (port != null) {
    model.setSelection(port)
  }
}

function removeCondition(id: string) {
  const port = obj.getPort(id)
  if (port) {
    model.removePort(port)
  }
}

function addCondition() {
  const order = obj.data.conditions.length
  const id = `${order}`

  model.addNewPort(obj, "condition", {
    id,
    order,
    value: "New Condition"
  })

  setTimeout(() => {
    const port = obj.getPort(id)
    if (port) {
      model.setSelection(port)
    }
  })
}
</script>

<template>
  <div class="vjs-callflow-node" data-vjs-target="true">
    <div class="vjs-callflow-delete" @click="removeNode"></div>
    <div class="vjs-callflow-label">
      <div class="vjs-callflow-node-icon" />
      Conditions
      <div class="vjs-callflow-add-condition" @click="addCondition">+</div>
    </div>
    <div v-for="condition in obj.data.conditions" :key="condition.id" class="vjs-callflow-condition" :data-vjs-port="condition.id">
      <span @click="editCondition(condition.id)" :title="condition.value">{{ condition.value }}</span>
      <div class="vjs-callflow-connect" data-vjs-source="true" />
      <div v-if="condition.value !== 'Else'" class="vjs-edge-delete" @click="removeCondition(condition.id)" />
    </div>
  </div>
</template>
