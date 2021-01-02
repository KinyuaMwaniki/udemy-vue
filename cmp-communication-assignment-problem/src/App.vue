<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-sm-12">
        <user-data-component @add-user="addUser"> </user-data-component>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <active-user-component
          v-for="user in users"
          :key="user.name"
          :name="user.name"
          :age="user.age"
        ></active-user-component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Felix Mwaniki",
          age: 30,
        },
        {
          name: "Ann Kinyua",
          age: 30,
        },
        {
          name: "Elsa Wanjiru",
          age: 0,
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
        const newUser = {
            name: name,
            age: age,
        }

        this.users.push(newUser);
    },
  },
};
</script>

<style>
</style>
    