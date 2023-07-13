export default function PodcastIcon({podcastInfo})
{
    const title: string = podcastInfo!.title!.label;
    const author = podcastInfo["im:artist"]!.label;
    const image = podcastInfo["im:image"]![2]!.label;
    const id = podcastInfo!.id!.attributes["im:id"];

    return <div key={id} className=" justify-center items-center shadow-md border m-5 mt-20">
        <div className="flex justify-center items-center">
            <img className="relative rounded-full -mt-20" src={image}></img>
        </div>
        <div>
            <h1 className=" text-center">{title.toUpperCase()}</h1>
            <p  className=" text-center text-gray-400">{"Author: " + author}</p>
        </div>
    </div>
}