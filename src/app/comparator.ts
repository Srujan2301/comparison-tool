import { combineLatest } from "rxjs";
import { ComparatorService } from "./comparator.service";

export class Comparator {
    
    host = '';
    port ='';
    srvName = '';
    userName ='';
    password = '';    
    static sourceSchema = '';
    static targetSchema= '';
    static sourceTable = '';
    static targetTable = '';
    static ddldml ='';
    tableDiff ='';
    static schemaDiff: any;
    static srcList: any;
    static tarList: any;
    static sourceRows: any;
    static targetRows: any;
    static list: any;
    static keyList: any;
    static srcColumns: any;
    static dataSrcTarList: any;
    static tarColumns: any;
    static dataTarSrcList: any;
    static diffColumn: any;
    static diffData: any;



    static setSrcColumns(value: any){
        this.srcColumns = value;
    }

    static getSrcColumns(){
        return this.srcColumns;
    }

    static setTarColumns(value: any){
        this.tarColumns = value;
    }

    static getTarColumns(){
        return this.tarColumns;
    }

    static setDataSrcTarList(value: any){
        this.dataSrcTarList = value;
    }

    static getDataSrcTarList(){
        return this.dataSrcTarList;
    }

    static setDataTarSrcList(value: any){
        this.dataTarSrcList = value;
    }

    static getDataTarSrcList(){
        return this.dataTarSrcList;
    }

    static setDiffColumn(value: any){
        this.diffColumn = value;
    }

    static getDiffColumn(){
        return this.diffColumn;
    }

    static setDiffData(value: any){
        this.diffData = value;
    }

    static getDiffData(){
        return this.diffData;
    }

    static setSourceSchema(value: any){
        this.sourceSchema = value;
    }

    static getSourceSchema(){
        return this.sourceSchema;
    }


    static setTargetSchema(value: any){
        this.targetSchema = value;
    }

    static getTargetSchema(){
        return this.targetSchema;
    }

    static setSourceTable(value: any){
        Comparator.sourceTable = value;
    }

    static getSourceTable(){
        return Comparator.sourceTable;
    }

    static setTargetTable(value: any){
        Comparator.targetTable = value;
    }

    static getTargetTable(){
        return Comparator.targetTable;
    }

    static setDdlDml(value: any){
        Comparator.ddldml = value;
    }

    static getDdlDml(){
        return Comparator.ddldml;
    }

    
    static setSourceRows(value: any){
        Comparator.sourceRows = value;
    }

    static getSourceRows(){
        return Comparator.sourceRows;
    }

    static setTargetRows(value: any){
        Comparator.targetRows = value;
    }

    static getTargetRows(){
        return Comparator.targetRows;
    }

    static getList(){
        return Comparator.list;
    }

    static setList(value: any){
        Comparator.list = value;
    }

    static getKeyList(){
        return Comparator.keyList;
    }

    static setKeyList(value: any){
        Comparator.keyList = value;
    }

    static setSrcList(value: any){
        Comparator.srcList = value;
    }

    static getSrcList(){
        return Comparator.srcList;
    }

    static setTarList(value: any){
        Comparator.tarList = value;
    }

    static getTarList(){
        return Comparator.tarList;
    }
    
    static setSchemaDiff(value:any){
        Comparator.schemaDiff = value;
    }

    static getSchemaDiff(){
        return this.schemaDiff;
    }
}
