<template>
<OrgChart :value="data">
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrgChart>
</template>

<script>
// import Vue from 'vue'

// import OrganizationChart from 'primevue/organizationchart';
// Vue.component('OrgChart', OrganizationChart);
export default {
	name: 'OurTeam',
    data() {
        return {
            data: {
                key: '0',
                data: {label: 'Michael Scott'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'Dwight Schrute'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Andy Bernard Nard Dog'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Stanley Hudson'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Kevin Malone'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>