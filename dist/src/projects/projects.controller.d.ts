import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project-dto';
import { Project } from './schema/project.schema';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
    getProjectById(id: string): Promise<Project>;
    updateProjectById(id: string, updateProjectDto: UpdateProjectDto): Promise<Project>;
    addFileToProject(projectId: string, fileId: string): Promise<Project>;
    removeFileOfProject(projectId: string, fileId: string): Promise<Project>;
    addColaboratorToProject(projectId: string, userId: string): Promise<Project>;
    removeColaboratorOfProject(projectId: string, userId: string): Promise<Project>;
    deleteProject(id: string): Promise<Project>;
}
