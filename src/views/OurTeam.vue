<template>
	<div class="ourteam-page">
	
		<div class="dunder-app">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Department</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="employee in employees" :key="employee.id">
						<td><router-link :to="'employee/' + employee.id">{{ employee.name  }}</router-link></td>
						<td>{{ employee.email }}</td>
						<td>{{ employee.phone }}</td>
						<td>{{ employee.department }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

</template>

<script>
const dunderUrl = "http://localhost:3000/dunderteam";

export default {
	name: 'OurTeam',
    data() {
        return {
        	employees: [],
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
}
</script>

<style lang="scss" scoped>
	
.dunder-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c5ce7;
  margin-top: 60px;
}

li {
  list-style: none;
}

h1 {
  color: #a29bfe
}

	table {
		align: center;
		width: 90%;
		margin: 50px auto;
		border: 1px solid black;
	}
	td {
		padding: 8px;
		border-collapse: separate;
		border: 1px solid black;
	}
</style>