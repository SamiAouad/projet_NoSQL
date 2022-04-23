import React from 'react';
import {useParams} from "react-router";

function ErrorPage(props) {
    const params = useParams()
    return (
        <div>ErrorPage {params.code}</div>
    );
}

export default ErrorPage;