<template>
  <Transition>
  <div v-if="msg" :class="msgStyle" class="user-msg">
    <p>{{ msg.txt }}</p>
  </div>
</Transition>
</template>

<script>
import { eventBus } from "@/services/eventBus.service.js";
export default {
  data() {
    return {
      msg: null,
    };
  },
  created() {
    this.unListen = eventBus.on("user-msg", this.showMsg);
  },
  unmounted() {
    this.unListen();
  },
  methods: {
    showMsg(msg) {
      console.log(msg);
      this.msg = msg;
      setTimeout(() => (this.msg = null), msg.timeout || 2500);
    },
  },
  computed: {
    msgStyle() {
      return {
        success: this.msg.type === "success",
        fail: this.msg.type === "fail",
      };
    },
  },
};
</script>

<style lang="scss"></style>
