'use client';

import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
};

export default function PageMeta({ title, description }: Props) {
  return (
    <Head>
      <title>{title || 'Pomsky Power Puppies'}</title>
      <meta name="description" content={description || 'Ethical Pomsky breeders focused on healthy, confident dogs.'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}