<template>
	<div class="micro">
		<TabView>
			<TabPanel header="Team Dunder">
				<OurTeam />
			</TabPanel>
			<TabPanel header="Sales Team">
				<SalesTeam />
			</TabPanel>
			<TabPanel header="HR Team">
				<HumanTeam />
			</TabPanel>
			<TabPanel header="Accounting">
				<Accounting />
			</TabPanel>
		</TabView>
		
	</div>
</template>

<script>

import OurTeam from './OurTeam.vue';
import HumanTeam from '@/components/HumanTeam.vue';
import SalesTeam from '@/components/SalesTeam.vue';
import Accounting from '@/components/Accounting.vue';

export default {

  name: 'Manage',
  components: {
  	'OurTeam': OurTeam,
  	'HumanTeam': HumanTeam,
  	'SalesTeam': SalesTeam,
  	'Accounting': Accounting
  },


}
</script>

<style lang="css" scoped>
</style>