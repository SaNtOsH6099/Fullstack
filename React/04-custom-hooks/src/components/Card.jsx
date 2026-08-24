

// Card component
const Card = ({ url, author }) => {
    // return card each time 
    return <div className="card p-4 flex flex-col items-center gap-2 justify-between border">
        <img src={url} alt={author} className="w-4/5 aspect-square" />
        <h2 className="author-name  ">{author}</h2>
    </div>;
};

export default Card;
