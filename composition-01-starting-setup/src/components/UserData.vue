<template>
  <div>
    <h2>{{ uName }}</h2>

    <h2>{{ age }}</h2>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onBeforeMount,
} from 'vue';
export default {
  props: ['lastName', 'firstName'],
  // computed: {
  //     userName() {
  //         return this.firstName + ' ' + this.lastName;
  //     }
  // }
  setup(props) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    // context.emit('save-data', 1);

    onBeforeUnmount(() => {
        console.log('beforeUnMount');
    })
    onMounted(() => {
        console.log('onMounted');
    })
    onBeforeUpdate(() => {
        console.log('onBeforeMounted');
    })
    onUpdated(() => {
        console.log('onUpdated');
    })
    onBeforeMount(() => {
        console.log('onBeforeMount');
    })
    onUnmounted(() => {
        console.log('onUnMounted');
    })
    return { uName, age };
  },
};
</script>