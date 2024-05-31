import type { Schema, Attribute } from '@strapi/strapi';

export interface NewYoutubeYoutube extends Schema.Component {
  collectionName: 'components_new_youtube_youtubes';
  info: {
    displayName: 'Youtube';
    icon: 'music';
  };
  attributes: {
    youtube_text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'new-youtube.youtube': NewYoutubeYoutube;
    }
  }
}
