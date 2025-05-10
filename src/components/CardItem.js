function CardItem({ title, description }) {
    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default CardItem;