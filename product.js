function getPriceFieldValue(priceId){
    const priceField = document.getElementById(priceId);
    const priceString = priceField.value;
    const price = parseFloat(priceString);
    priceField.value = '';
    return price;
}
function discountText (discountID){
    const discoountField = document.getElementById(discountID);
    const discountString = discoountField.value;
    discoountField.value='';
    return discountString;
}
function setTextValue (elementID,total){
    const lastPriceField = document.getElementById(elementID);
    lastPriceField.innerText = total;
}

//

document.getElementById('sub-btn').addEventListener('click', function () {
    // step 1 get the price field value
    const priceField = getPriceFieldValue('price');
    // step 2 get the discount field value
    const discountField = getPriceFieldValue('discount');
    if (isNaN(priceField) && isNaN(discountField)) {
        alert("please enter a valid number");
    }
    // step 3 get the coupon code field
    const couponCode = discountText('coupon-code');
    if (couponCode !== 'dom') {
        alert('please type the the dom field in the ` dom  ` ');
        return;
    }
    const totalDiscountPrice = priceField - ((priceField / 100) * discountField);
    setTextValue('last-price', totalDiscountPrice);

});