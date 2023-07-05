import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1); //useState is a hook
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);

    /* NOW WHAT IF I WANT TO CHANGE THE STATE TWICE IN THE SAME FUNCTION LIKE THIS:
    
    if (step < 3) setStep(step + 1);
    setStep(step + 1);

    - THIS IS WRONG AND IT WOULD NOT WORK!!
     */

    /* TO MAKE IT WORK YOU HAVE TO DO IT LIKE THIS: */
    /* 
    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
     } // we use a call back function!
     
     // AND NOW THIS IS HOW IT WILL WORK!*/
  }

  return (
    <div>
      {/* 
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button> */}

      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏻</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} :</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
