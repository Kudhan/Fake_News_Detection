import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Fake News Detection
              <br className="hidden lg:inline-block" /> 
            </h1>
            <p className="mb-8 leading-relaxed">
            This Fake News Detection leverages machine learning algorithms to classify news articles as real or fake. By analyzing patterns in the text, it can identify misleading or false information, helping to combat the spread of fake news on the internet.


            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Predict !
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="A newspaper or news-related theme" src="/news.svg" />

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
