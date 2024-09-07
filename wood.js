function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const TotalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return TotalWood;
}

const result = woodQuantity(1,1,2);
console.log(result);