import React from "react";
import "./App.css";
import { DisplayUsers } from "./DisplayUsers.js";

const users = [
  "asirelle519",
  "beargamerplays",
  "bestiejoel",
  "cai_rhys",
  "canoekid",
  "fearless0negaming",
  "fliplegit",
  "goldenalpharex",
  "hiyazcool",
  "jellybeen60",
  "kindiekritz",
  "oplatiinum",
  "waltert_",
  "wise_studio",
  "wyomingwyatt"
];
const clientID = "p320b4t8047u5zwtezbkyxgmd589ed";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInfo: [] };
    this.getUsers = this.getUsers.bind(this);

    this.getUsers();
  }
  getUsers() {
    let url = "https://api.twitch.tv/kraken/users?login=" + users.join(",");

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        console.log(xmlHttp.responseText);
        this.setState({
          userInfo: JSON.parse(xmlHttp.responseText)["users"]
        });
      //console.log(this.state);
      //userInfo.forEach((user) => console.log(user.display_name));
    }.bind(this);
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.setRequestHeader("Client-ID", clientID);
    xmlHttp.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
    xmlHttp.send(null);
  }

  render() {
    return (
      <div className="App">
        <h1>Noobcraft Members</h1>
        {this.state.userInfo && <DisplayUsers users={this.state.userInfo} />}
      </div>
    );
  }
}
