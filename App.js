  
 const heading =  React.createElement("h1",{id:"heading"},"Hello World from React") //creating element via react


 console.log( heading) // returns an object ie react element


 const root = ReactDOM.createRoot(document.getElementById("root")); //getting the element using root id
  
  
  root.render(heading);     // rendering the tag on UI using render function.

                            // render method is responsible to take that object and converts it to h1 tag and put it in UI.




