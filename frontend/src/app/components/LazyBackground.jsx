const LazyBackground = () => {
    return (
        <img 
            srcSet="
                  ./images/ppp-hero-mobile.webp 480w, 
                  ./images/ppp-hero.webp 2500w" 
            sizes="(max-width: 600px) 300px, 
                    (max-width: 2500px) 600px"
            loading="lazy"
          />
    );
}
export default LazyBackground;