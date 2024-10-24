
import {defineField, defineType} from 'sanity'

export const litterType = defineType({
    name: 'eyeColor',
    title: 'Eye Colors',
    type: 'document',
    fields: [
      defineField({
        name: 'eyeColor',
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
  })
  