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
         <AxiosComponent/> 
         <ComputedComponent/>
         <h1>Vuex Work Start From Here</h1>
         <h3>Name value come from store {{ $store.state.name }}</h3>
         <h3>Title Get : {{ $store.state.title }}</h3>
         <div>
          <h4>mutations Example  change the title </h4>
          <button class="btn btn-primary" v-on:click="updateTitle">Mutations change title</button>
         </div>
         
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
import AxiosComponent from './components/AxiosComponent.vue';
import ComputedComponent from './components/ComputedComponent.vue';
export default {
  name: 'App',
  components: {
    PropsWork,EmployeeState,EventHandler,RegisterForm,ConditionalExample,AxiosComponent,ComputedComponent
  },
  methods:{
    updateTitle:function(){
      //a way 
     //this.$store.commit('changeTitle','Title changed via mutations');
     // another way for it i have to change changetile mutations pass object newtitle.title
     //this.$store.commit('changeTitle',{title:'Title changed via mutations'});
     // when i want to pass all as object 
     //this.$store.commit({type:'changeTitle',title:'Title changed via mutations'});
     //using actions 
     this.$store.dispatch({
      type:'updateTitle',
      title:'Title changed via actions'
     })
    }
  }
}
</script>

<style>
@import './styles.css'
</style>
