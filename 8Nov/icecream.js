function icecream(makeicecream,flavour,flavours)
{
    setTimeout(()=>
    {
        makeicecream(flavour);
    },flavours.pineapple)
}
const flavours = {
    "kiwi":6000,
    "pineapple":7000
}
icecream(function(flavour){
    console.log(`${flavour} flavoured icecream`)
},"pineapple",flavours)