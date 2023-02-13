<template>
  <article class="contact-card">
    <div>
      <img :src="`https://robohash.org/${contact.name}?set=set5`" alt="" />
    </div>
    <section class="details">
      <h2>{{ contact.name }}</h2>
      <span>{{ contact.phone }}</span>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
