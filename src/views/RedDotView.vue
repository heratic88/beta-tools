<template>
  <div class="flex h-screen w-screen items-center justify-center bg-black select-none">
    <div v-if="configLoaded">
      <RedDot
        :imageUrl="imageUrl"
        :xPercent="xPercent"
        :yPercent="yPercent"
      />
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import RedDot from '@/components/RedDot.vue'

export default {
  components: { RedDot },
  data() {
    return {
      configLoaded: false
    }
  },

  computed: {},

  mounted() {
    this.loadConfig()
  },

  methods: {
    loadConfig() {
      let configString = this.$route.params.config
      configString = Base64.decode(configString)
      const config = JSON.parse(configString)

      this.imageUrl = config.image
      this.xPercent = config.x
      this.yPercent = config.y

      this.$nextTick(() => {
        this.configLoaded = true
      })
    }
  }
}
</script>
