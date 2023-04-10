<template>
  <div>
    <ul class="list-group">
      <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="item in items"
          :key="item.id"
          :class="{ 'selected': (item.id === selectedItem) }"
      >
        {{ item.text }}
        <div>
          <button
              v-if="item.id === selectedItem"
              class="btn btn-primary mr-2"
              @click="selectItem(undefined)"
          >
            Unselect
          </button>

          <button
              v-else
              class="btn btn-primary mr-2"
              @click="selectItem(item.id)"
          >
            Select
          </button>
          <button class="btn btn-danger" @click="removeItem(item.id)">
            Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    selectItem(id) {
      this.$store.dispatch('selectItem', {id: id});
    },
    removeItem(id) {
      if (confirm('Are you sure?')) {
        this.$store.dispatch('removeItem', id);
      }
    }
  },
  mounted() {
    this.$store.dispatch('getAllItems');
    this.$store.dispatch('getSelectedItem');
  },
  computed: {
    items() {
      return this.$store.state.items.items;
    },
    selectedItem() {
      return this.$store.state.items.selected;
    }
  },
};
</script>