import Link from "next/link";
import heroImg from '../../public/images/hero/Hero-banner.png'
import Image from 'next/image'
import men from '../../public/images/hero/men.png'
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[0px] 2xl:pt-[210px]"
        style={{
          // use the src property of the image object
          backgroundImage: `url(${heroImg.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
        }}
      
      >
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Get Skills From <br></br> Our Top Quizes
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                 <Image src={men}  
                    alt="GFG logo imported from public directory" /> 
              
              </div>
            </div>
          </div>
        </div> */}
       


        <div className="container">
  <div className="-mx-4 flex flex-wrap">
    <div className="w-full md:w-1/2 px-4">
      <div className="wow fadeInUp mx-auto max-w-[800px] text-left" data-wow-delay=".2s">
        <h1 className="banner-title mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
          Get Skills From <br></br> Our Top Quizes
        </h1>
        <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="-mx-4 flex justify-between number-divs">
          <div className="px-4">
        <h3>1400+</h3>
        <p>Students</p></div>
        <div className="px-4">
        <h3>200+</h3>
        <p>Courses</p>
        </div>
        <div className="px-4">
        <h3>150+</h3>
        <p>Instructors</p>
        </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <div className="wow fadeInUp mx-auto max-w-[800px] text-center" data-wow-delay=".2s">
        <Image src={men} alt="GFG logo imported from public directory" />
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  );
};

export default Hero;
