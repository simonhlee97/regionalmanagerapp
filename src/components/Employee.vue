// Parent Comp to EmployeeInfo.vue
<template>
  <div id="single-employee">
    	<Card v-for="employee in getData($route.params.id)" :key="employee.id">
    		<template slot="header">
		        <h1>{{  employee.name }}</h1>
		    </template>

		    <template slot="title">
		        <img class="d-image" alt="title" :src="employee.avatar">
		    </template>
		   
		    <template slot="content">
		        {{ employee.email }} | {{ employee.phone }} | {{ employee.department }}

		        <SalesData v-if="employee.department == 'sales'" />
		    </template>
			
		</Card>

		<p><router-link to="/manage">back to Dunder Team</router-link></p>
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
import SalesData from '@/components/SalesData';


export default {
  name: 'Employee',
  components: {
  	Card, SalesData
  },
	data() {
    	return {
    		employees: []
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
</script>
