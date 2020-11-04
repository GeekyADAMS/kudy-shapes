<template>
<div class="t-flex t-items-center t-justify-center hexagon" :class="{hexagon: name === 'hexagon', star: name === 'star', triangle: name === 'triangle', trapezoid: name === 'trapezoid', arrow: name === 'arrow', chevron: name === 'chevron', cross: name === 'cross', heptagon: name === 'heptagon', close: name === 'close' }" :style="{width: `${breadth}px`, height: `${length}px`, backgroundColor: fill, transform: `rotate(${rotation}deg)`}">
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
      default: 'red'
    },
    rotation: {
      default: 0
    }
  }
}
</script>

<style scoped>
.hexagon {
  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.star {
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.triangle {
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.trapezoid {
  -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.arrow {
  -webkit-clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
  clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
}

.chevron {
  -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}

.cross {
  -webkit-clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
  clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
}

.heptagon {
  -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}

.close {
  -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}
</style>
