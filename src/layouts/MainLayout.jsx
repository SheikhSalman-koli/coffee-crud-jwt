import { Outlet } from 'react-router'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='p-4 lg:px-10'>
      <Header></Header>
      <div className='max-w-7xl mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout
