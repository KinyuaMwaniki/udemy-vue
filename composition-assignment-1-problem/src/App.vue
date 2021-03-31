<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-if="isHeaderVisible">{{ course_goal }}</h3>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleHeader">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<script>
// import { reactive } from 'vue';
export default {
  setup() {
    // const course_goal = ref('Learn vue');
    // const headerIsVisible = ref(false);

    // function toggleHeader() {
    //   headerIsVisible.value = !headerIsVisible.value;
    // }
    // return { course_goal, headerIsVisible, toggleHeader};

    // const data = ref({
    //   course_goal: "Learn Vue",
    //   headerIsVisible: true,
    // });

    // function toggleHeader() {
    //   data.value.headerIsVisible = !data.value.headerIsVisible
    // }

    // return { data, toggleHeader }

    // const data = reactive({
    //   course_goal: "Learn Vue",
    //   headerIsVisible: true
    // });

    // function toggleHeader() {
    //   data.headerIsVisible = !data.headerIsVisible
    // }

    // return {data, toggleHeader};    
  },
  data() {
    return {
      course_goal: "Learn Vue",
      isHeaderVisible: false,
    }
  },
  methods: {
    toggleHeader() {
      this.isHeaderVisible = !this.isHeaderVisible;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>