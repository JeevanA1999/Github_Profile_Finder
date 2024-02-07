import { useEffect } from "react"
import React from 'react'
import {Link} from 'react-router-dom'
import Repolist from "./Repolist"

function Userdetails(props) {

    const{hireable, avatar_url,name,location,bio,html_url,company,blog,login,followers,following,public_repos,public_gists}=props.user1
    
    useEffect(()=>{
        props.getDetails(props.match.params.anything)
        props.getRepo(props.match.params.anything)
    },[])
    
  return (
    <>
    <Link to='/' className="btn btn-dark">Back to Search</Link>
    Hireable:{hireable?(
    <i className="fa fa-check text-success"/>):
    (<i className="fa fa-times-circle text-danger"/>)
    }
    <div className="card grid-2">
        <div className="all center ">
            <img src={avatar_url} className="round-img" alt="" style={{width:"150px"}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
        </div>
        <div>
            {bio &&(
                <>
                <h3>Bio</h3>
                <p>{bio}</p>
                </>
            )}
            <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
            <ul>
                <li>
                    {company && (
                        <strong>Company: {company}</strong>
                    )}
                </li>
                <li>
                    {blog && (
                        <strong>Website: {blog}</strong>
                    )}
                </li>
                <li>
                    {login && (
                        <strong>Username: {login}</strong>
                    )}
                </li>
            </ul>
        </div>
    </div>
    <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following:{following}</div>
        <div className="badge badge-danger">Public Repos:{public_repos}</div>
        <div className="badge badge-dark">Public Gists:{public_gists}</div>

    </div>
    <Repolist repos={props.repos}/>
    </>
  )
}

export default Userdetails
