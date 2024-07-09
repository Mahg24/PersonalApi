import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.schema';
import { JobDto } from 'src/jobs/job.dto';
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {}

  @Get()
  async getjobs(): Promise<Job[]> {
    return await this.jobService.getjobs();
  }

  @Post()
  async createjob(@Body() Job: JobDto): Promise<Job> {
    return await this.jobService.createJob(Job);
  }
}
