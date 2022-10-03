import { gql, useQuery } from "@apollo/client";
import formatDate from "../utils";
import { useParams, useNavigate } from "react-router-dom";

const GET_FILM_BY_ID = gql`
  query GetFilmById($id: ID!) {
    film(id: $id) {
      title
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`;

export const FilmDetails = () => {
  const { filmId } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_FILM_BY_ID, {
    variables: {
      id: filmId,
    },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Something went wrong..</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <button
        style={{
          background: "none",
          border: "none",
          padding: "10px 0",
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div
        style={{
          width: "70%",
          border: "1px solid black",
          padding: "20px 20px",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 22,
            color: "black",
            lineHeight: 0,
          }}
        >
          {data.film.title}
        </p>
        <p
          style={{
            fontSize: 12,
          }}
        >
          Released: {formatDate(new Date(data.film.releaseDate))}
        </p>

        <p>Plot:</p>
        <p>{data.film.openingCrawl}</p>
        <p> Director: {data.film.director}</p>
        <p> Producer: {data.film.producers.join(", ")}</p>
      </div>
    </div>
  );
};
