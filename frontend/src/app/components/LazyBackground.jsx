const LazyBackground = () => {
    return (
        <img 
            srcSet="
                  ./images/ppp-hero-mobile.webp 480w, 
                ./images/ppp-hero-mid.webp 666w, 
                  ./images/ppp-hero.webp 2500w" 
            sizes="(max-width: 666px) 300px, 
                    (max-width: 1080px) 666px,
                    (max-width: 2500px) 1080px"
            // loading="lazy"
            alt="Pomsky Puppies for Sale in Pennsylvania and New York"
          />
    );
}
export default LazyBackground;