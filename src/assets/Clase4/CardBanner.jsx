const CardBanner = ({ title, description, imageUrl }) => {
    return (
        <div className="card h-100">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body fondoBK2">
                <h5 className="card-title colorBK fw-bold">{title}</h5>
                <p className="card-text colorBK fw-light">{description}</p>
            </div>
        </div>
    );
};

export default CardBanner;