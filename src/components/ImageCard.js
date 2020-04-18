import React from "react";

import ImageTags from "./ImageTags";

const ImageCard = ({ image }) => {
  const { webformatURL, user, views, downloads, likes } = image;

  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={webformatURL} alt="Random" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Foto By {user}</div>
        <ul>
          <li>
            <strong>Views: </strong> {views}
          </li>
          <li>
            <strong>Downloads: </strong> {downloads}
          </li>
          <li>
            <strong>Likes: </strong> {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <ImageTags key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
