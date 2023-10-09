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
         <RegisterForm/>
         <ConditionalExample/>
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
import RegisterForm from './components/RegisterForm.vue';
import ConditionalExample from './components/ConditionalExample.vue';
export default {
  name: 'App',
  components: {
    PropsWork,EmployeeState,EventHandler,RegisterForm,ConditionalExample
  }
}
</script>

<style>
@import './styles.css'
</style>
