sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
    "sap/m/MessageToast",
    "sap/ui/export/Spreadsheet",
    "sap/ui/export/library"
], function (
    Controller,
    JSONModel,
    Filter,
    FilterOperator,
    FilterType,
    MessageToast, Spreadsheet, exportLibrary
) {
    "use strict";
    var EdmType = exportLibrary.EdmType;

    return Controller.extend("demoapp.controller.View1", {

        // =========================================================
        // INIT
        // =========================================================
        onInit: function () {

            var oData = {

                CompanyCodes: [
                    {
                        key: "1000",
                        text: "1000 - India"
                    },
                    {
                        key: "2000",
                        text: "2000 - Germany"
                    },
                    {
                        key: "3000",
                        text: "3000 - USA"
                    },
                    {
                        key: "4000",
                        text: "4000 - UK"
                    }
                ],

                FiscalYears: [
                    {
                        key: "2024",
                        text: "2024"
                    },
                    {
                        key: "2025",
                        text: "2025"
                    },
                    {
                        key: "2026",
                        text: "2026"
                    }
                ],

                Invoices: [

                    {
                        CompanyCode: "1000",
                        AccountingDocument: "1900000012",
                        FiscalYear: "2026",
                        InvoiceNumber: "510000001",
                        DocumentType: "RE",
                        InvoiceType: "MIRO",
                        ItemType: "Standard",
                        InvoiceDate: "10.09.2026",
                        PostingDate: "12.09.2026",
                        EnteredOn: "12.09.2026",
                        SupplyDate: "08.09.2026",
                        NewgenRecDate: "11.09.2026",
                        SAPReferenceNumber: "NG-2026-00001",
                        PurchasingDocumentNumber: "4500001001",
                        CurrencyKey: "INR",
                        VendorName: "ABC Technologies Pvt Ltd",
                        VendorNumber: "1000123",
                        VendorCountry: "IN",
                        VATID: "29ABCDE1234F1Z5",
                        AmountLocalCurrency: "125000.00",
                        VATAmount: "22500.00",
                        NetAmount: "102500.00",
                        SAPStatus: "SUCCESS",
                        SAPSentDate: "12.09.2026",
                        SAPSentTime: "10:25:35",
                        StatusDescription: "Invoice posted successfully in SAP after successful validation and accounting document creation."
                    },

                    {
                        CompanyCode: "1000",
                        AccountingDocument: "1900000013",
                        FiscalYear: "2026",
                        InvoiceNumber: "510000002",
                        DocumentType: "RE",
                        InvoiceType: "MIRO",
                        ItemType: "Standard",
                        InvoiceDate: "11.09.2026",
                        PostingDate: "13.09.2026",
                        EnteredOn: "13.09.2026",
                        SupplyDate: "10.09.2026",
                        NewgenRecDate: "12.09.2026",
                        SAPReferenceNumber: "NG-2026-00002",
                        PurchasingDocumentNumber: "4500001002",
                        CurrencyKey: "INR",
                        VendorName: "XYZ Solutions India",
                        VendorNumber: "1000124",
                        VendorCountry: "IN",
                        VATID: "27XYZAB5678G1Z2",
                        AmountLocalCurrency: "185000.00",
                        VATAmount: "33300.00",
                        NetAmount: "151700.00",
                        SAPStatus: "SUCCESS",
                        SAPSentDate: "13.09.2026",
                        SAPSentTime: "11:15:42",
                        StatusDescription: "Invoice posted successfully in SAP after successful validation."
                    },

                    {
                        CompanyCode: "2000",
                        AccountingDocument: "1800000456",
                        FiscalYear: "2025",
                        InvoiceNumber: "510000003",
                        DocumentType: "RE",
                        InvoiceType: "MIRO",
                        ItemType: "Service",
                        InvoiceDate: "15.10.2025",
                        PostingDate: "17.10.2025",
                        EnteredOn: "17.10.2025",
                        SupplyDate: "14.10.2025",
                        NewgenRecDate: "16.10.2025",
                        SAPReferenceNumber: "NG-2025-00003",
                        PurchasingDocumentNumber: "4500002001",
                        CurrencyKey: "EUR",
                        VendorName: "SAP Services GmbH",
                        VendorNumber: "2000456",
                        VendorCountry: "DE",
                        VATID: "DE123456789",
                        AmountLocalCurrency: "25000.00",
                        VATAmount: "4750.00",
                        NetAmount: "20250.00",
                        SAPStatus: "SUCCESS",
                        SAPSentDate: "17.10.2025",
                        SAPSentTime: "09:45:20",
                        StatusDescription: "Invoice posted successfully in SAP."
                    },

                    {
                        CompanyCode: "2000",
                        AccountingDocument: "1800000457",
                        FiscalYear: "2026",
                        InvoiceNumber: "510000004",
                        DocumentType: "KR",
                        InvoiceType: "MIRO",
                        ItemType: "Standard",
                        InvoiceDate: "05.09.2026",
                        PostingDate: "07.09.2026",
                        EnteredOn: "07.09.2026",
                        SupplyDate: "03.09.2026",
                        NewgenRecDate: "06.09.2026",
                        SAPReferenceNumber: "NG-2026-00004",
                        PurchasingDocumentNumber: "4500002002",
                        CurrencyKey: "EUR",
                        VendorName: "Global Supplies GmbH",
                        VendorNumber: "2000457",
                        VendorCountry: "DE",
                        VATID: "DE987654321",
                        AmountLocalCurrency: "32000.00",
                        VATAmount: "6080.00",
                        NetAmount: "25920.00",
                        SAPStatus: "ERROR",
                        SAPSentDate: "07.09.2026",
                        SAPSentTime: "14:20:10",
                        StatusDescription: "Invoice processing failed because the vendor VAT identification number could not be validated."
                    },

                    {
                        CompanyCode: "3000",
                        AccountingDocument: "1700000789",
                        FiscalYear: "2025",
                        InvoiceNumber: "510000005",
                        DocumentType: "RE",
                        InvoiceType: "MIRO",
                        ItemType: "Standard",
                        InvoiceDate: "20.11.2025",
                        PostingDate: "22.11.2025",
                        EnteredOn: "22.11.2025",
                        SupplyDate: "18.11.2025",
                        NewgenRecDate: "21.11.2025",
                        SAPReferenceNumber: "NG-2025-00005",
                        PurchasingDocumentNumber: "4500003001",
                        CurrencyKey: "USD",
                        VendorName: "US Consulting LLC",
                        VendorNumber: "3000789",
                        VendorCountry: "US",
                        VATID: "US98-7654321",
                        AmountLocalCurrency: "45000.00",
                        VATAmount: "0.00",
                        NetAmount: "45000.00",
                        SAPStatus: "PENDING",
                        SAPSentDate: "",
                        SAPSentTime: "",
                        StatusDescription: "Invoice has been received and validated successfully but is waiting for SAP processing."
                    },

                    {
                        CompanyCode: "3000",
                        AccountingDocument: "1700000790",
                        FiscalYear: "2026",
                        InvoiceNumber: "510000006",
                        DocumentType: "RE",
                        InvoiceType: "MIRO",
                        ItemType: "Material",
                        InvoiceDate: "01.09.2026",
                        PostingDate: "03.09.2026",
                        EnteredOn: "03.09.2026",
                        SupplyDate: "30.08.2026",
                        NewgenRecDate: "02.09.2026",
                        SAPReferenceNumber: "NG-2026-00006",
                        PurchasingDocumentNumber: "4500003002",
                        CurrencyKey: "USD",
                        VendorName: "Cloud Systems Inc",
                        VendorNumber: "3000790",
                        VendorCountry: "US",
                        VATID: "US12-3456789",
                        AmountLocalCurrency: "27500.00",
                        VATAmount: "0.00",
                        NetAmount: "27500.00",
                        SAPStatus: "SUCCESS",
                        SAPSentDate: "03.09.2026",
                        SAPSentTime: "16:40:15",
                        StatusDescription: "Invoice posted successfully in SAP and accounting document was created."
                    }
                ]
            };

            var oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        },
         onDownloadExcel: function () {

    var oTable = this.byId("invoiceTable");
    var oBinding = oTable.getBinding("rows");

    if (!oBinding) {
        sap.m.MessageToast.show("No table data available.");
        return;
    }

    // Get the contexts currently available in the table binding
    var aContexts = oBinding.getContexts(0, oBinding.getLength());

    if (!aContexts || aContexts.length === 0) {
        sap.m.MessageToast.show("No records available for download.");
        return;
    }

    // Convert binding contexts into actual objects
    var aData = aContexts.map(function (oContext) {
        return oContext.getObject();
    });

    // Excel columns
    var aCols = [
        {
            label: "Company Code",
            property: "CompanyCode",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Accounting Document",
            property: "AccountingDocument",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Fiscal Year",
            property: "FiscalYear",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "MIRO Invoice Number",
            property: "InvoiceNumber",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Document Type",
            property: "DocumentType",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Invoice Type",
            property: "InvoiceType",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Item Type",
            property: "ItemType",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Invoice Date",
            property: "InvoiceDate",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Posting Date in Document",
            property: "PostingDate",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Entered On",
            property: "EnteredOn",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Supply Date",
            property: "SupplyDate",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Newgen Rec Date",
            property: "NewgenRecDate",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "SAP Reference Number",
            property: "SAPReferenceNumber",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Purchasing Document Number",
            property: "PurchasingDocumentNumber",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Currency Key",
            property: "CurrencyKey",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Vendor Name",
            property: "VendorName",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Vendor Number",
            property: "VendorNumber",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Vendor Country",
            property: "VendorCountry",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "VAT ID",
            property: "VATID",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Amount in Local Currency",
            property: "AmountLocalCurrency",
            type: sap.ui.export.EdmType.Number
        },
        {
            label: "VAT Amount",
            property: "VATAmount",
            type: sap.ui.export.EdmType.Number
        },
        {
            label: "Net Amount",
            property: "NetAmount",
            type: sap.ui.export.EdmType.Number
        },
        {
            label: "SAP Status",
            property: "SAPStatus",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "SAP Sent Date",
            property: "SAPSentDate",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "SAP Sent Time",
            property: "SAPSentTime",
            type: sap.ui.export.EdmType.String
        },
        {
            label: "Status Description",
            property: "StatusDescription",
            type: sap.ui.export.EdmType.String
        }
    ];

    var oSettings = {
        workbook: {
            columns: aCols
        },

        dataSource: aData,

        fileName: "MIRO_Accounting_Documents.xlsx"
    };

    var oSpreadsheet = new sap.ui.export.Spreadsheet(oSettings);

    oSpreadsheet.build()
        .then(function () {
            sap.m.MessageToast.show(
                aData.length + " record(s) downloaded successfully."
            );
        })
        .catch(function (oError) {
            console.error("Excel export error:", oError);
            sap.m.MessageToast.show(
                "Error while downloading Excel file."
            );
        })
        .finally(function () {
            oSpreadsheet.destroy();
        });
},


        // =========================================================
        // SEARCH
        // =========================================================
        onSearch: function () {

            var aFilters = [];

            var oCompanyCode = this.byId("companyCode");
            var oFiscalYear = this.byId("fiscalYear");
            var oInvoiceNumber = this.byId("invoiceNumber");

            // =====================================================
            // COMPANY CODE - OR
            // Example:
            // 1000 OR 2000
            // =====================================================

            var aSelectedCompanyCodes =
                oCompanyCode.getSelectedKeys();

            if (aSelectedCompanyCodes.length > 0) {

                var aCompanyFilters =
                    aSelectedCompanyCodes.map(function (sCompanyCode) {

                        return new Filter(
                            "CompanyCode",
                            FilterOperator.EQ,
                            sCompanyCode
                        );

                    });

                aFilters.push(
                    new Filter({
                        filters: aCompanyFilters,
                        and: false
                    })
                );
            }


            // =====================================================
            // FISCAL YEAR - OR
            // Example:
            // 2025 OR 2026
            // =====================================================

            var aSelectedFiscalYears =
                oFiscalYear.getSelectedKeys();

            if (aSelectedFiscalYears.length > 0) {

                var aFiscalYearFilters =
                    aSelectedFiscalYears.map(function (sFiscalYear) {

                        return new Filter(
                            "FiscalYear",
                            FilterOperator.EQ,
                            sFiscalYear
                        );

                    });

                aFilters.push(
                    new Filter({
                        filters: aFiscalYearFilters,
                        and: false
                    })
                );
            }


            // =====================================================
            // INVOICE NUMBER
            // Contains search
            // =====================================================

            var sInvoiceNumber =
                oInvoiceNumber.getValue().trim();

            if (sInvoiceNumber) {

                aFilters.push(
                    new Filter(
                        "InvoiceNumber",
                        FilterOperator.Contains,
                        sInvoiceNumber
                    )
                );
            }


            // =====================================================
            // APPLY FILTER TO SAP UI TABLE
            // IMPORTANT:
            // sap.ui.table.Table uses "rows"
            // =====================================================

            var oTable = this.byId("invoiceTable");

            var oBinding = oTable.getBinding("rows");

            if (!oBinding) {

                console.error(
                    "invoiceTable does not have a rows binding."
                );

                return;
            }

            oBinding.filter(
                aFilters,
                FilterType.Application
            );
        },


        // =========================================================
        // CLEAR
        // =========================================================
        onClear: function () {

            // Clear Company Code
            this.byId("companyCode").removeAllSelectedItems();

            // Clear Fiscal Year
            this.byId("fiscalYear").removeAllSelectedItems();

            // Clear Invoice Number
            this.byId("invoiceNumber").setValue("");


            // Clear table filters
            var oTable = this.byId("invoiceTable");

            var oBinding = oTable.getBinding("rows");

            if (oBinding) {

                oBinding.filter(
                    [],
                    FilterType.Application
                );
            }
        },


        // =========================================================
        // STATUS FORMATTER
        // =========================================================
        formatStatus: function (sStatus) {

            switch (sStatus) {

                case "SUCCESS":
                    return "Success";

                case "ERROR":
                    return "Error";

                case "PENDING":
                    return "Warning";

                default:
                    return "None";
            }
        }

    });
});
