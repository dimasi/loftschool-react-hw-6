import React, {PureComponent} from 'react';
import './Order.css';

class Order extends PureComponent {
  render() {
    const {name, price, createdAt} = this.props;

    return (
      <div className="Order">
        <div className="Order__field Order__field_name">
          <span className="Order__field-title">Наименование:</span>
          <span className="Order__field-text">{name}</span>
        </div>
        <div className="Order__field Order__field_price">
          <span className="Order__field-title">Цена:</span>
          <span className="Order__field-text">{price}</span>
        </div>
        <div className="Order__field Order__field_date">
          <span className="Order__field-title">Создан:</span>
          <span className="Order__field-text">{createdAt}</span>
        </div>
      </div>
    );
  }
}

export default Order;
