<template>
  <div id='home-hero'>
    <h1>Welcome to the Regional Manager App</h1>
    <div class="home-flex-container">
    	<div class="flex item1">
    		<img src="../../public/img/mike1.jpg" alt="mike1" />
    	</div>
    	<div class="flex item2">
    		<img src="../../public/img/mike2.jpg" alt="mike2" />
    	</div>
    	<div class="flex item3">
    		<img src="../../public/img/scranton.jpg" alt="scranton" />
    	</div>
    </div>
    
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
