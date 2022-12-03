<template>
  <div class="flex h-screen w-screen items-center justify-center bg-black">
    <div class="fixed top-10 left-10 border-2 border-black bg-gray-100 w-48 z-50">
      <input class="block w-full border-b" placeholder="Image URL" v-model="imageUrl">
      <input class="block w-full border-b" title="X Position" v-model="xPercent" type="number" min="0" max="100">
      <input class="block w-full border-b" title="Y Position" v-model="yPercent" type="number" min="0" max="100">
      <button class="bg-blue-500 text-white w-full" @click="copyLink">Copy Link</button>
      <button class="bg-blue-500 text-white w-full" @click="gotoLink">Go To Link</button>

      <input v-model="url" ref="copyInput" class="fixed -top-10 -left-10">
    </div>

    <RedDot
      :imageUrl="imageUrl"
      :xPercent="parseFloat(xPercent)"
      :yPercent="parseFloat(yPercent)"
      :alwaysVisible="true"
      @clickImage="clickImage"
    />
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import RedDot from '@/components/RedDot.vue'

const DEFAULT_IMAGE = 'https://cdni.pornpics.com/1280/1/141/21367141/21367141_014_e152.jpg'

export default {
  components: { RedDot },
  data() {
    return {
      configLoaded: false,

      imageUrl: DEFAULT_IMAGE,
      xPercent: 50,
      yPercent: 50
    }
  },

  computed: {
    config() {
      return {
        image: this.imageUrl,
        x: parseFloat(this.xPercent),
        y: parseFloat(this.yPercent),
      }
    },

    configString() {
      return Base64.encode(JSON.stringify(this.config))
    },

    url() {
      return this.$router.resolve({ name: 'red-dot', params: { config: this.configString } }).href
    }
  },

  methods: {
    clickImage(event) {
      const rect = event.target.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      this.xPercent = ((x / event.target.width) * 100).toFixed(2)
      this.yPercent = ((y / event.target.height) * 100).toFixed(2)
    },
    copyLink() {
      this.$refs.copyInput.select()
      this.$refs.copyInput.setSelectionRange(0, 99999)

      const baseUrl = import.meta.env.BASE_URL

      if (baseUrl === '/') {
        const url = window.location.origin + '/' + this.$refs.copyInput.value
        navigator.clipboard.writeText(url)
      } else {
        const url = window.location.origin + import.meta.env.BASE_URL + this.$refs.copyInput.value
        navigator.clipboard.writeText(url)
      }
    },

    gotoLink() {
      this.$router.push(this.url.slice(1))
    },
  }
}
</script>
