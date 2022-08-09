const checkToStoreProduct = (pastSelection, currentSelection) => {

    if (pastSelection.length===0) return [currentSelection]
    
    for (let i=0; i<pastSelection.length; i++) {
        if (pastSelection[i].id === currentSelection.id && pastSelection[i].attByDefault.length === 0) {
            pastSelection[i].quantity = pastSelection[i].quantity + currentSelection.quantity
            // console.log('Estoy en 1:', pastSelection)
            return pastSelection
        }
        if (pastSelection[i].id === currentSelection.id){
            let even = 0;
            for (let j=0; j<pastSelection[i].attByDefault.length; j++) {
                // console.log('Estoy en EVEN:', Object.values(pastSelection[i].attByDefault[j]).toString(), Object.values(currentSelection.attByDefault[j]).toString())
                if (Object.values(pastSelection[i].attByDefault[j]).toString() === Object.values(currentSelection.attByDefault[j]).toString()) {
                    even +=1
                    // console.log('Estoy en 2:', pastSelection)
                }
            }
            // console.log('EVEN:', even)
            if (even === pastSelection[i].attByDefault.length) {
                pastSelection[i].quantity = pastSelection[i].quantity + currentSelection.quantity
                // console.log('Estoy en 3:', pastSelection)
                return pastSelection
            }
        }
    }
    // console.log('Estoy en 4:', pastSelection, currentSelection)
    pastSelection.push(currentSelection)
    // console.log('Estoy en 5:', pastSelection, currentSelection)
    return pastSelection
}
export default checkToStoreProduct