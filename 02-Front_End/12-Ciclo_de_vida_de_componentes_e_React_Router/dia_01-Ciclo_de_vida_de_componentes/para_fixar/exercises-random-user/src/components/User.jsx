import { Component } from "react";

class User extends Component {
  render() {
    const { 
      userName, 
      userImage, 
      userEmail, 
      userAge 
    } = this.props; 
    return (
      <div>
        <img src={userImage.large} alt={userName.first}/>
        <h2>{userName.first} {userName.last}</h2>
        <p>{userEmail}</p>
        <p>{userAge.age}</p>
      </div>
    );
  }
}

export default User;