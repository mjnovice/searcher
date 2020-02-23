<template>
  <div id="app">
    <Header/>
    <SearchForm v-on:search="search"/>
    <SearchResults
      v-if="items.length > 0"
      v-bind:items="items"
      v-bind:reformattedSearchString="reformattedSearchString"
    />
    <Pagination
      v-if="items.length > 0"
      v-bind:prevPageToken="api.prevPageToken"
      v-bind:nextPageToken="api.nextPageToken"
      v-on:prev-page="prevPage"
      v-on:next-page="nextPage"
    />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Pagination from './components/Pagination';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    SearchForm,
    SearchResults,
    Pagination
  },
  data() {
    return {
      items: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'https://stormy-sea-37300.herokuapp.com/subreddit?',
        //baseUrl: 'http://localhost:8080/subreddit?',
        order: 'viewCount',
        maxResults: 12,
        q: '',
        prevPageToken: '',
        nextPageToken: ''
      }
    };
  },
  methods: {
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(' ');
      this.api.q = searchParams.join('+');
      const { baseUrl,  order, maxResults, q } = this.api;
      const apiUrl = `${baseUrl}&srname=${q}`;
      this.getData(apiUrl);
    },

    prevPage() {
      const { baseUrl, order, maxResults, q,  prevPageToken, nextPageToken} = this.api;
      const apiUrl = `${baseUrl}&srname=${q}&prev=${prevPageToken}`;
      this.getData(apiUrl);
    },

    nextPage() {
      const { baseUrl,  order, maxResults, q, key, prevPageToken, nextPageToken } = this.api;
      const apiUrl = `${baseUrl}&srname=${q}&next=${nextPageToken}`;
      this.getData(apiUrl);
    },

    getData(apiUrl) {
      axios
        .get(apiUrl, {
    headers: {'Accept': 'application/json'}
})
        .then(res => {
console.log(res);
          this.items = res.data.items;
          this.api.prevPageToken = res.data.before;
          this.api.nextPageToken = res.data.after;
        })
        .catch(error => console.log(error+apiUrl));
    }
  }
};
</script>
