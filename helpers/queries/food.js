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

export const INSERT_INSTRUCTION = gql`
  mutation InsertInstruction(
    $description: String!
    $recipe_id: Int!
    $step_order: Int!
  ) {
    insert_steps_one(
      object: {
        description: $description
        recipe_id: $recipe_id
        step_order: $step_order
      }
    ) {
      description
      id
      recipe_id
      step_order
      user_id
    }
  }
`;

export const INSERT_IMAGE = gql`
  mutation InsertImages(
    $is_featured: Boolean!
    $image_url: String!
    $recipe_id: Int!
  ) {
    insert_recipe_images_one(
      object: {
        image_url: $image_url
        is_featured: $is_featured
        recipe_id: $recipe_id
      }
    ) {
      id
      image_url
      is_featured
      recipe_id
      user_id
    }
  }
`;
