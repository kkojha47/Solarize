import React from 'react';
import {Link} from "react-router-dom";

import "../App.css"
import desktop from "../media/desktop.jpg"
import kanban from "../media/kanban.jpg"

export default function Home(){
    return(
        <div className={"h-100"}>
            <div id="home-1" className="p-md-5">
                <div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={desktop} width={"100%"} alt="do more/desktop"/>
                        </div>
                        <div className="col-sm-6">
                            <h2>All about Solarize</h2>
                            <p className="lead">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old.
                            </p>
                            <p className="lead">
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                                discovered the undoubtable source.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fixed">
            </div>
            <div className="p-md-5" id="home-2">
                <div className="row justify-content-center align-self-center" >
                    <div className="col-sm-6">
                        <h3>Look at my post its</h3>
                        <p className="lead">
                            here are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary, making this the first true generator on the
                            Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                            sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                            Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        <p className="lead">
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words, consectetur,
                            from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                            discovered the undoubtable source.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={kanban} width={"100%"} alt="kanban"/>
                    </div>
                </div>
            </div>
        </div>

    );
}
