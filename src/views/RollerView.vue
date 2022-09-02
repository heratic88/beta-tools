<template>
  <div class="flex h-screen w-screen items-center justify-center bg-black">
    <div class="fixed top-0 left-0 bottom-0 right-0 z-50"></div>

    <div v-if="configLoaded">
      <RollerImage
        :imageUrl="imageUrl"
        :backgroundImageUrl="backgroundImageUrl"
        :barHeight="barHeight"
        :barSpeed="barSpeed"
      />
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import RollerImage from '@/components/RollerImage.vue'

export default {
  components: { RollerImage },
  data() {
    return {
      configLoaded: false,

      imageUrl: null,
      backgroundImageUrl: null,
      barSpeed: null,
      barHeight: null,
    }
  },

  computed: {
  },

  mounted() {
    this.loadConfig()
  },

  methods: {
    loadConfig() {
      let configString = this.$route.params.config
      configString = Base64.decode(configString)
      const config = JSON.parse(configString)

      this.imageUrl = config.image
      this.backgroundImageUrl = config.background
      this.barSpeed = config.speed
      this.barHeight = config.height

      this.$nextTick(() => {
        this.configLoaded = true
      })
    },
  },
}
</script>

