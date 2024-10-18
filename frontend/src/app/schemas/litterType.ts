
import {defineField, defineType} from 'sanity'

export const litterType = defineType({
    name: 'litter',
    title: 'Litters',
    type: 'document',
    fields: [
      defineField({
        name: 'litterName',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'litterParents',
        type: 'string'
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
        name: 'location',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'location'},
            ]
          }
        ],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'puppies',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'pomsky'},
            ]
          }
        ]
      }),
      defineField({
        name: 'published',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'soldOut',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'description',
        type: 'array',
        of: [{type: 'block'}],
        validation: (rule) => rule.required(),
      }),

    ],
  })
  