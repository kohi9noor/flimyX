import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((i) => {
        if (!genres[i]?.name) return;

        return <div key={i}>{genres[i]?.name}</div>;
      })}
    </div>
  );
};

export default Genres;
