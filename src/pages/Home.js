import CardItem from "../components/CardItem"

function Home({ items }) {
    return (
        <div className="container .bg-primary">
        <div className="row">
        {items.map((item, index) => {
        <div className="col-md-4 mb-4" key={index}>
        <CardItem title={item.title} 
        description={item.description} />
        <p>texto</p>
        </div>
        })
        }
        </div>
        </div>
    )
}

export default Home;