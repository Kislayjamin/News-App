import React, { useEffect, useState } from 'react';

export default function News() {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=509c9452fe5d44c2a3d7c66588061555");
      const jsonData = await response.json();
      setData(jsonData.articles);
      console.log(jsonData.articles);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Kislay Tak</a>
        </div>
        <div className="container">
          <h3>Welcome to Kislay Tak</h3>
        </div>
      </nav>
      <div className="container">
        <h3>Top Headlines</h3>
        <br />
        <div className="row">
          {data.map((element, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={element.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{element.title.split("",5)}...</h5>
                  <p className="card-text">{element.description.split("",90)}...</p>
                  <a href={element.url} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
