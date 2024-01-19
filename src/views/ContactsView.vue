<script>
import CarteContact from '../components/CarteContact.vue';
import { usePersonneStore } from '../stores/personne.js';
import { useRouter } from 'vue-router';

export default {
  name: "ContactsView",
  components: {
    CarteContact
  },
  setup() {
		const personneStore = usePersonneStore()
		return {
			personneStore
		}
	},
	computed: {
		personne() {
			return this.personneStore.personne
		}
	},
	components: {
		CarteContact,
	},
	methods: {
		ajoutContact(personne) {
			this.personne.push(personne)
		}
	}
}
</script>
<template>
	<div class="personne">
	  <h1>Ceci est une page de personnes</h1>
	  <router-link to="/addcontacts">
  		<i class="fas fa-plus"></i>
  		Ajouter une personne
		</router-link>
	  <div class="cartes">
		<CarteContact v-for="personne in personneStore.Contacts" :key="personne.nom" :personne="personne" />
	  </div>
	</div>
</template>

<style>

.cartes {
	margin: 50px;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: space-around;
}

</style>
