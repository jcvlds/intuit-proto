<template>
  <q-page class="fit column justify-start items-center">
    <div class="col-9 text-center" style="overflow: auto;min-width: 200px; max-width: 200px;">
      <!-- <h5 class="text-center text-accent">Login</h5> -->
      <h5 class="text-accent">Login</h5>
      <q-form @submit="login" class="q-gutter-md">
        <q-input class="" :rules="[val => !!val || 'Field is required']" ref="name"
          rounded outlined v-model="username" placeholder="Username" dense />
        <q-input class="" :rules="[val => !!val || 'Field is required']" ref="name"
          rounded outlined v-model="password" placeholder="Password" dense type="password" />
        <q-btn type="submit"
          :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Login" class="q-px-lg shadow-2"/>
      </q-form>
    </div>
    <!-- <div v-show="error" class="text-red text-center block q-mt-sm">
      {{ error }}
    </div> -->
  </q-page>
</template>

<script>
// import AuthenticationService from "../services/AuthenticationService";

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: null,
      loading1: false
    }
  },
  methods: {
    async login () {
    }
  }
}
</script>

<style scoped>
</style>
