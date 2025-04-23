"use client"
import React from 'react';
import { IInitialState  } from "../interfaces/interfaces";


 const PomskyContext  = React.createContext<IInitialState>({ litters : [], availablePuppies: [] }) ;

 export default PomskyContext;