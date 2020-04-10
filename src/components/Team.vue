<template>
	<div class="team">

		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Department</th>
					<th>avatar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee in employees" :key="employee.id">
					<td>{{ employee.name  }}</td>
					<td>{{ employee.email }}</td>
					<td>{{ employee.phone }}</td>
					<td>{{ employee.department }}</td>
					<td>{{ employee.avatar }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
const dunderUrl = "http://localhost:3000/dunderteam";

export default {
	name: 'DunderTeam',
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
<script>
const dunder = "http://localhost:3000/dunderteam";

export default {
	props: ['employees'],
	name: 'Team'
}
</script>

<style lang="css" scoped>
</style>