import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'your_project_id',     // Replace with your actual Sanity project ID
  dataset: 'production',            // Replace with your dataset
  useCdn: true,
  apiVersion: '2023-05-30',
})

const builder = imageUrlBuilder(sanityClient)

// Define the image input type manually
type SanityImageSource = string | Record<string, any>

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}