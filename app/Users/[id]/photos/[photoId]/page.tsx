import React from 'react'

interface Props {
  params: { id: number; photoId: number }
}

const PhotoDetailsPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>PhotoPage {id} { photoId}</div>
  )
}

export default PhotoDetailsPage;