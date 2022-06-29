import React from "react";
import { Table } from "semantic-ui-react";

const ProductsTable = ({ products }) => (
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>description</Table.HeaderCell>

            </Table.Row>
        </Table.Header>
        <Table.Body>
            {products.map((p) => {
                return (
                    <Table.Row key={p.id}>
                        <Table.Cell>{p.price}</Table.Cell>
                        <Table.Cell>{p.description}</Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>
);

export default ProductsTable;
