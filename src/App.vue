<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'App',
}

 
  


</script>

<template>

      <nav>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink to="/clavier">Clavier</RouterLink>
        <RouterLink to="/journal">Journal</RouterLink>
      </nav>
  <RouterView /> 
 
 
    
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 0 1rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: #42b983;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  border-radius: 1Opx;
}

nav a.router-link-exact-active {
  color: blue;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: white;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
