<template>
  <div id="app">

    <div class="app-container">

    	<NavBar />
  		<router-view></router-view>
		
			

    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
import OurTeam from './views/OurTeam.vue'
import Manage from './views/Manage.vue'
import Employee from '@/components/Employee.vue'
import AddEmployee from '@/components/AddEmployee.vue'




export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components: {
      NavBar,
      About,
      Home,
      Manage,
      OurTeam,
      Employee,
      AddEmployee
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: .2em;
}

form {
  margin-top: 2em;
}
</style>