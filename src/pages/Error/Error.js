import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-2">Oops!</h1>
        <p className="text-gray-600 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}