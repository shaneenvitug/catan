import gql from 'graphql-tag'

export const typeDefs = gql`
  type Resource {
    id: ID!
    name: String!
  }

  type Query {
    resources: [Resource]!
  }
`
