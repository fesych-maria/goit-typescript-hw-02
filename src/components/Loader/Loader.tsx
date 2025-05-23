import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <BeatLoader color={"#ffffff"} size={20} />
    </div>
  );
};

export default Loader;
