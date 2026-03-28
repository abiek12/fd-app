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
      <div className="contributer-section flex items-start justify-start gap-4 border border-solid border-off-white rounded-2xl p-4 cursor-pointer hover:bg-off-white-bg">
        <div className="profile w-37.5 h-37.5 rounded-[50%] overflow-hidden">
          <img
            src={avatar}
            alt={name}
            className="avatar w-full h-full object-cover"
          />
        </div>
        <div className="details flex flex-col mt-4 gap-1">
          <h1 className="name text-2xl font-semibold">{name}</h1>
          <p className="email">{email}</p>
          <p className="bio font-medium">{bio}</p>
          <a
            href={website}
            className="website text-primary hover:text-primary-accent"
          >
            Website
          </a>
        </div>
      </div>
    );
  }
}

export default Contributers;
