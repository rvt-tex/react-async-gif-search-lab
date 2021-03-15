import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = { query: "" };
  }

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="query">
            <h4>Enter a Search Term</h4>
          </label>
          <input
            className="form-control"
            type="search"
            id="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}