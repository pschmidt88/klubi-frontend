<template>
  <div class="form-wizard">
    <div class="step-container">
      <div class="step-wizard">
        <div class="progress">
          <div class="progressbar" :style="progressBarStyle"></div>
        </div>
        <ul class="nav">
          <slot name="step" v-for="(tab, index) in tabs"
                :tab="tab"
                :index="index">
            <form-wizard-step
              :tab="tab"
              :index="index"
              @click.native="navigateToTab(index)">
            </form-wizard-step>
          </slot>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>

    <b-row class="wizard-footer">
      <b-col align-self="start" class="text-left">
        <b-button v-if="displayPrevButton" @click="previousTab">Zurück</b-button>
      </b-col>

      <b-col align-self="end" class="text-right">
        <b-button right variant="primary" v-if="isLastStep">Fertig</b-button>
        <b-button right variant="primary" v-else @click="nextTab">Nächster Schritt</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import FormWizardStep from "./FormWizardStep";

  export default {
    name: "FormWizard",
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
    methods: {
      addTab(item) {
        let index = this.$slots.default.indexOf(item.$vnode)
        this.tabs.splice(index, 0, item)
      },
      removeTab(item) {
        console.log(`removing tab... ${item}`)
      },
      navigateToTab(index) {
        this.changeTab(this.activeTabIndex, index)
      },
      changeTab(oldIndex, newIndex) {
        let oldTab = this.tabs[oldIndex]
        let newTab = this.tabs[newIndex]

        if (oldTab) {
          oldTab.active = false
        }

        if (newTab) {
          newTab.active = true
        }

        this.activeTabIndex = newIndex
      },
      nextTab () {
        this.changeTab(this.activeTabIndex, this.activeTabIndex + 1)
      },
      previousTab () {
        this.changeTab(this.activeTabIndex, this.activeTabIndex - 1)
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
        let stepPercentage = 1 / this.tabCount * 100
        return (this.activeTabIndex+1) * stepPercentage
      },
      displayPrevButton () {
        return this.activeTabIndex !== 0
      },
      isLastStep () {
        return this.activeTabIndex === this.maxTabSize
      }
    },
    mounted () {
      this.navigateToTab(this.activeTabIndex)
    }
  }
</script>
