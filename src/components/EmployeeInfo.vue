// child component -> parent: Employee
<template>
  <div class="container">
    <Card>
    	Name: {{ name }}
      Email: {{ email }}
      Phone: {{ phone }}
      department: {{ department }}
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';

export default {
	components: {
		Card
	},
  name: 'EmployeeInfo',
  props: ['email', 'phone', 'name', 'department'],
};
</script>