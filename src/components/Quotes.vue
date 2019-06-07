<template> 
    <div class="col-sm6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quotes">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .quotes{
        cursor: pointer;
    }
    .quotes:hover {
        background-color: #ffe2e2;
    }
    .panel-body{
        font-family:'Arizonia', cursive;
        font-size: 24px;
        color:blue;
    }
</style>

