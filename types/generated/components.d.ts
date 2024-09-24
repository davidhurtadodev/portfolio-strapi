import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 100;
      }>;
    subheading: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 150;
      }>;
    description: Attribute.Blocks;
    img: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.hero': SectionsHero;
    }
  }
}
