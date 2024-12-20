import { Link } from '@remix-run/react';

const Index = () => {
  return (
    <div className='h-screen w-full p-20 flex flex-col gap-5'>
      <h2 className='text-3xl font-semibold'>Templates</h2>
      <ul className='list-disc ps-10 flex flex-col gap-1'>
        <li className='hover:text-green-300 transition-colors duration-300'><Link to={'tabs'}>Tabs</Link></li>
      </ul>
    </div>
  )
}

export default Index