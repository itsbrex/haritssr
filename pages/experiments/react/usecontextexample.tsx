import LayoutToExperiments from '@/components/LayoutToExperiments';
import { SubTitle } from '@/components/DesignSystem';
import { createContext, useContext, useState } from 'react';
import { ThemeContext, AuthContext } from '../../../context/someContext';

function Button() {
  const theme = useContext(ThemeContext);
  return <div className=''></div>;
}

function Profil() {
  const currentUser = useContext(AuthContext);
  return <div className=''></div>;
}

export default function useContextExample() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState({ name: 'Taylor' });

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <LayoutToExperiments domain='React' title='useContextExample'>
          <SubTitle>Example</SubTitle>
        </LayoutToExperiments>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}