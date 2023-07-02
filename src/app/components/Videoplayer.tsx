// Import necessary dependencies
import React from 'react';
import useFetchData from "../../hooks/useFetchData";
import { useQuery } from '@tanstack/react-query';
import { courseService } from '../../servicios/codeService';

// Define your video player component
const VideoPlayer = () => {

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["codes"],
    queryFn: () => courseService.getCodes(),
    keepPreviousData: true,
  });
  
  return (
    <div className="flex justify-center items-center  h-screen ">    
          {isSuccess && data.data.map((cursos) =>(
                  <h2>{cursos.attributes.id}</h2>
                ))}
          <div className="relative">
          <iframe width="560" height="315" src="{isSuccess && data.data.map((cursos) =>(
                  <h2>{cursos.attributes.id}</h2>
                ))}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="absolute flex  px-3 py-1 ">
                <button className="bg-red-800 px-3 py-1 rounded">←</button>
                <button className="bg-red-800 px-3 py-1 rounded">→</button>
                
            </div>
        </div>
    </div>
  );
};

export default VideoPlayer;
