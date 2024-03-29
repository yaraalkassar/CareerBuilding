import React, { useEffect } from "react";
import QuoteIcon from "../images/quotes.svg";
import { useStateIfMounted } from "use-state-if-mounted";
const Quotes = () => {
  const [quotes, setQuotes] = useStateIfMounted([]);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function runOncePerDay() {
    if (localStorage.getItem("randomNumber") === null) {
      localStorage.setItem("appDate", new Date().toLocaleDateString());
      localStorage.setItem(
        "randomNumber",
        Math.floor(Math.random() * (1634 - 0 + 1) + 0)
      );
    }
    if (!isitStillToday()) return false;
    localStorage.setItem(
      "randomNumber",
      Math.floor(Math.random() * (1634 - 0 + 1) + 0)
    );
  }
  runOncePerDay();
  function isitStillToday() {
    let date = new Date().toLocaleDateString();
    if (localStorage.getItem("appDate") === date) return false;
    else {
      localStorage.setItem(
        "randomNumber",
        Math.floor(Math.random() * (1634 - 0 + 1) + 0)
      );
      localStorage.setItem("appDate", date);
      return true;
    }
  }
  let num = parseInt(localStorage.getItem("randomNumber"));

  return (
    <>
      <div className=" bg-white flex flex-col">
        <section className="text-darkBlue">
          <div className="container px-5 py-32 mx-auto">
            <div className="flex flex-col w-full mb-20">
              <h1 className="sm:text-3xl text-2xl title-font text-darkerBlue font-semibold mt-4">
                {"Today's Quotes"}
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-strech mx-auto">
              {quotes.slice(num, num + 3).map((quote, index) => {
                return (
                  <div className="p-4 md:w-1/4" key={index}>
                    <div className="flex rounded-lg h-full bg-paleBlue p-8 flex-col">
                      <div className="flex items-center mb-3 pb-4 border-b border-darkP">
                        <h2 className=" text-lg title-font font-medium text-darkerBlue">
                          {quote.author === null ? "Unknown" : quote.author}
                        </h2>
                      </div>
                      <div className="">
                        <p className="leading-relaxed text-base">
                          {quote.text === null ? "Unknown" : quote.text}
                        </p>
                        <img
                          src={QuoteIcon}
                          alt="quote"
                          className="ml-auto mr-2"
                        ></img>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Quotes;
