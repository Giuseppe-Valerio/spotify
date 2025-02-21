import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../redux/Search";
import SideBar from "./SideBar";
import { useEffect } from "react";

function Page() {
  const dispatch = useDispatch();
  const { results, status, error } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchSearchResults("queen"));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <main className="col-12 col-md-9 offset-md-3">
          <h2>Risultati della Ricerca</h2>
          {status === "loading" && <p>Caricamento...</p>}
          {status === "failed" && <p>Errore: {error}</p>}
          <div className="row">
            {results.map((song) => (
              <div key={song.id} className="col-md-3">
                <div className="card">
                  <img src={song.album.cover_medium} alt={song.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{song.title}</h5>
                    <p className="card-text">{song.artist.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
