import spinner from './assets/spinner.gif'

// we use small letter s in spinner to export and to call in img src
// but capital letter S for function and jsx module calling 

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={spinner} alt='Loading...' />
    </div>
  )
}

export default Spinner