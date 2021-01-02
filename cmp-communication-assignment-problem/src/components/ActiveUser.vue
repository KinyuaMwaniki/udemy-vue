<template>
  <div class="card">
    <div class="card-header">{{ name }}</div>
    <div class="card-body">
      <h5 class="card-title">Age</h5>
      <p class="card-text">
          {{ age }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  emits: {},
  data() {
    return {

    };
  },
  methods: {},
};
</script>