<template>
  <div>
    <div v-show="isLoaded">
      <div class="flex fixed items-center justify-center top-0 left-0 bottom-0 right-0">
        <img :src="backgroundImageUrl" v-if="backgroundImageUrl" class="relative object-cover overflow-hidden z-30" :style="backgroundStyle" @load="onBackgroundLoad">
      </div>

      <div class="flex fixed items-center justify-center top-0 left-0 bottom-0 right-0">
        <img :src="imageUrl" class="image object-cover overflow-hidden h-full z-20" @load="onLoad" v-show="isLoaded" ref="image">
      </div>
    </div>

    <div class="text-white text-4xl" v-if="!isLoaded">Loading, please wait...</div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    backgroundImageUrl: String,
    barHeight: [Number, String],
    barSpeed: [Number, String],
  },

  data() {
    return {
      imageLoaded: false,
      backgroundLoaded: false,
      imageWidth: null,
      imageHeight: null,
    }
  },

  mounted() {
    this.updateVariables()
  },

  methods: {
    onLoad() {
      this.imageLoaded = true

      this.$nextTick(() => {
        this.imageWidth = this.$refs.image.width
        this.imageHeight = this.$refs.image.height
      })
    },

    onBackgroundLoad() {
      this.backgroundLoaded = true
    },

    updateVariables() {
      document.documentElement.style.setProperty('--roller-bar-height', `${this.barHeight}px`)
      document.documentElement.style.setProperty('--roller-bar-speed', `${this.barSpeed}s`)
    },
  },

  computed: {
    isLoaded() {
      if (this.backgroundImageUrl) {
        return this.imageLoaded && this.backgroundLoaded
      }

      return this.imageLoaded
    },

    backgroundStyle() {
      if (!this.isLoaded) return 'display: none'

      return `max-height: ${this.imageHeight}px; max-width: ${this.imageWidth}px`
    }
  },

  watch: {
    barHeight() {
      this.updateVariables()
    },

    barSpeed() {
      this.updateVariables()
    },
  },
}
</script>

<style>
:root {
  --roller-bar-height: 1px;
  --roller-bar-speed: 1s;
}
</style>

<style scoped>
@keyframes roller {
  from { clip-path: inset(calc(0px - var(--roller-bar-height)) 0px 100% 0px) }
  to { clip-path: inset(100% 0px calc(0px - var(--roller-bar-height)) 0px) }
}

.image {
  animation: roller var(--roller-bar-speed) infinite linear;
}
</style>
