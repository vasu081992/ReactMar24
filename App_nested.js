  
/*
const parent = React.createElement("div", 
{id : "parent"}, 
React.createElement("div",{id : "child"},
React.createElement("h1",{},"I am an h1 tag"))  // here just 1 element is going under div child. 
);
*/

const parent = React.createElement("div", 
{id : "parent"}, 
[React.createElement("div",{id : "child"}, // array is used if siblings are needed . ie in this case h1 and h2 are siblings which are coming under div child. so use array in these cases 
[React.createElement("h1",{},"I am a h1 tag"),
React.createElement("h2",{},"I am a h2 tag"),
]),
React.createElement("div",{id : "child2"},
[React.createElement("h1",{},"I am a h1 tag"),React.createElement("h2",{},"I am a h2 tag"),
]) // array is used if siblings are needed . ie in this case h1 and h2 are siblings which are coming under div child. so use array in these cases 
]);





 const heading =  React.createElement("h1",{id:"heading"},"Hello World from React") //creating element via react


 console.log( parent) // returns an object ie react element


 const root = ReactDOM.createRoot(document.getElementById("root")); //getting the element using root id
  
  
  root.render(parent);     // rendering the tag on UI using render function.

                            // render method is responsible to take that object and converts it to h1 tag and put it in UI.




