import { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Generate WebP and AVIF alternatives if possible
  const getOptimizedSources = (originalSrc) => {
    if (!originalSrc) return [];
    
    // For local images, we can't generate WebP on the fly with Vite alone
    // But we can detect if WebP versions exist
    const sources = [];
    const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    
    // Try WebP first (if available)
    sources.push({
      srcSet: `${basePath}.webp`,
      type: 'image/webp'
    });
    
    return sources;
  };

  const sources = getOptimizedSources(src);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <picture className={`block ${className}`}>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          type={source.type}
          sizes={sizes}
          onError={() => {}} // Silently fail to fallback
        />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          ...(width && height && {
            aspectRatio: `${width}/${height}`,
          }),
        }}
      />
      {!imageLoaded && !imageError && (
        <div 
          className="bg-gray-200 animate-pulse flex items-center justify-center"
          style={{
            width: width || '100%',
            height: height || 'auto',
            aspectRatio: width && height ? `${width}/${height}` : 'auto',
          }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </picture>
  );
};

export default OptimizedImage;
