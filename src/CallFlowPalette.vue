<script setup lang="ts">
import { PaletteComponent } from '@visuallyjs/browser-ui-vue'
import { NODE_TYPES } from "./node-types"
import { BrowserElement } from "@visuallyjs/browser-ui"

function dataGenerator(el: BrowserElement) {
  const type = el.getAttribute("data-vjs-type")
  const nodeType = NODE_TYPES.find(nt => nt.type === type)
  const base: any = Object.assign({ type }, Object.assign({}, nodeType?.payload || {}))
  return base
}
</script>

<template>
  <PaletteComponent class="vjs-callflow-palette" :data-generator="dataGenerator">
    <div v-for="nt in NODE_TYPES" :key="nt.type" :data-vjs-type="nt.type" title="Drag to add new" class="vjs-callflow-palette-item">
      <div class="vjs-callflow-node-icon" />
      {{ nt.label }}
    </div>
  </PaletteComponent>
</template>
