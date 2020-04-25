import React from 'react';
import Moment from "moment";
import Hero from './../Hero/Hero.jsx';
import Filters from './../Filters/Filters.jsx';
import Loading from './../Loading/Loading.jsx';
import CardHotel from './../CardHotel/CardHotel.jsx';


class Application extends React.Component{
constructor(props){
    super(props);
    this.state = {
        filters:{
            dateFrom: "",
            dateTo: "",
            country: "",
            price: "",
            rooms: ""
        },
        hotels: [],
        filteredHotels: [],
        isAllLoaded: false
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.FilterBy = this.FilterBy.bind(this);
};

// Llamada a la Api de Acamica
componentDidMount(){
    fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
    .then(results => {
        return results.json();
    }).then(data => {
        this.setState({
            hotels: data,
            filteredHotels: data,
            isAllLoaded: true
        })
    }).catch(() => console.log('Error en la petición...'));
}
//actualizamos los Filtros en el state
handleFilterChange(payload) {
    const newFilteredHotels = this.FilterBy(payload,this.state.hotels);
    this.setState({
      filters: payload,
      filteredHotels: newFilteredHotels
    });
}
// Realizamos el Filtrado de los hoteles con los valores que seteamos en el state de filtros
 FilterBy(filters, hotels) {
    return hotels.filter(hotel => {
      return (Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= (filters.dateFrom !== "" ? filters.dateFrom : Moment(hotel.availabilityFrom).format("YYYY-MM-DD"))) &&
             (Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= (filters.dateTo !== "" ? filters.dateTo : Moment(hotel.availabilityTo).format("YYYY-MM-DD"))) &&
             (hotel.country === (filters.country !== "" ?  filters.country : hotel.country)) &&
             (hotel.price === (filters.price !== "" ?  parseInt(filters.price) : hotel.price)) &&
             (hotel.rooms <= (filters.rooms !== "" ?  parseInt(filters.rooms) : hotel.rooms))
    });
  }
  //renderizamos todo el componente
    render() {
        const hotelsFiltered = this.state.filteredHotels;
        const CountHotels = hotelsFiltered.length;
        return(
            <>
              <Hero filters={ this.state.filters } countHotels={CountHotels} />
              <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }/>
              { this.state.isAllLoaded ? (
                <CardHotel Hotels={hotelsFiltered}/>
              ) : (
                <Loading />
              )
              }
            </>
        );
    }
}

export default Application;