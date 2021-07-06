const monthlyPricing = [
    {name: "basic", price: "$19.00"},
    {name: "pro", price: "$39.00"},
    {name: "business", price: "$99.00"}
];
const yearlyPricing = [
    {name: "basic", price: "$190.00"},
    {name: "pro", price: "$390.00"},
    {name: "business", price: "$990.00"}
];

var yearlyPricingActive = false;


/**
 * onClick event on the switch button
 * Triggers the button visual animation
 * Changes the pricing mode (toggles between monthly and yearly)
 * Adapt the prices on the cards accordingly
 */

document.getElementById('pricing-switch-btn').addEventListener('click', e => {
    e.target.classList.toggle('switch--active');
    

    const pricingModes = Array.from(document.getElementsByClassName('pricing__mode'));
    pricingModes.map(mode => mode.classList.toggle('pricing__mode--selected'));
    yearlyPricingActive = !yearlyPricingActive;
    (yearlyPricingActive ? yearlyPricing : monthlyPricing).map(pricing => {
        const pricingElt =  document.getElementById(pricing.name);
        pricingElt.getElementsByTagName('h1')[0].innerText = pricing.price;
        pricingElt.getElementsByTagName('span')[0].innerText = yearlyPricingActive ? "per year" : "per month";
        
    });
});