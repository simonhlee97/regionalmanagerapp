<template>
  <div id='home-hero'>
    <h1>Welcome to Scranton, PA. Home of Dunder Mifflin.</h1>
    <img src="../../public/img/scranton.jpg" alt="scranton" /> 
  </div>
</template>


<script>
export default {
	name: 'Home',
}
</script>


<style scoped>
img {
	width: 300px;
	height: auto;
}
.home-flex-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
}
.flex {

}

</style>
