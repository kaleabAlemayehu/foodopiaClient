import { gql } from "graphql-tag";

export const UPLOAD_IMAGE = gql`
  mutation UploadImage($base64Str: String!, $fileName: String!) {
    imageUpload(base64Str: $base64Str, fileName: $fileName) {
      error
      imageUrl
    }
  }
`;
