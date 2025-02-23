import React from "react";
import styled from "styled-components";
import ExpenseTracker from "./module/comp";
import TawkToWidget from "./module/bot";


const Container = styled.div`
  // background-color: lightblue;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 110vh;
  width: 99%;
  padding-top: 30px ;
  //background-image: url("Designer.png");
  height: 100vh;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: #3498db;  // Blue background color
  color: white;  // White text color
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 10px;  // Rounded rectangle shape
`;

const App = () => {
  return (
    <Container>
      <Header>Expense/Money Tracker</Header>
      <TawkToWidget/>
      <ExpenseTracker/>
    </Container>
  );
};

export default App;
