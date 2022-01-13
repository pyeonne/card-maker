import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Pyeonne',
            company: 'DAY1COMPANY',
            theme: 'dark',
            title: 'Frontend Developer',
            email: 'pyeonne@gmail.com',
            message: 'go for it',
            fileName: 'pyeonne',
            fileURL: null,
        },
        {
            id: '2',
            name: 'Pyeonne',
            company: 'DAY1COMPANY',
            theme: 'light',
            title: 'Frontend Developer',
            email: 'pyeonne@gmail.com',
            message: 'go for it',
            fileName: 'pyeonne',
            fileURL: 'pyeonne.png',
        },
        {
            id: '3',
            name: 'Pyeonne',
            company: 'DAY1COMPANY',
            theme: 'colorful',
            title: 'Frontend Developer',
            email: 'pyeonne@gmail.com',
            message: 'go for it',
            fileName: 'pyeonne',
            fileURL: null,
        },
    ]);
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                navigate('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
