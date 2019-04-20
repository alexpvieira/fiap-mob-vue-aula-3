<template>
    <div>
        <p><button @click="incrementCount()">INCREMENT ACTION SON COMPONENT</button></p>
		<p><button @click="decrementCount()">DECREMENT ACTION SON COMPONENT</button></p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
		...mapActions('example', ['incrementCount', 'decrementCount'])
	}
}
</script>

<style>

</style>
