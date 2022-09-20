import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";
import Loading from "../ui/Loading";
export default function RelatedVideoList({ video }) {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();
  const { tags, id } = video;
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id }));
  }, [dispatch, tags, id]);
  let content;
  if (isLoading) {
    content = <Loading></Loading>;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12"> {error} </div>;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12"> No related video found </div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos?.map((relatedVideo) => {
      return (
        <RelatedVideoListItem
          key={relatedVideo.id}
          relatedVideo={relatedVideo}
        />
      );
    });
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
