function selectItem(items){
    let price=0;
    switch(items){
        case coffee:
            price=5;
            break;
        case tea:
            price=3;
            break;
        case juice:
            price=4;
            break;
        default:
            price=0;
    }
    return `you have selected ${items} and the price is ${price}`;
}
const favoritefilm={
    title:"The Dark Knight",
    director:"Christopher Nolan",
    year:2008
}
const {title,director,year}=favoritefilm;
console.log(title);