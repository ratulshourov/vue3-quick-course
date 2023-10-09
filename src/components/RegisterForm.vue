<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Register Page</p>
          </div>
          <div class="card-body bg-light">
            <form action>
              <div class="mb-2">
                <input type="text" v-model="user.name" class="form-control" placeholder="Name" />
              </div>
              <div class="mb-2">
                <input type="email" v-model="user.email" class="form-control" placeholder="Email" />
              </div>
              <div class="mb-2">
                <input type="password" v-model="user.password" class="form-control" placeholder="Password" />
              </div>
              <div class="mb-2">
                <input type="submit" value="submit" class="btn btn-success" name="submit" />
              </div>
              <pre>{{this.user}}</pre>
            </form>
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
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>
<style scoped>
</style>