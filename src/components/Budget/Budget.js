import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getBudget} from './../../reducers';
import './Budget.css';

class Budget extends PureComponent {
	render() {
		const {profit, marketExpanse, farmExpanse, deliveryExpanse} = this.props;
		const total = profit - marketExpanse - farmExpanse - deliveryExpanse;

		return (
			<div className="Budget">
				<h3 className="App__section-heading">Бюджет</h3>
				<span className="Budget__row">
					<span className="Budget__row-title">Всего получено денег:</span>
					<span className="Budget__row-value">{profit}</span>
				</span>
				<span className="Budget__row">
					<span className="Budget__row-title">Расходы продавцов:</span>
					<span className="Budget__row-value">{0 - marketExpanse}</span>
				</span>
				<span className="Budget__row">
					<span className="Budget__row-title">Расходы на ферме:</span>
					<span className="Budget__row-value">{0 - farmExpanse}</span>
				</span>
				<span className="Budget__row">
					<span className="Budget__row-title">Расходы на доставку:</span>
					<span className="Budget__row-value">{0 - deliveryExpanse}</span>
				</span>
				<span className="Budget__row Budget__row_text-bold">
					<span className="Budget__row-title">Итого:</span>
					<span className="Budget__row-value">{total}</span>
				</span>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...getBudget(state)
});

export default connect(mapStateToProps)(Budget);
