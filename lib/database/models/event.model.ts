import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    createdAt: Date;
    imageURL: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {_id: string, name: string};
    organizer: {_id: string, firstName: string, lastName: string};
}

const EventSchema = new Schema({
    title: { type: String, },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref:'Category'},
    organizer: { type: Schema.Types.ObjectId, ref:'User'},
    
})

const Event = models.event ||  model('Event', EventSchema);

export default Event;