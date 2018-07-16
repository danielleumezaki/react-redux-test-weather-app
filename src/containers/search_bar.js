import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fechWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.fechWeather(this.state.term)
        this.setState({ term: '' })
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Get a five-day forecast in your cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fechWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)