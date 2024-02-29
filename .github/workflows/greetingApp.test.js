const { submitName, updateUI } = require('../../../frontend/greetingApp'); // Passe den Pfad entsprechend an

test('submitName function works correctly', () => {
  // Mocking document.getElementById
  document.getElementById = jest.fn(() => ({ value: 'Jim' }));

  submitName();

  expect(updateUI).toHaveBeenCalledWith('Hello, Jim!');
});

test('updateUI function updates greetingMessage element', () => {
  document.getElementById = jest.fn(() => ({ innerText: '' }));

  updateUI('Test Message');

  expect(document.getElementById).toHaveBeenCalledWith('greetingMessage');
  expect(document.getElementById('greetingMessage').innerText).toBe('Test Message');
});
