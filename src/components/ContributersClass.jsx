import { Component } from "react";

class Contributers extends Component {
  constructor(props) {
    console.log("Child constructor called!");
    super(props);
  }

  componentDidMount() {
    console.log("Child component mounted!");
  }

  componentDidUpdate() {
    console.log("Child component updated!");
  }

  componentWillUnmount() {
    console.log("Child component is unmounted!");
  }

  render() {
    console.log("Child component rendering!");
    const { name, email, bio, website, avatar } = this.props.details;
    return (
      <div className="contributer-section">
        <div className="profile">
          <img src={avatar} alt={name} className="avatar" />
        </div>
        <div className="details">
          <h1 className="name">{name}</h1>
          <p className="email">{email}</p>
          <p className="bio">{bio}</p>
          <a href={website} className="website">
            Website
          </a>
        </div>
      </div>
    );
  }
}

export default Contributers;
