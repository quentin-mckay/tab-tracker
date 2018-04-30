<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" placeholder="email" name="email">
    <br>
    <input v-model="password" type="password" placeholder="password" name="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
  // demonstrating 2-way binding with v-model
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<style>

</style>
