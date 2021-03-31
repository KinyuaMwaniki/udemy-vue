<template>
  <section class="container">
    <!-- <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3> -->

    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, provide } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Felix');
    const uAge = ref(31);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    // const user = reactive({
    //   name: 'Maximillian',
    //   age: 31
    // });

    // setTimeout(() => {
    //   uName.value = 'Mwaniki';
    //   user.name = 'Mwaniki';
    //   user.age = 30;
    // }, 2000);

    provide('userAge', uAge);

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      console.log('setLastName');
      console.log(lastNameInput.value);
      lastName.value = lastNameInput.value.value;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    // watch([uAge, uName], function (newValues, oldValues) {
    //   console.log('Old Age: ' + oldValues[0]);
    //   console.log('New Age: ' + newValues[0]);
    // });

    return {
      uName,
      setFirstName,
      setLastName,
      firstName,
      lastNameInput,
      setNewAge,
      uAge,
      lastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // provide() {
  //   return { age: uAge };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>