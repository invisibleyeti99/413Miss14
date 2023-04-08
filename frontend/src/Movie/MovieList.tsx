/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieData, setmovieData] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:7211/movie');
      const temp = await rsp.json();
      setmovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Cateogry</th>
              <th>Editied</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
                <td>{m.LentTo}</td>
                <td>{m.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
