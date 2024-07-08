import { Job } from './job.schema';
import { Model } from 'mongoose';
import { JobDto } from 'src/job.dto';
export declare class JobsService {
    private jobModel;
    constructor(jobModel: Model<Job>);
    getjobs(): Promise<Job[]>;
    postJob(job: JobDto): Promise<Job>;
}