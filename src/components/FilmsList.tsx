import { gql, useQuery } from "@apollo/client";
import formatDate from "../utils";

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
  producers: string[];
  openingCrawl: string;
}

export const FilmsList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      {data.allFilms.films.map((film: Film, key: number) => (
        <div
          key={`film-list-${key}`}
          style={{ border: "0.6px solid gray", padding: "10px 20px" }}
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
          <p
            style={{
              fontSize: 14,
            }}
          >
            Episode ID {film.episodeID}
          </p>
          <p>{formatDate(new Date(film.releaseDate))}</p>

          <div>{film.director}</div>
        </div>
      ))}
    </div>
  );
};
