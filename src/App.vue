<template>
  <div id="app">
    <Header/>
    <SearchForm v-on:search="search"/>
    <SearchResults
      v-if="videos.length > 0"
      v-bind:videos="videos"
      v-bind:reformattedSearchString="reformattedSearchString"
    />
    <Pagination
      v-if="videos.length > 0"
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
      videos: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'http://localhost:8080/subreddit?',
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
      const { baseUrl,  order, maxResults, q, key } = this.api;
      const apiUrl = `${baseUrl}&srname=${q}`;
      this.getData(apiUrl);
    },

    prevPage() {
      const { baseUrl, order, maxResults, q,  prevPageToken, nextPageToken} = this.api;
      const apiUrl = `${baseUrl}&srname=${q}`;
      this.getData(apiUrl);
    },

    nextPage() {
      const { baseUrl,  order, maxResults, q, key, prevPageToken, nextPageToken } = this.api;
      const apiUrl = `${baseUrl}&srname=${q}`;
      this.getData(apiUrl);
    },

    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
        })
        .catch(error => console.log(error+apiUrl));
    }
  }
};
</script>
