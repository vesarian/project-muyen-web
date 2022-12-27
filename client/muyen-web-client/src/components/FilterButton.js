import React from 'react'
import { ButtonGroup, Dropdown, Button } from 'react-bootstrap'

const FilterButton = ({ category }) => {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="success">Filter</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                {category && category.map((el) => {
                    return (
                        <Dropdown.Item href={`http://localhost:3004/category/main/${el.id}`}>{el.name}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterButton