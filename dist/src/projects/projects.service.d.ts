import { Project } from './schema/project.schema';
import { Model } from 'mongoose';
import { CreateProjectDto, UpdateProjectDto } from './dto/project-dto';
import { FoldersService } from 'src/folders/folders.service';
export declare class ProjectsService {
    private readonly projectsModel;
    private folderService;
    constructor(projectsModel: Model<Project>, folderService: FoldersService);
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
    getProjectById(id: string): Promise<Project>;
    updateProject(id: string, updateProjectDto: UpdateProjectDto): Promise<Project>;
    addFile(id: string, fileId: string): Promise<Project>;
    removeFile(id: string, fileId: string): Promise<Project>;
    addColaborator(id: string, userId: string): Promise<Project>;
    removeColaborator(id: string, userId: string): Promise<Project>;
    deleteProject(id: string): Promise<Project>;
}
