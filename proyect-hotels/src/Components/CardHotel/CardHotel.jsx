import React from 'react';
import Hotel from './../Hotel/Hotel.jsx';
import NoResults from './../NoResults/NoResults.jsx';

function CardHotel(props){
        const Hotels = props.Hotels;
        return(
            <section className="section" style={ {marginTop: '3em'} }>
            <div className="container">
                <div className="columns is-multiline">
                    {   
                        Hotels.length > 0 ? (
                        <Hotel Hotels={Hotels}/>
                        ) : (
                        <NoResults/>
                        )
                    }
                </div>
            </div>
            </section>
        )
}

export default CardHotel;