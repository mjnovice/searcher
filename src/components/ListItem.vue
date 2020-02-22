<template>
  <div>
    <div class="card-body">
      <h5 class="card-title">
        <a
          :href="item.url"
          class="card-link"
          target="_blank"
        >{{ item.title }}</a>
      </h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ item.title }} | {{ item.created | formatDate }}</h6>
      <p class="card-text">{{ item.selftext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['item']
};
</script>
