import { OnInit, ComponentFactoryResolver, ViewContainerRef, SimpleChange } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
export interface DialogData {
    alldata: any;
}
export declare class ListingComponent implements OnInit {
    _apiService: ApiService;
    dialog: MatDialog;
    bottomSheet: MatBottomSheet;
    fb: FormBuilder;
    private router;
    private resolver;
    private container;
    _http: HttpClient;
    sanitizer: DomSanitizer;
    private _snackBar;
    myControl: FormControl;
    datasourceval: any;
    search_settingsval: any;
    click_to_add_ananother_pageval: any;
    grab_linkval: any;
    date_search_sourceval: any;
    date_search_endpointval: any;
    urlval: any;
    searchendpointval: any;
    searchListval: any;
    pdf_link_val: any;
    statusarrval: any;
    skipval: any;
    errormg: any;
    jwttokenval: any;
    detail_datatypeval: any;
    detail_skip_arrayval: any;
    deleteendpointval: any;
    editrouteval: any;
    apiurlval: any;
    updateendpointval: any;
    modify_header_arrayval: any;
    date_search_source_countval: any;
    datacollectionval: any;
    selection: any;
    sourcedataval: any;
    emailarrayval: any;
    columns: any;
    autosearchinput: any;
    currentautosearcharr: any;
    olddata: any;
    tsearch: any;
    tableflag: any;
    autosearch: any;
    x: any;
    libdataval: any;
    limitcondval: any;
    custombuttonval: any;
    result: any;
    sortdataval: any;
    sh: any;
    art: any;
    aud2: any;
    aud: any;
    updatetableval: any;
    loaderrow: any;
    currentautocompleteitem: any;
    color: ThemePalette;
    mode: any;
    value: number;
    bufferValue: number;
    previewFlug: any;
    selectsearch: any;
    search_settings: any;
    click_to_add_ananother_page: any;
    limitcond: any;
    date_search_source_count: any;
    grab_link: any;
    custombutton: any;
    date_search_source: any;
    sortdata: any;
    date_search_endpoint: any;
    url: any;
    searchendpoint: any;
    pdf_link: any;
    searchList: any;
    libdata: any;
    datasource: any;
    datacollection: any;
    skip: any;
    detail_datatype: any;
    detail_skip_array: any;
    sourcedata: any;
    modify_header_array: any;
    deleteendpoint: any;
    updateendpoint: any;
    apiurl: any;
    updatetable: any;
    jwttoken: any;
    statusarr: any;
    emailarray: any;
    editroute: any;
    preview_artistxp: any;
    stateGroups: string[];
    stateGroup: Observable<string[]>;
    displayedColumns: string[];
    datacolumns: string[];
    displayedColumnsheader: string[];
    formarray: any;
    start_date: any;
    dateSearch_condition: any;
    selectSearch_condition: any;
    autoSearch_condition: any;
    textSearch_condition: any;
    end_date: any;
    i: any;
    loading: any;
    preresult: any;
    dataSource: MatTableDataSource<{}>;
    sort: MatSort;
    paginator: MatPaginator;
    myForm: any;
    modelChanged: Subject<any>;
    modelChangedserver: Subject<any>;
    subscriptions: Subscription[];
    subscriptioncount: number;
    constructor(_apiService: ApiService, dialog: MatDialog, bottomSheet: MatBottomSheet, fb: FormBuilder, router: Router, resolver: ComponentFactoryResolver, container: ViewContainerRef, _http: HttpClient, sanitizer: DomSanitizer, _snackBar: MatSnackBar);
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    inputblur(val: any): void;
    ngOnInit(): void;
    /**image view modal */
    img_modal_view(img: any): void;
    onSubmit(): void;
    dateSearch(val: any): void;
    selectSearch(value: any, type: any): void;
    paging(val: any): void;
    addautosearchdata(val: any): void;
    remove(val: any, i: any, field: any): void;
    autocompletechangedetected(item: any): void;
    filterautoval(data: any): void;
    autosearchfunction(value: any, data: any): void;
    textsearchfunction(value: any): void;
    refreshdata(): void;
    refreshalldata(val: any): void;
    private _filter;
    getstatus(val: any): any;
    pdfFlag(val: any): void;
    grapurl(val: any): void;
    copyText(row: any, val: string): void;
    openinternallink(val: any): void;
    openinternallinkwithparam(val: any, data: any): void;
    opencustombuttonactionlocaldata(val: any, data: any): void;
    opencustombuttonactionapidata(val: any, data: any): void;
    openextlinkwithparam(val: any, data: any): void;
    clickurl(val: any, url: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
    createData(point: any): {};
    applyFilter(filterValue: string): void;
    styleCell(col_name: any, row: any): {};
    /**show video modal on click of thamnail function by sourav */
    fetchvideo(videodata: any): void;
    opennotes(val: any): void;
    viewdata(data1: any): void;
    managestatus(data: any): void;
    custombuttonfunc(data: any): void;
    managestatusmultiple(): void;
    deletemultiple(): void;
    deletedata(data: any): void;
    editdata(data: any): void;
    sorttable(field: any, type: any): void;
    allSearch(): void;
    gettypeof(val: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    artistxpPreview(singleData: any): void;
}
export declare class Confirmdialog {
    _apiService: ApiService;
    dialogRef: MatDialogRef<Confirmdialog>;
    data: any;
    sanitizer: DomSanitizer;
    constructor(_apiService: ApiService, dialogRef: MatDialogRef<Confirmdialog>, data: any, sanitizer: DomSanitizer);
    onNoClick(): void;
    deletenote(index: any): void;
    addnotes(): void;
    gettypeof(val: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    sanitizeUrl(unsafeurl: any, data: any, rowdata: any): import("@angular/platform-browser").SafeResourceUrl;
}
export declare class BottomSheet {
    private bottomSheetRef;
    data: any;
    constructor(bottomSheetRef: MatBottomSheetRef<BottomSheet>, data: any);
    openLink(val: any): void;
}
/**listing video player */
export declare class VideoPlayer {
    dialogRef: MatDialogRef<VideoPlayer>;
    data: any;
    constructor(dialogRef: MatDialogRef<VideoPlayer>, data: any);
    onNoClick(): void;
}
/**listing Image View */
export declare class ImageView {
    dialogRef: MatDialogRef<ImageView>;
    data: any;
    constructor(dialogRef: MatDialogRef<ImageView>, data: any);
    addnotes(): void;
    onNoClick(): void;
}
export declare class SnackbarComponent {
    snackBarRef: MatSnackBarRef<SnackbarComponent>;
    data: any;
    constructor(snackBarRef: MatSnackBarRef<SnackbarComponent>, data: any);
}
