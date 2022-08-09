import { Component } from 'react';
import NameShower from './nameShower';
import PriceShower from './priceShower';

class MainCart extends Component {
    render (){
        return (
            <>
                <NameShower />
                <PriceShower />
            </>
        )
    }
}
export default MainCart