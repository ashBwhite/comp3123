const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteModelSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: true,
    trim: true
  },
  noteDescription: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    required: true,
    validate(value) {
      if (value = 1) {
        priority=='High';
    }
    else if(value =2 ){
      priority=='Medium';
    }
    else{
      priority == 'Low';
    }
  },
  dateAdded: {
    type: Number,
    required: true
    }
  },
  dateUpdated: {
    type: Number,
    validate(value) {
      if (value < dateAdded) throw new Error("Your updated date cannot be smaller than date added.")
    }
  },
});

const NotesModel = mongoose.model("NotesModel", NoteModelSchema);
module.exports = NotesModel;