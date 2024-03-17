var mongoose = require('mongoose');
const Author = require('./author');
const Genre = require('./genre');


var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    summary: {type: String},
    ISBN: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    genre: [{type:  Schema.Types.ObjectId, ref: 'Genre'}],
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
