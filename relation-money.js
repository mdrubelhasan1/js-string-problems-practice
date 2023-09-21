function facts(relationship, honesty, money){
    let bestThing = 0;
    if(money > relationship && money > honesty){
        bestThing = money;
    }
    else if(honesty > relationship && honesty > money){
        bestThing = honesty;
    }
    else{
        bestThing = relationship;
    }
    return bestThing;
}

// money, honesty and reletionship which value is more that is the best thing
