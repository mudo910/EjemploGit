<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes">// maxQuotes=10
        </app-header>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"> </app-quote-grid>
    </div>
</template>


<script>
    import Header from './components/Header.vue';
    import QuotesGrid from './components/QuoteGrid.vue';
    export default {

        components:{
            appHeader: Header,
            appQuoteGrid: QuotesGrid
        },
    
        data: function(){
            return{
                quotes: [
                    'hola'
                ],
                maxQuotes: 10
            }
        },
        methods:{
        deleteQuote(index){
            this.quotes.splice(index,1);
        }
    }

    }
</script>

<style>
</style>
