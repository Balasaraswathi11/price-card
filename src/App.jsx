import React from "react";
import Cards from "./Components/Cards"
import "./App.css"

function App(){//creating app function
  const cardData=[//creating card data array

    //card 1 data 
    {
      card:"free",
      header:{
      para:"FREE",
      heading:"$0/month"},

     body:[
     {content:"Single User" ,correct:true
     },
     {content:"50GB Storage",correct:true},
     {content:"Unlimited Public Projects",correct:true},
     {content:"Community Access",correct:true},
     {content:"Unlimited Private Projects",correct:false},
     {content:"Dedicated Phone Support",correct:false},
     {content:"Free Subdomain",correct:false},
     {content:"Monthly status report",correct:false}
    ],


}, 

//card 2
 {
  card:"plus",
  header:{
  para:"PLUS",
  heading:"$9/month"},
 
     body:[
     {content:"5Users" ,correct:true
     },
     {content:"50GB Storage",correct:true},
     {content:"Unlimited Public Projects",correct:true},
     {content:"Community Access",correct:true},
     {content:"Unlimited Private Projects",correct:true},
     {content:"Dedicated Phone Support",correct:true},
     {content:"Free Subdomain",correct:true},
     {content:"Monthly status report",correct:false}
    ]
},

//card 3
{
  card:"pro",
  header:{
  para:"PRO",
  heading:"$49/month"},

 body:[
 {content:"50Users" ,correct:true
 },
 {content:"50GB Storage",correct:true},
 {content:"Unlimited Public Projects",correct:true},
 {content:"Community Access",correct:true},
 {content:"Unlimited Private Projects",correct:true},
 {content:"Dedicated Phone Support",correct:true},
 {content:"Free Subdomain",correct:true},
 {content:"Monthly status report",correct:true}
]
}]
  


return(
  <>
  <div className="heading"><h1>React Price Card Task</h1></div>
   <div className="card-divs mb-5 pb-5">
        {cardData.map((data, index) => (
          <div className={`${data.card}div`} key={index}>
            <Cards card={data} />
          </div>
        ))}
      </div>
  </>
)}
export default App