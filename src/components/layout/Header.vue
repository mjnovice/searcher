<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="fab fa-reddit fa-2x"></i>
          <span class="ml-3">Reddit Feed</span>
        </a>        
      </div>
    </nav>    
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
i {
  vertical-align: middle;
  color: red;
}

i + span {
  vertical-align: middle;
}
</style>
