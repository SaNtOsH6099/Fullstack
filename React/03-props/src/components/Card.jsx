const Card = ({ imgLink, name, description }) => {
        return (
                // wrapper with gradent background to animate 
                <div className="wrapper flex justify-center p-1  rounded-lg h-full
                bg-[linear-gradient(90deg,#7465ff,#52d878,#ff6f6f,#7465ff)]
                bg-size-[300%_100%]
                animate-gradient">
                        {/* card component rendering info */}
                        <div className="card flex flex-col items-center gap-3 p-16  bg-[#111827] rounded-lg justify-between ">
                                <img src={imgLink} alt={name} className="rounded-lg " />
                                <h3 className="card-name">{name}</h3>
                                <p className="card-desc text-center">{description}</p>
                        </div>
                </div>
        );
};

export default Card;
