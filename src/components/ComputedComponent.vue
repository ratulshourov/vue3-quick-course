<template>
    <div>
        <h1>{{name}}</h1>        
        <h1>{{changeTitle}}</h1>        
    </div>
</template>
<script>
export default {
        data:function() {
            return {
                name: 'Computed Property Example',
            };
        },

        computed:{
            changeTitle:function(){
                 return this.name
            }
        }
    }

</script>

<style>

</style>