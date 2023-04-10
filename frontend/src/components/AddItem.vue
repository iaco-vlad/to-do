<template>
  <div>
    <input
        type="text"
        class="form-control"
        v-model="newItemText"
        @keyup.enter="addItem"
        placeholder="Add a new item"
    />
    <button class="btn btn-success mt-2" @click="addItem">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItemText: ''
    };
  },
  methods: {
    addItem() {
      if (this.newItemText.trim()) {
        this.$store.dispatch('createItem', {text: this.newItemText.trim()});
        this.newItemText = '';
      }
    }
  }
};
</script>
