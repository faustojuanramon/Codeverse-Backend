import { File } from './schema/file.schema';
import { Model } from 'mongoose';
import { CreateFileDto, UpdateFileDto } from './dto/file-dto';
export declare class FilesService {
    private readonly filesModel;
    constructor(filesModel: Model<File>);
    createFile(createFileDto: CreateFileDto): Promise<File>;
    getFileById(id: string): Promise<File>;
    updateFile(id: string, updateFileDto: UpdateFileDto): Promise<File>;
    deleteFile(id: string): Promise<File>;
}
