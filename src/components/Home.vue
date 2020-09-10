<template>
	<div>
		<v-container fluid>
			<v-layout row>
				<v-flex>
					 <v-carousel>
						<v-carousel-item
						  v-for="ad in ads"
						  :key="ad.id"
						  :src="ad.imageSrc"
						  reverse-transition="fade-transition"
						  transition="fade-transition"
						>
							<div class="car-link">
								<v-btn class="error" 
								:to="'/ad/'+ad.id">			
									{{ad.title}}
								</v-btn>
							</div>
						</v-carousel-item>
					  </v-carousel>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container>
			<div class="row justify-content-between">
					<v-card
					 v-for="ad in ads"
					 :key="ad.id"
					 min-width="250px"
					 class="cart-item"
					>
					<v-img class="white--text align-end" 
					 height="200px" 
					 :src="ad.imageSrc"
					>
						<v-card-title>{{ad.title}}</v-card-title>
					</v-img>

					<v-card-text class="text--primary">
						<div>{{ad.discription}}</div>
					</v-card-text>

					<v-card-actions>
						<v-btn text
						:to="'/ad/'+ad.id">
							Open
						</v-btn>

						<v-btn raised color="primary">
							Buy
						</v-btn>
					</v-card-actions>
					</v-card>
			</div>
		</v-container>
	</div>
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
				  title: 'First ad',
				  discription: 'Hello i am description',
				  promo: false,
				  imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				   id: '1236'
			  },
			  {
				  title: 'First ad',
				  discription: 'Hello i am description',
				  promo: false,
				  imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				   id: '1235'
			  },
			  {
				  title: 'First ad',
				  discription: 'Hello i am description',
				  promo: false,
				  imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
				  id: '1234'
			  }
		  ]
      }
    },
  }
</script>
