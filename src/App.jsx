import "./output.css"
import "./css/custom.css"
import Card from "./components/card";
import Badge from "./components/counter";
import { useState } from "react";

export function App() {
    const [Iselected, setISelected] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);
    const [count, setCount] = useState(0);

    function performAddition() {
        const total = selectedCards.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), count);
        setCount(total);
    }

    function performSubtraction() {
        const total = selectedCards.reduce((accumulator, currentValue) => accumulator - parseInt(currentValue), count);
        setCount(total);
    }

    function handleReset() {
        setSelectedCards([]);
        setCount(0);
        setISelected(!Iselected); // Toggle the value of Iselected
    };

    return (
        <>
            <section className="text-gray-400 body-font h-full">
                <div className="container px-3 pt-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <img src="./brand.PNG" alt="" height={100} width={100} />
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                            Adder Subtractor
                        </h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                            Best material for learn addition and subtraction.
                        </p>
                    </div>
                    <Badge props={{ score: count }} resetThings={handleReset} />
                    <h1 className="text-xl text-center mb-4 text-green-100">Choose cards to select value.</h1>
                    <div className="flex flex-wrap justify-center gap-4 m-4">
                        <Card props={{ isok: '0', name: 'selected', points: '2' }} Iselectedx={Iselected} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
                        <Card props={{ isok: '0', name: 'selected', points: '6' }} Iselectedx={Iselected} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
                        <Card props={{ isok: '0', name: 'selected', points: '1' }} Iselectedx={Iselected} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
                        <Card props={{ isok: '0', name: 'selected', points: '4' }} Iselectedx={Iselected} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
                        <Card props={{ isok: '0', name: 'selected', points: '5' }} Iselectedx={Iselected} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
                        <Card props={{ isok: '0', name: 'selected', points: '10' }} Iselectedx={Iselected} setSelectedCards={setSelectedCards} selectedCards={selectedCards} />
                    </div>
                    <div className="flex justify-center pb-3.5">
                        <button onClick={performAddition} className="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 active:bg-green-500 rounded text-lg">
                            Add
                        </button>
                        <button onClick={performSubtraction} className="flex mx-auto mt-16 text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 active:bg-red-500 rounded text-lg">
                            Subtract
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
