import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {}

  @Get()
  getjobs(): any {
    return this.jobService.getjobs();
  }
}
