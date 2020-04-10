// Parent Comp to EmployeeInfo.vue
<template>
  <div id="single-employee">
    	<Card v-for="employee in getData($route.params.id)" :key="employee.id">
    		<template slot="header">
		        {{  employee.name }}
		    </template>
		    <template slot="title">
		        <img class="d-image" alt="title" :src="employee.avatar">
		    </template>
		   
		    <template slot="content">
		        {{ employee.email }} | {{ employee.phone }} | {{ employee.department }}
		    </template>

			<!-- <EmployeeInfo 
			  :name="employee.name"
		      :email="employee.email"
		      :phone="employee.phone"
		    /> -->
		</Card>
		<p><router-link to="/team">back to list</router-link></p>
  </div>
</template>

<style>
	.d-image {
		width: 200px;
		height: auto;
	}
</style>

<script>
const dunderUrl = "http://localhost:3000/dunderteam";
import Card from 'primevue/card';

export default {
  name: 'Employee',
  components: {
  	Card,
  },
	data() {
    	return {
    		employees: [],
		      // In a real app we would get this data from a server
		      // user: {
		      //   name: 'John Smith',
		      //   profilePicture: './profile-pic.jpg',
		      //   emailAddress: 'john@smith.com',
		      //   twitterHandle: 'johnsmith',
		      //   instagram: 'johnsmith345',
		      // },
		}
	},
	methods: {
		getData(id) {
			let data = this.employees
			return data.filter(item => {
				return item.id == id
			})
		}
	},
	mounted() {
    	fetch(dunderUrl)
    		.then(res => {
    			return res.json();
    		})
    		.then(data => {
    			this.employees = data;
    		})
    }
};


// export default {
// 	name: 'Employee',
// 	props: ['name', 'email', 'phone', 'department'],
// 	data() {
// 		return {
// 		  employees: employees
// 		}
// 	},
// 	methods: {
// 		getData(id) {
// 		  let data = this.employees
// 		  return data.filter(item => {
// 		    return item.id == id
// 		  })
// 		}
// 	}
// }
</script>
