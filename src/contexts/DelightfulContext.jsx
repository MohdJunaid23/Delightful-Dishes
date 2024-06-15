import React, { createContext, useEffect, useState } from 'react';
export const delightfulContext = createContext(null);

const DelightfulContext = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    try {
      const storedRecipes = localStorage.getItem("recipes");
      console.log(storedRecipes);
      // Check if storedRecipes is not null and not an empty string
      if (storedRecipes) {
        const parsedRecipes = JSON.parse(storedRecipes);
        setRecipes(parsedRecipes);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
    
  return (
    <delightfulContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </delightfulContext.Provider>
  );
};

export default DelightfulContext;
