import React, { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
import PieChart from 'components/PieChart';
const Budget = () => {
  // const [budget, setBudget] = useState(0);
  // const [savings, setSavings] = useState(0);
  const [food, setFood] = useState(0);
  const [show, setShow] = useState(false);
  const [travel, setTravel] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [bills, setBills] = useState(0);

  function findExpenses(){
    const budgetValue = parseFloat(document.getElementById('budget').value);
    const savingsValue = parseFloat(document.getElementById('income').value);
    if(budgetValue>savingsValue){
    // console.log(budget, savings);
    setShow(true);
    const x = budgetValue - savingsValue;
    setFood(0.3 * x);
    setTravel(0.15 * x);
    setEntertainment(0.2 * x);
    setBills(0.35 * x);
    }
    else{
      setShow(false);
      // setBudget(0);
      // setSavings(0);
      alert("Invalid Input.Savings cannot be greater than budget")
    }
  }
  // const chartRef = useRef(null);


  const data = {
    labels: [
      'Food',
      'Travel',
      'Entertainment',
      'Bills'
    ],
    datasets: [{
      label: 'Spent Rs.',
      data: [food, travel, entertainment,bills],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(181, 230, 29)'
      ],
      hoverOffset: 40
    }]
  };


  
  

  // const data = {
  //   labels: ["Red", "Orange", "Blue"],
  //   // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  //   datasets: [
  //     {
  //       label: "Popularity of colours",
  //       data: [55, 23, 96],
  //       // you can set indiviual colors for each bar
  //       backgroundColor: [
  //         "rgba(255, 255, 255, 0.6)",
  //         "rgba(255, 255, 255, 0.6)",
  //         "rgba(255, 255, 255, 0.6)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div>
      <section className="bg-gray-50 py-[100px]  dark:bg-gray-900">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Predict your expenses.
              </h1>
                <div>
                  {/* <label
                    htmlFor="budget"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Budget
                  </label> */}
                  <input
                    type="number"
                    name="budget"
                    id="budget"
                    placeholder='Budget'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  {/* <label
                    htmlFor="income"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Savings
                  </label> */}
                  <input
                   placeholder='Savings'
                    type="number"
                    name="income"
                    id="income"
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className='text-center'>
                  <button className="text-white bg-slate-700 p-2" style={{"borderRadius":"10px"}} onClick={findExpenses}>
                    Predict
                  </button>
                </div>
                {/* <div className="grid py-[100px]  grid-cols-4 gap-4">
                  food, travel, entertainment, bills
                  <div className="text-xl font-bold text-white">food</div>
                  <div className="text-xl font-bold text-white">travel</div>
                  <div className="text-xl font-bold mr-10 text-white">ent.</div>
                  <div className="text-xl font-bold text-white">bills</div>
                  <div className="text-xl font-bold text-white">{food}</div>
                  <div className="text-xl font-bold text-white">{travel}</div>
                  <div className="text-xl font-bold mr-10 text-white">
                    {entertainment}
                  </div>
                  <div className="text-xl font-bold text-white">{bills}</div>
                </div> */}
                {/* <div>
                  <Pie data={data} width={50} height={50} />
                </div> */}
            <div>
            {show ? <PieChart data={data} width={50} height={50} /> : <></>}


      </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Budget;

// x<10000
// x<50000
// x<100000
// x>100000
// x>500000
