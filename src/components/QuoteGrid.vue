<template>
    <div class="row">
        <app-quote v-for ="(quote,index) in quotes" :key="index" @click.native="deleteQuote(index)"> 
            {{quote}} 
            </app-quote>
    </div>
</template>

<script>
import Quote from './Quotes.vue';
export default {
    
    props: ['quotes'],
    components:{
        appQuote: Quote
    },
    methods:{
        deleteQuote(index){
            this.$emit('quoteDeleted', index);
        }
    }
    
}
</script>

