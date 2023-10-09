<template>
    <div class="container">
        <pre>{{loggedIn}}</pre>
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow-lg">
            <div class="card-header bg-success text-white">
              <p class="h3">Contional Example</p>
            </div>
            <div class="card-body bg-light">
                <div v-if="this.loggedIn" class="cart-item bg-success text-white">
                    Thank you for Login For Logout click logout
                </div>
                <div v-if="!this.loggedIn" class="cart-item bg-warning text-white">
                   For login press login Button
                </div>
                <button v-if="!this.loggedIn" class="btn btn-success" @click="loginWork()">Login</button>
                <button v-if="this.loggedIn" class="btn btn-danger" @click="LogoutButton()">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data: function() {
      return {
        loggedIn:false
      };
    },
    methods:{
       loginWork:function() {
        this.loggedIn=true;
       },
       LogoutButton:function() {
        this.loggedIn=false;
       },
    }
  };
  </script>
  <style scoped>
  </style>