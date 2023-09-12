import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Kundservice from './Kundservice';
import Villkor from './Villkor';
import BliMedlem from './BliMedlem';
import VanligaFragor from './VanligaFragor';

const MyRoutes = () => {
    return (
           <Routes>
            <Route path="/kundservice" element={<Kundservice />} />
            <Route path="/vanliga-fragor" element={<VanligaFragor />} />
            <Route path="/villkor" element={<Villkor />} />
            <Route path="/bli-medlem" element={<BliMedlem />} />
          </Routes>
    );
};

export default MyRoutes;