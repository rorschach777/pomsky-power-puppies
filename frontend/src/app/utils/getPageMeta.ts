import { client } from "@/sanity/client";

export async function getPageMeta(title: string) {
  const page = await client.fetch(
    `*[_type == "page" && title == $title][0]{
      metaTitle,
      metaDescription
    }`,
    { title }
  );

  return {
    title: page?.metaTitle || "Pomsky Power Puppies",
    description:
      page?.metaDescription ||
      "Ethical Pomsky breeders focused on healthy, confident dogs.",
  };
}