import { gql } from "graphql-tag";

export const UPLOAD_IMAGE = gql`
  mutation UploadImage($base64Str: String!, $fileName: String!) {
    imageUpload(base64Str: $base64Str, fileName: $fileName) {
      error
      imageUrl
    }
  }
`;

export const CREATE_FOOD = gql`
  mutation CreateFood(
    $category_id: Int!
    $description: String!
    $featured_image_url: String!
    $prep_time: Int!
    $title: String!
  ) {
    insert_recipes_one(
      object: {
        category_id: $category_id
        description: $description
        featured_image_url: $featured_image_url
        prep_time: $prep_time
        title: $title
      }
    ) {
      id
      description
      featured_image_url
      created_at
      category_id
      avg_rating
      prep_time
      title
      total_comments
      total_likes
      updated_at
      user_id
    }
  }
`;

export const INSERT_INGREDIENT = gql`
  mutation InsertIngredient(
    $name: String!
    $quantity: String!
    $recipe_id: Int!
  ) {
    insert_ingredients_one(
      object: { name: $name, quantity: $quantity, recipe_id: $recipe_id }
    ) {
      id
      name
      quantity
      recipe_id
      user_id
    }
  }
`;
