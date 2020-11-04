<template>
<div class="t-w-screen t-border-box t-p-10 t-pb-5 t-flex t-flex-col">
  <div class="t-flex t-flex-row t-items-center">
    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-green-600 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-justify-center clickable-2 t-font-bold t-mr-4': true}" @click.prevent="$router.push('/')">
      <span>Create New Shape</span>
    </button>

    <button type="submit" :class="{'w-fit t-rounded-lg t-p-2 t-px-8 t-border-box t-bg-red-600 t-text-center t-flex t-items-center t-text-white t-border-0 t-outline-none t-justify-center clickable-2 t-font-bold t-mr-0': true}" @click.prevent="removeAll">
      <span>Delete All Saved Shapes</span>
    </button>
  </div>

  <h1 class="t-mt-10 t-font-bold t-text-white t-text-3xl">Saved Shapes</h1>
  <p class="t-mt-2 t-font-medium t-text-white">Double tap a shape to remove from saved shapes.</p>

  <div class="t-w-full t-mt-10 t-flex t-flex-row t-flex-wrap x-scroll">
    <p class="t-mt-20 t-text-white t-text-center t-font-extrabold t-opacity-50  t-text-4xl t-mx-auto" v-if="!shapes.length">No shapes created.</p>

    <div v-for="(shape, index) in shapes" :key="index" class="t-mr-6 t-mt-4 t-mb-6 t-cursor-pointer t-flex t-flex-col t-items-center" @dblclick.prevent="removeShape(index)">
      <Square :size="shape.length" :stroke="shape.strokeColor" :fill="shape.fillColor" v-show="shape.name === 'square'" :rotation="shape.rotation" />
      <Circlee :size="shape.length" :stroke="shape.strokeColor" :fill="shape.fillColor" v-show="shape.name === 'circle'" :rotation="shape.rotation" />
      <Oval :size="shape.length" :stroke="shape.strokeColor" :fill="shape.fillColor" :rotation="shape.rotation" v-show="shape.name === 'oval'" />
      <Rectangle :length="shape.length" :breadth="shape.breadth" :stroke="shape.strokeColor" :fill="shape.fillColor" :name="shape.name" :rotation="shape.rotation" v-show="['rectangle', 'parallelogram'].includes(shape.name)" />
      <clip-shapes :length="shape.length" :breadth="shape.breadth" :stroke="shape.strokeColor" :fill="shape.fillColor" :name="shape.name" :rotation="shape.rotation" v-show="['hexagon', 'star', 'triangle', 'trapezoid', 'arrow', 'chevron', 'cross', 'heptagon', 'close'].includes(shape.name)" />

      <p class="t-mt-4 t-font-medium t-text-lg" :style="{color: shape.fillColor}">{{shape.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
import Square from '@/components/shapes/square'
import Circlee from '@/components/shapes/circle'
import Oval from '@/components/shapes/oval'
import Rectangle from '@/components/shapes/rectangle'
import ClipShapes from '@/components/shapes/clip-shapes'

export default {
  components: {
    Square,
    Circlee,
    Oval,
    Rectangle,
    ClipShapes
  },
  data() {
    return {
      shapes: []
    }
  },
  methods: {
    removeShape(index) {
      this.shapes.splice(index, 1)
      localStorage.setItem('savedShapes', JSON.stringify(this.shapes))

      this.$store.dispatch('flashNotif', {
        message: {
          title: 'Shape Removed',
          text: 'You just removed a shape from the list of saved shapes.'
        },
        type: 'success',
        pos: 'top',
        duration: '3000',
        vibrate: true
      })
    },
    removeAll(index) {
      if (this.shapes.length) {
        this.shapes = []
        localStorage.removeItem('savedShapes')

        this.$store.dispatch('flashNotif', {
          message: {
            title: 'All Shape Removed',
            text: 'You just deleted all saved shape.'
          },
          type: 'success',
          pos: 'top',
          duration: '3000',
          vibrate: true
        })
      }
    }
  },
  mounted() {
    if (JSON.parse(localStorage.getItem('savedShapes'))) {
      console.log('Heeey: ', JSON.parse(localStorage.getItem('savedShapes')))
      this.shapes = JSON.parse(localStorage.getItem('savedShapes'))
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>
