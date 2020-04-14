<template>
	
<div class="p-card">
    <div class="p-card-body" style="padding:0">
    	
		<h1>Sales Data</h1>
		
    	<table>
		  <tr>
			<th>Order Date</th>
			<th>Company</th>
			<th>Contact</th>
			<th>Paper Type</th>
			<th>Unit Price</th>
			<th>Quantity</th>
			<th>Final Price</th>
		  </tr>
		  <tr v-for="sale in salesdata">
		  	<td>{{ sale.orderdate }}</td>
		  	<td>{{ sale.client }}</td>
		  	<td>{{ sale.contact }}</td>
		  	<td>{{ sale.paperType }}</td>
		  	<td>{{ sale.unitPrice }}</td>
		  	<td>{{ sale.quantity }}</td>
		  	<td>{{ sale.finalPrice }}</td>
		  </tr>
		 </table>

		 <p>add new sale</p>

       
    </div>
</div>


</template>



<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';

const salesdata = "http://www.mocky.io/v2/5e95701d2f00006900025046";


export default {
	name: 'SalesData',
	data () {
		return {
			salesdata: []
		}
	},
	mounted() {
    	fetch(salesdata)
    		.then(res => {
    			return res.json();
    			console.log(res);
    		})
    		.then(data => {
    			this.salesdata = data;
    			console.log(this.salesdata);
    		})
    }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>