import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Order from './../Order';
import {getFarmOrders} from './../../reducers';
import {moveOrderToCustomer} from './../../actions/farmActions';
import './Farm.css';

class Farm extends PureComponent {
  handlerClickMoveHarvestToMarket = () => {
    const {orders, moveOrderToCustomer} = this.props;
    const orderToMove = orders[0];
    
    moveOrderToCustomer(orderToMove);
  }

  moveHarvestToMarketDisabled = () => !this.props.orders.length;

  render() {
    const {orders} = this.props;

    return (
      <section className="Farm">
        <h3 className="App__section-heading">Ферма</h3>
        <section className="Farm__orders">
          <button 
            type="button" 
            className="App__button"
            onClick={this.handlerClickMoveHarvestToMarket}
            disabled={this.moveHarvestToMarketDisabled()}
          >
            Отправить урожай клиенту
          </button>
          <div className="Farm__orders-container">
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
  orders: getFarmOrders(state)
});

const mapDispatchToProps = {
  moveOrderToCustomer
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Farm);
