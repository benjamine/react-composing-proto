/*
* mocha's bdd syntax is inspired in RSpec
*   please read: http://betterspecs.org/
*/
require('babel-polyfill');
require('./util/globals');

// enzyme API: http://airbnb.io/enzyme/docs/api/index.html
import { mount } from 'enzyme';

describe('reactComposingProto', function() {
  /* eslint-disable fp/no-mutation */
  beforeEach(function() {
    this.root = reactComposingProto.createRoot();
  });
  it('is an object', function() {
    expect(reactComposingProto).to.be.an(Object);
  });
  it('has a text input for username', function() {
    expect(mount(this.root).find('input').prop('name')).to.be('username');
  });
});
