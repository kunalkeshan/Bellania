import Image from "next/image";
import React from "react";

const Showcase = ({ categories }: { categories: ProductCategory[] }) => {
    return (
        <main className="w-full h-full">
            <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-12 md:py-16 lg:py-32">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                    Showcase
                </h1>
                <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundImage: `url(${category.image})`,
                            }}
                            className="w-full max-h-[28rem] group bg-no-repeat cursor-pointer bg-cover bg-center rounded aspect-[9/16]"
                        >
                            <div className="bg-gradient-to-t from-black/80 p-8 lg:opacity-0 transition-all duration-300 via-transparent lg:group-hover:opacity-100 flex to-transparent w-full h-full rounded text-center">
                                <div className="mt-auto w-full text-white text-xl">
                                    {category.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Showcase;
