import React from 'react';

class DateFilter extends React.Component{
    constructor(props) {
        super(props)
        this.handleDateChange = this.handleDateChange.bind(this);
      }
    
      handleDateChange(event) {
        this.props.onDateChange(event)
      }

    render() { 
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" onChange={this.handleDateChange} name={this.props.name} value={ this.props.date }/>
                    <span className="icon is-small is-left">
                        <i className="fas">{this.props.icon}</i>
                    </span>
                </div>
            </div>
        );
    }

    
}

export default DateFilter;