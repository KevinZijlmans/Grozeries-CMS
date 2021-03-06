import React from 'react'
import { Table, Badge, Select, Button } from 'evergreen-ui'

export default function OrdersPage(props) {
  return (
    <>
    <Table>
      <Table.Head>
        <Table.TextHeaderCell flexGrow={2}>
          Product
        </Table.TextHeaderCell>
        <Table.TextHeaderCell flexGrow={0.5}>
          Quantity
        </Table.TextHeaderCell>
        <Table.TextHeaderCell flexGrow={2}>
          Weigth/Piece
        </Table.TextHeaderCell>
        <Table.TextHeaderCell flexGrow={0.5}>
          Price
        </Table.TextHeaderCell>
        <Table.TextHeaderCell flexGrow={0.5}>
          Total price
        </Table.TextHeaderCell>
        <Table.TextHeaderCell flexGrow={2}>
          Status
        </Table.TextHeaderCell>
        <Table.TextHeaderCell flexGrow={0.5}>
          Order ID
        </Table.TextHeaderCell>

      </Table.Head>
      <Table.Body height='auto'>
        {props.orders.map(order => {
          if (order.status === 'pending') {
            return (
            <Table.Row key={order.id} isSelectable >
              <Table.TextCell flexGrow={2}>{order.product.product_name}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.quantity}</Table.TextCell>
              <Table.TextCell flexGrow={2}>{order.product.prices_by === 'weight' ? <Badge color='blue'>weight</Badge> : <Badge color='orange'>per piece</Badge>}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.product.price}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.total_price}</Table.TextCell>
              <Table.TextCell flexGrow={2}>
                <Select onChange={props.onChange} className="orderline-status" name={order.id}>
                  <option value="pending">pending</option>
                  <option value="ready for pickup">ready for pickup</option>
                </Select>
              </Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.orderId}</Table.TextCell>
            </Table.Row>
            )}
          }
        )}
      </Table.Body>
      <Table.Head>
        <Table.TextHeaderCell>Orderhistory</Table.TextHeaderCell>
        <Button style={{background: "green", color: "white"}} onClick={props.onClick}>SAVE</Button>
      </Table.Head>
      <Table.Body height='auto'>
      {props.orders.map(order => {
          if (order.status !== 'pending') {
            return (
            <Table.Row key={order.id} isSelectable >
              <Table.TextCell flexGrow={2}>{order.product.product_name}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.quantity}</Table.TextCell>
              <Table.TextCell flexGrow={2}>{order.product.prices_by === 'weight' ? <Badge color='blue'>weight</Badge> : <Badge color='orange'>per piece</Badge>}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.product.price}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.total_price}</Table.TextCell>
              <Table.TextCell flexGrow={2}>{order.status}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{order.orderId}</Table.TextCell>
            </Table.Row>
            )}
          }
        )}
      </Table.Body>
    </Table>
  </>
  )
}
