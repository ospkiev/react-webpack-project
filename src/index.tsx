import React from "react";
import {createRoot} from 'react-dom/client';
import {render} from "react-dom";
import {Counter} from "./components/Counter";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Counter/>);