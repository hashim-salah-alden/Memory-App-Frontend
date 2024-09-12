import React, { useState, useEffect } from "react";
import { Input } from "../ui/CustomeInput";
import { Textarea } from "../ui/CustomeInput";
import { Button } from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  actAddMemorie,
  actUpdateMemory,
} from "../../store/memories/memoriesSlice";

const AddMemory = ({ currentId, setCurrentId, memories }) => {
  const dispatch = useDispatch();
  const [memoryData, setMemoryData] = useState({
    title: "",
    message: "",
    tags: [],
    creator: "",
    image: "",
  });
  const memory = currentId
    ? memories.find((memory) => memory._id === currentId)
    : null;

  useEffect(() => {
    if (memory) setMemoryData(memory);
  }, [currentId, memory]);

  const handleChange = (e) => {
    setMemoryData({ ...memoryData, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e) => {
    setMemoryData({ ...memoryData, [e.target.name]: e.target.files[0] });
  };

  const clear = (e) => {
    e.preventDefault();
    setCurrentId(0);
    setMemoryData({
      title: "",
      message: "",
      tags: [],
      image: "",
    });
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    Object.keys(memoryData).map((key) => formData.append(key, memoryData[key]));
    e.preventDefault();
    if (currentId === 0) {
      dispatch(actAddMemorie(formData)); //memoryData
      clear(e);
    } else {
      console.log(memoryData);
      dispatch(actUpdateMemory(memoryData)); //memoryData
      clear(e);
    }
  };
  return (
    <>
      <h2 className="text-center my-4 font-bold text-lg">Create a Memory</h2>

      <form
        className="flex flex-col gap-4 w-72"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        enctype="multipart/form-data"
        action="/register"
      >
        <Input
          handleChange={handleChange}
          placeholder="Title"
          name="title"
          value={memoryData?.title}
        />

        <Textarea
          onChange={(e) => handleChange(e)}
          placeholder="Message"
          name="message"
          className="max-h-32"
          value={memoryData?.message}
        />

        <Input
          handleChange={handleChange}
          placeholder="Tags"
          name="tags"
          value={memoryData?.tags}
        />
        {currentId === 0 && (
          <Input handleChange={handleChangeImage} type="file" name="image" />
        )}

        <Input
          className="bg-indigo-800 text-gray-50"
          type="submit"
          value={currentId === 0 ? "Add Memory" : "Update Memory"}
        ></Input>
        <Button
          onClick={(e) => clear(e)}
          className="bg-red-800"
          variant="destructive"
        >
          Clear
        </Button>
      </form>
    </>
  );
};

export default AddMemory;
