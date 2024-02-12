import React from "react";
import Repo from "./Repo";

function Repolist(props) {
  return (
    <div>
      {/* <p>{JSON.stringify(props?.repos)}</p>
     {console.log(props?.repos,"swas")} */}

     {
      props.repos.map((item,index)=>{
        return <div><Repo key={index} repo={item}/></div>
      })
     }
     {/* <div>
      {props?.repos?.map((item,index)=>{
        return <div><Repo key={index} repo={item}/></div>
      })}
     </div> */}

    </div>
  );
}

export default Repolist;
