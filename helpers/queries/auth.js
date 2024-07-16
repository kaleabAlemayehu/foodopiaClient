import { gql } from "graphql-tag";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $email: String!
    $password: String!
    $username: String!
  ) {
    signup(
      params: { email: $email, password: $password, username: $username }
    ) {
      email
      id
      token
      username
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(params: { email: $email, password: $password }) {
      email
      id
      token
      username
    }
  }
`;
