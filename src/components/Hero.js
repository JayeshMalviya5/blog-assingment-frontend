import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bubble from "../assets/bubble.jpg";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Axios } from "../axios/axios";
import { AppContext } from "../context/AppContext";
const Hero = () => {
  const {blogs,setBlogs} = useContext(AppContext)
  useEffect(() => {
    const allBlogs = async () => {
      const resp = await Axios.get("/getblogs");
      setBlogs(resp.data);
      return resp.data
    };
    allBlogs();
  }, []);

const handleLike =async (id)=>{
    try {
       const resp = await Axios.put(`/blogs/${id}/like`)
       const updatedBlogs = await Axios.get("/getblogs");
      setBlogs(updatedBlogs.data)
    } catch (error) {
        alert("Error occured")
    }
}

const handleDislike =async (id)=>{
    try {
        const resp = await Axios.put(`/blogs/${id}/dislikes`)
         console.log(resp.data)
     } catch (error) {
         alert("Error occured")
     }
}

  return (
    <div className="w-4/5 h-auto flex flex-col justify-center m-auto p-5 mt-5">
        
      <div className="w-full m-auto shadow-lg">
        <h2 className="text-xs md:text-xl mb-4 font-semibold bg-orange-300 w-16 md:w-24  rounded-md opacity-75">
          #Trending{" "}
        </h2>
        <Carousel className="flex flex-col w-5/6 md:1/5 m-auto justify-center items-center">
          <div>
            <img src={bubble} alt="" className="" />
            <p className="legend">Legend 1</p>
          </div>

          <div>
            <img src={bubble} alt="" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={bubble} alt="" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="">

      <div className="flex justify-center mt-5 mb-5 text-4xl font-semibold sticky top-16 bg-slate-300 rounded-md p-2 z-20 ">
        Explore Worldwide 
      </div>
      {blogs?.length > 0 ? (
        <div className="w-full md:w-3/5 m-auto flex flex-col gap-20 md:flex-row py-5 px-10 justify-between h-[600px] mt-10 flex-wrap overflow-y-auto">
          {blogs?.map((item) => {
            return (
              <div className="border-2 w-full  rounded-2xl shadow-2xl h-min-[600px] mb">
                <img
                  src={item.file.path}
                  alt="hello"
                  className="rounded-lg shadow-lg w-full h-[280px]"
                />
                <div className="flex justify-around mt-3">
                  <div className="bg-orange-200 text-xs rounded p-1 opacity-60">
                    {item.keywords}
                  </div>
                </div>
                <div className="p-3 font-semibold text-xl text-slate-700">
                  {item.title}
                </div>
                <div className="py-0 px-3 h-24 overflow-hidden">
                  {item.description}
                </div>
                <div className="p-3 flex flex-row items-center justify-around font-semibold mt-2">
                  <div className="flex items-center justify-center gap-1">
                    <span>{item.likes.length}</span>
                    <AiOutlineLike size={25} onClick={()=>handleLike(item._id)}/>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span>{item.dislikes.length}</span>
                    <AiOutlineDislike size={25} onClick={()=>handleDislike(item._id)}/>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span>{item.comments.length}</span>
                    <FaRegComment size={25} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading all blogs</div>
      )}
      </div>
    </div>
  );
};

export default Hero;
