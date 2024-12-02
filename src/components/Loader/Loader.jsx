import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <MagnifyingGlass
        height={120}
        width={120}
        ariaLabel="loading"
      />
      <p className={css.loadingText}>Loading...</p>
    </div>
  );
}
