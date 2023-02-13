<template>
  <form @submit.prevent="save" v-if="contact" class="car-edit">
    <h2>{{ editOrAdd }}</h2>
    <input type="text" v-model="contact.name" placeholder="Name" />
    <input
      type="number"
      v-model.number="contact.phone"
      placeholder="Phone number"
    />
    <input type="text" v-model="contact.email" placeholder="Email" />
    <button>Save</button>
  </form>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    if (contactId) {
      this.contact = await contactService.get(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  methods: {
    async save() {
      await contactService.save(this.contact);
      this.$router.push("/contact");
    },
  },
  computed: {
    editOrAdd() {
      if (this.contact._id) return `Edit ${this.contact.name}`;
      else return "Add new contact";
    },
  },
};
</script>

<style lang="scss"></style>
