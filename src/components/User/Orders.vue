<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
			<h2 class="text--secondary">Orders</h2>
				<v-list
				  subheader
				  two-line
				  flat
				>

				  <v-list-item-group
					multiple
				  >
					<v-list-item
					v-for="order in orders"
					:key="order.id">
						<v-list-item-action>
						  <v-checkbox
						    :input-value="order.done"
						  	@change="marcDone(order)"
						    
							color="primary"
						  ></v-checkbox>
						</v-list-item-action>

						<v-list-item-content>
						  <v-list-item-title>{{ order.name }}</v-list-item-title>
						  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
						</v-list-item-content>
					  	<v-list-item-action>
					  		<v-btn 
					  		:to="'/ad/' + order.adId"
					  		class="primary">Open</v-btn>
					  	</v-list-item-action>
					</v-list-item>

				  </v-list-item-group>
				</v-list>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				orders: [
					{
						id: '12gggd',
						name: 'Ivan',
						phone: '050-111-11-11',
						adId: '123',
						done: false
					}
				]
			}
		},
		methods: {
			marcDone (order) {
				order.done = !order.done;
			}
		}
	}
</script>
