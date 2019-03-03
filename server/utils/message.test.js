var expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage',  () => {
  it('Should generate correct object', () => {

  var from = 'Sam';
  var text =  'Some message';
  var message = generateMessage(from, text);

  expect(message.createdAt);
  expect(message).toInclude({from, text});
  });
});