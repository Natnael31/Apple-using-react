import React, { useState, useEffect } from 'react'
import "./Applenews.css"
export default function Applenews() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-11-20&to=2022-11-30&sortBy=publishedAt&pageSize=6&apiKey=01ae1c4b0af64afe9a92a57bfb8d4053")// about apple(q=Apple), date interval(from -to), recent articles(sortBy=publishedAt) only 6 articles(pageSize=6)
      .then((res) => res.json())
      .then((newsData) => setNews(()=>newsData.articles))//get the artcles object from the json and assign it to news array
      .catch(()=>alert("file not found"));
  }, []);

  console.log(news);


  return (
    <div>
       <div className='title-wrapper'>
              Latest Apple News of November
          </div>
      <div className="news-container">
        <div className="row h-100 align-items-center justify-content-center text-center">
         
          {news?.map((singleNews) => {
            let newsId = singleNews.source.id

            return (

              <div key={newsId} className="col-sm-12 col-md-6">
                <div  className="news-wrapper">
                  <div className="image-wrapper">
                    <a href={singleNews.url} target="_blank">
                      <img src={singleNews.urlToImage}></img>
                    </a>
                  </div>
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      {singleNews.title}
                    </div>
                    <div className="newsDescription">
                      {singleNews.description}
                    </div>
                    <div className="publishedDate">
                      {singleNews.publishedAt}
                    </div>
                  </div>

                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
