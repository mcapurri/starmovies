import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_FILM_BY_ID = gql`
  query GetFilmById($id: ID!) {
    film(id: $id) {
      id
      title
    }
  }
`;

export const FilmsShow = () => {
  const { filmId } = useParams();

  const { loading, error, data } = useQuery(GET_FILM_BY_ID, {
    variables: {
      id: filmId,
    },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div>
        <div>{data.film.title}</div>
      </div>
    </div>
  );
};
