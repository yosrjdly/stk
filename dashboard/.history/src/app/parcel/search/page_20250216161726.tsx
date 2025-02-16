import Layout from '@/app/dashboard/Layout'
import SearchCard from '@/componenets/cards/SearcheCard/SearcheCard'

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
