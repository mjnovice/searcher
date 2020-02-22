<template>
  <div>
    <div class="card-body">
      <h5 class="card-title">
        <a
          :href="video.url"
          class="card-link"
          target="_blank"
        >{{ video.title }}</a>
      </h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.title }} | {{ video.created | formatDate }}</h6>
      <p class="card-text">{{ video.selftext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video']
};
</script>
