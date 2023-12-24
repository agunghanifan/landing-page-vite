
const Home = () => {
  return (
      <section className="text-center my-32 md:mx-32 xl:mx-80">
          <p className="text-5xl text-yellow-400 md:text-9xl md:text-left">
              Hello !
          </p>
          <div className="md:text-left">
              <p className="text-3xl md:text-5xl">
                  I'm Agung H. Lutfiyanto
              </p>
              <p className="text-xl pt-5 md:text-2xl">
                  a Product Developer
              </p>
          </div>
          <div className="my-8">
              <div className="avatar">
                  <div className="w-40 rounded-full">
                      {/*<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>*/}
                      <img src="./src/assets/IMG_0451.jpg" alt='agung'/>
                  </div>
              </div>
          </div>
          <div className="md:text-left">
              <p className="text-md md:text-2xl">
                  Currently working at <a className="underline font-extrabold" href="https://www.mpm-insurance.com/"
                                          target="_blank">MPM Insurance</a>, focusing on building and maintaining web &
                  desktop applications.
              </p>
          </div>
      </section>
  )
}

export default Home