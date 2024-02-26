import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Table from './components/Table';
import Dates from './components/Dates';
import ClientDetails from './components/ClientDetails';
import MainDetails from './components/MainDetails';
import Header from './components/Header';

function App() {

  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [table, setTable] = useState("");
  const [notes, setNotes] = useState("");


  
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto lg:mx-auto bg-white rounded shadow">
        {showInvoice ? <div>
          <Header handlePrint={handlePrint} />
          <MainDetails />
          <ClientDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer />
          <button onClick={()=>setShowInvoice(false)} className="mt-5 bg-blue-500 font-bold py-2 px-8 text-white rounded shadow 
                border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
                duration-300">Edit information</button>
        </div> : (
          <>
          {/* name, address, client name, email, phone, bank name, bank account number, 
          website, client address, invoice number, invoice date, due date, table, notes,  */}
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter your name</label>
              <input 
                type="text" 
                name="text" 
                id="name" 
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="address">Enter your address</label>
              <input 
                type="text" 
                name="address" 
                id="address" 
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email">Enter your email</label>
              <input 
                type="email" 
                name="text" 
                id="email" 
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <button onClick={()=> setShowInvoice(true)} className="bg-blue-500 font-bold py-2 px-8 text-white rounded shadow 
                border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
                duration-300"
              >Preview Invoice</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
