import { CreateSnippetDto, UpdateSnippetDTO } from './dto/create-snippet-dto';
import { SnippetsService } from './snippets.service';
import { Snippet } from './schema/snippet.schema';
export declare class SnippetsController {
    private snippetsService;
    constructor(snippetsService: SnippetsService);
    create(createSnippetDto: CreateSnippetDto): Promise<Snippet>;
    getById(id: string): Promise<Snippet>;
    getAll(userId: string): Promise<Snippet[]>;
    update(id: string, updateSnippetDto: UpdateSnippetDTO): Promise<Snippet>;
    delete(id: string): Promise<Snippet>;
}
