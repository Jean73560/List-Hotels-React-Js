import React from 'react';

class Hotel extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        alert("Esta Funcionalidad no ha sido programada ;)");
    }

    render(){
        const Hotels = this.props.Hotels;
        const Hotel = Hotels.map((hotel) =>{
            return(
                <div key={hotel.slug.toString()} className="column is-one-third">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={hotel.photo} alt={hotel.name} onError={(e) => {e.target.src = 'https://www.e-tsw.com/_lib/KResponsive/img/et_broken_link_hotel.png'; e.target.onError = null;}}/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <p className="title is-4">{hotel.name}</p>
                            <p>{hotel.description}</p>
                            <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                            <div className="control">
                                <div className="tags has-addons">
                                <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                                <span className="tag is-medium">{hotel.city}, {hotel.country}</span>
                                </div>
                            </div>
                            <div className="control">
                                <div className="tags has-addons">
                                <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                                <span className="tag is-medium">{hotel.rooms} Habitaciones</span>
                                </div>
                            </div>
                            <div className="control">
                                <div className="tags">
                                <span className="tag is-medium is-info">
                                    {Array(hotel.price)
                                    .fill(null)
                                    .map((value, index) => (
                                        <i key={index.toString()} className="fas fa-dollar-sign" style={{margin: '0 .125em' }}></i>
                                    ))}

                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={this.handleSubmit} type="submit" className="button is-primary card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <>
                {Hotel}
            </>
        )
    }
}

export default Hotel