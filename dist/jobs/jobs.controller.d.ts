import { JobsService } from './jobs.service';
import { Job } from './job.schema';
import { JobDto } from 'src/jobs/job.dto';
export declare class JobsController {
    private readonly jobService;
    constructor(jobService: JobsService);
    getjobs(): Promise<Job[]>;
    createjob(Job: JobDto): Promise<Job>;
}
