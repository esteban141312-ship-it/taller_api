import mongoose, { Schema } from 'mongoose';
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true,
    minLength:3,
    maxLength: 80,
    unique: true },

nationality:{ type: String, required: false, trim: true,
    minLength:2,
    maxLength: 40,
    unique: true },

birthYear:{ type : Number, required: false, trim: true,
min:0,
max:2026
},

active:{ type: Boolean, default:}
}, {
  timestamps:true,
  versionKey:false
}
);
export default mongoose.model('Producto', productoSchema);


