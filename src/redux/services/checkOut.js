const checkOut = (checkoutProducts, currentCurrency) => {

    const checkoutPackage = checkoutProducts.map(eachProduct => {
            
        if (eachProduct.attributes.length > 0 ) {
            // console.log(eachProduct.prices)
            let prices = eachProduct.prices.filter(each => each.currency.symbol === currentCurrency[0].symbol)
                eachProduct = {...eachProduct, prices}
            }
        return eachProduct
    })
    // console.log(checkoutPackage)
    return checkoutPackage
}
export default checkOut