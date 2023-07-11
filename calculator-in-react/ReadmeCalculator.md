# Simple Calculator

This is a simple calculator application built with React. It allows users to perform basic arithmetic calculations by entering numbers and operators.

## Features

- Addition: Add two or more numbers together.
- Subtraction: Subtract one number from another.
- Multiplication: Multiply two or more numbers together.
- Division: Divide one number by another.
- Decimal Point: Enter decimal numbers for precise calculations.

## Implementation Details

The calculator application is implemented using React and utilizes React's state management capabilities (`useState` hook) to handle user input and display the result.

- The `result` state variable holds the current calculated result.
- The `displayValue` state variable holds the current input expression.
- Functions like `handleNumberClick`, `handleOperatorClick`, `handleClearClick`, and `handleEqualClick` handle user interactions and update the state accordingly.
- The `evaluateExpression` function evaluates the entered expression by parsing and calculating the result using basic arithmetic operations.
- The calculated result is displayed in the UI for the user to see.

## Limitations

- The calculator does not support parentheses for grouping expressions.
- The calculator does not handle operator precedence. It evaluates expressions in a left-to-right manner.
- Division by zero is not handled and will result in an error.
- The calculator does not support complex mathematical functions or operations.

## Contributing

Contributions to the calculator application are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
