<script setup lang="ts">
import {
    SurfaceProvider,
    SurfaceComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-vue"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'

import CallFlowPalette from "./CallFlowPalette.vue";
import CallflowInspector from "./Inspector.vue";

defineProps<{
  url?: string
}>()

</script>

<template>
  <div class="vjs-callflow">
      <SurfaceProvider>
          <SurfaceComponent class="vjs-callflow-canvas"
                                :render-options="renderOptions"
                                :view-options="viewOptions"
                                :model-options="modelOptions"
                                :url="url">

              <ControlsComponent/>
              <MiniviewComponent/>
          </SurfaceComponent>
          <div class="vjs-callflow-rhs">
              <CallFlowPalette/>
              <CallflowInspector/>
          </div>

      </SurfaceProvider>
  </div>
</template>
