export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Id',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'siteUrl',
      title: 'SiteUrl',
      type: 'string',
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'technologies',
          title: 'Technologies',
          type: 'string',
        },
      ],
    },
  ],
}
