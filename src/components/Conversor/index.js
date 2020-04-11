import React, { Component } from "react";
import { connect } from "react-redux";

import Formulario from "../Formulario";

class Conversor extends Component {
  render() {
    const { convert } = this.props;

    return (
      <div className="content">
        <div className="row justify-content-md-center">
          <div className="card text-center w-50">
            <div className="card-header bg-info">Xumes Corretora</div>
            <div className="card-body">
              <Formulario />
            </div>
            <div className="card-footer text-light bg-dark">{convert}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  convert: state.convert,
});

export default connect(mapStateToProps)(Conversor);
