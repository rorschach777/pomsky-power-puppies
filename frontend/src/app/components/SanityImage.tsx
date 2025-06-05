// components/SanityImage.tsx
import Image from 'next/image'
import { urlFor } from '../lib/sanity'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type SanityImageProps = {
  image: SanityImageSource
  alt?: string
  priority?: boolean
  maxWidth?: number
  objectFit?: 'cover' | 'contain' | 'fill'
  aspectRatio?: number
}

export default function SanityImage({
  image,
  alt = '',
  priority = false,
  maxWidth = 1600,
  objectFit = 'cover',
  aspectRatio = 16 / 9
}: SanityImageProps) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: `${100 / aspectRatio}%` }}>
      <Image
        src={urlFor(image).width(maxWidth).url()}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit }}
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 100vw,
               1600px"
      />
    </div>
  )
} 