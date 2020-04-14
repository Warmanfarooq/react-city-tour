import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    isExpanded: false,
  };

  toggel = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removei } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            onClick={() => {
              removei(id);
            }}
            className="close-btn"
          >
            <i className="fas fa-window-close fa-2x" />
          </span>
        </div>
        <div className="tour-info">
          <h2>{city}</h2>
          <h3>{name}</h3>
          <h5>
            info
            <span onClick={this.toggel}>
              <i className="fas fa-arrow-circle-down" />
            </span>
          </h5>
        </div>
        {this.state.isExpanded ? <p>{info}</p> : null}
      </article>
    );
  }
}
