import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    allFilms {
      films {
        id
        title
        episodeID
        director
        releaseDate
      }
    }
  }
`;

interface Film {
  id: string;
  title: string;
  episodeID: string;
  director: string;
  releaseDate: string;
}

export const FilmsList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      {data.allFilms.films.map((film: Film, key: number) => (
        <div
          key={`film-list-${key}`}
          style={{ borderBottom: "1px solid black", padding: "10px 20px" }}
        >
          <a
            href={`/films/${film.id}`}
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            {film.title}
          </a>
          <div>{film.episodeID}</div>
          <div>{film.releaseDate}</div>
          <div>{film.director}</div>
        </div>
      ))}
    </div>
  );
};
