<template>
  <div class="hello">
    <ul>
    	<li class='nav-item'><router-link to="regionalmanagerapp/">Home</router-link></li>
    	<li class='nav-item'><router-link to="regionalmanagerapp//about">About</router-link></li>
    	<li class='nav-item'><router-link to="regionalmanagerapp//manage">Micro Manage</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 7px;
  color: white;
  padding: 20px;
  background-color: black;
}
a {
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
}
</style>
