import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Card from "../Components/Card";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [detailsData, setDetailsData] = useState<Photo[] | null>(null);
    const location = useLocation();
    const { author } = location.state || {};
    console.log("AUTHOR", author);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Photo[]>(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
                );
                setDetailsData(response.data);
                console.log("DETAILS PHOTO", detailsData, response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    function renderCards () {
        return(
            <>
                {detailsData?.map(element => {
                    return <>
                        <Card title={element.title} image={element.thumbnailUrl} key={element.id}/>
                    </>
                })}
            </>
        )
    }


    return (
        <>
            <div className="container mx-auto my-6">
                {!detailsData ? <div>Loading...</div> : null}
                {!!author ? <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
                    Album writed by : {author}
                    </h1> : null}
                <div className="grid grid-cols-4 gap-4">
                    {renderCards()}
                </div>
            </div>
        </>
    );
};

export default Details;
