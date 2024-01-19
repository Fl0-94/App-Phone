<script>
import CarteContact from './CarteContact.vue';
import { usePersonneStore } from '../stores/personne.js';

export default {
  setup() {
			const personneStore = usePersonneStore()
			return {
				personneStore
			}
		},
components: {
	CarteContact
  },
  data() {
    return {
      FormContact: {
        nom: '',
        prenom: '',
        numero: ''
      }
    }
  },
  
  methods: {
			ajoutContact() {
				this.personneStore.ajoutContact(this.FormContact)
				this.FormContact = {
					nom: '',
					prenom: '',
					numero: '',
				}
			},
		}
}
</script>

<template>
	
	<form @submit.prevent="ajoutContact()">
	  <input v-model="FormContact.nom" type="text" placeholder="Nom" />
	  <input v-model="FormContact.prenom" type="text" placeholder="Prénom" />
	  <input v-model="FormContact.numero" type="text" placeholder="Numéro" />
	  <button type="submit">Ajouter</button>
	</form>
  </template>

<style scoped>
form {
	background-color: #43b983;
	width: 50vw;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px;
	border-radius: 10px;
}

input {
	padding: 10px;
	border-radius: 10px;
	border: none;
}

button {
	padding: 10px;
	border-radius: 10px;
	border: none;
	background-color: aqua;
	color: white;
	font-weight: bold;
}
.error {
	color: red;
}
</style>