import React, { useState, useEffect } from 'react'
import "./Youtube.css"

export default function Youtube() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(" https://www.googleapis.com/youtube/v3/search?key=AIzaSyBPXal8A75LHdUP1gUL7AH2mzKiYIfHEiA&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&maxResults=8")

    // fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&maxResults=8`)
      .then((resp) => resp.json())//get the json as an object
      .then((data) => setVideos(data.items))//from the data(resp.json result) object get the items only and assign it to videos    
      .catch(()=>alert("No videos found"));
  }, []);

  console.log(videos);
  // let a = videos[0].snippet.thumbnails.high.url

  return (<>
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className=" bold video-title-wrapper">
              Random Videos
            </div>
          </div>

          {videos?.map((singleVideo) => {//get every single array value(object in this case) and map(?. is optional maping=> prevents from your whole app from crashing if the data fails to load)
            return (
              <div key = {singleVideo.id.videoId} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`} target="_blank">{/*videolink ="www.youtube.com/watch?v=" + videoId  */}
                      {/* <img src={a} /> */}
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      {singleVideo.snippet.title}
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                    <div className="videoPublishingDate">
                      {singleVideo.snippet.publishedAt}
                    </div>

                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>

  </>
  )
}
