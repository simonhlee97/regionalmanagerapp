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
		  <tr>
		  	<td>02-11-2020</td>
		  	<td>Scranton High School</td>
		  	<td>Jimmy John</td>
		  	<td>Photography Paper</td>
		  	<td>$50</td>
		  	<td>10</td>
		  	<td>$500</td>
		  </tr>
		  <tr>
		  	<td>01-21-2020</td>
		  	<td>Scranton Univ</td>
		  	<td>John Hopkin</td>
		  	<td>Art Paper</td>
		  	<td>$40</td>
		  	<td>10</td>
		  	<td>$400</td>
		  </tr>
		 </table>

		 <p>add new sale</p>

       
    </div>
</div>


</template>



<script>
// const salesdata;


export default {
	name: 'SalesData',
	data () {
		return {
			// salesdata: [] 
		}
	},
	// mounted() {
 //    	fetch(salesdata)
 //    		.then(res => {
 //    			return res.json();
 //    			console.log(res);
 //    		})
 //    		.then(data => {
 //    			this.salesdata = data;
 //    			console.log(this.salesdata);
 //    		})
 //    }
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