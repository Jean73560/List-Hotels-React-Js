import React from 'react';
import DateFilter from './../DateFilter/DateFilter.jsx';
import OptionsFilter from './../OptionsFilter/OptionsFilter.jsx';


class Filters extends React.Component{
    constructor(props) {
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

      handleOptionChange(event) {
        let payload = this.props.filters
        const name = event.target.name;
        const value = event.target.value;
        payload[name] = value

        this.props.onFilterChange(payload)
      }


    render(){
        return(
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
            {/*<div className="navbar-item">
                    <DateFilter
                    date={ this.props.filters.dateFrom}
                    icon="sign-in-alt" 
                    onDateChange={this.handleOptionChange}
                    name="dateFrom"/>
                </div>
                <div className="navbar-item">
                    <DateFilter
                    date={ this.props.filters.dateTo }
                    icon="sign-out-alt" 
                    onDateChange={this.handleOptionChange}
                    name="dateTo"/>
                </div>*/}
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: "", name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                    selected={ this.props.filters.country }
                    icon="globe" 
                    onOptionChange={this.handleOptionChange} 
                    name="country"/>
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: "", name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                    selected={ this.props.filters.price }
                    icon="dollar-sign"
                    onOptionChange={this.handleOptionChange}
                    name="price"/>
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: "", name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                    selected={ this.props.filters.rooms }
                    icon="bed" 
                    onOptionChange={this.handleOptionChange}
                    name="rooms"/>
                </div>
            </nav>
        );
    }
}

export default Filters;
