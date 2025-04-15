import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter, selectNameFilters } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilters);

  const handleChange = (event) => {
    dispatch(changeNameFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}




