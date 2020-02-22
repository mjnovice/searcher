<template>
  <div>
    <a :href="video.url" target="_blank">
      {{ video.title }}
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ video.title }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
    >{{ video.title }} | {{ video.created | formatDate }}</h6>
      <p class="card-text">{{ video.selftext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  props: ['video']
};
</script>
