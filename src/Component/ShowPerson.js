import React from 'react'

export default function ShowPerson(props) {
  const {fname, lname} = props.person
  return (
    <div>{fname} {lname}</div>
  )
}
