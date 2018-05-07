<template>
	<v-layout row mt-5>
		<v-flex xs6 offset-xs3>
			<div class="white elevation-2">
				<!-- "flat" prop removes drop-shadow, "dense" prop makes height smaller -->
				<v-toolbar flat dense class="primary" dark>
					<v-toolbar-title>Login</v-toolbar-title>
				</v-toolbar>
				<div class="text-xs-center pl-4 pr-4 pt-2 pb-2">
					<v-text-field v-model="email" type="email" label="Email"></v-text-field>
					<br>
					<v-text-field v-model="password" label="Password"></v-text-field>
					<br>
					<div v-html="error" class="error"/>
					<v-btn @click="login" color="primary">Login</v-btn>
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
	data () {
		return {
			email: '',
			password: '',
			error: null
		}
	},
	methods: {
		async login () {
			try {
				await AuthenticationService.login({
					email: this.email,
					password: this.password
				})
			} catch (err) {  // return status other than 200 (i think)
				// err returned from axios then we access the error property we created in express
				this.error = err.response.data.error 
			}
		}
	}

}
</script>

<style scoped>
	.error {
		color: red;
	}
</style>



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