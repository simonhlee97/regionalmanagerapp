<template>
  <div id="app">
    <h1>Add Employee</h1>
    <form>
    	<input type="text" v-model="name" /> <br>
    	<input type="text" v-model="email" /> <br>
    	<input type="text" v-model="phone" /> <br>
    	<input type="text" v-model="department" /> <br>
    	<input type="text" v-model="avatar" /> <br>
    	<input type="submit" v-on:click.prevent="addEmployee" />
    </form>
  </div>
</template>

<script>
const baseUrl = "http://localhost:3000/dunderteam";
export default {
  name: 'addEmployee',
  data() {
    return {
      // employee: {
      // 	name: name,
      // 	email: email,
      // 	phone: phone,
      // 	department: department,
      // 	avatar: avatar
      // },
      employees:[]
    }
  },
  methods: {

    async addEmployee() {
      const res = await axios.post(baseURL, 
      	{
      		name: this.name,
      		email: this.email,
      		phone: this.phone,
      		department: this.department,
      		avatar: this.avatar
      	})

      this.employees = [...this.employees, res.data]


      this.name = ''
      this.email = ''
      this.phone = ''
      this.department = ''
      this.avatar = ''


    }
  }
}
</script>