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
  const [duties, setDuties] = useState('')
  const [total, setTotal] = useState(23)

  const [hideLoadMoreBtn, setHideLoadMoreBtn] = useState(false)

  // &duty=helmsman
  const url = `https://challenge-api.view.agentur-loop.com/api.php?page=${paginationCurrentPage}&limit=${paginationLimit}${duties}`;

  useEffect(() => {
      fetch(url).then((res) => {
          return res.json()
      }).then((data) => {
        setMembers(data.data.data)
        setPaginationCurrentPage(data.data.meta.pagination.current_page)
        setTotal(data.data.meta.pagination.total)
        setPaginationLimit(data.data.meta.pagination.limit)
      })

  }, [url])

  useEffect(() => {
    if(paginationLimit >= total){
      setHideLoadMoreBtn(true)
    }else{
      setHideLoadMoreBtn(false)
    }
  }, [paginationLimit, total])

  const filterHandler = filter => {
    setDuties(filter)
  }

  const hideLoadMoreBtnHandler = () => {
    setPaginationLimit(pag => pag + 5)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Copy />
      <Team members={members}
      filterHandler={filterHandler}
      paginationLimit={paginationLimit}
      total={total}
      hideLoadMoreBtn={hideLoadMoreBtn}
      hideLoadMoreBtnHandler={hideLoadMoreBtnHandler} />
      <Footer />
    </>
  )
}

export default App