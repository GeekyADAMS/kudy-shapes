<template>
<div class="t-text-white t-w-full t-bg-purple-500 h-fit t-rounded-lg t-p-6">
  <div class="t-w-full t-relative shape" ref="ext">
    <label for="shape" class="t-font-bold t-text-lg">Select Shape</label>
    <div id="shape" class="t-mt-2 t-w-full t-border-box t-py-4 t-px-4 t-rounded-full t-bg-transparent border-3 t-h-8 t-flex t-flex-row t-justify-between t-items-center t-cursor-pointer" @click.prevent="showShapes = !showShapes">
      <p>{{shapeProps.name}}</p>
      <img src="~@/assets/images/icons/down-arrow.svg" alt="" width="16px">
    </div>

    <div class="t-absolute t-w-full t-mt-2 t-bg-white t-rounded-lg t-shadow-md t-z-10 t-p-4 t-pb-0 shape-list" v-if="showShapes">
      <p class="t-text-black t-cursor-pointer t-mb-4 hover:t-text-purple-500 t-font-bold" v-for="shape in availableShapes" :key="shape" @click="setShape(shape)">{{shape}}</p>
    </div>
  </div>

  <div class="t-w-full t-mt-6 fill">
    <label for="color">
      <p class="t-font-bold t-text-lg">Select Fill Color</p>
      <div class="t-mt-2 t-w-full t-border-box animated-border t-py-4 t-px-4 t-rounded-full t-bg-transparent t-h-8 t-flex t-flex-row t-justify-between t-items-center t-cursor-pointer t-overflow-hidden border-3">
        <p>{{shapeProps.fillColor}}</p>
        <img src="~@/assets/images/icons/down-arrow.svg" alt="" width="16px">
      </div>
    </label>

    <input type="color" id="color" class="t-mt--20 t-relative t-w-full t-opacity-0" v-model="shapeProps.fillColor">
  </div>

  <div class="t-w-full stroke" v-show="!['hexagon', 'star', 'triangle', 'trapezoid', 'arrow', 'chevron', 'cross', 'Heptagon', 'Close'].includes(shapeProps.name)">
    <label for="stroke-color">
      <p class="t-font-bold t-text-lg">Select Stroke Color</p>
      <div class="t-mt-2 t-w-full t-border-box animated-border t-py-4 t-px-4 t-rounded-full t-bg-transparent t-h-8 t-flex t-flex-row t-justify-between t-items-center t-cursor-pointer t-overflow-hidden border-3">
        <p>{{shapeProps.strokeColor}}</p>
        <img src="~@/assets/images/icons/down-arrow.svg" alt="" width="16px">
      </div>
    </label>

    <input type="color" id="stroke-color" class="t-mt--20 t-relative t-w-full t-opacity-0" v-model="shapeProps.strokeColor">
  </div>

  <div class="t-w-full height">
    <label for="length">
      <p class="t-font-bold t-text-lg" v-show="shapeProps.name != 'circle'">Set Height ({{shapeProps.length}} px)</p>
      <p class="t-font-bold t-text-lg" v-show="shapeProps.name === 'circle'">Set Radius ({{shapeProps.length}} px)</p>
    </label>

    <input v-model="shapeProps.length" type="range" id="length" :min="10" :max="500" step="1" class="range-slider t-w-full" />
  </div>

  <div class="t-w-full t-mt-2 width" v-show="!['circle', 'oval', 'square'].includes(shapeProps.name)">
    <label for="width">
      <p class="t-font-bold t-text-lg">Set Width ({{shapeProps.breadth}} px)</p>
    </label>

    <input v-model="shapeProps.breadth" type="range" :min="10" :max="500" step="1" class="range-slider t-w-full" id="width" />
  </div>

  <div class="t-w-full t-mt-2 rotation">
    <label for="rotation">
      <p class="t-font-bold t-text-lg">Rotate ({{shapeProps.rotation}} deg)</p>
    </label>

    <input v-model="shapeProps.rotation" type="range" :min="0" :max="360" step="1" class="range-slider t-w-full" id="rotation" />
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      showShapes: false,
      shapeProps: {
        name: 'pick shape',
        length: 100,
        breadth: 200,
        fillColor: 'blue',
        strokeColor: 'black',
        strokeWidth: '',
        rotation: 0
      },
      availableShapes: ['Square', 'Circle', 'Oval', 'Triangle', 'Rectangle', 'Trapezoid', 'Parallelogram', 'Star', 'Hexagon', 'Arrow', 'Chevron', 'Cross', 'Heptagon', 'Close']
    }
  },
  created() {
    document.addEventListener('click', this.documentClick)
  },
  destroyed() {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    documentClick(e) {
      if (this.showShapes) {
        const el = this.$refs.ext
        const target = e.target
        if (el !== target && !el.contains(target)) {
          this.showShapes = false
        }
      }
    },
    setShape(shape) {
      this.shapeProps.name = shape.toLowerCase()
      this.showShapes = false
    }
  }
}
</script>

<style scoped>
.shape-list {
  max-height: 400px;
  overflow-y: scroll;
  appearance: none;
}
</style>
