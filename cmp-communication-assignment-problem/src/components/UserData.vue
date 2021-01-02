<template>
  <div>
    <form @submit.prevent="addUser">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="text"
          aria-describedby="name"
          v-model="enteredName"
        />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input
          type="number"
          class="form-control"
          id="number"
          v-model="enteredAge"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  props: {},
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: 0,
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>