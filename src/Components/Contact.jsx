import React from 'react'

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xoqgbzkj', {
        method: 'POST',
        body: data,
      })

      if (response.ok) {
        form.reset()
      } else {
        throw new Error('Error sending message')
      }
    } catch (error) {
      console.error('Error:', error)
      form.reset()
    }
  }

  const handleChange = (event) => {
    // Handle form input changes
    console.log('Form input changed:', event.target.name, event.target.value)
  }

  return (
    <div className='container mx-auto px-4 py-10' id='contact'>
      <div className='text-3xl md:text-5xl font-bold text-center my-10'>GET IN <span className='text-orange-500'>TOUCH</span> WITH US</div>
      <div className='max-w-md mx-auto'>
          <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-semibold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded-3xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              name='name'
              placeholder='Your name'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded-3xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              name='email'
              placeholder='Your email'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className='shadow appearance-none border rounded-3xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              name='message'
              placeholder='Your message'
              rows={4}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-orange-500 hover:scale-110 rounded-full text-white font-bold py-3 duration-300 ease-linear px-6 focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact