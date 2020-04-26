<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import shortid from 'shortid'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
  dataTransfer: DataTransfer
}

export default defineComponent({
  props: {
    wrapperClass: String,
    labelClass: String,
    label: {
      type: String,
      required: true
    }
  },

  setup() {
    const componentId = `upload-${shortid.generate()}`

    const file = ref<File>()

    function addFile(e: HTMLInputEvent) {
      const fileList: FileList | null = e.target.files || e.dataTransfer.files
      if (fileList === null) {
        return
      }

      file.value = fileList[0]
    }

    function removeFile() {
      file.value = undefined
    }

    function humanReadableFilesize() {
      if (file.value === undefined) {
        return
      }

      let size = file.value.size
      let prefixIndex = 0
      const decimalPrefixes = ['Bytes', 'KB', 'MB']
      while (size > 1000) {
        prefixIndex++
        size /= 1000
      }

      return `${size.toFixed(2)} ${decimalPrefixes[prefixIndex]}`
    }

    return {
      componentId,
      file,
      addFile,
      removeFile,
      humanReadableFilesize
    }
  }
})
</script>

<template>
  <div :class="wrapperClass">
    <label
      :for="componentId"
      :class="labelClass"
      class="block mb-1 text-sm font-semibold"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <div
      @drop.prevent="addFile"
      @dragover.prevent
      class="p-2 bg-indigo-100 border border-indigo-700 border-dashed rounded align"
    >
      <input :id="componentId" @change="addFile" type="file" class="hidden" />
      <template v-if="file">
        <div class="flex items-center">
          <svg
            viewBox="-16 0 512 512"
            class="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M378.906 394.293H168.86a7.559 7.559 0 00-7.554 7.559 7.555 7.555 0 007.554 7.554h210.043a7.556 7.556 0 007.559-7.554 7.559 7.559 0 00-7.555-7.559zm0 0M378.906 341.215H168.86a7.555 7.555 0 00-7.554 7.555 7.556 7.556 0 007.554 7.558h210.043a7.557 7.557 0 00.004-15.113zm0 0M161.305 295.66a7.556 7.556 0 007.554 7.559h133.66a7.557 7.557 0 100-15.114H168.86a7.555 7.555 0 00-7.554 7.555zm0 0"
            />
            <path
              d="M458.664 99.133l-13.625-14.79V31.45C445.04 14.11 430.891 0 413.496 0H75.492C58.098 0 43.95 14.11 43.95 31.45v59.663H30.13C13.516 91.113 0 104.637 0 121.258v91.48c0 16.621 13.516 30.145 30.129 30.145h13.82v210.8c0 17.34 14.149 31.45 31.543 31.45h17.266c1.86 15.12 14.777 26.867 30.398 26.867h325.188c16.91 0 30.664-13.738 30.664-30.625V154.953c0-26.715-.805-34.578-20.344-55.82zm4.918 40.27h-56.61c-8.574 0-15.55-6.958-15.55-15.505l.05-65.714c9.938.738 12.59 3.675 21.301 13.363 1.446 1.61 3.024 3.36 4.778 5.266l14.445 15.68c.05.054.102.112.156.167l15.391 16.707c12 13.047 15.191 18.524 16.039 30.035zM59.062 31.448c0-9.008 7.372-16.336 16.43-16.336h338.004c9.059 0 16.43 7.328 16.43 16.336v36.489l-1.258-1.368c-1.715-1.855-3.246-3.562-4.652-5.129-12.422-13.812-17.852-18.59-40.086-18.59H123.156c-16.894 0-30.636 13.739-30.636 30.626v17.636H59.063zm404.833 449.926c0 8.55-6.977 15.512-15.551 15.512H123.156c-8.558 0-15.523-6.957-15.523-15.512V371.867a7.556 7.556 0 00-7.559-7.555 7.555 7.555 0 00-7.554 7.555v98.153H75.492c-9.058 0-16.43-7.329-16.43-16.332V242.882H92.52v94.383a7.555 7.555 0 007.554 7.554 7.556 7.556 0 007.559-7.554v-94.383h39.226a7.556 7.556 0 007.555-7.559 7.555 7.555 0 00-7.555-7.554H30.13c-8.281 0-15.016-6.743-15.016-15.032v-91.48c0-8.29 6.735-15.031 15.016-15.031H229.14c8.293 0 15.043 6.742 15.043 15.03v91.481c0 8.29-6.75 15.032-15.043 15.032h-47.66a7.557 7.557 0 100 15.113h47.66c16.629 0 30.156-13.524 30.156-30.145v-91.48c0-16.621-13.527-30.145-30.156-30.145H107.633V73.477c0-8.555 6.965-15.512 15.523-15.512H376.36l-.05 65.93c0 16.886 13.757 30.625 30.664 30.625h56.922v.433zm0 0"
            />
            <path
              d="M75.648 134.637H57.547c-2.223 0-4.113.777-5.668 2.336-1.555 1.554-2.332 3.472-2.332 5.757v53.516c0 2.223.762 4.094 2.285 5.617 1.523 1.528 3.336 2.29 5.43 2.29 2.097 0 3.906-.762 5.43-2.29 1.527-1.523 2.288-3.332 2.288-5.425v-15.52h11.622c7.05 0 12.703-2.11 16.957-6.332 4.254-4.223 6.382-9.762 6.382-16.617 0-6.918-2.254-12.54-6.761-16.856-4.512-4.316-10.356-6.476-17.532-6.476zm5.622 29.996c-1.844 1.844-4 2.762-6.477 2.762H64.98v-18.95h9.907c2.605 0 4.777.938 6.527 2.809 1.746 1.875 2.617 4.144 2.617 6.809 0 2.539-.918 4.73-2.761 6.57zm0 0M163.273 152.777c-2.253-4.918-5.414-8.87-9.476-11.855-5.652-4.125-12.957-6.188-21.91-6.188h-15.91c-2.227 0-4.098.793-5.622 2.38-1.527 1.59-2.289 3.398-2.289 5.429v53.039c0 2.285.73 4.156 2.192 5.617 1.586 1.399 3.523 2.094 5.812 2.094h17.149c9.27 0 16.703-2.508 22.293-7.523 7.43-6.79 11.144-15.774 11.144-26.946 0-5.777-1.129-11.125-3.383-16.047zm-17.48 30.996c-3.305 3.747-7.684 5.618-13.148 5.618H123.5v-40.66h8.29c5.843 0 10.464 1.808 13.862 5.43 3.395 3.616 5.094 8.503 5.094 14.663 0 6.223-1.652 11.203-4.953 14.95zm0 0M184.402 204.344c2.157 0 3.985-.766 5.477-2.29 1.492-1.523 2.238-3.331 2.238-5.425v-20.473h14.672c2.098 0 3.844-.68 5.238-2.047 1.399-1.363 2.098-3 2.098-4.906 0-1.965-.715-3.633-2.145-4.996-1.43-1.363-3.16-2.047-5.19-2.047h-14.673v-13.43h17.34c1.969 0 3.621-.695 4.953-2.093 1.336-1.395 2-3.016 2-4.856 0-2.031-.68-3.73-2.047-5.094-1.367-1.367-3-2.046-4.906-2.046h-24.96c-2.224 0-4.099.793-5.622 2.379-1.523 1.59-2.285 3.43-2.285 5.523v54.086c0 2.098.793 3.906 2.383 5.43 1.586 1.52 3.394 2.285 5.43 2.285zm0 0"
            />
          </svg>

          <div class="flex flex-col justify-between ml-4">
            <span>
              {{ file.name }}
            </span>

            <div class="text-xs">
              <span>PDF</span>
              &middot;
              <span>{{ humanReadableFilesize() }}</span>
            </div>
          </div>

          <div
            @click="removeFile"
            class="ml-auto text-xs text-gray-700 cursor-pointer hover:underline"
          >
            Auswahl entfernen
          </div>
        </div>
      </template>

      <template v-else>
        <div class="text-xs text-center text-gray-600">
          <div>
            Drag and drop here or
            <label
              :for="componentId"
              class="text-indigo-700 underline cursor-pointer"
            >
              browse
            </label>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
