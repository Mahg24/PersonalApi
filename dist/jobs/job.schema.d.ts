import { HydratedDocument } from 'mongoose';
export type JobDocument = HydratedDocument<Job>;
export declare class Job {
    name: string;
    company: string;
    startDate: Date;
    endDate: Date;
    description: string;
}
export declare const JobSchema: import("mongoose").Schema<Job, import("mongoose").Model<Job, any, any, any, import("mongoose").Document<unknown, any, Job> & Job & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Job, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Job>> & import("mongoose").FlatRecord<Job> & {
    _id: import("mongoose").Types.ObjectId;
}>;
