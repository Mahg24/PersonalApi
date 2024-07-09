import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './job.schema';
import { Model } from 'mongoose';
import { JobDto } from 'src/jobs/job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  async getjobs(): Promise<Job[]> {
    return await this.jobModel.find({});
  }

  async createJob(job: JobDto): Promise<Job> {
    const createdJob = new this.jobModel(job);
    return createdJob.save();
  }
}
