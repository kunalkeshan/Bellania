import React from "react";

const References = () => {
    return (
        <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-12 md:pb-16 lg:pb-32">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                References
            </h1>
            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1,2,3].map((idx) => (
                    <div
                        key={idx}
                        style={{ backgroundImage: `url('/images/hero/1.jpg')` }}
                        className="w-full max-h-[28rem] group bg-no-repeat cursor-pointer bg-cover bg-center rounded aspect-video"
                    />
                ))}
            </div>
        </div>
    );
};

export default References;
