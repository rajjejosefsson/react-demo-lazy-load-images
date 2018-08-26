import React, { Component } from 'react';
import { getTours } from '../../API/getTours';
import { Tours as ToursComponent } from '../../components/tours';
import { sorter } from '../../helpers/sorter';
import { Spinner } from '../../components/spinner';
import { forceCheck } from 'react-lazyload';
import { selectOptions } from './tours.contants';

export class Tours extends Component {
  state = { isLoading: true, tours: [], sortBy: selectOptions[0].id };

  async componentDidMount() {
    const tours = await getTours();
    this.setState({ tours, isLoading: false });
  }

  onSortTours = id => {
    const { tours } = this.state;
    const selected = selectOptions.find(
      option => option.id === parseInt(id, 10)
    );
    const sortedTours = sorter(tours, selected.key, selected.isAccending);
    this.setState({ tours: sortedTours, sortBy: id });
    setTimeout(forceCheck, 1000); // if not, the image wont be lazy loaded
  };

  render() {
    const { tours, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="u-height--100vh u-display--flex u-justify-content--center">
          <Spinner />
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="u-display--flex u-align-items--center u-align-self--flex-end u-margin--bottom-gutter">
          <p className="u-color--gray u-font-weight--bold">Sort</p>
          <select
            className="e-select"
            onChange={({ target: { value } }) => this.onSortTours(value)}
          >
            {selectOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <ToursComponent tours={tours} />
      </React.Fragment>
    );
  }
}
