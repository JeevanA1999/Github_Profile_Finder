import React from 'react'
import Repo from './Repo'

function Repolist(props) {
  return (
    <div>
      {
        props.repos.map((repo)=>{
            <Repo repo={repo}/>
        })
      }
    </div>
  )
}

export default Repolist
