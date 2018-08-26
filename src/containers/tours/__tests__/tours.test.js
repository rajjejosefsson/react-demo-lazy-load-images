import { Tours } from '../tours';

// use mock version __mock__
jest.mock('../../../API/getTours.js');

it('Should render Tours component holding the data', done => {
  const wrapper = shallow(<Tours />);

  // trick to handle the async call on next tick
  setTimeout(() => {
    // re-render
    wrapper.update();

    const state = wrapper.instance().state;

    expect(state.isLoading).toBe(false);
    expect(state.tours.length).toBeGreaterThan(0);
    expect(wrapper.find('Tours').length).toEqual(1);

    done();
  });
});
