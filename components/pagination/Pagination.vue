<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { usePagination } from 'vue-composable'

export default defineComponent({
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { prev, next, currentPage, lastPage } = usePagination({
      currentPage: props.currentPage,
      pageSize: props.pageSize,
      total: props.total,
    })

    const isFirstPage = computed(() => {
      return currentPage.value === 1
    })
    const isLastPage = computed(() => {
      return currentPage.value === lastPage.value
    })

    const lowerBound = computed(() => {
      return (props.currentPage - 1) * props.pageSize + 1
    })
    const upperBound = computed(() => {
      return Math.min(props.currentPage * props.pageSize, props.total)
    })

    const startPage = computed(() => {
      if (currentPage.value === 1) {
        return 1
      }

      if (currentPage.value === lastPage.value) {
        return Math.max(lastPage.value - props.maxVisibleButtons, 1)
      }

      return currentPage.value - 1
    })

    const pages = computed(() => {
      const range = []

      for (
        let i = startPage.value;
        i <=
        Math.min(startPage.value + props.maxVisibleButtons - 1, lastPage.value);
        i++
      ) {
        range.push({
          number: i,
          disabled: i === currentPage.value,
        })
      }

      return range
    })

    return {
      prev,
      next,
      isFirstPage,
      isLastPage,
      lowerBound,
      upperBound,
      pages,
    }
  },
  methods: {
    changePage(page: Number) {
      this.$emit('pagechanged', page)
    },
  },
})
</script>

<template>
  <div class="flex items-center justify-between px-4 py-3 bg-white sm:px-6">
    <div class="flex justify-between flex-1 sm:hidden">
      <button
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
        :disabled="isFirstPage"
        @click="prev"
      >
        Previous
      </button>
      <button
        class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
        :disabled="isLastPage"
        @click="next"
      >
        Next
      </button>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ lowerBound }}</span>
          to
          <span class="font-medium">{{ upperBound }}</span>
          of
          <span class="font-medium">{{ total }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            :disabled="isFirstPage"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 focus:outline-none rounded-l-md hover:bg-gray-50"
            @click="prev"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            v-for="page in pages"
            :key="page.number"
            :disabled="page.isDisabled"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100"
            :class="{ 'bg-gray-200': page.number == currentPage }"
            @click="changePage(page.number)"
          >
            <span>
              {{ page.number }}
            </span>
          </button>
          <button
            :disabled="isLastPage"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
            @click="next"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
