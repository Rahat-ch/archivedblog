import React from 'react'
import { Link } from 'gatsby'

const TagsBlock = ({ list }) => {
if (typeof tag === `undefined`) {
  return null
} else {
  return (
    <div>
      {list.map(tag =>
        <Link key={tag} to={`/tags/${tag}`}>
          {tag}
        </Link>
      )}
    </div>
  )
}




}

export default TagsBlock
