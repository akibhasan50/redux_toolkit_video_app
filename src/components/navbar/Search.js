import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";
export default function Search() {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    //if not in homepage then redirect to
    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        value={input.value}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
}
