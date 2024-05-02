import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='h-screen bg-black text-white w-full flex flex-col justify-center items-center space-y-6'>
        <span className='text-7xl font-bold'>404 Not Found</span>
        <Link className='text-xl bg-white hover:bg-black text-black hover:text-white py-2 px-4 rounded-lg' to='/'>Go to Home Page</Link>
    </div>
  )
}
