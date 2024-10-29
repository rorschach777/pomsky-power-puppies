
import {defineField, defineType} from 'sanity'

export const coatType = defineType({
    name: 'coat',
    title: 'Coats',
    type: 'document',
    fields: [
      defineField({
        name: 'coatDescription',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'published',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
    ]
  });
  