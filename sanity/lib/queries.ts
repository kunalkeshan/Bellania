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
  _id, title, "slug": slug.current, description, "image": image.asset->url, "alt": image.alt, "cover": cover.asset->url, "coverAlt": cover.alt
}`;

// Get category by slug
export const productCategoryBySlugQuery = groq`*[_type == "productCategory" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, description, "image": image.asset->url, "alt": image.alt, "cover": cover.asset->url, "coverAlt": cover.alt
}`;

// Get all products
export const productsQuery = groq`*[_type == "product"]{
  _id, title, description, "image": image.asset->url, "alt": image.alt, "category": productCategory->{title, description, "slug": slug.current}
}`;

// Get all products by category slug
export const productsByCategoryQuery = groq`*[_type == "product" && references(*[_type=="productCategory" && slug.current == $slug]._id)]{
  _id, title, description, "image": image.asset->url, "alt": image.alt, "category": productCategory->{title, description, "slug": slug.current}
}`;

// Get all slider images
export const sliderImagesQuery = groq`*[_type == "slider"]{
  _id, title, "image": image.asset->url, "alt": image.alt, "category": productCategory->{title, description, "slug": slug.current}
}`;
