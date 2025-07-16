import React from "react";
import { FiHeart, FiMessageSquare, FiInstagram } from "react-icons/fi";
import image1 from "../../assets/instragram/image1.avif?url";
import image2 from "../../assets/instragram/image2.avif?url";
import image3 from "../../assets/instragram/image3.jpg?url";
import image4 from "../../assets/instragram/image4.jpg?url";
import image5 from "../../assets/instragram/image5.jpg?url";
import image6 from "../../assets/instragram/image6.jpeg?url";

const InstagramPost = () => {
  const instagramPosts = [
    { id: 1, image: image1, likes: 1243, comments: 89 },
    { id: 2, image: image2, likes: 892, comments: 45 },
    { id: 3, image: image3, likes: 1567, comments: 112 },
    { id: 4, image: image4, likes: 2105, comments: 156 },
    { id: 5, image: image5, likes: 978, comments: 67 },
    { id: 6, image: image6, likes: 3421, comments: 234 },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full mb-4">
            <FiInstagram className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Follow Us <span className="text-primary">@Najamkuce.Agency</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover Croatia through our lens and join our community of
            travelers
          </p>
        </div>

        {/* Masonry-style Image Grid */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative group overflow-hidden rounded-lg break-inside-avoid"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                style={{
                  height: `${
                    post.id % 3 === 0 ? 320 : post.id % 2 === 0 ? 260 : 200
                  }px`,
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <div className="text-white flex items-center">
                  <FiHeart className="mr-1" />
                  <span>{post.likes.toLocaleString()}</span>
                </div>
                <div className="text-white flex items-center">
                  <FiMessageSquare className="mr-1" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/homerent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border-b-2 border-t-2 border-primary  text-gray-900 font-medium py-3 px-8 rounded-md"
          >
            <FiInstagram className="mr-2" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
