import Axios from "axios";
import React, { Component } from "react";
import "../css/main.css";
import { Button } from "reactstrap";

class HotelPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelPackages: [],
      package: "",
      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
      hotelID: "",
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:3005/ehotel/hotel", this.state.config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          hotelID: res.data[0]._id,
          hotelPackages: res.data[0].services,
        });
      })
      .catch((err) => console.log(err));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      `http://localhost:3005/ehotel/hotel/${this.state.hotelID}/services`,
      {
        serviceType: this.state.package,
      },
      this.state.config
    )
      .then((res) => {
        console.log(res.data);
        this.setState({
          hotelPackages: res.data.services,
          package: "",
        });
      })
      .catch((err) => console.log(err));
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDelete = (PID) => {
    const result = window.confirm("Are you sure to delete this package?");
    if (result) {
      Axios.delete(
        `http://localhost:3005/ehotel/hotel/${this.state.hotelID}/services/${PID}`,
        this.state.config
      )
        .then((res) => {
          console.log(res.data);
          const filterData = this.state.hotelPackages.filter((item) => {
            return item._id !== PID;
          });
          this.setState({
            hotelPackages: filterData,
            package: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <div className="hotelpackage">
        <div className="ml-5">
          <div className="form-group row">
            <div className="col-md-10 mt-3">
              <h3 className="font-weight-bold">Add Hotel Package</h3>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Hotel Package"
                name="package"
                value={this.state.package}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="font-weight-bold btn btn-primary mb-2"
                onClick={this.handleSubmit}
              >
                Add
              </button>
            </div>
          </div>

          <div className="container-fluid md-10">
            <table className="table table-striped ">
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Hotel Package</th>
                  <th>Action</th>
                </tr>
              </thead>

              {this.state.hotelPackages.map((item) => {
                return (
                  <tbody key={item._id}>
                    <tr className="table-info col-mb-7">
                      {/* <th scope="row">{item._id}</th> */}
                      <td>{item.serviceType}</td>
                      
                      <td>
                       
                        <Button
                          color="danger"
                          onClick={() => this.handleDelete(item._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default HotelPackage;
