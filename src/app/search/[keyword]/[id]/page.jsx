import DetailPage from '@/app/detail/[id]/page'
import React from 'react'

export default function Page({params}) {

  return (
    <div>
        <DetailPage params={params} />
    </div>
  )
}
