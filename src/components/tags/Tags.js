import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";
export default function Tags() {
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        <Tag />
        {tags.map((tag) => {
          return <Tag key={tag.id} title={tag.title}></Tag>;
        })}
      </div>
    </section>
  ) : null;
}
