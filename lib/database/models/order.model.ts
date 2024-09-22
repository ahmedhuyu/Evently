import { model, models, Schema } from "mongoose";


//defining the types of Order interface
export interface IOrder extends Document{
    createdAt: Date
    stripeId: String
    totalAmount: string
    event: {
        _id: string
        firstName: string
        lastName: string
    }
}

//defining Properties
const OrderSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        unique: true,
    },
    totalAmount: {
        type: String,
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Order = models.Order || model('Order', OrderSchema)

export default Order;