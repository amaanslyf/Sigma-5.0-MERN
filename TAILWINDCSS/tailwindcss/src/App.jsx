
import './App.css'

function App() {
  

  return (
    <div className='mt-20 mx-44 rounded border-2 border-slate-300 shadow-lg'>
      <div className='h-24 bg-linear-to-t from-sky-500 to-indigo-500 text-white  text-xl flex items-center justify-center font-bold border-x-2'>News you can trust</div>
      <div className='text-center mt-10'>
        <h3 className='text-lg font-semibold'>Stay up to date with the latest news</h3>
        <p>Sign up for our newsletter</p>
        <form className='flex flex-wrap'>
          <input placeholder='Enter your email' className='w-full mx-52 bg-slate-200 text-center my-4 py-2 rounded' />
          <button className=' w-full py-2 mx-52 rounded-full'>Subscribe</button>
        </form>
        <p className='my-2 text-sm'>We value your privacy</p>
      </div>
    </div>
  )
}

export default App
