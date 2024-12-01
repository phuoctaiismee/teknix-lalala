import React from "react";

const RoomRateSection = () => {
    return (
        <div className="border border-neutral-200 p-4 rounded-2xl space-y-8">
            <div>
                <h2 className="text-2xl font-semibold">Room Rates </h2>
                <span className="block mt-2 text-neutral-500 ">
                    Prices may increase on weekends or holidays
                </span>
            </div>
            <div className="w-14 border-b border-neutral-200"></div>
            <div className="flow-root">
                <div className="text-sm sm:text-base text-neutral-600 -mb-4">
                    <div className="p-4 bg-neutral-100  flex justify-between items-center space-x-4 rounded-lg">
                        <span>Monday - Thursday</span>
                        <span>$199</span>
                    </div>
                    <div className="p-4  flex justify-between items-center space-x-4 rounded-lg">
                        <span>Monday - Thursday</span>
                        <span>$199</span>
                    </div>
                    <div className="p-4 bg-neutral-100 flex justify-between items-center space-x-4 rounded-lg">
                        <span>Friday - Sunday</span>
                        <span>$219</span>
                    </div>
                    <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
                        <span>Rent by month</span>
                        <span>-8.34 %</span>
                    </div>
                    <div className="p-4 bg-neutral-100  flex justify-between items-center space-x-4 rounded-lg">
                        <span>Minimum number of nights</span>
                        <span>1 night</span>
                    </div>
                    <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
                        <span>Max number of nights</span>
                        <span>90 nights</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomRateSection;
