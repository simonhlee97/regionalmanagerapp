<template>
	
<div class="p-card">
    <div class="p-card-body" style="padding:0">
        <!-- <DataTable :value="customers" :paginator="true" class="p-datatable-responsive p-datatable-customers" :rows="10"
            dataKey="id" :rowHover="true" :selection.sync="selectedCustomers" :filters="filters" :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
            <template #header>
                List of Clients
                <div class="p-datatable-globalfilter-container">
                    <InputText v-model="filters['global']" placeholder="Global Search" />
                </div>
            </template>
            <template #empty>
                No customers found.
            </template>
            <template #loading>
                Loading customers data. Please wait.
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column field="name" header="Name" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Name</span>
                    {{slotProps.data.name}}
                </template>
                <template #filter>
                    <InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Search by name"/>
                </template>
            </Column>
            <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains">
                <template #body="slotProps">
                    <span class="p-column-title">Country</span>
                    <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code"  />
                    <span style="vertical-align: middle; margin-left: .5em">{{slotProps.data.country.name}}</span>
                </template>
                <template #filter>
                    <InputText type="text" v-model="filters['country.name']" class="p-column-filter" placeholder="Search by country"/>
                </template>
            </Column>
            <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in">
                <template #body="slotProps">
                    <span class="p-column-title">Representative</span>
                    <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                    <span style="vertical-align: middle; margin-left: .5em">{{slotProps.data.representative.name}}</span>
                </template>
                    <template #filter>
                    <MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="p-multiselect-representative-option">
                                <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                <span style="vertical-align: middle; margin-left: .5em">{{slotProps.option.name}}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="date" header="Date" :sortable="true" filterMatchMode="custom" :filterFunction="filterDate">
                <template #filter>
                    <Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Registration Date"/>
                </template>
            </Column>
            <Column field="status" header="Status" :sortable="true" filterMatchMode="equals">
                <template #body="slotProps">
                    <span class="p-column-title">Status</span>
                    <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                </template>
                <template #filter>
                    <Dropdown v-model="filters['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                        <template #option="slotProps">
                            <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte">
                <template #body="slotProps">
                    <span class="p-column-title">Activity</span>
                    <ProgressBar :value="slotProps.data.activity" :showValue="false" />
                </template>
                <template #filter>
                    <InputText type="text" v-model="filters['activity']" class="p-column-filter" placeholder="Minimum"/>
                </template>
            </Column>
            <Column headerStyle="width: 8em; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body>
                    <Button type="button" icon="pi pi-cog" class="p-button-secondary"></Button>
                </template>
            </Column>
        </DataTable> -->
		<h1>Sales Data</h1>
        <table>
		  <tr>
		  	<th>Order Date</th>
		  	<th>Order ID</th>
		    <th>Company</th>
		    <th>Contact</th>
		    <th>Paper Type</th>
		    <th>Unit Price</th>
		    <th>Quantity</th>
		    <th>Final Price</th>
		  </tr>
		  <tr>
		    <td>3-22-2020</td>
		    <td>#582749</td>
		    <td>Some Office</td>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>100</td>
		    <td>5</td>
		    <td>$500</td>
		  </tr>
		  <tr>
		    <td>2-22-2020</td>
		    <td>#582739</td>
		    <td>Some Office</td>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>100</td>
		    <td>5</td>
		    <td>$500</td>
		  </tr>
		  <tr>
		    <td>1-22-2020</td>
		    <td>#582649</td>
		    <td>Some Office</td>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>100</td>
		    <td>5</td>
		    <td>$500</td>
		  </tr>
		  <tr>
		    <td>1-20-2020</td>
		    <td>#442749</td>
		    <td>Some Office</td>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>100</td>
		    <td>5</td>
		    <td>$500</td>
		  </tr>
		  <tr>
		    <td>1-18-2020</td>
		    <td>#332749</td>
		    <td>Some Office</td>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>100</td>
		    <td>5</td>
		    <td>$500</td>
		  </tr>
		  <tr>
		    <td>1-11-2020</td>
		    <td>#222749</td>
		    <td>Some Office</td>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>100</td>
		    <td>5</td>
		    <td>$500</td>
		  </tr>
		</table>
    </div>
</div>


</template>



<script>
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';

// import axios from 'axios'
// const salesdata = "http://localhost:3000/salesdata";


export default {
	name: 'SalesData'
}
//         return {
//             customers: null,
//             selectedCustomers: null,
//             filters: {},
//             loading: true,
//             representatives: [
//                 {name: "Amy Elsner", image: 'amyelsner.png'},
//                 {name: "Anna Fali", image: 'annafali.png'},
//                 {name: "Asiya Javayant", image: 'asiyajavayant.png'},
//                 {name: "Bernardo Dominic", image: 'bernardodominic.png'},
//                 {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
//                 {name: "Ioni Bowcher", image: 'ionibowcher.png'},
//                 {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
//                 {name: "Onyama Limba", image: 'onyamalimba.png'},
//                 {name: "Stephen Shaw", image: 'stephenshaw.png'},
//                 {name: "XuXue Feng", image: 'xuxuefeng.png'}
//             ],
//             statuses: [
//                 'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
//             ]
//         }
//     },
//     created() {
//         this.customerService = new CustomerService();
//     },
//     mounted() {
//         this.customerService.getCustomersLarge().then(data => {
//             this.customers = data;
//             this.loading = false;
//         });
//     },
//     methods: {
//         filterDate(value, filter) {
//             if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
//                 return true;
//             }

//             if (value === undefined || value === null) {
//                 return false;
//             }

//             return value === this.formatDate(filter);
//         },
//         formatDate(date) {
//             let month = date.getMonth() + 1;
//             let day = date.getDate();

//             if (month < 10) {
//                 month = '0' + month;
//             }

//             if (day < 10) {
//                 day = '0' + day;
//             }

//             return date.getFullYear() + '-' + month + '-' + day;
//         }
//     }
// }
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