import React, {useContext} from 'react';
import {Context} from '../../../../context';


export const Pomidorka = ({item}) => {
    const {dispatch} = useContext(Context);

    const pom = () => {
        dispatch({
            type: 'pomidorka',
            payload: item.id
        });
    };

    if ((item.timer % (60*25)) === 0 && (item.timer / (60*25)) !== item.pomidorka) {
        pom();
    }
    
    return(
        <div >
            {`Pom: ${item.pomidorka}`}
        </div>
    )
}