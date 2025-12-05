import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={css.loader}>
      <MagnifyingGlass
        height={120}
        width={120}
        ariaLabel="loading"
        glassColor="#f4ede4"
        color="#644837"
      />
      <p>Loading...</p>
    </div>
  );
}
