<template>
    <div class="container">
       <div class="row">
        <div class="col">
            <p class="h3">Employee</p>
            <ul class="list-group">
                <li class="list-group-item">
                    Name:{{ employee.name }}
                </li>
                <li class="list-group-item">
                    Name:{{ employee.age }}
                </li>
                <li class="list-group-item">
                    Name:{{ employee.designation }}
                </li>
            </ul>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    data:function() {
        return{
           employee:{
                name:'ashraf',
                age:29,
                designation:'software engineer!',
           } 
        }
    }
}
</script>
<style>

</style>