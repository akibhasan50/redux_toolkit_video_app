import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagRemoved } from "../../features/filter/filterSlice";

export default function Tag({ title }) {
  const { tags: selactedTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const isSelected = selactedTags.includes(title) ? true : false;
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };
  return (
    <div onClick={handleSelect} className={style}>
      {title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
