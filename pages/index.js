import Head from 'next/head'
import { withApollo } from "../apollo/client"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const ResourceQuery = gql`
  query ResourceQuery {
    resources {
      name
    }
  }
`

function Index() {
  const { data, loading } = useQuery(ResourceQuery)
  return (
    <div className="container">
      Catan coming soon!
      {data && data.resources.map(({name}) => <div>{name}</div>)}
    </div>
  )
}

export default withApollo(Index)