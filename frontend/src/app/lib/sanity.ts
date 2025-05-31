import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from '../../environment'

export const sanityClient = createClient({
  projectId: projectId,     // Replace with your actual Sanity project ID
  dataset: dataset,            // Replace with your dataset
  useCdn: true,
  apiVersion: '2023-05-30',
})

const builder = imageUrlBuilder(sanityClient)

// Define the image input type manually
type SanityImageSource = string | Record<string, any>

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}