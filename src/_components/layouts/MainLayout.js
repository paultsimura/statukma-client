import $ from 'jquery';
import React from 'react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';
import {Redirect, Route, Switch} from "react-router-dom";

import StudentsView from '../views/StudentsView';
import SpecialitiesView from "../views/SpecialitiesView";
import FacultiesView from "../views/FacultiesView";
import FacultyView from "../views/FacultyView";

class MainLayout extends React.Component {

    render() {
        let wrapperClass = "gray-bg ";
        return (
            <div id="wrapper">
                <Progress />
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>
                    <TopHeader/>

                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/students"/>)}/>
                        <Route exact path="/students" component={StudentsView}/>
                        <Route exact path="/specialities" component={SpecialitiesView}/>
                        {/*<Route exact path="/specialities/:id" render={() => (<Redirect to="/"/>)}/>*/}
                        <Route exact path="/faculties" component={FacultiesView}/>
                        <Route exact path="/faculties/:id" component={FacultyView}/>
                    </Switch>

                    <Footer />
                </div>

            </div>

        )
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}

export default MainLayout