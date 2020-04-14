<template>
	<div class="ourteam-page">
	
		<div class="dunder-app">
			<div>
				<Button 
					:label="employee"
					class="p-button-raised p-button-info"
			        v-for="(employee, index) in filterList"
			        :item="employee"
			        :key="index"
			        @click="
			          filter = employee;
			          active = index;
			        "
			        :class="{ active: employee == filter }"
			     />
	      	</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Department</th>
						<th>Avatar</th>
						<th>edit / del</th>
					</tr>
				</thead>
				<tbody>

					<tr
				        v-for="(employee, i) in employees"
				        v-if="employee[fkey] === filter || filter === 'All'"
				        :item="employee"
				        :key="i"
				        class="user"
				    >
						<td><router-link :to="'employee/' + employee.id">{{ employee.name  }}</router-link></td>
						<td>{{ employee.email }}</td>
						<td>{{ employee.phone }}</td>
						<td>{{ employee.department }}</td>
						<td><img :src="employee.avatar" alt="avat" class="avat" /></td>
						<td>
							<div v-if="editEmployee === employee.id">
								<Dialog header="Edit Employee" :visible.sync="displayBasic" :style="{width: '55vw'}">
									<form>
										<input type="text" v-model="employee.name" /> <br>
										<input type="text" v-model="employee.email" /> <br>
										<input type="text" v-model="employee.phone" /> <br>
										<input type="text" v-model="employee.department" /> <br>
										<input type="text" v-model="employee.avatar" /> <br>
										<Button v-on:click.prevent="updateEmployee(employee)" label="Save">Save</button>
									</form>
									<template #footer>
								        <Button label="Cancel" icon="pi pi-times" @click="closeBasic" class="p-button-secondary"/>
								    </template>
								</Dialog>
							</div>
							<div v-else>
								<Button class="team-button p-button-raised p-button-success" label="Edit" @click="openBasic" v-on:click="editEmployee=employee.id" /> 
								<Button class="team-button p-button-raised p-button-danger" label="Delete" v-on:click="deleteEmployee(employee.id, i)" /> 
							</div>
						</td>

					</tr>
				</tbody>
			</table>
		</div>
	</div>

</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const dunderUrl = "https://gist.githubusercontent.com/simonhlee97/8aac48bf9252014ef01eba7f8becb5ca/raw/e3259b68138300dcf104ce7d3e23c3048501fa21/dundermifflin.json";

export default {
	name: 'OurTeam',
    data() {
        return {
        	displayBasic: false,
        	fkey: "department",
        	filterList: ["All", "sales", "hr", "accounting"],
        	filter: "All",
        	editEmployee: null,
        	employees: [],
        }
    },
    components: {Button, Dialog},
   
    methods: {
    	deleteEmployee (id) {
    		fetch(dunderUrl + id, {
    			method: "DELETE"
    		})
    		.then(() => {
    			this.employees.splice(i, 1);
    		})
        },
        updateEmployee(employee) {
        	fetch(dunderUrl + employee.id, {
        		body: JSON.stringify(employee),
        		method: "PUT",
        		headers: {
        			"Content-Type": "application/json",
        		},
        	})
        	.then(() => {
        		console.log('You Updated an Employee');
        		this.editEmployee = null;
        	})
        },
        
        openBasic() {
            this.displayBasic = true;
        },
        closeBasic() {
            this.displayBasic = false;
        },
    },

    created() {
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
.avat {
	width: 80px;
	height: auto;
	border-radius: 50%;
}	
.p-button-info {
	margin: 4px;
}
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
.team-button {
	margin: 2px;
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