import React from "react";
import "./App.css";

export class DisplayUsers extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => (
          <div className="user-container">
            <a href={"https://twitch.tv/" + user.name} target="_blank" rel="noopener noreferrer">
              <img
                src={user.logo}
                alt={user.display_name}
                className="avatar"
                key={i + "img"}
              />
            </a>
            <a href={"https://twitch.tv/" + user.name} target="_blank" rel="noopener noreferrer" className="user-twitchname">
              <h2 key={i} className="twitchNames">
               {user.display_name}
              </h2>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
