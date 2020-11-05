<template>
<div class="t-flex t-items-center t-justify-center" :class="{'skewSides': name === 'parallelogram'}" :style="{width: `${breadth}px`, height: `${length}px`, border: `5px solid ${stroke}`, backgroundColor: fill, transform: `rotate(${rotation}deg)`}">
</div>
</template>

<script>
export default {
  props: {
    name: {
      required: true
    },
    length: {
      default: 100
    },
    breadth: {
      default: 200
    },
    stroke: {
      default: '#000000'
    },
    fill: {
      default: 'white'
    },
    rotation: {
      default: 0
    }
  }
}
</script>

<style scoped>
.skewSides {
  transform: skew(25deg);
  transition: transform .5s ease;
}
</style>
