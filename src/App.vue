<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" temporary app>

			<v-list>
				<v-list-item-group color="primary">
					<v-list-item 
					v-for="link in links" 
					:key="link.title"
					:to="link.url">
						<v-list-item-icon>
							<v-icon 
							v-text="link.icon"></v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="link.title"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>



		</v-navigation-drawer>

		<v-card flat height="80px">
			<v-toolbar dark color="primary">
				<v-app-bar-nav-icon 
				@click="drawer = !drawer"
				class="d-flex d-md-none">
				</v-app-bar-nav-icon>

				<v-toolbar-title>
					<router-link 
					to="/" 
					tag="span">
						Ad application
					</router-link>
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items class="hidden-sm-and-down">
					<v-btn color="primary" 
					depressed
					v-for="link in links" 
					:key="link.title"
					:to="link.url">
						<v-icon 
						left 
						v-text="link.icon">mdi-access-point-network</v-icon>
						{{ link.title }}
					</v-btn>
				</v-toolbar-items>

			</v-toolbar>
		</v-card>

		<v-main>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<router-view></router-view>
				</v-row>
			</v-container>
		</v-main>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		props: {
			source: String,
		},
		data() {
			return {
				drawer: false,
				links: [
					{title: 'Login', icon: 'mdi-lock', url: '/login'},
					{title: 'Registration', icon: 'mdi-face', url: '/registration'},
					{title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
					{title: 'New ad', icon: 'mdi-note-plus-outline', url: '/new'},
					{title: 'My ads', icon: 'mdi-format-list-numbered', url: '/list'},
				]
			}
		}
	}
</script>