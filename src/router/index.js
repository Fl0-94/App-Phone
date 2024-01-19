import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/Contactsview.vue'
import ClavierView from '../views/Clavierview.vue'
import JournalView from '../views/Journalview.vue'
import AddContactsView from '../views/AddContactview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsView
    },
    {
      path: '/clavier',
      name: 'Clavier',
      component: ClavierView
    },
    {
      path: '/journal',
      name: 'Journal',
      component: JournalView
    },
    {
      path: '/addcontacts',
      name: 'AddContacts',
      component: AddContactsView
    }

    

  ]
})

export default router
