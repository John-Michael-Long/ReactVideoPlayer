var VideoPlayer = (props) =>(
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={props.video ? `https://www.youtube.com/embed/${props.video.id.videoId}` : null} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video ? props.video.snippet.title : 'Loading'}</h3>
      <div>{props.video ? props.video.snippet.description : 'keep waiting'}</div>
    </div>
  </div>
);

VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoPlayer = VideoPlayer;
