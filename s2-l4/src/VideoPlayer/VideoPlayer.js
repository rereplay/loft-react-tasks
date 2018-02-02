import React, { Component } from "react";
import "./VideoPlayer.css";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playVideo = () => {
    this.videoSource.play();
  };

  pauseVideo = () => {
    this.videoSource.pause();
  };

  getSource = source => {
    this.videoSource = source;
  };

  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          ref={this.getSource}
          src={require("./Video.mp4")}
          type="video/mp4"
        />
        <button onClick={this.playVideo}>Play</button>
        <button onClick={this.pauseVideo}>Stop</button>
      </div>
    );
  }
}

export default VideoPlayer;
