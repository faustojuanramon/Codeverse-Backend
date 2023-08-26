import { CreateFileDto, UpdateFileDto } from './dto/file-dto';
import { FilesService } from './files.service';
import { File } from "./schema/file.schema";
export declare class FilesController {
    private filesService;
    constructor(filesService: FilesService);
    create(createFileDto: CreateFileDto): Promise<File>;
    getById(id: string): Promise<File>;
    updateById(id: string, updateFileDto: UpdateFileDto): Promise<File>;
    deleteById(id: string): Promise<File>;
}
