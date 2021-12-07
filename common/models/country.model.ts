import { CorpService } from "../../tools/services/corp.service";

export class Country {
    private data: string[];
    constructor(private corpService: CorpService) {
        this.data = corpService.CallAPI();
    }
}