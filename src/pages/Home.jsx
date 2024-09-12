import React, { useState } from "react";
import useMemories from "../hooks/useMemories";
import Loading from "../components/feedback/Loading";
import MemoryCard from "../components/MemoryCard";
import AddMemory from "../components/forms/AddMemory";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/Dialog";
import { IconContext } from "react-icons";
import { FaCirclePlus } from "react-icons/fa6";
import useGetUser from "../hooks/useGetUser";

const Home = () => {
  const { memories, loading, error } = useMemories();
  const [currentId, setCurrentId] = useState(0);
  const { user, setUser } = useGetUser();

  return (
    <Loading status={loading} error={error}>
      <div className="flex py-8">
        <div className="memory-container flex flex-wrap justify-around lg:justify-evenly gap-y-8 lg:gap-8 h-96 sm:w-full xl:w-3/4 ">
          {memories?.map((memory) => {
            return (
              <MemoryCard
                memory={memory}
                setCurrentId={setCurrentId}
                key={memory._id}
              />
            );
          })}
        </div>
        {user && (
          <div
            style={{ height: "500px" }}
            className="xl:block items-center gap-8 hidden p-4 rounded-md border-solid border-2 border-bg-slate-50"
          >
            <AddMemory
              currentId={currentId}
              setCurrentId={setCurrentId}
              memories={memories}
            />
          </div>
        )}
        {!user && (
          <h2 className="xl:block  hidden "> Please Login To Add Memories</h2>
        )}
      </div>

      {user && (
        <div className="fixed xl:hidden bottom-10  right-10">
          <Dialog>
            <DialogTrigger>
              <IconContext.Provider
                value={{ className: "global-class-name", size: "3em" }}
              >
                <FaCirclePlus />
              </IconContext.Provider>
            </DialogTrigger>
            <DialogContent className="w-11/12">
              <AddMemory
                currentId={currentId}
                setCurrentId={setCurrentId}
                memories={memories}
              />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </Loading>
  );
};

export default Home;
