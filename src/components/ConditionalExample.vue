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
            <div
              v-if="this.loggedIn"
              class="cart-item bg-success text-white"
            >Thank you for Login For Logout click logout</div>
            <div
              v-if="!this.loggedIn"
              class="cart-item bg-warning text-white"
            >For login press login Button</div>
            <button v-if="!this.loggedIn" class="btn btn-success" @click="loginWork()">Login</button>
            <button v-if="this.loggedIn" class="btn btn-danger" @click="LogoutButton()">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="aemployee in employee" :key="aemployee.id">
                <td>{{aemployee.id}}</td>
                <td>{{aemployee.employee_name}}</td>
                <td>{{aemployee.employee_salary}}</td>
                <td>{{aemployee.employee_age}}</td>
                <td>{{aemployee.profile_image}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  <script>
  import {EmployeeService} from '@/services/EmployeeService'
export default {
  data: function() {
    return {
      loggedIn: false,
      employee: EmployeeService.getAllEmployees(),
    };
  },
  methods: {
    loginWork: function() {
      this.loggedIn = true;
    },
    LogoutButton: function() {
      this.loggedIn = false;
    }
  }
};
</script>
  <style scoped>
</style>