<template>
    <article>
        <h2>{{ contact.name }}</h2>
        <h2>{{ contact.email }}</h2>
    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss"></style>
