new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false,
        turns:[]

    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth =100;
            this.monsterHealth = 100;
            this.turns = [];
        },
       
        giveUp: function(){
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random()* max) + 1, min);

        },
        attack: function(){

            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift(
                {
                    isPlayer:true,
                    text: 'player hits Monster for' + damage
                }
            );
            this.monsterattack();
        },
        monsterattack: function(){

            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift(
                {
                    isPlayer:false,
                    text: 'monster hits player for' + damage
                }
            );
        },
        specialattack: function(){
            var damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift(
                {
                    isPlayer:true,
                    text: 'player hits Monster for' + damage
                }
            );
            this.monsterSpecialAttack();
        },
        monsterSpecialAttack: function(){
            var damage = this.calculateDamage(10, 20);
            this.playerHealth -= damage;
            this.turns.unshift(
                {
                    isplayer:false,
                    text: 'monster hits player for' + damage
                }
            );
        },
        heal: function(){
            if(this.playerHealth<=90)
            
            this.playerHealth += 10
            this.turns.unshift(
                {
                    isPlayer:true,
                    text: 'player heal for' + 10
                }
            );
            this.monsterattack();
           
        }
       
        
    }
});