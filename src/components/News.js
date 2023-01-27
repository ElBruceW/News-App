import Card from "./Card";


function News({news}) {
  return (
    <>
      <div className="grid">
      {
       news.map((news,index) => <Card key={index} news={news}/>)
      }
      </div>
    </>
  );
}

export default News;
