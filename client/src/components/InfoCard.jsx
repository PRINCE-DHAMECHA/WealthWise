import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { GrClose, GrNext } from "react-icons/gr";

const InfoCard = ({ route }) => {
    const { currentColor } = useAppContext();
    const [dis, setDis] = useState(false);

    let r = parseInt(currentColor.substring(1, 3), 16);
    let g = parseInt(currentColor.substring(3, 5), 16);
    let b = parseInt(currentColor.substring(5, 7), 16);
    r = Math.min(r + 70, 255);
    g = Math.min(g + 70, 255);
    b = Math.min(b + 70, 255);
    let rgba2 = `rgba(${r}, ${g}, ${b}, 1.0)`;
    return (
        <div
            className="w-1/4 h-1/4 fixed bottom-10 right-10" >
            <div
                style={{
                    borderLeft: `2px solid ${currentColor}`,
                    borderRadius: "10px",
                    backgroundColor: `${rgba2}`,
                    margin: "10px",
                }}
                className="rounded-lg relative">
                <h2
                    className="text-xl text-white font-bold px-4 py-2">
                    Tips
                </h2>
                <p className="text-themeColor text-white px-4 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam error asperiores
                    dolorem iste quasi eaque esse possimus delectus quae ad culpa dolores ducimus
                    consequatur, quia debitis molestiae animi praesentium.
                </p>
                <div className="flex justify-end">
                    <button className="absolute top-2 right-2 p-3 hover:drop-shadow-xl text-white" onClick={() => setDis((prev) => !prev)}>
                        < GrClose/>
                    </button>
                    <button className="absolute bottom-2 right-6 text-white" onClick={() => setDis((prev) => !prev)}>
                        < GrNext />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;