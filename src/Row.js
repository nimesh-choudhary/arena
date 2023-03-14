import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        // difference between Asynchronous and Synchronous

        // [] means only page loads and don't run again
        // Asynchronous
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // so for that first we print the
            // console.log(request)
            // after words we get to know that we get an array of results
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.table(movies);

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/*movies posters */}

                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>

        </div>
    )
}

export default Row