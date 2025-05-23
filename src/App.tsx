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
import { Image, Photo } from "./types";

function App() {
  const [images, setImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [urlObj, setUrlObj] = useState<Image>({ url: "", alt: "" });

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

  const handleSubmit = (newQuery: string): void => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleClick = (): void => {
    setPage(page + 1);
  };

  function openModal(urlObj: Image): void {
    setIsOpen(true);
    setUrlObj(urlObj);
  }

  function closeModal(): void {
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
