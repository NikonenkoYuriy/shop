<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text-secondary">Create new ad</h1>
				<v-form ref="form" 
						v-model="valid" 
						lazy-validation>
							<v-text-field 
							label="Ad title" 
							name="title"  
							type="text" 
							required
							:rules="[v => !!v || 'Title is required']" 
							v-model="title">
							</v-text-field>

							<v-text-field 
							label="Ad description" 
							name="description" 
							type="text" 
							v-model="description"
							multi-line 
							:rules="[v => !!v || 'Title is required']"  
							>
							</v-text-field>
						</v-form>
						<v-layout row>
							<v-flex xs12>
								 <v-btn
								  class="warning"
								>
								  Upload
								  <v-icon right dark>mdi-cloud-upload</v-icon>
								</v-btn>	
							</v-flex>
						</v-layout>	
						<v-layout row mt-3>
							<v-flex xs12>
								 <img src="" width="200px"alt="">	
							</v-flex>
						</v-layout>
						<v-layout row mt-3>
							<v-flex xs12>
								 <v-switch 
								 v-model="promo" 	
								 class="ma-2" 
								 label="Add promo"></v-switch>
							</v-flex>
						</v-layout>
						<v-layout row mt-3>
							<v-flex xs12>
							 	<v-spacer></v-spacer>
								<v-btn 
								:disabled="!valid"
								class="success"
								@click="createAd"
								>Create ad</v-btn>
							</v-flex>
						</v-layout>				
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				valid: false,
				promo: false,
				title: '',
				description: ''
			}
		},
		methods: {
			createAd () {
				if (this.$refs.form.validate()) {
					let ad = {
						title: this.title,
						description: this.description,
						promo: this.promo
					}
					console.log(ad)
				}
			}
		}
	}
</script>
