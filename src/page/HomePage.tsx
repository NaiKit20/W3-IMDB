import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Movie from "../json/movie.json";
import Actor from "../json/actor.json";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function HomePage() {
  const navigate = useNavigate();

  const navigateTo = (value: string) => {
    navigate("/movie/" + value);
  };

  const navigateToActorPage = (value: string) => {
    navigate("/actor/" + value);
  };

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          marginTop: "70px",
          width: "80%",
        }}
      >
        <h1 style={{ color: "#E3AF00" }}>What to watch</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "30px",
            width: "150px",
          }}
        >
          <h1 style={{ color: "#E3AF00" }}>|</h1>
          <h2>Top picks</h2>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </div>
        <p>TV shows and movies just for you</p>
      </div>

      <div
        style={{
          width: "80%",
          height: "500px",
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        {Movie.map((item) => (
          <div onClick={() => navigateTo(item.id)}>
            <Card sx={{ width: 170, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="green iguana"
              />
              <CardContent style={{ height: "70px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StarIcon sx={{ color: "#E3AF00", width: "20px" }}></StarIcon>
                  9.5
                  <StarBorderIcon
                    sx={{ color: "#007CD7", width: "20px", marginLeft: "20px" }}
                  ></StarBorderIcon>
                </div>
                <Typography
                  gutterBottom
                  variant="button"
                  component="div"
                  marginTop={"10px"}
                  overflow={"hidden"}
                  maxHeight={"50px"}
                >
                  {item.name}
                </Typography>
              </CardContent>
              <center style={{ marginTop: "10px", padding: "10px" }}>
                <Button
                  sx={{ width: "100%", fontSize: "12px" }}
                  variant="outlined"
                >
                  Watch options
                </Button>
              </center>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PlayArrowIcon></PlayArrowIcon>
                  <h4>Trailer</h4>
                </div>
                <ErrorOutlineIcon></ErrorOutlineIcon>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "0 auto",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <h1 style={{ color: "#E3AF00" }}>|</h1>
          <h2>Born today</h2>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </div>
        <p>People born on December 11</p>
      </div>

      <div
        style={{
          width: "80%",
          height: "250px",
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        {Actor.map((item) => (
          <div onClick={() => navigateToActorPage(item.id)}>
            <div
              style={{
                borderRadius: "50%",
                width: "180px",
                height: "180px",
                overflow: "hidden",
              }}
            >
              <img width={"100%"} src={item.image} alt="" />
            </div>
            <center style={{ marginTop: "10px" }}>
              <h4>{item.name}</h4>
              <p>{item.age}</p>
            </center>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
