<template>
	<div id="app">
		<p v-for="user in users">
			<strong>Name:</strong> {{ user.name }}<br>
			<strong>Email:</strong> {{ user.email }}<br>
			<strong>Phone:</strong> {{ user.phone }}
		</p>
		
		<form>
			<p><input type="text" v-model="title" /></p>

			<p><textarea rows="3" v-model="body" /></p>

			<button @click.prevent="createPost()">Create Post</button>
		</form>

		<h2 v-if="posts.length > 0">Posts</h2>
		
		<span v-for="(post, index) in posts">
			<h1>{{ post.title }}</h1>

			<p>{{ post.body }}</p>

			<button @click.prevent="deletePost(index, post.id)">Delete Post</button>
		</span>
	</div>
</template>

<script>
export default {
	name: 'app',

	data() {
		return {
			users: [],
			posts: [],
			title: '',
			body: ''
		}
	},

	methods: {
		fetchToDoList() {
			let header = { 
				headers: { 'Content-Type': 'application/json'} 
			} 

			this.$axios.get('https://jsonplaceholder.typicode.com/users/', header)
			.then((response) => {
				console.log(response)
				this.users = response.data
			})
			.catch((error) => {
				console.log(error)
			})
		},

		createPost() {
			let body = {
				title: this.title,
				body: this.body,
				userId: 1
			}

			this.$axios.post('https://jsonplaceholder.typicode.com/posts/', body)
			.then((response) => {
				console.log(response)
				this.posts.push(response.data)
				
				this.title = ''
				this.body = ''
			})
			.catch((error) => {
				console.log(error)
			})
		},

		deletePost(index, id) {
			this.$axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				console.log(response)
				this.posts.splice(index, 1)
				
				this.title = ''
				this.body = ''
			})
			.catch((error) => {
				console.log(error)
			})
		}
	},

	created() {
		this.fetchToDoList()
	}
}
</script>

<style>
li {
	list-style-type: none;
}
</style>
