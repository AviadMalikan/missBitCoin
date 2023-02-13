<template>
  <div v-if="car" class="car-details">
    <div class="contact-img">
      <img :src="`https://robohash.org/${car.name}?set=set5`" alt="" />
    </div>
    <article class="contact-details">
      <h2>{{ car.name }}</h2>
      <h4>Phone: {{ car.phone }}</h4>
      <h4>Email: {{ car.email }}</h4>
    <RouterLink to="/contact">
      <button class="back-btn">Back</button>
    </RouterLink>
    </article>
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
  data() {
    return {
      car: null,
    };
  },
  async created() {
    const carId = this.$route.params._id;
    console.log("carId: ", carId);

    this.car = await contactService.get(carId);
  },
};
</script>

<style lang="scss"></style>
