import "./App.css";
import { fetchImagesWithQuery } from "./services/images-api";
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [urlObj, setUrlObj] = useState({});

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImagesWithQuery(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  function openModal(urlObj) {
    setIsOpen(true);
    setUrlObj(urlObj);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery items={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <ImageModal
        modalIsOpen={isOpen}
        closeModal={closeModal}
        urlObj={urlObj}
      />
    </Container>
  );
}

export default App;
