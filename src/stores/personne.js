import { defineStore } from 'pinia'

export const usePersonneStore = defineStore('personne', {
    state: () => ({
        Contacts: [
            {
                nom: 'Bilbo',
                prenom: 'Baggins',
                numero: '06 86 96 26 66',
            },
            {
                nom: 'Frodon',
                prenom: 'Baggins',
                numero: '06 06 06 06 06',
            },
            {
                nom: 'Sam',
                prenom: 'Gamgee',
                numero: '06 06 06 06 06',
            }
        ],
    }),
    actions: {
        ajoutContact(personne) {
            this.Contacts.push(personne)
        }
    }
})