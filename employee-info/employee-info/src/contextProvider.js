import React, { useEffect, useState, useContext, Children } from "react";

const MyContext = React.createContext();
const { data } = useContext(MyContext);

<MyContext.Provider value={{ data: data }}>{Children}</MyContext.Provider>;