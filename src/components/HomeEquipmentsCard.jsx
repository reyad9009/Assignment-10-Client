import React from "react";
import { Link } from "react-router-dom";

const HomeEquipmentsCard = ({ homeEquipments }) => {
  const {
    _id,
    image,
    itemName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = homeEquipments;
  return (
    <div>
      <div>
        <div className="card card-compact lg:w-[25rem] lg:h-[10] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[50%]" src={image} />
          </figure>
          <div className="card-body flex flex-grow justify-end ml-4">
            <span className="card-title font-bold text-2xl">{itemName}</span>
            <span className="font-semibold text-base">Price: {price} $</span>
            <span className="font-semibold text-base">
              Customization: {customization}
            </span>
            <span className="font-semibold text-base">
              Processing Time: {processingTime}
            </span>
            <span className="font-semibold text-base">
              Stock Status: {stockStatus}
            </span>
           

            <div className="card-actions justify-start">
              <Link to={`/all-sports-equipments/details/${_id}`}>
              <button
                onClick={() => handelDeleteMyEquipmentCard(_id)}
                className="px-6 py-3 font-bold rounded-full bg-[#f55353] text-white text-base mt-2 mb-4"
              >
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEquipmentsCard;
