
import {defineField, defineType} from 'sanity'

export const pageType = defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
      defineField({
        name: 'pageName',
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
      }),
      defineField({
        name: 'metaData',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'description',
        type: 'string',
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
  