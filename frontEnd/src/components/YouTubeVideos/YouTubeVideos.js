import React, { useState, useEffect } from 'react'
import './youTubeVideos.css'

function YouTubeVideos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=9&order=date&key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            // console.log(res)
            return res.json()
        })
        .then((data) => {
            // console.log(data)
            return setVideos(data.items)
        })
    }, []);
    console.log(videos)
  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
             {videos?.map((video, i) => {
                const videoId = video.id.videoId;
                const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
                // console.log(videoLink);
                // here we can assign the video wrapper and return it
                return (
                <div key={i}  className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={videoLink} target="_blank" rel="noreferrer">
                        <img src={video.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={videoLink} target="_blank" rel="noreferrer">
                        {video.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                      {video.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );})}
          </div>
        </div>
      </div>
    </>
  )
}

export default YouTubeVideos
