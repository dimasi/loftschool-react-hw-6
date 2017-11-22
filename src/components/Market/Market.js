import React, {Component} from 'react';
import {connect} from 'react-redux';
import Order from './../Order';
import {getMarketOrders} from './../../reducers';
import {createOrder, moveOrderToFarm} from './../../actions/marketActions';
import './Market.css';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toString()
  };
};

export class Market extends Component {
  handlerClickCreateOrder = () => {
    const {createOrder} = this.props;

    createOrder(getNewOrder());
  }

  handlerClickMoveOrderToFarm = () => {
    const {orders, moveOrderToFarm} = this.props;
    const orderToMove = orders[0];

    moveOrderToFarm(orderToMove);
  }

  render() {
    const {orders} = this.props;
    const moveOrderToFarmDisabled = !orders.length;

    return (
      <section className="Market">
        <h3 className="App__section-heading">Магазин</h3>
        <section className="Market__orders">
          <button 
            type="button" 
            className="App__button"
            onClick={this.handlerClickCreateOrder}
          >
            Создать заказ
          </button>
          <button 
            type="button" 
            className="App__button"
            onClick={this.handlerClickMoveOrderToFarm}
            disabled={moveOrderToFarmDisabled}
          >
            Отправить заказ на ферму
          </button>
          <div className="Market__orders-container">
            {orders.map(order => {
              const {id: key, name, price, createdAt} = order;

              return (
                <Order 
                  key={key}
                  name={name}
                  price={price}
                  createdAt={createdAt}
                />
              )
            })}
          </div>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  orders: getMarketOrders(state)
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
