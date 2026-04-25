import ErrorPage from "../components/ErrorPage"; // NEW

export default function NotFound() {
  return (
    // UPDATED: Reuse latest ErrorPage UI for 404
    <ErrorPage
      errorCode={404}
      description="Ini Halaman Not Found"
      image="https://http.cat/404"
    />
  );
}

