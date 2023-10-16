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
export default {
  data: function() {
    return {
      loggedIn: false,
      employee: [
        {
          id: 1,
          employee_name: "Tiger Nixon",
          employee_salary: 320800,
          employee_age: 61,
          profile_image: ""
        },
        {
          id: 2,
          employee_name: "Garrett Winters",
          employee_salary: 170750,
          employee_age: 63,
          profile_image: ""
        },
        {
          id: 3,
          employee_name: "Ashton Cox",
          employee_salary: 86000,
          employee_age: 66,
          profile_image: ""
        },
        {
          id: 4,
          employee_name: "Cedric Kelly",
          employee_salary: 433060,
          employee_age: 22,
          profile_image: ""
        },
        {
          id: 5,
          employee_name: "Airi Satou",
          employee_salary: 162700,
          employee_age: 33,
          profile_image: ""
        },
        {
          id: 6,
          employee_name: "Brielle Williamson",
          employee_salary: 372000,
          employee_age: 61,
          profile_image: ""
        },
        {
          id: 7,
          employee_name: "Herrod Chandler",
          employee_salary: 137500,
          employee_age: 59,
          profile_image: ""
        },
        {
          id: 8,
          employee_name: "Rhona Davidson",
          employee_salary: 327900,
          employee_age: 55,
          profile_image: ""
        },
        {
          id: 9,
          employee_name: "Colleen Hurst",
          employee_salary: 205500,
          employee_age: 39,
          profile_image: ""
        },
        {
          id: 10,
          employee_name: "Sonya Frost",
          employee_salary: 103600,
          employee_age: 23,
          profile_image: ""
        },
        {
          id: 11,
          employee_name: "Jena Gaines",
          employee_salary: 90560,
          employee_age: 30,
          profile_image: ""
        },
        {
          id: 12,
          employee_name: "Quinn Flynn",
          employee_salary: 342000,
          employee_age: 22,
          profile_image: ""
        },
        {
          id: 13,
          employee_name: "Charde Marshall",
          employee_salary: 470600,
          employee_age: 36,
          profile_image: ""
        },
        {
          id: 14,
          employee_name: "Haley Kennedy",
          employee_salary: 313500,
          employee_age: 43,
          profile_image: ""
        },
        {
          id: 15,
          employee_name: "Tatyana Fitzpatrick",
          employee_salary: 385750,
          employee_age: 19,
          profile_image: ""
        },
        {
          id: 16,
          employee_name: "Michael Silva",
          employee_salary: 198500,
          employee_age: 66,
          profile_image: ""
        },
        {
          id: 17,
          employee_name: "Paul Byrd",
          employee_salary: 725000,
          employee_age: 64,
          profile_image: ""
        },
        {
          id: 18,
          employee_name: "Gloria Little",
          employee_salary: 237500,
          employee_age: 59,
          profile_image: ""
        },
        {
          id: 19,
          employee_name: "Bradley Greer",
          employee_salary: 132000,
          employee_age: 41,
          profile_image: ""
        },
        {
          id: 20,
          employee_name: "Dai Rios",
          employee_salary: 217500,
          employee_age: 35,
          profile_image: ""
        },
        {
          id: 21,
          employee_name: "Jenette Caldwell",
          employee_salary: 345000,
          employee_age: 30,
          profile_image: ""
        },
        {
          id: 22,
          employee_name: "Yuri Berry",
          employee_salary: 675000,
          employee_age: 40,
          profile_image: ""
        },
        {
          id: 23,
          employee_name: "Caesar Vance",
          employee_salary: 106450,
          employee_age: 21,
          profile_image: ""
        },
        {
          id: 24,
          employee_name: "Doris Wilder",
          employee_salary: 85600,
          employee_age: 23,
          profile_image: ""
        }
      ]
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