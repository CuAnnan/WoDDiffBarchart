class DicePool
{
    constructor(data)
    {
        this.size = data.size;
        this.spec = data.spec?data.spec:false;
        this.diff = data.diff?data.diff:6;
        this.willpower = data.willpower?data.willpower:false;
    }

    roll()
    {
        let diceRolled = [];
        let successesRolled = 0;
        let onesRolled = 0;
        while(diceRolled.length < this.size)
        {
            let dieRolled = 1 + Math.floor(Math.random() * 10);
            diceRolled.push(dieRolled);
            if(dieRolled === 1)
            {
                onesRolled += 1;
            }
            else if(dieRolled >= this.diff)
            {
                successesRolled ++;
                if(dieRolled === 10 && this.spec)
                {
                    successesRolled ++;
                }
            }
        }

        let botch = successesRolled === 0 && onesRolled >=1 && !this.willpower;
        let successes = successesRolled - onesRolled + (this.willpower?1:0);

        return {
            diceRolled:diceRolled,
            successes:successes,
            diff:this.diff,
            botch:botch
        }
    }
}

module.exports = DicePool;