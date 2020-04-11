import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { converteMoedas } from "../../store/actions";

import ListaMoedas from "../ListaMoedas";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convert: {
        from: "",
        to: "",
        amount: 0,
      },
    };
  }

  handleChange = (e) => {
    const { convert } = this.state;

    convert[e.target.name] = e.target.value;

    this.setState({ convert });
  };

  hadleSubmit = async () => {
    const { convert } = this.state;

    if (convert && convert.from && convert.to && convert.amount) {
      converteMoedas(convert);
    } else {
      alert("Preencha todos os campos.");
    }
  };

  render() {
    return (
      <form>
        <div className="row justify-content-md-center">
          <div className="input-group input-group-lg">
            <input
              onChange={(e) => this.handleChange(e)}
              type="number"
              name="amount"
              className="form-control"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-6">
            <label htmlFor="formSelectDE">De:</label>
            <ListaMoedas
              nameSelect="from"
              nameClass="form-control"
              nameId="formSelectDE"
              change={(e) => this.handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formSelectPARA">Para:</label>
            <ListaMoedas
              nameSelect="to"
              nameClass="form-control"
              nameId="formSelectPARA"
              change={(e) => this.handleChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={() => this.hadleSubmit()}
            className="btn btn-primary btn-lg btn-block"
          >
            Converter
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ converteMoedas }, dispatch);

export default connect(null, mapDispatchToProps)(Formulario);
