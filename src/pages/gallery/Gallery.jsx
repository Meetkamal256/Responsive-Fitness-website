import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = () => {
      const imageArray = [];
      for (let i = 1; i <= galleryLength; i++) {
        import(`../../images/gallery${i}.jpg`)
          .then((module) => module.default)
          .then((image) => {
            imageArray.push(image);
            if (imageArray.length === galleryLength) {
              setImages(imageArray);
            }
          })
          .catch((error) => console.error("Error fetching images:", error));
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <>
        <Header title="Our Gallery" image={HeaderImage}>
          Discover the spirit of FitHub through our gallery. Witness the
          passion, dedication, and triumphs of our vibrant community as they
          pursue their fitness goals.
        </Header>
      </>

      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
