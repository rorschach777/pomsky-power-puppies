
import {defineField, defineType} from 'sanity'

export const locationType = defineType({
    name: 'location',
    title: 'Locations',
    type: 'document',
    fields: [
      defineField({
        name: 'locationName',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'litter name'},
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
      })
     
    ],
  })
  