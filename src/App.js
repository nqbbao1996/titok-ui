import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { Fragment } from 'react';
import { publicRoutes } from './testss';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((testss, index) => {
                        const Page = testss.component;
                        let Layout = DefaultLayout;
                        if (testss.layout) {
                            Layout = testss.layout;
                        } else if (testss.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={testss.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
