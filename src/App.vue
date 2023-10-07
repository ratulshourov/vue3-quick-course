<template>
  <div id="app">
   <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <PropsWork name="ratul" age="31" designation="software engineer"/>
         <EmployeeState/>
         <EventHandler/>
        </div>
      </div>
    </div>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
 import PropsWork from './components/PropsWork.vue';
 import EmployeeState from './components/EmployeeState.vue';
import EventHandler from './components/EventHandler.vue';
export default {
  name: 'App',
  components: {
    PropsWork,EmployeeState,EventHandler
  }
}
</script>

<style>
@import './styles.css'
</style>
