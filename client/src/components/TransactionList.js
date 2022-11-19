import React, { useContext } from "react";
import { Transaction } from "./Transaction.js";
import { GlobalContext } from "./context/GlobalState.js";
// import Tabs from "@mui/material/Tabs";
// import {Element as scroll, scrollSpy, scroller} from 'react-scroll';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
