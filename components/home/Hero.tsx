import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
    artist: string;
    art: string;
}

export const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "/images/hero/1.jpg",
    },
    {
        artist: "Tom Byrom",
        art: "/images/hero/2.jpg",
    },
    {
        artist: "Vladimir Malyavko",
        art: "/images/hero/3.jpg",
    },
];

export default function Hero() {
    return (
        <div className="w-full h-full flex snap-x overflow-x-scroll ">
            {works.map((artwork) => (
                <Image
                    key={artwork.artist}
                    unoptimized
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className="aspect-video snap-start h-screen w-screen object-cover"
                    width={300}
                    height={400}
                />
            ))}
        </div>
    );
}
