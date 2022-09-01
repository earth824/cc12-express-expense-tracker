const { ValidationError } = require('./error');

exports.validateCategory = (title, type) => {
  if (!title || !title.trim()) {
    throw new ValidationError('title is required');
  }

  if (!type || !['expense', 'income'].includes(type.toLowerCase())) {
    throw new ValidationError('type must be expense or income');
  }
};
