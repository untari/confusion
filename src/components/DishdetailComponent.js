import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    // functional component 
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg object src={dish.image} alt={dish.name} />
                    <CardBody body className="ml-5">
                        <CardTitle heading>{dish.name}</CardTitle>  
                        <CardText heading>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments != null) {
            return (
                comments.map((comment)=>{
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, 
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                            </p>
                        </li>
                    )
                })
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    // functional component 
    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            </div>
        );
    }


export default DishDetail;

