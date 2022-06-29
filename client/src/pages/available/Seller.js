import { Card } from "semantic-ui-react";
import ProductsTable from "./ProductsTable";


const Seller = ({ name, email, products }) => {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{name} <span style={{ fontSize: '12px', color: "#999" }}>{email}</span></Card.Header>
                <Card.Description>
                    <ProductsTable products={products} />
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default Seller;