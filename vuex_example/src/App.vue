<template>
	<div id="app">
		<p>State count: {{ count }}</p>
		<!-- <p>Getter count status true: {{ activeUsersCount }}</p> -->

		<!-- <p><button @click="INCREMENT()">INCREMENT MUTATION</button></p>
		<p><button @click="DECREMENT()">DECREMENT MUTATION</button></p> -->

		<!-- <p><button @click="incrementCount()">INCREMENT ACTION</button></p>
		<p><button @click="decrementCount()">DECREMENT ACTION</button></p> -->

		<!-- <son-compontent /> -->
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import SonComponent from './components/SonComponent'

export default {
	components: {
		'son-compontent': SonComponent
	},

	computed: {
		count() {
			return this.$store.state.example.count
		},

		// ...mapState('example', ['count'])
		// ...mapGetters('example', ['activeUsersCount'])
	},

	methods: {
		// ...mapMutations('example', ['INCREMENT', 'DECREMENT'])
		// ...mapActions('example', ['incrementCount', 'decrementCount'])
	}
}
</script>

<style>

</style>
