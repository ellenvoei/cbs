import { QueryRequest } from '../../../services/QueryRequest';

export class CaseReportForListingById extends QueryRequest {
    constructor(caseReportId: string) {
        super('caseReportForListingById', 'Read.CaseReportsForListing.Queries.CaseReportForListingById', {
            'caseReportId': caseReportId
        });
    }
}