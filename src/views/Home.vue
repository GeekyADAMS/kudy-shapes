<template>
<div class="dark_bg t-w-full t-h-full t-border-box t-p-5 lg:t-p-12 t-flex lg:t-flex-row t-flex-col t-justify-between">
  <div class="t-hidden t-top-5 lg:t-flex t-flex-col t-items-center t-w-3/5 lg:t-w-1/5 t-mr-20" style="z-index: 1000;">
    <Configuration ref="configs" />

    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-green-600 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-mt-5 t-justify-center clickable-2 t-font-bold t-mr-0 t-ml-auto': true}" @click.prevent="saveShape">
      <span>Save Shape</span>
    </button>

    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-orange-600 t-mb-4 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-mt-5 t-justify-center clickable-2 t-font-bold t-mr-0 t-ml-auto': true}" @click.prevent="$router.push('/saved-shapes')">
      <span>See saved shapes</span>
    </button>
  </div>

  <div class="t-flex lg:t-hidden t-flex-row t-items-center t-mb-4 t-flex-row">
    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-orange-600 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-justify-center clickable-2 t-font-bold t-mr-4': true}" @click.prevent="showMobileConfig = true">
      <span>New</span>
    </button>

    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-green-600 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-justify-center clickable-2 t-font-bold t-mr-4': true}" @click.prevent="saveShape">
      <span>Save Shape</span>
    </button>

    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-range-600 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-justify-center clickable-2 t-font-bold t-mr-0': true}" @click.prevent="$router.push('/saved-shapes')">
      <span>See all</span>
    </button>
  </div>

  <div class=" t-w-full lg:t-w-4/5 t-h-full t-rounded-lg t-bg-white t-flex t-items-center t-justify-center">
    <Square :size="shape.length" :stroke="shape.strokeColor" :fill="shape.fillColor" v-show="shape.name === 'square'" :rotation="shape.rotation" />
    <Circlee :size="shape.length" :stroke="shape.strokeColor" :fill="shape.fillColor" v-show="shape.name === 'circle'" :rotation="shape.rotation" />
    <Oval :size="shape.length" :stroke="shape.strokeColor" :fill="shape.fillColor" :rotation="shape.rotation" v-show="shape.name === 'oval'" />
    <Rectangle :length="shape.length" :breadth="shape.breadth" :stroke="shape.strokeColor" :fill="shape.fillColor" :name="shape.name" :rotation="shape.rotation" v-show="['rectangle', 'parallelogram'].includes(shape.name)" />
    <clip-shapes :length="shape.length" :breadth="shape.breadth" :stroke="shape.strokeColor" :fill="shape.fillColor" :name="shape.name" :rotation="shape.rotation" v-show="['hexagon', 'star', 'triangle', 'trapezoid', 'arrow', 'chevron', 'cross', 'heptagon', 'close'].includes(shape.name)" />
  </div>
</div>
</template>

<script>
import Configuration from '@/components/settings/configuration'
import Square from '@/components/shapes/square'
import Circlee from '@/components/shapes/circle'
import Oval from '@/components/shapes/oval'
import Rectangle from '@/components/shapes/rectangle'
import ClipShapes from '@/components/shapes/clip-shapes'

export default {
  name: 'Home',
  components: {
    Configuration,
    Square,
    Circlee,
    Oval,
    Rectangle,
    ClipShapes
  },
  data() {
    return {
      shape: {},
      savedShapes: [],
      showMobileConfig: false
    }
  },
  watch: {
    '$refs.configs.$data.shapeProps': {
      handler(newValue) {
        this.shape = newValue
        if (newValue.name === 'rectangle' && (newValue.length === newValue.breadth)) {
          this.shape.breadth += 15
        }
        localStorage.setItem('shapeProps', JSON.stringify(this.shape))
      },
      deep: true
    }
  },
  methods: {
    saveShape() {
      if (this.shape.name === 'pick shape') return

      this.savedShapes.push(this.shape)
      localStorage.setItem('savedShapes', JSON.stringify(this.savedShapes))

      this.$store.dispatch('flashNotif', {
        message: {
          title: 'Shape Saved',
          text: 'Your created shape has been saved with it\'s properties.'
        },
        type: 'success',
        pos: 'top',
        duration: '3000',
        vibrate: true
      })
    }
  },
  mounted() {
    this.shape = this.$refs.configs.$data.shapeProps

    if (JSON.parse(localStorage.getItem('savedShapes'))) {
      console.log('Heeey: ', JSON.parse(localStorage.getItem('savedShapes')))
      this.savedShapes = JSON.parse(localStorage.getItem('savedShapes'))
    }
  }
}
</script>

<style scoped>
</style>
