<template>
  <div class="flex h-screen w-screen items-center justify-center bg-black">
    <div class="fixed top-10 left-10 border-2 border-black bg-gray-100 w-48 z-50">
      <input class="block w-full border-b" v-model="imageUrl">
      <input class="block w-full border-b" v-model="backgroundImageUrl">
      <input class="block w-full border-b" v-model="barSpeed" type="range" min="0.1" max="10" step="0.1">
      <input class="block w-full border-b" v-model="barHeight" type="number">
      <button class="bg-blue-500 text-white w-full" @click="copyLink">Copy Link</button>
      <button class="bg-blue-500 text-white w-full" @click="gotoLink">Go To Link</button>

      <input v-model="url" ref="copyInput" class="fixed -top-10 -left-10">
    </div>

    <RollerImage
      :imageUrl="imageUrl"
      :backgroundImageUrl="backgroundImageUrl"
      :barHeight="barHeight"
      :barSpeed="barSpeed"
    />
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import RollerImage from '@/components/RollerImage.vue'

const DEFAULT_IMAGE = 'https://i.imgur.com/wiJwkOC.jpg'
const DEFAULT_BACKGROUND = 'https://i.imgur.com/w6F5Fkf.jpg'

export default {
  components: { RollerImage },
  data() {
    return {
      configLoaded: false,

      imageUrl: DEFAULT_IMAGE,
      backgroundImageUrl: DEFAULT_BACKGROUND,
      barSpeed: 1,
      barHeight: 50,
    }
  },

  computed: {
    config() {
      return {
        image: this.imageUrl,
        background: this.backgroundImageUrl,
        speed: parseInt(this.barSpeed, 10),
        height: parseInt(this.barHeight, 10),
      }
    },

    configString() {
      return Base64.encode(JSON.stringify(this.config))
    },

    url() {
      return this.$router.resolve({ name: 'roller', params: { config: this.configString } }).href
    },
  },

  methods: {
    copyLink() {
      this.$refs.copyInput.select()
      this.$refs.copyInput.setSelectionRange(0, 99999)

      const baseUrl = import.meta.env.BASE_URL

      if (baseUrl === '/') {
        const url = window.location.origin + this.$refs.copyInput.value
        navigator.clipboard.writeText(url)
      } else {
        const url = window.location.origin + import.meta.env.BASE_URL + this.$refs.copyInput.value
        navigator.clipboard.writeText(url)
      }
    },

    gotoLink() {
      this.$router.push(this.url)
    },
  },

  watch: {
    imageUrl() {
      if (this.backgroundImageUrl === DEFAULT_BACKGROUND)
        this.backgroundImageUrl = null
    },
  },
}
</script>

