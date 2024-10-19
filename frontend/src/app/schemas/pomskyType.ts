
import {defineField, defineType} from 'sanity'

export const pomskyType = defineType({
    name: 'pomsky',
    title: 'Pomskies',
    type: 'document',
    fields: [
      defineField({
        name: 'pomskyName',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'pomsky name'},
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'image',
        type: 'image',
      }),
      defineField({
        name: 'backgroundImage',
        type: 'image',
      }),
      defineField({
        name: 'published',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'isPuppy',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'female',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      
      defineField({
        name: 'currentlyAvailable',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'price',
        type: 'number',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'showPrice',
        type: 'boolean',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'weight',
        type: 'number'
      }),
      defineField({
        name: 'eyeColor',
        type: 'string'
      }),
      defineField({
        name: 'description',
        type: 'string',
        validation: (rule) => rule.required(),
      })
 
    ],
  })
  