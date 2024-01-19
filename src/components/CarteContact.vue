<script>
export default {
  name: 'CarteContact',
  props: [
    'personne'
]
}
</script>

<template>
	<div>
		<h2>{{ personne.nom }}</h2>
		<p>{{ personne.prenom }} </p>
		<p>{{ personne.numero }}</p>
	</div>
  </template>

<style scoped>

div {
  width: 50%; 
  margin-bottom: 10px; 
  background-color: #42b983;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

h2, h3, p {
  margin: 0; 
}
</style>