import { Component } from "react";
import Contributers from "./ContributersClass";
import { GIT_HUB_URL } from "../utils/constants";
import { ApiFetchStatus } from "../utils/common";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor called!");

    this.state = {
      apiStatus: ApiFetchStatus.LOADING,
      name: null,
      email: null,
      bio: null,
      website: null,
      avatar: null,
    };
  }

  async componentDidMount() {
    console.log("Parent component mounted!");

    // Api call
    const res = await fetch(GIT_HUB_URL);

    if (!res.ok) {
      console.log("Error fetching data from API!");
      this.setState({
        apiStatus: ApiFetchStatus.FAILED,
      });
      return;
    }

    const resJson = await res.json();
    console.log(resJson);

    this.setState({
      name: resJson.name,
      email: resJson?.email,
      bio: resJson?.bio,
      website: resJson?.blog || resJson?.html_url,
      avatar: resJson?.avatar_url,
      apiStatus: ApiFetchStatus.SUCCESS,
    });
  }

  componentDidUpdate() {
    console.log("Parent component updated!");
  }

  componentWillUnmount() {
    console.log("Parent component is unmounted!");
  }

  render() {
    const stateData = {
      name: this.state.name,
      email: this.state.email,
      bio: this.state.bio,
      website: this.state.website,
      avatar: this.state.avatar,
    };
    console.log("Parent component rendering!");
    return (
      <div className="about-container py-20 px-47 h-[75vh]">
        <h1 className="page-title text-2xl font-semibold my-4 mx-0">
          Contributers
        </h1>
        <Contributers details={stateData} />
      </div>
    );
  }
}

export default About;
