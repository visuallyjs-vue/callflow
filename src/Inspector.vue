<script setup lang="ts">
import { ref, inject, computed } from "vue"
import { isNode, isPort, Vertex } from "@visuallyjs/browser-ui"
import { PROPERTY_TEXT, PROPERTY_URL, TYPE_CONDITIONS, PROPERTY_NUMBER, TYPE_CALL_FORWARD, TYPE_PLAY_AUDIO, TYPE_REQUEST, TYPE_SET_VARIABLES } from "./constants"
import SetValuesInspectorComponent from "./SetValuesInspectorComponent.vue"
import {VisuallyJsService, VisuallyJsServiceKey, InspectorComponent} from "@visuallyjs/browser-ui-vue";

const currentObj = ref<Vertex|null>(null)
const currentType = computed(() => {
  if (currentObj.value == null) {
    return null
  } else {
    if (isNode(currentObj.value)) {
      return currentObj.value.type
    } else if (isPort(currentObj.value)) {
      return portTypeMap[currentObj.value.getParent().type]
    }
  }
})

const service:VisuallyJsService = inject(VisuallyJsServiceKey)!

const portTypeMap: Record<string, string> = {
  [TYPE_CONDITIONS]: "condition"
}

function updateVariables(variables: Array<any>) {
  if (service.model.value && currentObj.value) {
    service.model.value.updateNode(currentObj.value, { variables })
    service.model.value.clearSelection()
  }
}

function cancel() {
  service.model.value?.clearSelection()
}
</script>

<template>
  <InspectorComponent class="vjs-callflow-inspector" v-model="currentObj">
    <template v-if="currentType === TYPE_PLAY_AUDIO">
      <span>Text:</span>
      <textarea rows="10" cols="10" :vjs-att="PROPERTY_TEXT" vjs-focus="true" placeholder="enter text to speak..." />
    </template>

    <template v-if="currentType === TYPE_REQUEST">
      <span>URL:</span>
      <input type="text" :vjs-att="PROPERTY_URL" vjs-focus="true" placeholder="enter request URL..." />
    </template>

    <template v-if="currentType === TYPE_CALL_FORWARD">
      <span>Phone Number:</span>
      <input type="text" :vjs-att="PROPERTY_NUMBER" vjs-focus="true" placeholder="enter phone number..." />
    </template>

    <template v-if="currentType === TYPE_SET_VARIABLES && currentObj">
      <SetValuesInspectorComponent :obj="currentObj" @save="updateVariables" @cancel="cancel" />
    </template>

    <template v-if="currentType === 'condition'">
      <span>Condition:</span>
      <input vjs-att="value" placeholder="enter condition..." vjs-focus="true" />
    </template>
  </InspectorComponent>
</template>
