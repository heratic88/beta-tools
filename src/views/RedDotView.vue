<template>
  <div class="flex h-screen w-screen items-center justify-center bg-black select-none">
    <div v-if="configLoaded">
      <RedDot
        :imageUrl="imageUrl"
        :videoUrl="videoUrl"
        :xPercent="xPercent"
        :yPercent="yPercent"
      />
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import RedDot from '@/components/RedDot.vue'
import { buildVideoUrl } from '@/helpers'

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

      this.xPercent = config.x
      this.yPercent = config.y

      if (config.image) {
        this.imageUrl = config.image
        this.videoUrl = null

        this.$nextTick(() => { this.configLoaded = true })
      } else if (config.video) {
        buildVideoUrl(config.video).then((url) => {
          this.imageUrl = null
          this.videoUrl = url

          this.$nextTick(() => { this.configLoaded = true })
        })
      }
    },
  }
}
</script>
