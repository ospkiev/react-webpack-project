import React, {Suspense, useEffect, useState} from 'react';
import './styles/index.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import Modal from "shared/ui/Modal/Modal";

function App() {
    const {theme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <button onClick={toggle}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, animi deserunt illo, incidunt laboriosam libero molestiae nemo officia quae ratione reprehenderit suscipit tenetur ullam. Accusantium architecto aut nesciunt nisi unde!</Modal>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
