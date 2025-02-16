import Layout from '@/app/dashboard/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <SearchCard />
    </div>
        
    </Layout>
  )
}

export default page
