function HeroSection() {
    return (
      <main className="container px-4 py-8 md:py-16 mx-auto bg-[#F9F8F6]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:text-right">
            <h1 className="text-4xl text-[#26231E] md:text-5xl font-bold mb-6">
              Stay <br className="hidden lg:block" />
              Informed, <br />
              Stay Inspired,
            </h1>
            <p className="text-[#75716B] md:ml-10">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
              Inspiration and Information.
            </p>
          </div>
          <img
            src= "https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt="man with a tuxedo cat"
            className="h-[529px] object-cover rounded-[16px] shadow-xl md:w-1/3 mx-16 mb-8 md:mb-0"
          />
          <div className="md:w-1/3 text-left">
            <h2 className="text-[12px] text-[#75716B] font-semibold mb-2">-Author</h2>
            <h3 className="text-2xl text-[#43403B] font-bold mb-4">Thompson P.</h3>
            <p className="text-[#75716B] mb-4 md:mr-4">
              I am a pet enthusiast and freelance writer who specializes in animal
              behavior and care. With a deep love for cats, I enjoy sharing
              insights on feline companionship and wellness.
            </p>
            <p className="text-[#75716B]">
              When I'm not writing, I spend time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </main>
    );
  }

  export default HeroSection;