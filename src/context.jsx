
import React, { useContext, useEffect, useReducer } from "react";
// create a context (warehouse)
// provide 
// consumer
import reducer from "./reducer";
const API = ""
const imgUrl="https://softbenz.com/uploads/services/service-1668659122.svg";
const imgUrl2 = "https://softbenz.com/uploads/packages/package-1620814170.svg";
const imgUrl3 = "https://softbenz.com/uploads/packages/package-1620815344.svg"

const initialState = {
    name: "",
  image: "",
  sercices: [{name: "Digital Marketing", description: "safalTech is here to provide you with the best Digital Market Experience in Nepal",image: imgUrl},{name: "Web Development Packages", description: "Building and maintaining simple static to complex dynamic websites with additional features at a reasonable price range",image: imgUrl2},{name:"Social Media Packages",description:"Digital Marketing comprises a platform to  approach your customers via email, content marketing, social media, and many more", image: imgUrl3}]
}

                        

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const updateHomePage = () => {
        return dispatch({
          type: "HOME_UPDATE",
          payload: {
            name: "SUCCESS TECH",
            image: "./images/hero.svg",
          },
        });
      };
 const updateAboutPage = ()=>{
    return dispatch({
        type: "ABOUT_UPDATE",
        payload: {
          name: "Success Ghorasaini",
          image: "./images/about1.svg",
        },
      });
        
    }
    //to call the api
    const getServices= async (url)=>{
          try{
            const res = await fetch(url);
            const data =  await res.json();

                dispatch({type:"GET_SERVICES",playload:data})
          }catch(error){
            console.log(error);
          }
    }
    useEffect(()=>{
      // getServices(API)
      
    })
return <AppContext.Provider value={{...state, updateAboutPage, updateHomePage}} >
    {
        children
    }
</AppContext.Provider>
};
//global custom hoook


const useGlobalContext = ()=>{

    return useContext(AppContext);

}
export {AppContext, AppProvider,useGlobalContext};
