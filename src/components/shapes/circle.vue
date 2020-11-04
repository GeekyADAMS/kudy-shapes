<template>
<div class="t-flex t-items-center t-justify-center" :style="{width: `${size}px`, height: `${size}px`, border: `5px solid ${stroke}`, backgroundColor: fill, borderRadius: '100%', transform: `rotate(${rotation}deg)`}">
</div>
</template>

<script>
export default {
  props: {
    size: {
      default: 100
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
