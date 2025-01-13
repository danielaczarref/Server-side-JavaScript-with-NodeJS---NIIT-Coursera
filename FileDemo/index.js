const data = require('./app');

data.addNote('The Winds of Winter', 'George R. R. Martin');
data.getAllNotes();
data.readANote('Misery');
data.removeNote('Pride and Prejudice');
data.getAllNotes();