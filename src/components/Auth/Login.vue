<template>
	<v-container class="fill-height" fluid>
		<v-row align="center" justify="center">
			<v-col cols="12" sm="8" md="6">
				<v-card class="elevation-12">
					<v-toolbar color="primary" dark flat>
						<v-toolbar-title>Login form</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form ref="form" 
						v-model="valid" 
						lazy-validation>
							<v-text-field label="Email" name="email" prepend-icon="mdi-account" type="email" :rules="emailRules" v-model="email">
							</v-text-field>

							<v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="password" :rules="pasRules" :counter="6">
							</v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn :disabled="!valid" color="primary" @click="onSubmit()">Login</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				valid: false,
				email: '',
				password: '',
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				],
				pasRules: [
					v => !!v || 'Password is required',
					v => (v && v.length >= 6) || 'Password must be more than 6 characters',
				]
			}
		},
		methods: {
			onSubmit() {
				if (this.$refs.form.validate()) {
					let user = {
						email: this.email,
						password: this.password
					}
					console.log(user)
				}

			}
		}
	}
</script>