<script setup lang="ts">
import { ref, watch } from "vue"
import { CallFlowVariable } from "./definitions"
import { uuid, Vertex } from "@visuallyjs/browser-ui"

const props = defineProps<{
  obj: Vertex
}>()

const emit = defineEmits(['save', 'cancel'])

const variables = ref<Array<CallFlowVariable>>(props.obj.data.variables.map((v: CallFlowVariable) => Object.assign({}, v)))

const newVariableName = ref<HTMLInputElement | null>(null)
const newVariableValue = ref<HTMLInputElement | null>(null)

function addVariable() {
  if (newVariableName.value && newVariableValue.value && newVariableName.value.value.length > 0 && newVariableValue.value.value.length > 0) {
    variables.value.push({
      name: newVariableName.value.value,
      value: newVariableValue.value.value,
      id: uuid()
    })
    newVariableName.value.value = ""
    newVariableValue.value.value = ""
  }
}

function deleteVariable(id: string) {
  variables.value = variables.value.filter((v: CallFlowVariable) => v.id !== id)
}

function setName(id: string, event: Event) {
  const target = event.target as HTMLInputElement
  const variable = variables.value.find(v => v.id === id)
  if (variable) {
    variable.name = target.value
  }
}

function setValue(id: string, event: Event) {
  const target = event.target as HTMLInputElement
  const variable = variables.value.find(v => v.id === id)
  if (variable) {
    variable.value = target.value
  }
}

function commit() {
  emit('save', variables.value)
}

// Optional: watch for prop changes if obj can change without inspector refreshing
watch(() => props.obj, (newObj) => {
    variables.value = newObj.data.variables.map((v: CallFlowVariable) => Object.assign({}, v))
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="variable in variables" :key="variable.id">
        <td><input :value="variable.name" type="text" @blur="setName(variable.id, $event)" /></td>
        <td><input :value="variable.value" type="text" @blur="setValue(variable.id, $event)" /></td>
        <td><button @click="deleteVariable(variable.id)">✖</button></td>
      </tr>

      <tr>
        <td colspan="2">
          <hr style="color:whitesmoke" />
        </td>
      </tr>

      <tr>
        <td><input placeholder="new variable name" type="text" ref="newVariableName" /></td>
        <td><input placeholder="new variable value" type="text" ref="newVariableValue" /></td>
        <td><button @click="addVariable">+</button></td>
      </tr>
    </tbody>
  </table>
  <div class="vjs-callflow-set-variables-buttons">
    <button @click="commit">Save</button>
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>
