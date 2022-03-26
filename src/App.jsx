import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Copy from "./components/Copy/Copy";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

const App = () => {

  const [members, setMembers] = useState(null)
  const [paginationCurrentPage, setPaginationCurrentPage] = useState(1)
  const [paginationLimit, setPaginationLimit] = useState(10)


  const url = `https://challenge-api.view.agentur-loop.com/api.php?page=${paginationCurrentPage}&limit=${paginationLimit}`;

  useEffect(() => {
      fetch(url).then((res) => {
          return res.json()
      }).then((data) => {
        setMembers(data.data.data)
        setPaginationCurrentPage(data.data.meta.pagination.current_page)
        setPaginationLimit(data.data.meta.pagination.limit)
      })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Copy />
      <Team members={members} />
      <Footer />
    </>
  )
}

export default App