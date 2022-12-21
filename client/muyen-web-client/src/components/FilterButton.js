import React from 'react'
import { ButtonGroup, Dropdown, Button } from 'react-bootstrap'

const FilterButton = () => {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="success">Filter</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterButton