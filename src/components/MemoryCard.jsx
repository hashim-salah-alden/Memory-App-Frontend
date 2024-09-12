import React, { useEffect } from "react";
import useGetUser from "../hooks/useGetUser";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import { actDeleteMemory } from "../store/memories/memoriesSlice";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

const MemoryCard = ({ memory, setCurrentId }) => {
  const { user, setUser } = useGetUser();

  const dispatch = useDispatch();
  return (
    <Card className="w-full md:w-5/12 lg:w-1/4 flex flex-col justify-between shadow-xl rounded-lg">
      <CardHeader className="w-full p-0 mb-8">
        <img
          className="h-44 rounded-lg"
          src={memory.image}
          alt=""
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{memory.title}</CardTitle>
        <CardDescription>User Name</CardDescription>
        <p>{memory.message}</p>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <Button
          onClick={() => {
            setCurrentId(memory._id);
          }}
          className="w-1/3 flex justify-between items-center"
          disabled={user ? (user._id === memory.creator ? false : true) : true}
        >
          Edit <MdDelete />
        </Button>
        <Button
          className="w-1/3 flex justify-between items-center"
          variant="destructive"
          onClick={() => dispatch(actDeleteMemory(memory._id))}
          disabled={user ? (user._id === memory?.creator ? false : true) : true}
        >
          Delete <MdDelete />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MemoryCard;
