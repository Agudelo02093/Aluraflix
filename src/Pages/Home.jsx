import { useState, useEffect } from "react";
import CardReco from "../components/CardRecomended/CardReco";
import ContainerCats from "../components/ContainerCategories/ContainerCats";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CircularProgress, Box, Fade } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ backgroundColor: "#262626" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress
            size={80}
            thickness={3}
            sx={{
              color: "white",
            }}
          />
        </Box>
      ) : (
        <Fade in={!loading} timeout={1000}>
          <div>
            <Header />
            <CardReco />
            <ContainerCats />
            <Footer />
          </div>
        </Fade>
      )}
    </main>
  );
}

export default Home;
