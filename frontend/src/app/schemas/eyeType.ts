
import {defineField, defineType} from 'sanity'

export const eyeType = defineType({
    name: 'eye',
    title: 'Eye Colors',
    type: 'document',
    fields: [
      defineField({
        name: 'color',
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
  