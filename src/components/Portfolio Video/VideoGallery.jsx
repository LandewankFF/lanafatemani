import React from 'react';

const VideoGallery = ({ sources }) => {
    return (
        <section className="s:px-5 md:px-20">
            {/* Header */}
            <div className="my-4">
                <h1 className="font-bold text-4xl flex justify-center">Karya Kami</h1>
            </div>

            {/* Video Grid */}
            <div className="flex flex-wrap gap-4 justify-center">
                {sources.map((source, index) => (
                    <div
                        key={index}
                        className="w-[360px] h-[560px] bg-black rounded-lg overflow-y-hidden"
                    >
                        <iframe
                            src={source}
                            className="w-full h-full object-cover"
                            title={`Portfolio Video ${index + 1}`}
                            scrolling="no"
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoGallery;
