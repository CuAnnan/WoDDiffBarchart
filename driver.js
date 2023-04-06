let DicePool = require('./DicePool');



let pool = new DicePool({diff:7, spec:true, size:8, willpower:true});

let timesSucceeded = 0, timesFailed = 0;

for(let i = 1; i < 10001; i++)
{
    let successes = 0;
    let botched = false;
    for(let j = 0; j < 4; j++)
    {
        let roll = pool.roll();
        if(roll.successes >= 0) {
            successes += roll.successes;
        }
        if(roll.botch)
        {
            botched = true;
        }
    }

    if(!botched && successes >= 20)
    {
        timesSucceeded ++;
    }
    else
    {
        timesFailed ++;
    }

    console.log(`Success rate of ${timesSucceeded}/${i} for ${timesSucceeded/i}`)
}
