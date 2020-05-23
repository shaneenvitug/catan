import Head from "next/head";
import { useState } from "react";
import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ResourceQuery = gql`
  query ResourceQuery {
    resources {
      name
    }
  }
`;

function Tile() {
  const resource = "wood";
  const diceNumber = 8;
  // refactor to useReducer in the future
  const [sides, setSides] = useState({
    topRight: "orange",
    topLeft: "",
    left: "",
    right: "",
    bottomLeft: "",
    bottomRight: "",
  });
  // refactor to useReducer in the future
  const [corners, setCorners] = useState({
    top: {
      propertyType: "city",
      color: "orange",
    },
    leftTop: {
      propertyType: "",
      color: "",
    },
    leftBottom: {
      propertyType: "",
      color: "",
    },
    bottom: {
      propertyType: "",
      color: "",
    },
    rightTop: {
      propertyType: "",
      color: "",
    },
    rightBottom: {
      propertyType: "",
      color: "",
    },
  });

  return (
    <div className="hexagon">
      {resource} {diceNumber}
      <style jsx>{`
        .hexagon {
          position: relative;
          width: 500px;
          height: 288.68px;
          background: #cd5c5c;
          margin: 144px auto;
        }
      `}</style>
    </div>
  );
}

function Index() {
  const { data, loading } = useQuery(ResourceQuery);
  return (
    <div className="container">
      {data && data.resources.map(({ name }) => <div>{name}</div>)}
      <Tile />
    </div>
  );
}

export default withApollo(Index);
