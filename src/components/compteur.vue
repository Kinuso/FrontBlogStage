<template>
  <div class="compteur">
   {{ prefix }} Compteur : {{ count }} x 2 = {{  double }}
  </div>
  <button  @click="handleClick">
    Incrémenter
  </button>
    
</template>





<script setup>

import { computed, ref } from 'vue';
const count =ref(0)

function handleClick() {
  count.value++
  emit('increment')
}

defineProps ({
  prefix: String
})

const emit = defineEmits(['increment'])
const color = computed(()=> count.value >= 3 ? "green" : "black")
const double = computed(() => count.value * 2)

</script>

<style>

.compteur {
  color:  v-bind(color)
}

</style>