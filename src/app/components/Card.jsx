/**
 * @author Fuyuan Cheng <gloomcheng@gmail.com>
 */
import Image from "next/image";

export default function Card({item}) {
    return (
        <div className="border">
            <Image src={item.Picture.PictureUrl1} alt={item.Picutre.PictureDescription1} />
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}