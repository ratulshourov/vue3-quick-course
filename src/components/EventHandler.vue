<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <p class="h3">Event Handler</p>
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h5 display-6">Count:{{count}}</p>
            <button class="btn btn-primary m-1" @click="increament">Increment</button>
            <button class="btn btn-danger m-1" @click="decrement">Decrement</button>
          </div>
        </div>
      </div>
      
    </div>
    <div class="row">
        <div class="col-md-5">
          <p class="h3">Event Handler With Parameter </p>
          <div class="card shadow-lg">
            <div class="card-body">
              <p class="h5 display-7">{{this.msg}}  Sir</p>
              <button class="btn btn-primary m-1" @click="greet('Good Morning')">Good Morning </button>
              <button class="btn btn-success m-1" @click="greet('Good Evening')">Good Evening</button>
              <button class="btn btn-dark m-1" @click="greet('Good Night')">Good Night</button>
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
        count:0,
        msg:''
    };
  },
  methods:{
    increament:function() {
        this.count=this.count+1;
    },
    decrement:function() {
        this.count=this.count-1;
    },
    greet:function(message) {
        this.msg=message;
    }
  }
};
</script>
<style>
</style>