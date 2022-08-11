const updateProductInCart = (postedProducts, idForDeletion, modifiedAttribute) => {

    const modifiedPackage = postedProducts.map(eachProduct => {
            
            if (eachProduct.idForDeletion === idForDeletion) {
                eachProduct = {...eachProduct, ...modifiedAttribute}
            }
            return eachProduct
    })
    // console.log(modifiedPackage)
    return modifiedPackage
}
export default updateProductInCart