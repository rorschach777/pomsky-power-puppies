import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'
import { dataset, projectId } from '../../environment' // adjust path if needed

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2023-05-30',
})

const builder = imageUrlBuilder(sanityClient)

type SanityImageSource =
  | string
  | {
      _type: 'image'
      asset: {
        _ref: string
        _type: 'reference'
      }
    }

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}