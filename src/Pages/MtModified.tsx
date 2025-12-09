import React, { useState } from "react";

interface VideoPin {
  id: number;
  thumbnail: string;
  duration: string;
}

const videoPins: VideoPin[] = [
  { id: 1, thumbnail: "/video1.mp4", duration: "1:28" },
  { id: 2, thumbnail: "/video2.mp4", duration: "2:44" },
  { id: 3, thumbnail: "/video3.mp4", duration: "1:40" },
  { id: 4, thumbnail: "/video4.mp4", duration: "0:51" },
  { id: 5, thumbnail: "/video5.mp4", duration: "1:41" },
  { id: 6, thumbnail: "/Banner2.png", duration: "0:06" },
  { id: 7, thumbnail: "/Banner3.png", duration: "0:08" },
  { id: 8, thumbnail: "/Banner4.png", duration: "0:56" },
  { id: 9, thumbnail: "/Banner5.png", duration: "0:07" },
];

const MtModified: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      alert(`File uploaded: ${e.target.files[0].name}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Video Section */}
        <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
          <div className="relative pb-[56.25%]">
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              controls
              poster="/main-video-thumbnail.jpg"
            >
              <source src="/main-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="mt-4 text-xl font-semibold">
            Precision, Power & Style: The 2024 Yamaha Supersport Lineup
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Backed by an unmatched racing pedigree and honed on top circuits...
          </p>

          <div className="mt-4">
            <label className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              + Add Your Own
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="text-gray-500">No comments yet</p>
            <input
              type="text"
              placeholder="Add a comment to start the conversation"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        {/* Sidebar Thumbnails */}
        <div className="space-y-4">
          {videoPins.map((pin) => (
            <div key={pin.id} className="relative group cursor-pointer">
              <img
                src={pin.thumbnail}
                alt={`Video ${pin.id}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                {pin.duration}
              </span>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MtModified;
