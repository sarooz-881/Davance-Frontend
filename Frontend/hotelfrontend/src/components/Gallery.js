import React, { Component } from "react";
import "../css/main.css";
import $ from "jquery";
import Axios from "axios";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelImage: "",
      imageSelected: false,
      imageURL: "http://localhost:4000/gallery/uploadImages",
    };
  }
  componentDidMount() {
    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
  }
  handleImageChange = (e) => {
    this.setState({
      myFile: e.target.files[0],
      imageSelected: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", this.state.myFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    Axios.post("http://localhost:3005/ehotel/hotel/upload/image", formData, config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          // hotelImage: res.data.aboutImage,
          imageSelected: false,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="gallery">
        <div className="container-fluid ">
          <h2 className="ml-3 mb-4 font-weight-bold">Gallery Upload</h2>
          <form>
            <div className="custom-file mb-4">
              {/* <input
                type="file"
                id="customFile"
                /> */}
              <input
                type="file"
                className="custom-file-input"
                name="myFile"
                id="myFile"
                onChange={this.handleImageChange}
              />
              <label className="custom-file-label" for="customFile">
                Choose file
              </label>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-info mt-3 font-weight-bold "
            onClick={this.handleSubmit}
          >
            Upload
          </button>
        </div>
      </div>
    );
  }
}
export default Gallery;
