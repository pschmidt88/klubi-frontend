<template>
  <div class="form-wizard">
    <div class="step-container">
      <div class="step-wizard">
        <div class="progress">
          <div :style="progressBarStyle" class="progressbar" />
        </div>
        <ul class="nav">
          <slot
            v-for="(tab, index) in tabs"
            :tab="tab"
            :index="index"
            name="step"
          >
            <form-wizard-step
              :tab="tab"
              :index="index"
              @click.native="navigateToTab(index)"
            />
          </slot>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <slot />
    </div>

    <b-row class="wizard-footer">
      <b-col align-self="start" class="text-left">
        <b-button v-if="displayPrevButton" @click="previousTab"
          >Zurück</b-button
        >
      </b-col>

      <b-col align-self="end" class="text-right">
        <b-button v-if="isLastStep" right variant="primary">Fertig</b-button>
        <b-button v-else right variant="primary" @click="nextTab"
          >Nächster Schritt</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormWizardStep from './FormWizardStep'

export default {
  name: 'FormWizard',
  components: {
    FormWizardStep
  },
  data() {
    return {
      activeTabIndex: 0,
      tabs: []
    }
  },
  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    }
  },
  computed: {
    progressBarStyle() {
      return {
        width: `${this.progress}%`
      }
    },
    tabCount() {
      return this.tabs.length
    },
    maxTabSize() {
      return this.tabs.length - 1
    },
    progress() {
      const stepPercentage = (1 / this.tabCount) * 100
      return (this.activeTabIndex + 1) * stepPercentage
    },
    displayPrevButton() {
      return this.activeTabIndex !== 0
    },
    isLastStep() {
      return this.activeTabIndex === this.maxTabSize
    }
  },
  mounted() {
    this.navigateToTab(this.activeTabIndex)
  },
  methods: {
    addTab(item) {
      const index = this.$slots.default.indexOf(item.$vnode)
      this.tabs.splice(index, 0, item)
    },
    removeTab() {},
    navigateToTab(index) {
      this.changeTab(this.activeTabIndex, index)
    },
    changeTab(oldIndex, newIndex) {
      const oldTab = this.tabs[oldIndex]
      const newTab = this.tabs[newIndex]

      if (oldTab) {
        oldTab.active = false
      }

      if (newTab) {
        newTab.active = true
      }

      this.activeTabIndex = newIndex
    },
    nextTab() {
      this.changeTab(this.activeTabIndex, this.activeTabIndex + 1)
    },
    previousTab() {
      this.changeTab(this.activeTabIndex, this.activeTabIndex - 1)
    }
  }
}
</script>
