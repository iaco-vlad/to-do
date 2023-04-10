<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-3 column">
        <h1>To Do</h1>
      </div>
      <div class="col-md-6 column">
        <item-list></item-list>
      </div>
      <div class="col-md-3 column">
        <add-item></add-item>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue';
import AddItem from './components/AddItem.vue';

export default {
  components: {
    ItemList,
    AddItem
  },
};
</script>

<style src="./assets/css/styles.css"></style>
