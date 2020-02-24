<template>
  <div>
        <a
          :href="item.url"
          class="card-link"
          target="_blank"
        >

    <div class="card-body">
      <h5 class="card-title">
        {{ item.title }}
     </h5>
      <small
        class="card-subtitle mb-2 text-muted"
      > Posted by         <a
          :href="'https://www.reddit.com/user/' + item.author"
          class="card-link"
          target="_blank"
        >u/{{ item.author }}</a> {{ item.created | formatDate }}
     </small>
      <p class="text-muted"> 
        <i class="fas fa-thumbs-up">{{item.ups}}</i>
    <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-8 down-3" style="font-weight:900">{{item.ups}}</span>
        <i class="fas fa-thumbs-down">{{item.downs}}</i> 

      </p>
      <p class="card-text text-muted">{{ item.selftext }}</p>
    </div>
</a>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['item']
};
</script>
