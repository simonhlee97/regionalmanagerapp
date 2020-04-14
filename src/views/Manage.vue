<template>
	<div class="manage">

		<div class="add-new-btn">
			<Button label="Add New Employee" icon="pi pi-external-link" @click="openBasic" />
		</div>
		
		<Dialog header="New Dunder Employee" :visible.sync="displayBasic" :style="{width: '55vw'}">
		    <form>
		    	<p>
		    		<label for="name">Name: </label>
					<InputText placeholder="name" id="name" type="text" v-model='employee.name' />
				</p>
				<br>
				<br>

				<p>
					<label for="email">email: </label>
					<InputText placeholder="email" id="email" type="text" v-model='employee.email' />
				</p>
				<br>
				<br>


				<p>
					<label for="phone">phone: </label>
					<InputText placeholder="phone" id="phone" type="text" v-model='employee.phone' />
				</p>
				<br>
				<br>
				
				<p>
					<label for="department">department: </label>
					<select id="department" v-model="employee.department">
					  <option value="accounting">accounting</option>
					  <option value="hr">hr</option>
					  <option value="sales">sales</option>
					  <option value="warehouse">warehouse</option>
					  <option value="warehouse">corporate</option>
					</select>
				</p>
				<br>
				<br>

				<p>
					<label for="avatar">avatar: </label>
					<InputText placeholder="avatarURL" id="avatar" v-model='employee.avatar' type="text" />
				</p>
				<br>
				<br>

				<Button label="Save" type="submit" @click.prevent="addEmployee" value="Save" />
		    </form>
		    <template #footer>
		        <Button label="Cancel" icon="pi pi-times" @click="closeBasic" class="p-button-secondary"/>
		    </template>
		</Dialog>
		
		<br>

		<OurTeam />
	</div>
</template>

<script>
import axios from 'axios'
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
import OurTeam from './OurTeam.vue';


const dunderUrl = "https://gist.githubusercontent.com/simonhlee97/8aac48bf9252014ef01eba7f8becb5ca/raw/e3259b68138300dcf104ce7d3e23c3048501fa21/dundermifflin.json";

const mifflin = 'https://github.com/simonhlee97/regionalmanagerapp/blob/master/db/dunder.json';

export default {
    data() {
        return {
        	
        	employee: {
        		name: '',
        		email: '',
        		phone: '',
        		department: '',
        		avatar: '',
        	},
        	employees: [],
            displayBasic: false,
        }
    },
    methods: {
        openBasic() {
            this.displayBasic = true;
        },
        closeBasic() {
            this.displayBasic = false;
        },
        addEmployee() {
        	axios.post(dunderUrl, {
        		name: this.employee.name,
        		email: this.employee.email,
        		phone: this.employee.phone,
        		department: this.employee.department,
        		avatar: this.employee.avatar,
        	})
        	.then((res) => {
        		const data = res.data;
        		this.employees.push(data);
        		this.employee.name = '';
        		this.employee.email = '';
        		this.employee.phone = '';
        		this.employee.department = '';
        		this.employee.avatar = '';
        		this.displayBasic = false;
        	});
        }      
    },
    name: 'Manage',
  	components: {
  		'OurTeam': OurTeam,
  		Dialog	
	},
}

</script>

<style lang="css" scoped>
.add-new-btn {
	margin-top: 5em;
}

form  { display: table;      }
p     { display: table-row; }
label { display: table-cell; margin-right: 12px; }
input { display: table-cell; }

</style>