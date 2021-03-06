import React, { Component } from "react";
import SavedRecipe from "../../components/SavedRecipe";
import "./userprofile.css";
import moment from "moment"

class UserProfile extends Component {
    state = {
        userData: null
    }

    componentDidMount() {
        if (this.props.userData) {
            this.setState({ userData: this.props.userData })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userData) {
            this.setState({ userData: nextProps.userData })
        }
    }

    render() {
        // console.log(this.state.userData)
        return (

            <div className="container" id="userProfilePage">
                <div className="jumbotron" id="userProfileJumbo">
                    <div className="row" id="userProfileRow2">
                        <div className="col-md-6 border-0" id="userProfileColLeft">
                            <div className="row" id="userPictureDiv">
                                <div className="col-md-12" id="userProfilePhotoCard">
                                    <img src="/img/user.png" alt="Avatar" id="userPicture" />
                                </div>
                                <div className="overlay border-0" id="userOverlay">
                                    <div className="userProfilePhotoBtn">
                                        <button type="button" className="btn btn-secondary" id="userProfilePhotoBtn">Update Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 media-body" id="userProfileColRight">
                            <ul id="userInfo">
                                <p>Name:
                    <span name="user" id="userName"> {this.state.userData ? this.state.userData.first_name + " " + this.state.userData.middle_name + " " + this.state.userData.last_name : ""}</span>
                                </p>
                                <p>Age:
                    <span id="userAge"> {this.state.userData ? this.state.userData.age : ""}</span>
                                </p>
                                <p>Member Since:
                    <span id="memberSince"> {this.state.userData ? moment(this.state.userData.createdAt).format("LLL") : ""}</span>
                                </p>
                                <p>Membership Type:
                    <span id="memType"> {localStorage.getItem("subscription")} </span>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around" id="savedRecipeRowUserProfile">

                    <SavedRecipe userData={this.state.userData} />

                </div>
                <hr />
            </div>

        )
    }
};

export default UserProfile;
