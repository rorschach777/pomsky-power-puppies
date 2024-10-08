
import {defineField, defineType} from 'sanity'

export const pageType = defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'metaTitle',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'slug',
        type: 'slug',
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

 
      defineField({
        name: 'description',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      // Other Docs
      defineField({
        name: 'litters',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'litter'},
            ]
          }
        ],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'locations',
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
        name: 'pomsky',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'pomsky'},
            ]
          }
        ],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'keywords',
        type: 'array',
        of: [{type: 'string'}],
        validation: (rule) => rule.required(),
      }),
    ],
  })
  