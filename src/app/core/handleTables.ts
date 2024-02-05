export class HandleTables <T>{
    dataSource: T[] = [];
    dataInTable: T[] = [];
    pageSizeList: number[] = [5, 10, 20];
    pageSelected: number = 5;
    searchCriteriaSelected: string = "";
    searchDataSelected: string = "";

    constructor(){}

    reseatPaginate() {
        this.dataInTable = this.dataSource.slice(0, this.pageSelected);
        this.searchCriteriaSelected = "";
        this.searchDataSelected = "";
    }


    changePageSize($event: any) {
        this.pageSelected = parseInt($event);
        this.dataInTable = this.dataSource.slice(0, this.pageSelected);
    }
}