import House from "../house";

const FeaturedHouse = ({house}) => {
    if(house)
    return (
        <div className="">
            <div className="row featuredHouse">
                <h1 className="col-md-12 text-center">Featured Houses</h1>
            </div>
            <House house={house} />
        </div>
    )

    return <div className="">No featured house at this time</div>
}

export default FeaturedHouse; 