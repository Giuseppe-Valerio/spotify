import { useSelector } from "react-redux";

function Player() {
  const currentTrack = useSelector((state) => state.player.currentTrack);

  return (
    <div className="container-fluid fixed-bottom bg-dark pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2 d-flex justify-content-between align-items-center">
          {currentTrack ? (
            <div className="d-flex align-items-center gap-3 text-white">
              <img src={currentTrack.album.cover_small} alt={currentTrack.title} width="50" height="50" />
              <div>
                <h6 className="mb-0">{currentTrack.title}</h6>
                <p className="mb-0">{currentTrack.artist.name}</p>
              </div>
            </div>
          ) : (
            <p className="text-white">Nessun brano in riproduzione</p>
          )}

          <div className="d-flex gap-3">
            <img src="./src/assets/playerbuttons/shuffle.png" alt="shuffle" />
            <img src="./src/assets/playerbuttons/prev.png" alt="prev" />
            <img src="./src/assets/playerbuttons/play.png" alt="play" />
            <img src="./src/assets/playerbuttons/next.png" alt="next" />
            <img src="./src/assets/playerbuttons/repeat.png" alt="repeat" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
