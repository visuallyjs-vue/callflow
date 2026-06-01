<script setup lang="ts">
import { ref, inject } from "vue"
import { Base, isNode, isPort, Vertex } from "@visuallyjs/browser-ui"
import { PROPERTY_TEXT, PROPERTY_URL, TYPE_CONDITIONS, PROPERTY_NUMBER, TYPE_CALL_FORWARD, TYPE_PLAY_AUDIO, TYPE_REQUEST, TYPE_SET_VARIABLES } from "./constants"
import SetValuesInspectorComponent from "./SetValuesInspectorComponent.vue"
import {VisuallyJsService, VisuallyJsServiceKey, InspectorComponent} from "@visuallyjs/browser-ui-vue";

const currentObj = ref<Vertex>(null)
const currentType = ref('')

const service:VisuallyJsService = inject(VisuallyJsServiceKey)!

function renderEmptyContainer() {
  currentType.value = ''
}

const portTypeMap: Record<string, string> = {
  [TYPE_CONDITIONS]: "condition"
}

function refresh(obj: Base) {
  if (isNode(obj)) {
    currentType.value = obj.type
  } else if (isPort(obj)) {
    currentType.value = portTypeMap[obj.getParent().type]
  }
  currentObj.value = obj as Vertex
}

function updateVariables(variables: Array<any>) {
  service.getModel((model) => {
    if (model && currentObj.value) {
      model.updateNode(currentObj.value, { variables })
      model.clearSelection()
    }
  })
}

function cancel() {
  service.getModel(model => model.clearSelection())
}
</script>

<template>
  <InspectorComponent class="vjs-callflow-inspector" :refresh="refresh" :renderEmptyContainer="renderEmptyContainer">
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
