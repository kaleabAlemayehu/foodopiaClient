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

export const GET_RECIPE_BY_CATEGORIES = gql`
  query GetRecipe($offset: Int!, $_eq: Int!, $limit: Int!) {
    recipes_aggregate(where: { category_id: { _eq: $_eq } }) {
      aggregate {
        count
      }
    }
    recipes(
      limit: $limit
      offset: $offset
      where: { category_id: { _eq: $_eq } }
    ) {
      avg_rating
      category_id
      created_at
      description
      featured_image_url
      id
      prep_time
      title
      total_comments
      total_likes
      updated_at
      user_id
    }
  }
`;

// get recipe fot edit page

export const FETCH_RECIPE_FOR_EDIT = gql`
  query GetEditRecipe($id: Int!) {
    recipes_by_pk(id: $id) {
      avg_rating
      category_id
      created_at
      description
      featured_image_url
      id
      prep_time
      title
      total_comments
      total_likes
      updated_at
      user_id
      ingredients(where: { recipe_id: { _eq: $id } }) {
        id
        name
        quantity
        recipe_id
        user_id
      }
      steps(where: { recipe_id: { _eq: $id } }, order_by: { step_order: asc }) {
        id
        recipe_id
        step_order
        user_id
        description
      }
      recipe_images(where: { recipe_id: { _eq: $id } }) {
        id
        image_url
        is_featured
      }
    }
  }
`;
export const FETCH_RECIPE_BY_ID = gql`
  query GetRecipeById($id: Int!) {
    recipes_by_pk(id: $id) {
      avg_rating
      category_id
      created_at
      description
      featured_image_url
      id
      prep_time
      title
      total_comments
      total_likes
      updated_at
      user_id
    }
  }
`;

export const FETCH_ADDITIONAL_IMAGES = gql`
  query GetAdditionalImages($_eq: Int!) {
    recipe_images(where: { recipe_id: { _eq: $_eq } }) {
      id
      image_url
      is_featured
      recipe_id
      user_id
    }
  }
`;

export const FETCH_INGREDIENT = gql`
  query GetIngredients($_eq: Int!) {
    ingredients(where: { recipe_id: { _eq: $_eq } }) {
      id
      name
      quantity
      recipe_id
      user_id
    }
  }
`;

export const FETCH_INSTRUCTION = gql`
  query GetInstructions($_eq: Int!) {
    steps(order_by: { step_order: asc }, where: { recipe_id: { _eq: $_eq } }) {
      description
      id
      recipe_id
      step_order
      user_id
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation InsertComment(
    $recipe_id: Int = 10
    $rating: Int = 10
    $comment: String = ""
  ) {
    insert_comments_one(
      object: { comment: $comment, rating: $rating, recipe_id: $recipe_id }
    ) {
      recipe {
        user_id
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query GetComments($_eq: Int!) {
    comments(where: { recipe_id: { _eq: $_eq } }) {
      comment
      rating
      recipe_id
      user_id
      created_at
      id
      user {
        username
        email
      }
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: Int!) {
    delete_recipes_by_pk(id: $id) {
      avg_rating
      category_id
      created_at
      description
      featured_image_url
      prep_time
      id
      total_comments
      title
      total_likes
      updated_at
      user_id
    }
  }
`;

export const ADD_BOOKMARK = gql`
  mutation MyMutation($recipe_id: Int!) {
    insert_bookmarks_one(object: { recipe_id: $recipe_id }) {
      recipe_id
      user_id
    }
  }
`;

export const IS_BOOKMARKED = gql`
  query IsBookmarked($_eq: Int!) {
    bookmarks(where: { recipe_id: { _eq: $_eq } }) {
      recipe_id
      user_id
    }
  }
`;

// remove bookmark

export const REMOVE_BOOKMARKED = gql`
  mutation DeleteBookmark($_eq: Int!) {
    delete_bookmarks(where: { recipe_id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;
export const ADD_LIKE = gql`
  mutation AddLike($recipe_id: Int!) {
    insert_likes_one(object: { recipe_id: $recipe_id }) {
      created_at
      id
      recipe_id
      user_id
    }
  }
`;
export const IS_LIKED = gql`
  query IsLiked($_eq: Int = 10) {
    likes(where: { recipe_id: { _eq: $_eq } }) {
      created_at
      id
      recipe_id
      user_id
    }
  }
`;
export const DELETE_LIKE = gql`
  mutation DeleteLike($_eq: Int!) {
    delete_likes(where: { recipe_id: { _eq: $_eq } }) {
      returning {
        recipe_id
        id
        created_at
        user_id
      }
    }
  }
`;
// export const GET_BOOKMARKED_RECIPES = gql``;
