<template>
	<div id="app">
		<my-header title="ODYSEE"></my-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from './components/Header';

	export default {
    name: 'app',
		components: {
			'my-header' :  Header ()
		}
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>