<template>
  <div>
    <a :href="item.url" target="_blank">
      {{ item.title }}
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
    >{{ item.title }} | {{ item.created | formatDate }}</h6>
      <p class="card-text">{{ item.selftext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: ['item']
};
</script>
