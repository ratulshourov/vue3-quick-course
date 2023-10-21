<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Axios Example</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="auser in data" :key="auser.id">
                <td>{{auser.id}}</td>
                <td>{{auser.title}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: function() {

    return {
      data: [],
      loading: false,
      employeedata: [],
      errorMessage: null
    };
  },
  created() {
    this.fetchData();
  },
  methods:{
    fetchData() {
      // Replace the URL with your API endpoint
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      axios.get(apiUrl)
        .then((response) => {
          this.data = response.data;
          console.log(this.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  }

};
</script>
<style>
</style>