import React from 'react'

function HomePage() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 max-w-3xl">
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-semibold">
          Hi,welcome to the HomePage
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          This is a simple home page made by nopek  
        </p> 

      </div>
    </section>
  )
}

export default HomePage