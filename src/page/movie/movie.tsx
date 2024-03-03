import { useParams } from "react-router-dom";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Movies from "../../json/movie.json";
import Actors from "../../json/actor.json";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MoviePage() {
  const params = useParams();
  const navigate = useNavigate();

  let mov: {
    id: string;
    name: string;
    image: string;
    trailer: string;
    details: string;
    actor: string;
  };

  let ac;

  for (const movie of Movies) {
    if (movie.id == params.id) {
      mov = movie;
      for (const actor of Actors) {
        if (mov.actor == actor.id) {
          ac = actor.name;
        }
      }
    }
  }

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          marginTop: "70px",
          width: "80%",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "30px" }}></ArrowBackIosIcon>
          <h1 style={{ color: "#E3AF00" }}>back</h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>{mov.name}</h1>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          width: "80%",
          height: "400px",
          display: "flex",
          marginTop: "10px",
        }}
      >
        <img
          height={"100%"}
          width={"20%"}
          style={{ margin: "2px" }}
          src={mov.image}
          alt=""
        />
        <iframe
          width="60%"
          height="100%"
          style={{ margin: "2px" }}
          src={`https://www.youtube.com/embed/${mov.trailer}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={{ width: "20%" }}>
          <div
            style={{
              background: "linear-gradient(to left, #707070, #3E3E3E)",
              width: "100%",
              height: "50%",
              margin: "2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <VideoLibraryIcon style={{ fontSize: "30px" }}></VideoLibraryIcon>
              <br />
              <h5>99 VIDEOS</h5>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to left, #707070, #3E3E3E)",
              width: "100%",
              height: "50%",
              margin: "2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PhotoLibraryIcon style={{ fontSize: "30px" }}></PhotoLibraryIcon>
              <br />
              <h5>99 PHOTOS</h5>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          width: "80%",
          height: "100px",
          marginTop: "40px",
          display: "flex",
        }}
      >
        <div style={{ width: "70%" }}>
          <p>{mov.details}</p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#7B7B7B",
              marginTop: "20px",
            }}
          />
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <h3>Star</h3>
            <Link style={{marginLeft: "10px", textDecoration: "none"}} to={`actor/${mov.actor}`}>{ac}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
