import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainTemplate } from '../../components/atomic/templates/MainTemplate';
import { ListView } from './list/ListView';
import { DetailView } from './[hotelId]/DetailView';

export const HotelsView = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/list" element={<ListView />} />
        <Route path="/:hotelId/*" element={<DetailView />} />
        <Route index element={<Navigate to="/hotels/list" replace />} />
      </Routes>
    </MainTemplate>
  );
};
