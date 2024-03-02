import React, { useState, useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Table from './components/Table';
import TableForm from './components/TableForm';
import Dates from './components/Dates';
import ClientDetails from './components/ClientDetails';
import MainDetails from './components/MainDetails';
import Header from './components/Header';
import ReactToPrint from "react-to-print";

function App() {

  const [showInvoice, setShowInvoice] = useState(true);
  const [name, setName] = useState("Ben West");
  const [address, setAddress] = useState("123 main");
  const [email, setEmail] = useState("email@email.com");
  const [phone, setPhone] = useState("93939393939");
  const [bankName, setBankName] = useState("First Bank");
  const [bankAccount, setBankAccount] = useState("2929929292");
  const [website, setWebsite] = useState("google.com");
  const [clientName, setClientName] = useState("Wells Fargo");
  const [clientAddress, setClientAddress] = useState("5657 Broadway");
  const [invoiceNumber, setInvoiceNumber] = useState("393939393");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [table, setTable] = useState("");
  const [notes, setNotes] = useState("a;lksdjflkajsdkl;fj;laj");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total,setTotal] = useState(0);

  const componentRef = useRef();
  
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl xl:max-w-4xl bg-white rounded shadow">
        <ReactToPrint trigger={() => <button>Print / Download</button>} content={() => componentRef.current}/>
        {showInvoice ? 
          <div ref={componentRef}>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address}/>
            <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
            <Table 
              description={description} 
              quantity={quantity} 
              price={price} 
              amount={amount} 
              list={list} 
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
            <Notes notes={notes} />
            <Footer 
              name={name} 
              address={address} 
              website={website} 
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />

            <button onClick={()=>setShowInvoice(false)} className="mt-5 bg-blue-500 font-bold py-2 px-8 text-white rounded shadow 
                  border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
                  duration-300">Edit information</button>
          </div> : (
          <>
          {/* name, address, client name, email, phone, bank name, bank account number, 
          website, client address, invoice number, invoice date, due date, table, notes,  */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your full name</label>
                  <input 
                    type="text" 
                    name="text" 
                    id="name" 
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
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
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-6">
                <div className="flex flex-col">
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
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input 
                    type="url" 
                    name="website" 
                    id="website" 
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input 
                    type="telephone" 
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="bankName">Enter Your Bank Name</label>
                <input 
                  type="text" 
                  name="bankName" 
                  id="bankName" 
                  placeholder="Enter your Your Bank Name"
                  autoComplete="off"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bankAccount">Enter Your Bank Account Number</label>
                <input 
                  type="number" 
                  name="bankAccount" 
                  id="bankAccount" 
                  placeholder="Enter Your Bank Account"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />
              </div>
              </article>
              <article className="md:grid grid-cols-2 gap-6 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter Client Name</label>
                  <input 
                    type="text" 
                    name="clientName" 
                    id="clientName" 
                    placeholder="Enter your client name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter Client Address</label>
                  <input 
                    type="text" 
                    name="clientAddress" 
                    id="clientAddress" 
                    placeholder="Enter your client Address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Enter Invoice Number</label>
                  <input 
                    type="text" 
                    name="invoiceNumber" 
                    id="invoiceNumber" 
                    placeholder="Enter your invoice number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter Invoice Date</label>
                  <input 
                    type="date" 
                    name="invoiceDate" 
                    id="invoiceDate" 
                    placeholder="Enter your invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Enter Due Date</label>
                  <input 
                    type="date" 
                    name="dueDate" 
                    id="dueDate" 
                    placeholder="Invoice Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>
              {/* This is our table form */}
              <article>
                <TableForm 
                  description={description} 
                  setDescription={setDescription} 
                  quantity={quantity} 
                  setQuantity={setQuantity} 
                  price={price} 
                  setPrice={setPrice} 
                  amount={amount} 
                  setAmount={setAmount} 
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea 
                name="notes" 
                id="notes" 
                placeholder="Additional notes to client" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}>
              </textarea>
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
