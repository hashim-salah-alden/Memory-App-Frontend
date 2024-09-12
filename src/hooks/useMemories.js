import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetMemories, cleanMemories } from "../store/memories/memoriesSlice";

const useMemories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(actGetMemories());
    return () => {
      dispatch(cleanMemories());
      promise.abort();
    };
  }, [dispatch]);
  const { memories, loading, error } = useSelector((state) => state.memories);

  return { memories, loading, error };
};

export default useMemories;
