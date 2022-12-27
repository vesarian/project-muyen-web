import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';

export default function App() {
    return (
        <div style={{ display: 'block', width: 750, padding: 30 }}>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Ellipsis />
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next />
            </Pagination>
        </div>
    );
}
