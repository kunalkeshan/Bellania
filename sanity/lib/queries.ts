// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all category slugs
export const productCategoryPathsQuery = groq`*[_type == "productCategory" &&  defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all category
export const productCategoryQuery = groq`*[_type == "productCategory" && defined(slug.current)]{
  _id, title, slug, description
}`;

// Get all products
export const productQuery = groq`*[_type == "product"]{
  _id, title, description, "image": image.asset->url, "alt": image.alt
}`;
