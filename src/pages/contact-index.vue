<template>
  <div class="main-container">
    <UserMsg />
    <ContactFilter @filter="onSetFilterBy" />
    <RouterLink to="/contact/edit"><button>Add a Contact</button></RouterLink>
    <ContactList
      @remove="removeContact"
      v-if="contacts"
      :contacts="contactsToShow"
    />
  </div>
</template>

<script>
import { contactService } from "../services/contact.service";
import { eventBus } from "@/services/eventBus.service.js";

import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact-filter.vue";
import UserMsg from "@/cmps/user-msg.vue";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  async created() {
    // this.contacts = await contactService.query();
    this.contacts = this.$store.dispatch({ type: "loadContacts" });
  },
  methods: {
    async removeContact(contactId) {
      const msg = {
        txt: `Contact ${contactId} deleted.`,
        type: "success",
      };
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      );
      eventBus.emit("user-msg", msg);
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
    setContacts() {
      const contacts = this.$store.getters.contacts;
      this.contacts = contacts;
    },
  },
  computed: {
    contactsToShow() {
      const bla = this.$store.getters.contacts;
      this.contacts = bla;
      return bla;
    },
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  components: {
    ContactList,
    ContactFilter,
    UserMsg,
  },
};
</script>

<style lang="scss">
.main-container {
  position: relative;
}
</style>
