<template>
  <div>
    <div class="fixed top-0 left-0 bottom-0 right-0" @mousedown="show" @mouseup="hide">
      <div class="flex fixed items-center justify-center top-0 left-0 bottom-0 right-0">
        <div class="fixed top-0 left-0 bottom-0 right-0 z-40" v-if="!alwaysVisible"></div>

        <img
          :src="imageUrl"
          class="image object-cover overflow-hidden h-full z-20"
          :class="{ 'opacity-0': !visible, 'opacity-100': visible || alwaysVisible }"
          @load="onLoad"
          @click="clickImage"
          ref="image"
        >
      </div>
    </div>

    <div class="dot" ref="dot" v-show="dotPositioned && !visible || alwaysVisible"></div>

    <div class="text-white text-4xl" v-if="!isLoaded">Loading, please wait...</div>

    <div class="text-white text-2 fixed bottom-4 left-16 right-16 text-center" v-if="isLoaded && !visible">
      Focus your eyes on the red dot, then tap and hold to reveal the image
      <br/>
      Don't move your eyes! Let go as soon as you do
      <div v-if="duration">
        <br />You lasted {{ friendlyDuration }}
      </div>
    </div>
  </div>
</template>

<script>
// TODO: timer? instructions
export default {
  props: {
    imageUrl: String,
    xPercent: Number,
    yPercent: Number,
    alwaysVisible: Boolean
  },
  data() {
    return {
      visible: false,
      imageLoaded: false,
      dotPositioned: false,
      imageWidth: null,
      imageHeight: null,
      offsetX: null,
      offsetY: null,
      startTime: null,
      duration: null
    }
  },

  computed: {
    isLoaded() {
      return this.imageLoaded && this.dotPositioned
    },
    dotX() {
      return this.offsetX + (this.imageWidth * (this.xPercent / 100)) - 4
    },
    dotY() {
      return this.offsetY + (this.imageHeight * (this.yPercent / 100)) - 4
    },
    friendlyDuration() {
      if (!this.duration) return

      return `${(this.duration / 1000).toFixed(2)} sec`
    }
  },

  methods: {
    onLoad() {
      this.imageLoaded = true

      this.$nextTick(() => {
        const rect = this.$refs.image.getBoundingClientRect()
        this.imageWidth = rect.width
        this.imageHeight = rect.height
        this.offsetX = rect.left
        this.offsetY = rect.top

        this.positionDot()
      })
    },

    positionDot() {
      this.$refs.dot.style.left = `${this.dotX}px`
      this.$refs.dot.style.top = `${this.dotY}px`

      this.dotPositioned = true
    },

    show(event) {
      if (event.which === 1) {
        this.visible = true
        this.startTime = performance.now()
      } else {
        this.visible = false
        this.startTime = null
      }
    },
    hide() {
      this.visible = false
      this.duration = performance.now() - this.startTime
      this.startTime = null
    },

    clickImage(event) {
      this.$emit('clickImage', event)
    }
  },

  watch: {
    xPercent() { this.positionDot() },
    yPercent() { this.positionDot() },
  }
}
</script>

<style scoped>
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  position: fixed;
  border-radius: 50%;
}
</style>
