import React from 'react';


class OptionsFilter extends React.Component{
    constructor(props) {
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this);
      }
    
      handleOptionChange(event) {
        this.props.onOptionChange(event)
      }

    render() {
        const optionsArray = this.props.options;
        const Options = optionsArray.map((option) =>
            <option key={option.name.toString()} name={option.name.toString()} value={option.value}>{option.name}</option>
        );

        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} } onChange={ this.handleOptionChange } name={this.props.name} value={ this.props.selected }>
                        {Options}
                    </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className="fas">{this.props.icon}</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionsFilter;