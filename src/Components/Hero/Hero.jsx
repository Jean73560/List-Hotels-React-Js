import React from 'react';
import Moment from "moment";

class Hero extends React.Component{
 constructor(props){
   super(props);
   this.UpdateDate = this.UpdateDate.bind(this);
   this.updatePrice = this.updatePrice.bind(this);
 }
//Obtenemos la Fecha de Cotizacion
 UpdateDate(date) {

      // Obtenemos la fecha actual, dia de la semana, dia del mes, mes y año;
      const fecha = Moment(date),
        diaSemana = fecha.clone().day(),
        dia = fecha.clone().format('DD'),
        mes = fecha.clone().month(),
        year = fecha.clone().year()

      let pDiaSemana = "",
          pMes = ""

      // Obtenemos el dia se la semana y lo mostramos
      const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
      pDiaSemana = semana[diaSemana];
    
      // Obtenemos el Mes y año y lo mostramos
      const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      pMes = meses[mes];

      return(
        ` ${pDiaSemana}, ${dia} de ${pMes} de ${year} `
      );
 
    };
//Obtenemos el simbolo del price
    updatePrice(price){
      let priceString = ""
      switch (price) {
        case "1":
            priceString = "$"
          break;
          case "2":
            priceString = "$$"
          break;
          case "3":
            priceString = "$$$"
          break;
          case "4":
            priceString = "$$$$"
          break;
        default:
          break;
      }
      return priceString;
    }

  render(){
    const dateTo = this.UpdateDate(this.props.filters.dateTo);
    const dateFrom = this.UpdateDate(this.props.filters.dateFrom);
    return(
        <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              <p>Tenemos disponibles {this.props.countHotels} hoteles en total.</p>
                <span> 
              {this.props.filters.dateFrom !== "" && (
                  <span>desde el
                  <strong>{ dateFrom }</strong> 
                  </span> 
              ) 
              }

              {this.props.filters.dateTo !== "" &&(
                <span>
                  hasta el 
                  <strong> {dateTo} </strong> 
                </span>
              )
              }

              {this.props.filters.country !== "" &&(
                <span>
                  { ` en ${this.props.filters.country}`}
                </span>
              )
              }

              {this.props.filters.price !== "" &&(
                <span>
                  { ` en ${this.updatePrice(this.props.filters.price)}`}
                </span>
              )
              }

              {this.props.filters.rooms !== "" &&(
                <span>
                  { ` de hasta ${this.props.filters.rooms} personas`}
                </span>
              )
              }

                </span>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;