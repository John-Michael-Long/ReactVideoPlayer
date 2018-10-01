var VideoList = (props) =>(
  <div className="video-list">
    {(props.videos && props.videos.length) ? props.videos.map((video, index) => 
      <VideoListEntry key={index} video={video} onVideoClick={props.onVideoClick} />)
      : <div>Loading video list</div>
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
