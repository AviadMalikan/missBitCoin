<template>
    <div v-if="car" class="car-details">
        <h2>{{car.vendor}}</h2>
        <h3>{{car.speed}}</h3>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
    data() {
        return {
            car: null,
        }
    },
    async created(){
        const carId = this.$route.params._id
        this.car = await contactService.get(carId)
    }
}
</script>

<style lang="scss"></style>
