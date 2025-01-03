import React from "react";

// Video Component
const Video = ({ video }) => {
  return (
    <div style={{ margin: "10px", backgroundColor: "#1b1b1b", padding: "10px", width: "200px" }}>
      <div style={{ position: "relative" }}>
        <img src={video.image} alt="Thumbnail" style={{ width: "100%", height: "120px", objectFit: "cover" }} />
        <span
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            color: "#c6c6c6",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "2px 5px",
            fontSize: "14px",
          }}
        >
          {video.duration}
        </span>
      </div>
      <div style={{ marginTop: "10px", color: "#ffffff", fontSize: "14px", fontWeight: "bold" }}>
        {video.title}
      </div>
      <div style={{ marginTop: "5px", color: "#888888", fontSize: "12px" }}>
        {video.views} views
      </div>
      <div style={{ marginTop: "5px", color: "#ffffff", fontSize: "12px" }}>{video.description}</div>
    </div>
  );
};

// Row Component to display videos in a horizontal scrollable row
const VideoRow = ({ title, videos }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <h2 style={{ color: "#ffffff", margin: "0 0 10px" }}>{title}</h2>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          padding: "10px 0",
        }}
      >
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

// Example Main App with multiple rows of videos
const MainApp = () => {
    const videoData = [
      { title: "Video 1", image: "image1.jpg", duration: "5:32", views: "1M", description: "Amazing video 1" },
      { title: "Video 2", image: "image2.jpg", duration: "3:21", views: "500K", description: "Great video 2" },
      { title: "Video 3", image: "image3.jpg", duration: "2:12", views: "300K", description: "Awesome video 3" },
      // Add more video objects as needed
    ];
  
    const rows = [
      { title: "Trending Videos", videos: videoData },
      { title: "New Releases", videos: videoData },
      { title: "Recommended for You", videos: videoData },
    ];
  
    return (
      <div style={{ backgroundColor: "#000000", color: "#ffffff", padding: "20px", minHeight: "100vh" }}>
        {rows.map((row, index) => (
          <VideoRow key={index} title={row.title} videos={row.videos} />
        ))}
      </div>
    );
  };
  
  export default MainApp;
  