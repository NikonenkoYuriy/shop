<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text-secondary mb-3">Ad list</h1>
				
				<v-card 
				class="elevation-10 mb-3"
				v-for="ad in ads"
				:key="ad.id">
					<v-layout row>
						<v-flex xs4>
							<v-img
							 height="200"
							 :src="ad.imageSrc"
							>
							</v-img>
						</v-flex>
						<v-flex xs8>
							<v-card-text>
								<h2 class="text-primary">{{ ad.title }}</h2>
								<p>{{ ad.discription }}</p>
							</v-card-text>
							<v-card-actions>
								<v-btn 
								 class="info" 
								 absolute
								 right
								 :to="'/ad/'+ad.id"
								>
								Open
								</v-btn>
							</v-card-actions>
						</v-flex>
					</v-layout>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				 ads: [
					 {
						 title: 'First ad',
						 discription: 'Hello i am description',
						 promo: false,
						 imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
						 id: '1237'
					 },
					 {
						 title: 'Second ad',
						 discription: 'Hello i am description',
						 promo: false,
						 imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
						 id: '1236'
					 }
				 ]
			}
		}
	}
</script>
