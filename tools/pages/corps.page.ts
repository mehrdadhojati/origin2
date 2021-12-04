import { CorpService } from "../services/corp.service";

export class CorpsPage {
    private data: string[];
    constructor(private corpService: CorpService) {
        this.data = corpService.CallAPI();
    }

}