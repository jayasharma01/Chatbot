const documents = [
  {
    keyword: "AVG-M-01_Issue03_Rev.01 01 Sept 2025 Quality Manual.pdf",
    link: "https://drive.google.com/file/d/1H9sv24nIO0vbw_7tHZwRqoxtmxmghsRD/view",
  },
   {
    keyword: "Request for change document (Noida)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeqwT6cmg97WMGxrS-EUV0zLp6kdgKsfp8Z_6jLl6PDdNVcsA/viewform",
  },
   {
    keyword: "Request for closure (Noida)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeXNorUNxhoeV-5axJittWgVFuAmBSjm59ij0IFETmsYJHH7g/viewform",
  },
  {
    keyword: "Request for closure (Gagret)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScm3J9HGNXXLdAQg8-rqTwVg1IiB04cke-0_E4oIR3Dpx2glA/viewform",
  },
  {
    keyword: "Cheque Requisition",
    link: "https://script.google.com/a/macros/advancevalves.com/s/AKfycbwSIRysULoEb8O66yUo4ChM-AXST5L4XnpgAT3wu7cMJCYmImO4_qqJWamQy0QTlg5D/exec",
  },
  {
    keyword: "Loan Request",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdCt_N48uj1bhW8g53WRX-L2u4CWN9bqicS4YnCVQ7VPTGybg/viewform",
  },
  {
    keyword: "Re-Work Form (Noida)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe11fyEEfPz6D2xLCjjfMnlw97X2yLlWmEFeySzjlE0lTKH5Q/viewform?vc=0&c=0&w=1&flr=0",
  },
  {
    keyword: "Re-Work Form (Gagret)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdIg7iJo3iIgR8Z_V2YEfbMDGNKch5okud7Q6WC9UdvL_qpxg/viewform",
  },
  {
    keyword: "IT Service Request",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfi3BdXPOZ93Kcfqn2Na4g3pZJBEzEuWeBRvr1zep7lEemBHQ/viewform",
  },
   {
    keyword: "New Item Creation Request",
    link: "https://script.google.com/a/macros/advancevalves.com/s/AKfycbyGvK58SMsyS0Tp5eB-LrRcTXZtOTbgOewocbgOxp_mWN3HV_bOrTJoLvXbGk86i5Q2/exec",
  },
  {
    keyword: "Web finsys Issue Request",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfi3BdXPOZ93Kcfqn2Na4g3pZJBEzEuWeBRvr1zep7lEemBHQ/viewform",
  },
  {
    keyword: "Incident Register Form",
    link: "https://script.google.com/a/macros/advancevalves.com/s/AKfycbwwxp2moMAbZE1rM_CeSaBO-clCtNZA7YoeK6Azu0AzgYVacg6w90NtU0L1zOzy4MzTag/exec",
  },
   {
    keyword: "5S Score Form (Noida)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdXNwePP7YHXay8WWGzNTD4imHw2GLOyV9QnB4FvlnwjHNpHw/viewform",
  },
  {
    keyword: "Technical Query Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdrP2pwjYrc1I4_IeUEFxIKGctK58CwtJAkdtePILEve7CzEA/viewform",
  },
  {
    keyword: "5S Score Form (Una)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdprO0-uyAiV1pqAM4zjz2LGcWTOsY1t7l3lOL1a2rC8WqFng/viewform",
  },
   {
    keyword: "Trainer Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe9x0lu2BTlvEie-Ox8Kqz2fY9H0Qf8BxcfLrwiT_qB0AsaeA/viewform",
  },
  {
    keyword: "SYS-P-01_Issue-02_Rev.02_05-Apr-2024_Management Review.pdf",
    link: "https://drive.google.com/file/d/1zcYBxCHPgToItQVuLhcXeX5DWdM1VOTA/view",
  },
  {
    keyword: "SYS-P-02_Issue-02_Rev.06_01-Aug-2025_Internal Audit.pdf",
    link: "https://drive.google.com/file/d/1Z3CvKL8eEvWwtOMIWxYGf4RCbQJ3Qw0O/view",
  },
  {
    keyword:
      "SYS-P-03_Issue-02_Rev.02_05-Apr-2024_Control of Internal Documents.pdf",
    link: "https://drive.google.com/file/d/1__CEsRU3hSh0v1hk4uDgmfeY1FcrNQ5D/view",
  },
  {
    keyword: "SYS-P-04_Issue-02_Rev.03_05-Apr-2024_Control of Records.pdf",
    link: "https://drive.google.com/file/d/1w-UVYuxUGppwthqYvqYsPU3dbB66mx6I/view",
  },
  {
    keyword: "SYS-P-05_Issue-02_Rev.03_05-Apr-2024_Analysis of Data.pdf",
    link: "https://drive.google.com/file/d/1ZJcxi5oWEes_rbGZDRN7-QJAtiCiZFUZ/view",
  },
  {
    keyword: "SYS-P-06_Issue-02_Rev.03_05-Apr-2024_Management of Change.pdf",
    link: "https://drive.google.com/file/d/1nz2udEhkEmVemTJqTAZiDTPyesQZ5532/view",
  },
  {
    keyword: "SYS-P-07_Issue-02_Rev.03_05-Apr-2024_Corrective Action.pdf",
    link: "https://drive.google.com/file/d/1zFtXv-KL6bRaAcD2cFMarQbKprhJ7E0J/view",
  },
  {
    keyword:
      "SYS-P-08_Issue-03_Rev.00_05-Apr-2024_Opportunity for improvement.pdf",
    link: "https://drive.google.com/file/d/133hxgu_Jk8BpStZfvAn8z4HLrQV-BaJY/view",
  },
  {
    keyword:
      "AVG-O-01_Issue02_Rev01_01-Sept-2023_Organization Quality Objective.pdf",
    link: "https://drive.google.com/file/d/1SM_SLVE4h1AINDkiZt6z__1gXT3BowC0/view",
  },
  {
    keyword:
      "SYS-W-01 Issue-02 Rev. 00 15-Sep-2020 Valve Withdrawal or Recall Procedure.pdf",
    link: "https://drive.google.com/file/d/135xy42ySGkVvP_hlOswqaH0Dl556Z0rf/view",
  },
  {
    keyword:
      "SYS-C-01_Issue.02_Rev.09 05 Sept 2025 Quality Objective Chart.pdf",
    link: "https://drive.google.com/file/d/1RPhdZ0dn-zE_bWyjMfRCXUruEbz2lEWc/view",
  },
  {
    keyword:
      "SYS-C-02_Issue-01_Rev.01_10-May-2024_Communication Control Plan.pdf",
    link: "https://drive.google.com/file/d/1lPEU6_vmpqhfOuuQg0sT3mfzLBHCAVp_/view",
  },
  {
    keyword:
      "SYS-C-03_Issue-03_Rev 01_07-Oct-2024_Company Organogram for Industrial Valves.pdf",
    link: "https://drive.google.com/file/d/1_sxgpmMLYgNuffH7w-Non4Sd9UKw7CgW/view",
  },
  {
    keyword:
      "SYS-C-04_Issue-02_Rev.02_01-Apr-2025_Scope of QMS or Certification.pdf",
    link: "https://drive.google.com/file/d/1RQ101O-tyzzK0-mBIqRVeikR2Hvjzruj/view",
  },
  {
    keyword:
      "SYS-C-05_Issue-01_Rev.02_25-Apr-2025_Needs & Expectations of Interested Parties+Swot.pdf.",
    link: "https://drive.google.com/file/d/1tACfccypx-aANUWou9M_rL_ovseCqkXq/view",
  },
  {
    keyword:
      "SYS-C-06_Issue-02_Rev. 02_10-May-2024_Master list of Building, Work Sspace and Associated Utilities.pdf",
    link: "https://drive.google.com/file/d/1G44J0tnkWugZ7WLld0yCUlEDdaD8pUCl/view",
  },
  {
    keyword:
      "SYS-F-01 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for TM or MR.docx",
    link: "https://drive.google.com/file/d/1PHh9w9qAT7ZxpQ29HfYdSPfv_BIDO3xk/view",
  },
  {
    keyword:
      "SYS-F-02 ISSUE-02 REV 04 01-AUG-2024_Internal Audit Check list cum observation Report for Design.docx",
    link: "https://drive.google.com/file/d/1YX_j222Cy5CalbAnuPRwl0XvRH0UBKlr/view",
  },
  {
    keyword:
      "SYS-F-03 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for Marketing.docx",
    link: "https://drive.google.com/file/d/1TKpBkHMLCz-jE3wQI-DQBnTYQ7mCVZgg/view",
  },
  {
    keyword:
      "SYS-F-04 ISSUE-02 REV.03 03-MAR-2025_Internal Audit Check list cum observation Report for Purchase.docx",
    link: "https://drive.google.com/file/d/10aDcWDlXQLlRuTTeCKDi9UeYHyV97dr7/view",
  },
  {
    keyword:
      "SYS-F-05 ISSUE-02 REV.03 07-Jun-2025_Internal Audit Check list cum observation Report for Production.docx",
    link: "https://drive.google.com/file/d/18AFjpVECvu21zoiD_Q1LvcvM8QttLNUF/view",
  },
  {
    keyword:
      "SYS-F-06 ISSUE-02 REV.04 07-Jun-2025_Internal Audit Check list cum observation Report for QA.docx",
    link: "https://drive.google.com/file/d/1yYz8IVJ6ICEnHLbhkux4e1w_aRPjblYX/view",
  },
  {
    keyword:
      "SYS-F-07 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for Store.docx",
    link: "https://drive.google.com/file/d/1T0_w0VcGbMxTWOXkg7fB_OqNo8XVgT-7/view",
  },
  {
    keyword:
      "SYS-F-08 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for C&PM.docx",
    link: "https://drive.google.com/file/d/13uejkKPxSWKu00gqE7M0Xlv3Vu2g3u--/view",
  },
  {
    keyword:
      "SYS-F-09 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for Maintenance.docx",
    link: "https://drive.google.com/file/d/1X2-bNRganijqrUNtkRYm8XtyAahqewy6/view",
  },
  {
    keyword:
      "SYS-F-10 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for IT.docx",
    link: "https://drive.google.com/file/d/1Zjpd2iESTkx-L1wI-SjatYFrR2xQe-ks/view",
  },
  {
    keyword:
      "SYS-F-11 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check list cum observation Report for HR.docx",
    link: "https://drive.google.com/file/d/1mtZNgmj0qQgJ6995A53LOxfb6g0obqhD/view",
  },
  {
    keyword:
      "SYS-F-12_Issue02_Rev.01_01-Oct-2023_Case Study on Root Cause Analysis.pdf",
    link: "https://drive.google.com/file/d/1p5EcgefXQXLAnsO4jQJvv2TL3bjSPkGM/view",
  },
  {
    keyword:
      "SYS-F-13_ISSUE 02_REV. 03_25-Jun-2024_Internal audit NC summary report.xls",
    link: "https://drive.google.com/file/d/1daOZrHHWbCAFwq60weZ5Q_q40VM0LhfA/view",
  },
  {
    keyword:
      "SYS-F-14 ISSUE-02 REV.00 01-JAN-2018_Filing Maintenance, Storage & Disposal of Records.xls",
    link: "https://drive.google.com/file/d/1MiItjRXTE3C-1ZlXLPZ1C4FfiLkHYF1z/view",
  },
  {
    keyword:
      "SYS-F-15_Issue02_Rev.02_01-Dec-2024_Internal Audit Non-Conformance Report Sheet(Responses).xls",
    link: "https://drive.google.com/file/d/140EA8DSVqrjOgBnxb7hajk8NV4c2-6N_/view",
  },
  {
    keyword:
      "SYS-F-16_Issue.03_Rev.00 15 Sept 2025 Internal Document Change Request.PDF",
    link: "https://drive.google.com/file/d/1eNLoYJCCoJgVWOb6gXpXu7EtIS8msBIE/view",
  },
  {
    keyword:
      "SYS-F-17_ISSUE-02_REV 04_25-Jun-2024_Internal Audit Schedule Report.doc",
    link: "https://drive.google.com/file/d/1LqYAOqmydQ_TodlwPmA6_TCrsnVcKl3u/view",
  },
  {
    keyword: "SYS-F-18_ISSUE-02_REV.01_25-Jun-2024_Internal Audit Plan.doc",
    link: "https://drive.google.com/file/d/15HdPNzhiz_KDbEBIXl3bCXMbidMg1j1c/view",
  },
  {
    keyword:
      "SYS-F-19_Issue02_Rev.01_01-Oct-2023_Document Release cum Amendment Note.pdf",
    link: "https://drive.google.com/file/d/1Z2qhALO8zDTke-SSpgCDIItapNgCTIRC/view",
  },
  {
    keyword:
      "SYS-F-20_ISSUE-02_REV.02_25-Jun-2024_Minutes of Management Review Meeting.xls",
    link: "https://drive.google.com/file/d/1pZ2zaksz2Sa3ADkUfF51nX8pulqCjXEe/view",
  },
  {
    keyword:
      "SYS-F-21 ISSUE-02 REV.01 10-Feb.-2021_Preventive Action Report.docx",
    link: "https://drive.google.com/file/d/1deF73llRlfcb62V6VaH8C5_5TWalNJtO/view",
  },
  {
    keyword: "SYS-F-22 ISSUE-02 REV.00 01-JAN-2018_Table of Contents.xlsx",
    link: "https://drive.google.com/file/d/1BjK6wOsOX27BGvXlY16KY1x2LZ7emsJT/view",
  },
  {
    keyword:
      "SYS-F-23_ISSUE-02_REV.02_25-MAR-2024_Management of Change Form.pdf",
    link: "https://drive.google.com/file/d/18vdS9slrd-kR_RWpvhOOeNOliQUFpBI1/view",
  },
  {
    keyword:
      "SYS-F-24_ISSUE-02_REV-03_01-Dec-2024_Internal Audit Non-Conformance Report.pdf",
    link: "https://drive.google.com/file/d/1HSjVyJr2MXmvwEfaQtS5wQm5imwfZCg-/view",
  },
  {
    keyword:
      "SYS-F-25 ISSUE-02 REV.00 01-JAN-2018_Trac ... for Potential Non-Conformities & OFI.xlsx",
    link: "https://drive.google.com/file/d/1MQkyQXbujh24pJO7NBeHOvCEatgxMQ9N/view",
  },
  {
    keyword:
      "SYS-F-26 ISSUE-02 REV.00 01-JAN-2018_Review & Updation of Quality Certification.xlsx",
    link: "https://drive.google.com/file/d/1y-k_-D-d6u5-L-alEMSTbLNJz7b1iwML/view",
  },
  {
    keyword:
      "SYS-F-27 ISSUE-02 REV.00 01-JAN-2018_Master List of Documents.xlsx",
    link: "https://drive.google.com/file/d/1D6Uo8WcCpcHYiZs6zSwGDPHtopR9dsvL/view",
  },
  {
    keyword:
      "SYS-F-28-Issue-01-Rev.01_01-Feb-2025_Quality Objectives Achievement Report.xlsx",
    link: "https://drive.google.com/file/d/1cZUBuhBzz-CUPapjaVJwcrhF3sx8g6Pa/view",
  },
  {
    keyword:
      "SYS-F-29_ISSUE-02_REV.02_25-JUN-2024_List of Internal Quality Auditors.xlsx",
    link: "https://drive.google.com/file/d/1VSxieNSMbuLO23CSD3_RvJR3SnUXMtzp/view",
  },
  {
    keyword:
      "SYS-F-30 ISSUE-01 REV.01 05-JAN-2022_Summary Assessment of Effectiveness of QMS for MRM Minutes.docx",
    link: "https://drive.google.com/file/d/1ul_L7tXJoXBoy7T76_WXGZSP7ic6FLdJ/view",
  },
  {
    keyword: "SYS-F-31 ISSUE-02 REV.01 25-Jun-2024_Minutes of Meeting.docx",
    link: "https://drive.google.com/file/d/1emYTnJ_i2X_44h-Psm7E9h-oEQCsO-Pd/view",
  },
  {
    keyword:
      "SYS-F-32_ISSUE-02_REV.02_25-MAR-2024_Management Of Change Register.xlsx",
    link: "https://drive.google.com/file/d/1dpgF39jaolu7ko8O4-svUgy4cLgpS7ql/view",
  },
  {
    keyword:
      "SYS-F-33 ISSUE-02 REV.00 01-JAN-2018_List of Support Services - Transport Facility, Communication & Information System.xlsx",
    link: "https://drive.google.com/file/d/19hlEqFmHUaaWJFRfFexPzj6SRvguJyqh/view",
  },
  {
    keyword:
      "SYS-F-34 ISSUE-02 REV.01 01-AUG-2024_Internal Audit Check List for Outsourced Vendors During Product Realization Activity.docx",
    link: "https://drive.google.com/file/d/1h3xRwx2yyKVAugpq9L3pRGNCwOUG4YjJ/view",
  },
  {
    keyword:
      "SYS-F-35_Issue01_Rev.00_01-Oct-2023_Document Release cum Amendment Note Sheet (Responses).xlsx",
    link: "https://drive.google.com/file/d/1CXNOBFwkwb1ZrRrPQBVqa-65roiyqCn7/view",
  },
  {
    keyword:
      "SYS-F-36_Issue01_Rev.00_01-Oct-2023_Case Study on Root Cause Analysis Sheet (Responses).xlsx",
    link: "https://drive.google.com/file/d/1QIfCzIjU3uBsWkJMxeUVGx5Wdm0H6g7o/view",
  },
  {
    keyword:
      "SYS-F-37_Issue.01_Rev.00_15-Mar-2024_Feedback form for Certification Body.pdf",
    link: "https://drive.google.com/file/d/1t0YMxzTJz79ZZxU3tS2p9VBJ1RQXxtZt/view",
  },
  {
    keyword:
      "SYS-F-38_Issue.01_Rev.00_15-Mar-2024_Feedback for Certification Body (Responses).xlsx",
    link: "https://drive.google.com/file/d/130qErDeUebfuanerRXEjM-0vAqmw8lo4/view",
  },
  {
    keyword:
      "SYS-F-39_Issue01_Rev.00_04-Nov-2024_Opportunity for improvement form.pdf",
    link: "https://drive.google.com/file/d/1xPo5QziR9Pfb2GkaLWk5EuU4iFIsrltD/view",
  },
  {
    keyword:
      "SYS-F-40_Issue01_Rev.00_04-Nov-2024_Opportunity For improvement response.xlsx",
    link: "https://drive.google.com/file/d/1zf2qEV2QbQ_CfR3aeTXNOfomjDYYIfNo/view",
  },
  {
    keyword:
      "SYS-F-41_Issue.01_Rev.00 19 Sept 2025 Internal Document Change Request Record.pdf",
    link: "https://drive.google.com/file/d/1M2Cfh0zkWkOA4QgRx-bOCcgUoju6OfYQ/view",
  },
  {
    keyword: "MKT-P-01_Issue 02_Rev.06_12-May-2025_Contract Review.pdf",
    link: "https://drive.google.com/file/d/1yXesHboavCmj6YPUSyfeXnfuIoT2-lkT/view",
  },
  {
    keyword:
      "MKT-P-02_Issue-02_Rev.03_25-Apr-2025_Customer Satisfaction Measurement.pdf",
    link: "https://drive.google.com/file/d/15FLSdHpXg_1RpG6av0tUmAWwQonL_bcg/view",
  },
  {
    keyword:
      "MKT-P-03 Issue-02 Rev.02 10-April-2024_Externally Owned Property.pdf",
    link: "https://drive.google.com/file/d/10HH8HPtoCQCLlJmxciojO-ZA9BiKelzC/view",
  },
  {
    keyword: "MKT-P-04 Issue-02 Rev.02 10-April-2024_Servicing of Products.pdf",
    link: "https://drive.google.com/file/d/1E0MVJMhprXQJimqG577mRgSvu8_KLah6/view",
  },
  {
    keyword:
      "MKT-O-01_Issue02_Rev.04_12-Jun-2025_Objectives Marketing & Sales.pdf",
    link: "https://drive.google.com/file/d/1tWkjRjC3XDndeHLsUJfiUZwcwkYm2H3Q/view",
  },
  {
    keyword:
      "MKT-C-01 Issue-02 Rev.00 01-Jan-2018_Advance Corporate Brochure.pdf",
    link: "https://drive.google.com/file/d/1Yxn-SOAvICA1cnSNceovYmauiibDo6ua/view",
  },
  {
    keyword:
      "MKT-C-02 Issue-02 Rev.00 01-Jan-2018_ Catalogue for Dual Plate Check Valve.pdf",
    link: "https://drive.google.com/file/d/18uhbK5sAqGwGQTFmxNUlZONR9RPsaPzm/view",
  },
  {
    keyword:
      "MKT-C-03 Issue-02 Rev.00 01-Jan-2018_Catalogue for Concentric Butterfly Valves.pdf",
    link: "https://drive.google.com/file/d/1HVq1sjoUJExKaXXSzBP7Be5fyECDZOWE/view",
  },
  {
    keyword:
      "MKT-C-04 Issue-02 Rev.00 01-Jan-2018_Catalogue for Double Eccentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1wOBf0rmC6U7ffm0kGYkqnDmEbefBgNDa/view",
  },
  {
    keyword:
      "MKT-C-05 Issue-02 Rev.00 01-Jan-2018_Catalogue for Triple Eccentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/161XEx9_LDYHBOllE3ZR17fzuyusipJIu/view",
  },
  {
    keyword:
      "MKT-C-06 Issue-02 Rev.00 01-Jan-2018_Catalogue for Balancing Valve.pdf",
    link: "https://drive.google.com/file/d/1qay7H-yIArWcj6AH7muV80Aan3B1LlxK/view",
  },
  {
    keyword:
      "MKT-C-07 Issue-02 Rev.01 25-Jan-2021 Product Realization Capability Chart.pdf",
    link: "https://drive.google.com/file/d/1lgGA6j-JFsojYY8QfGy9KwWqMXhwpwWe/view",
  },
  {
    keyword:
      "MKT-W-01 Issue-02 Rev-02 01-Feb-2020_Preparation of Sales Order Acceptance.pdf",
    link: "https://drive.google.com/file/d/1hf9HKY5EQpFJvGjhBVmRssLh29LcEQx9/view",
  },
  {
    keyword:
      "MKT-W-02_Issue02_Rev.01_15-Jun-2024_Control of Client Documents & Data.pdf",
    link: "https://drive.google.com/file/d/1zObjwL1E7daITuoRE3twMHUpyZAk6ZZE/view",
  },
  {
    keyword:
      "MKT-F-01 Issue-02 Rev.03 20-March-2020 Contract Review Check list,Dual Plate Check Valves.xls",
    link: "https://drive.google.com/file/d/1349SRF0Mdam0uQ-oldZr_7yXYQROZroZ/view",
  },
  {
    keyword:
      "MKT-F-02 ISSUE-02 REV.01 01-Feb-2020 Contract Review Check List,Concentric Butterfly Valves.xls",
    link: "https://drive.google.com/file/d/1fPmHI9idis-2ioV6JWgFqrMhziUcPEWn/view",
  },
  {
    keyword:
      "MKT-F-03 ISSUE-02 REV.01 01-Feb-2020 Contract Review Check List,Double Eccentric Butterfly Valves.xls",
    link: "https://drive.google.com/file/d/17wgp9DdQl8ZEbjbEkP0sZacBpeffJCsU/view",
  },
  {
    keyword:
      "MKT-F-04 ISSUE-02 REV.01 01-Feb-2020 Contract Review Check List,Triple Eccentric Butterfly Valves.xls",
    link: "https://drive.google.com/file/d/1Mc6PtGUnctjogDu8Ep5m3htPmo5eOqkm/view",
  },
  {
    keyword:
      "MKT-F-05 ISSUE-01 REV.00 01-Nov-2024 First Information Report (FIR)",
    link: "https://drive.google.com/file/d/1J1WZFJn24VvmG1miJmqwwDHkxqWVh0Us/view",
  },
  {
    keyword:
      "MKT-F-06 ISSUE-01 REV.00 04-Feb-2025_Contract Review Check list for Pneumatic actuator",
    link: "https://drive.google.com/file/d/1vEP1f01LXQIM0uharJ7OYPHav5Yte31u/view",
  },
  {
    keyword:
      "MKT-F-07 ISSUE-02 REV.01 07-Jun-2022 Price Quotation Format AVG LLP..xls",
    link: "https://drive.google.com/file/d/1VKaVCeSqKZ3Q5KTVOcxFGdY_lLwz8tId/view",
  },
  {
    keyword:
      "MKT-F-08 ISSUE-02 REV.01 07-Jun-2022 Price Quotation Format AVPL-Noida.xls",
    link: "https://drive.google.com/file/d/1p0QFGjYv02wMtRY97iuIVtIyXzungUeJ/view",
  },
  {
    keyword:
      "MKT-F-09_Issue01_Rev.00_04-Feb-2025_Contract Review Check list for MOV actuator.xls",
    link: "https://drive.google.com/file/d/1GabycuCfkbXc1PPkeMiPB7sDtV9WZoA9/view",
  },
  {
    keyword:
      "MKT-F-10_Issue03_Rev.00_01-Apr-2025_Sales Order Cum Order Acceptance- Domestic.pdf",
    link: "https://drive.google.com/file/d/12g3jgNmGQiPkPTmz2eSqnBTahf4LodzD/view",
  },
  {
    keyword:
      "MKT-F-11_Issue03_Rev.00_01-Apr-2025_Sales Order Cum Order Acceptance- Export.pdf",
    link: "https://drive.google.com/file/d/1MkUHxDaGbeJBHqD92RxZrG9V2Rm0y6wl/view",
  },
  {
    keyword: "MKT-F-12 ISSUE-02REV.001-JAN-2018 Document Transmittal Form.doc",
    link: "https://drive.google.com/file/d/13aglgxhSnvWodATN9RxEbrLDfP0K-GCo/view",
  },
  {
    keyword:
      "MKT-F-13 Issue-01_Rev. 00 05-May-2025_Customer Complaint Handling Form.doc",
    link: "https://drive.google.com/file/d/1fOkBKuQz7lVFCe8VF0jOWhknkBu7HQge/view",
  },
  {
    keyword: "MKT-F-14_Issue03_Rev.00_01-Apr-2025_Packing list-Export.pdf",
    link: "https://drive.google.com/file/d/1CoQHHleA3V8uCf9fGDNm3_GdsiEfxgNU/view",
  },
  {
    keyword: "MKT-F-15_Issue03_Rev.00_01-Apr-2025_Packing list-Domestic.pdf",
    link: "https://drive.google.com/file/d/1BZxZZggqpMruXuYHiVxwzDzia41sWOA7/view",
  },
  {
    keyword: "MKT-F-16_Issue03_Rev.00_01-Apr-2025_Export Invoice.pdf",
    link: "https://drive.google.com/file/d/1yZba9e0Dy1UgUnzIy0-0-8Ox6yt6YAvw/view",
  },
  {
    keyword: "MKT-F-17_Issue03_Rev.00_01-Apr-2025_Domestic Invoice.doc",
    link: "https://drive.google.com/file/d/1hA_ttVxH8N_BwfmrRfkkYEqL8kWcWVkn/view",
  },
  {
    keyword:
      "MKT-F-18_Issue-01_Rev.00_12-Aug-2025_Prebid Review Meeting (PRM), Kick off Meeting (KOM) Check List",
    link: "https://drive.google.com/file/d/14MTmaPnReHNpAL8rWWP9s8ygD0W3LYIZ/view",
  },
  {
    keyword:
      "MKT-F-20 ISSUE-02 REV.00 01-JAN-2018 Service-Cum-Complaint Attendance Report.doc",
    link: "https://drive.google.com/file/d/1bLp3KbWwBUSYu3uKn5pP2KOoJhoXfBv0/view",
  },
  {
    keyword:
      "MKT-F-21 Issue-02 Rev.03_05-May-2025_Complaint Register & Review Format.xls",
    link: "https://drive.google.com/file/d/1CW24TFlOMxeWq6BqQt_vJPtl8p8dhtrl/view",
  },
  {
    keyword:
      "MKT-F-25 ISSUE-02REV.001-JAN-2018 Spare Parts_Interchangeability Record_SPIR.xlsx",
    link: "https://drive.google.com/file/d/1Y6zXdtL90iJKFXQVORE1tIVyNGAiwZsC/view",
  },
  {
    keyword:
      "MKT-F-28 ISSUE-02REV.001-JAN-2018 Servicing Requirement Record.xlsx",
    link: "https://drive.google.com/file/d/1zihfc_oWeYkhkQjGDsP4JGawEUKXZQZr/view",
  },
  {
    keyword:
      "MKT-F-29 ISSUE-02 REV.01 27-JUN-2025 Externally Owned Property Register.xlsx",
    link: "https://drive.google.com/file/d/11BIayM4XcdKMR-qUOUUvLPnbvpGzpvAB/view",
  },
  {
    keyword:
      "MKT-F-30_Issue.02_Rev.03_13-June-2024_Customer Feedback form for Pre-Order.pdf",
    link: "https://drive.google.com/file/d/1M3HuHupfIAyT3q6qu2seupkQFNN-ndHF/view",
  },
  {
    keyword:
      "MKT-F-31_Issue-01_Rev.00_01-Jan-2018_Check List for Approval of Sales Order cum Order Acceptance",
    link: "https://drive.google.com/file/d/1pOZgUk4yeoLvltpRSy05Rral_OVIuR6l/view",
  },
  {
    keyword:
      "MKT-F-32 Issue-01 Rev.01 25-Jul-2022 Contract Review Check list,Axial FlowCheck Valves.xls",
    link: "https://drive.google.com/file/d/1QQDMJeYkFA7xl0mt16tVVOF2Oots7t7G/view",
  },
  {
    keyword:
      "PUR-P-01_Issue.02_Rev.10_25 Jun 2025 Purchase and outsourcing processes.pdf",
    link: "https://drive.google.com/file/d/1mr_eyIn7KYcR7BqzrMagDMaNq7v8dZtm/view",
  },
  {
    keyword: "PUR-O-01_Issue-02_Rev.03_25-Dec-2024_Objective - Materials.pdf",
    link: "https://drive.google.com/file/d/1MhcIoa2hu3hXR4Ybg8ZyNM7IRvCSkJbx/view",
  },
  {
    keyword:
      "PUR-C-01 Issue-01 Rev.00 01-May-2019_Supply Chain Control Plan.pdf",
    link: "https://drive.google.com/file/d/1GXy0kl5JoOwofETXsHenXyzI6E19rKxq/view",
  },
  {
    keyword:
      "PUR-C-02_Issue-01_Rev.03_05-04-2024_SUPPLIERS RE-EVALUATION FREQUENCY PLAN.pdf",
    link: "https://drive.google.com/file/d/1nOoIwF8CKil0Iu-W4Sc5gwlVc5E6XBtu/view",
  },
  {
    keyword: "PUR-W-02_Issue.02_Rev.02_30 Jun 2025_Competent Authority.pdf",
    link: "https://drive.google.com/file/d/18PrqneAytb_kU9u1EbdaQI4HMmJdwsv6/view",
  },
  {
    keyword:
      "PUR-W-03 Issue-02 Rev.00 01-Jan-2018_Guideline for Import of Goods.pdf",
    link: "https://drive.google.com/file/d/1WMPOXq2XZBbKsn5ol7V4epRTvBvZSP1k/view",
  },
  {
    keyword:
      "PUR-W-04 Issue-02 Rev.01 01-Feb.-2021_Pattern Management System.pdf",
    link: "https://drive.google.com/file/d/11zUmXztURGpoSxWYatxP8VEt2ShCkGog/view?usp=sharing",
  },
  {
    keyword: "PUR-F-01_Issue-03_Rev.00 _06-June-2025_Purchase Order.pdf",
    link: "https://drive.google.com/file/d/15x8cbDaITNgz4y9Kp3sG8NKHaKTuTtdT/view",
  },
  {
    keyword:
      "PUR-F-02 Issue-02 Rev.00 01-Jan-2018_Purchase Casting Planing & Tracking Sheet.xlsx",
    link: "https://drive.google.com/file/d/1AqAZGy1kPqwpXW6fshrbaaZyue-G92LU/view",
  },
  {
    keyword:
      "PUR-F-03 Issue-01 Rev.00 01-Jan-2018_Purchase Order Wise Pending Supplies.pdf",
    link: "https://drive.google.com/file/d/1NGVbKEkHpSCRP4nRwnnYtlBi1C6yYwez/view",
  },
  {
    keyword: "PUR-F-04_Issue-02_Rev.01_01-Jul-2023_Supplier Approval Form.docx",
    link: "https://docs.google.com/document/d/1Q4yzRPZCIM6UQaRP7TDiexRRm8WEIqOW/edit",
  },
  {
    keyword: "PUR-F-05 Issue-02 Rev.01 01-July-2020_Approved Supplier List",
    link: "https://drive.google.com/file/d/14kpci_uchdOk74pAwsdsCUtmwIrPzjdc/view",
  },
  {
    keyword:
      "PUR-F-06_Issue-02_Rev.02_19-Feb-2025_Pattern Management System (PMS) Form",
    link: "https://drive.google.com/file/d/16OUVh5u63BoMKqDT6fxSZQUtnUGjGADk/view",
  },
  {
    keyword: "PUR-F-07 Issue-02 Rev.00 01-Jan-2018_Bid analysis.xlsx",
    link: "https://drive.google.com/file/d/1XSkGkI-Maoprt3SYBCR2pT5Kujl9UkJL/view",
  },
  {
    keyword: "PUR-F-08 Issue-02 Rev.00 01-Jan-2018_Pattern List.xlsx",
    link: "https://drive.google.com/file/d/1w11ZdRLLn1uq6_Ri7zW1xrIdvEDm8JoI/view",
  },
  {
    keyword:
      "PUR-F-09_Issue-02 Rev. 01 01-Dec.-2020_Purchase - Check List for PO Approval.xlsx",
    link: "https://drive.google.com/file/d/1RHrZO645dEnbxUjDpWAjlxDi-3hWZqpv/view?usp=sharing",
  },
  {
    keyword: "PUR-F-10 Issue-02 Rev.01 01-Dec.-2020_Rate Contract Format.xlsx",
    link: "https://drive.google.com/file/d/1xA-uYs9FoZGYSgAjJwrJr0iBwV-Pi-Hd/view?usp=sharing",
  },
  {
    keyword: "PUR-F-11_Issue-03_Rev.00 _07-Jun-2025_Purchase Requisition.pdf",
    link: "https://drive.google.com/file/d/18dXnn_mbPT0wm5hyVPfrwvFINRMjHkc5/view",
  },
  {
    keyword:
      "PUR-F-12 Issue-01 Rev.00 01-Jan-2018_Supplier Re-evaluation or Rating form.docx",
    link: "https://drive.google.com/file/d/1QgBXhbiOQqunOp6S6UX5pht7MrEbP8jI/view",
  },
  {
    keyword: "PUR-F-13 Issue-01 Rev.00 01-Jan-2018_Enquiry Form.xlsx",
    link: "https://drive.google.com/file/d/1f5Ofg0iDXdX1gS-yJJePS0T95SayEVpI/view",
  },
  {
    keyword:
      "PUR-F-14 Issue-01 Rev.03 04-Apr-2025 Supplier evaluation report of casting & forging items.xlsx",
    link: "https://drive.google.com/file/d/1DR1tDDmxUCSgGSHsMYsq7B6FSUeLK29g/view",
  },
  {
    keyword:
      "PUR-F-15 Issue-01 Rev.01 01-Oct-2021 Supplier evaluation report of machining services out sourced.xlsx",
    link: "https://drive.google.com/file/d/16K2mrqAAXl1MoZt11fi3ebm0Jvp4--kF/view",
  },
  {
    keyword:
      "PUR-F-16 Issue 01 Rev.00 01-Jan-2018_Supplier Evaluation Report of Bought Out & Raw Material Items.xlsx",
    link: "https://drive.google.com/file/d/1EYCQBjWBL1KI6ibkTxfIKnMY0Ti2DKhx/view",
  },
  {
    keyword:
      "PUR-F-17 Issue 01 Rev.00 01-Jan-2018_Supplier Evaluation Report for NDE Services Out Sourced.xlsx",
    link: "https://drive.google.com/file/d/1waV8qmeAio3qlQLuHFpYLzBoFEZfzkNZ/view",
  },
  {
    keyword:
      "PUR-F-18 Issue-01 Rev.00 01-Jan-2018_Supplier Evaluation Report of Welding Services Out Sourced.xlsx",
    link: "https://drive.google.com/file/d/1MYJUtHdysgxKp2NqE4v3vaGtaFvczP-p/view",
  },
  {
    keyword:
      "PUR-F-19 Issue-01 Rev.00 01-Jan-2018_Supplier Evaluation Report of Calibration Services Out Sourced.xlsx",
    link: "https://drive.google.com/file/d/1HTPnvMKZS_fWNbOthJPPYHpRA3AN7kFz/view",
  },
  {
    keyword:
      "PUR-F-20 Issue-01 Rev.01 01-Oct-2021 Supplier Evaluation Report of ENP coating services out sourced.xlsx",
    link: "https://drive.google.com/file/d/1zNaq7VWmHX-6qCdcvUO1UG6XAVF2L2J0/view",
  },
  {
    keyword:
      "PUR-F-21 Issue-01 Rev.01 01-Oct-2021 Supplier evaluation report of vulcanizing & rubber lining services out sourced.xlsx",
    link: "https://drive.google.com/file/d/1lG3ab4JpcDdiGiMcyvmcpy7uPY78Nhtj/view",
  },
  {
    keyword:
      "PUR-F-22 Issue-01 Rev.01 01-Oct-2021 Supplier evaluation report of Spring coiling services out sourced.xlsx",
    link: "https://drive.google.com/file/d/1lxoSZ2I71_3OnJb87nly59crcCbZJ1p-/view",
  },
  {
    keyword:
      "PUR-F-23 Issue 01 Rev.00 01-Jan-2018_Supplier Evaluation Report of Other Products or Activities.xlsx",
    link: "https://drive.google.com/file/d/1_-k2Zjz3dBo3mjg878JeXnQvXA6GlwpX/view",
  },
  {
    keyword:
      "PUR-F-24 Issue-01 Rev.00 01-Jan-2018_List of On Hold & Deactivated Supplier.xlsx",
    link: "https://drive.google.com/file/d/1lYmrNuIQpcghoOnsoSpO22YnDvbELCoC/view",
  },
  {
    keyword:
      "PUR-F-25 Issue-01 Rev.00 05-May-2018 Supplier Evaluation Report of Heat Treatment Services out sourced",
    link: "https://drive.google.com/file/d/1DoumqEpoampo9SqrVyV7RWo45aYYzqP4/view",
  },
  {
    keyword:
      "PUR-F-26 Issue-01 Rev.00 05-June-2018_Advance valves casting procurement experience - MOC, SIZE, RATING & WEIGHT/PIECE (Kg) wise from 2008, Product .....",
    link: "https://drive.google.com/file/d/18i457zbhXdMpFW3RnTvG3bLua98jDTfZ/view",
  },
  {
    keyword:
      "PUR-F-27 Issue-01 Rev.00 01-Sep-2018_Validation Report - Rubber Vulcanization or Lining",
    link: "https://drive.google.com/file/d/1lpafiTHhPBr2tN1vQnp_s3eh4A8RMPso/view",
  },
  {
    keyword:
      "PUR-F-28 Issue-01 Rev.00 01-Sep-2018_ENP coating validation format",
    link: "https://drive.google.com/file/d/1WFLktsfrE8BaureOzMa5Xv-ZIx9-7wfY/view",
  },
  {
    keyword:
      "PUR-F-29 Issue-01 Rev. 00 01-May-2019_Suppliers Internal & Supply Chain Control Form",
    link: "https://drive.google.com/file/d/1PkZ93jgfVyssYaCEmGn7j0IzGf06p9K2/view",
  },
  {
    keyword:
      "PUR-F-30 Issue-01 Rev.02 01-Apr.-2022_QUARTERLY SUPPLIERS RE-EVALUATION PLAN FORM.xlsx",
    link: "https://drive.google.com/file/d/1PmkM3ofoovV_oJAv7iHTafS5AEG-hhls/view",
  },
  {
    keyword:
      "PUR-F-31 Issue 02 Rev.00 01-June-2020_Supplier Evaluation Report of Consultant or Certification Activities.xlsx",
    link: "https://drive.google.com/file/d/1lyH0R05TbujC582tBYk9aIqH4u6JQFi5/view",
  },
  {
    keyword: "PUR-F-32 Issue 01 Rev. 00 01-Nov.-2020 Supplier Risk Assessment",
    link: "https://drive.google.com/file/d/1gA6Srei_sduuPNxYwYXp3kyk6To5Ep7P/view",
  },
  {
    keyword: "PUR-F-33_Issue-03 Rev.00_06-June-2025_Import PO format.pdf",
    link: "https://drive.google.com/file/d/1-rrlQ5gx2KDEmMeKGU81_DKecyItcDSc/view",
  },
  {
    keyword:
      "PUR-F-34 Issue-01 Rev.00 01-Oct-2021 Supplier evaluation report of -Traders.xlsx",
    link: "https://drive.google.com/file/d/11u2t2m0irA864KNqRyR-2-jVFaFdBvn1/view",
  },
  {
    keyword: "PUR-F-35_Issue01_Rev.00_01-May-2024_Supplier Feedback form",
    link: "https://drive.google.com/file/d/18jfmHxabdWSr6VKGbhRvQUsX_VRD2z7G/view",
  },
  {
    keyword: "PUR-F-36_Issue01_Rev.00_01-May-2024_Supplier Feedback Record",
    link: "https://drive.google.com/file/d/1h_lqC84Sr4y7O4ZUaAPdLfC7Ahosm4pq/view",
  },
  {
    keyword: "PUR-F-37_Issue-01_Rev.00_19-Feb-2025_PMS Closure Form",
    link: "https://drive.google.com/file/d/1sNxY4q3vEgC5nRj_hHo-PK1syAkcYUED/view",
  },
  {
    keyword:
      "PUR-F-38 Issue 01 Rev.00 04-Apr-2025_Supplier Evaluation Report of Fasteners",
    link: "https://drive.google.com/file/d/1qERgryD3pwyIDM2IlvTb4HJtkhn4HxLN/view",
  },
  {
    keyword: "STR-P-01_Issue-02_Rev03_05-Sept-2024_Preservation of Product.pdf",
    link: "https://drive.google.com/file/d/18_DCk1XHaUNCzKKC8JZO30givnQ0GybB/view",
  },
  {
    keyword: "STR-O-01_Issue.02_Rev.02 07-Aug-2025 Store objective.pdf",
    link: "https://drive.google.com/file/d/12MjrU9HvXN-XEbErhJatAZ7AsQm-anaz/view",
  },
  {
    keyword:
      "STR-W-02_Issue-02_Rev.02_12 Apr 2024_Preservation and Shelf Life Items and Control of Welding Consumables.pdf",
    link: "https://drive.google.com/file/d/1D62td9xYCgHrDEIB-aPH7688Cucd_1yS/view",
  },
  {
    keyword:
      "STR-W-03_Issue02_Rev.03_05-Mar-2025_Packing, Shipping, Handeling, Storage, Preservtion, Procedure, for Overseas Shipments.pdf",
    link: "https://drive.google.com/file/d/12HQ5vFPkaY7cW8A5hwFFM1GeP84Ph1KS/view",
  },
  {
    keyword:
      "STR-W-04_Issue02_Rev.01_06-Apr-2024_Long Term Preservation Procedure.pdf",
    link: "https://drive.google.com/file/d/1sQP0ctCgMrOO_FFuXdIW0TqH92gzIHnt/view",
  },
  {
    keyword:
      "STR-W-06 Issue-02 Rev.00 01-Jan-2018_Handling and Storage of Flamable ,Hazardous Items",
    link: "https://drive.google.com/file/d/1dvRmukUgUTJ10VlL6Q9RWnlg14-DTDFY/view",
  },
  {
    keyword: "STR-W-08_Issue-02_Rev.02_05-Mar-2025_Packing.pdf",
    link: "https://drive.google.com/file/d/12ukb-hSGg-NAHQxiKD4ObL7IIBNomuQG/view",
  },
  {
    keyword:
      "STR-W-09 Issue-02 Rev.01 05 Apr 2022 Procedure for Paint Storage.pdf",
    link: "https://drive.google.com/file/d/1b4HyoW3UNfqfmxAZhspIG8eQuV0BE12b/view",
  },
  {
    keyword:
      "STR-W-10_Issue02_Rev.02_20-Feb-2025_Procedure on Indentification & Tracibility.pdf",
    link: "https://drive.google.com/file/d/1RW30Hdb4YYmqqwZknlx0ghzGylb41cqj/view",
  },
  {
    keyword:
      "STR-F-01 Issue-02 Rev.00 01-Jan-2018_Material Issue Request - Non BOM Issuance.pdf",
    link: "https://drive.google.com/file/d/1MxH8V6SYqLHwNVFa_M2gPa8c4FqZpsd7/view",
  },
  {
    keyword: "STR-F-02 Issue-02 Rev.00 01-Jan-2018_Store Return Note.pdf",
    link: "https://drive.google.com/file/d/1yYB8Jg90czCZpBHiTdxnxRqILlTB3PTU/view",
  },
  {
    keyword:
      "STR-F-03 Issue-02 Rev.00 01-Jan-2018_Combined Stock Report (Value).pdf",
    link: "https://drive.google.com/file/d/1g2-6YyXtWC-xbG_j6DbydjZvzucFLcvO/view",
  },
  {
    keyword: "STR-F-04 Issue-02 Rev.00 01-Jan-2018_Bill Entry Register.xlsx",
    link: "https://drive.google.com/file/d/18B_XEjoG7vO_e6sA_FeTwWLu-Q14m0w8/view",
  },
  {
    keyword: "STR-F-05 Issue-02 Rev.00 01-Jan-2018_Stock Ledger.pdf",
    link: "https://drive.google.com/file/d/14v0hnqxzw6t5AwakndFpy0hzv3qjFcUJ/view",
  },
  {
    keyword: "STR-F-06 Issue-02 Rev.01 15-March-2021_Stock Fifo Value.pdf",
    link: "https://drive.google.com/file/d/1U-zPU7T3txptqt4TBf3re_a0TpiS5eRk/view?usp=sharing",
  },
  {
    keyword:
      "STR-F-07 Issue-02 Rev.00 01-Jan-2018_Returnable Challan - WIP.pdf",
    link: "https://drive.google.com/file/d/1-vgvGZ82qCeeSJfYX_mf3Rr9mCV37QUk/view",
  },
  {
    keyword:
      "STR-F-08 Issue-02 Rev.00 01-Jan-2018_Material Receipt Report - MRN with PO.pdf",
    link: "https://drive.google.com/file/d/1mZ0YNnWT9NCl4k8A3k17aT41jcMCQjUh/view",
  },
  {
    keyword:
      "STR-F-09 Issue-02 Rev.00 01-Jan-2018_Material Receipt Report - MRN Imported.pdf",
    link: "https://drive.google.com/file/d/1efrCzCoPsoRiY86mpxCJVoyfKOBuiNBh/view",
  },
  {
    keyword:
      "STR-F-10 Issue-02 Rev.00 01-Jan-2018_Material Receipt Report - General.pdf",
    link: "https://drive.google.com/file/d/1VMX56Cf-bBelWIjMDhy-C-i3XT-oYtNE/view",
  },
  {
    keyword:
      "STR-F-11 Issue-02 Rev.00 01-Jan-2018_Material Receipt Report - Job Work.pdf",
    link: "https://drive.google.com/file/d/1-C5gOt37sZGb16chrdHbBxhmSbHWyDer/view",
  },
  {
    keyword:
      "STR-F-12 Issue-02 Rev.00 01-Jan-2018_Material Receipt Report - RRGP.pdf",
    link: "https://drive.google.com/file/d/13IcQW2UGtcY8WZ8WA7o8G9Hu8ciqVQ1P/view",
  },
  {
    keyword: "STR-F-13 Issue-02 Rev.00 01-Jan-2018_Non Returnable Challan.pdf",
    link: "https://drive.google.com/file/d/1fkD6ikTpNYLslIsuyQ98it1qcQPLagjK/view",
  },
  {
    keyword: "STR-F-14 Issue-02 Rev.00 01-Jan-2018_Returnable Challan.pdf",
    link: "https://drive.google.com/file/d/1PXZjP_Knw9dGulXWQIo-iHzhoO1qFPgu/view",
  },
  {
    keyword:
      "STR-F-15 Issue-02 Rev.00 01-Jan-2018_Material Return After Job Work.pdf",
    link: "https://drive.google.com/file/d/12zbNq7jiN5PL1fOY2IMLOrTHBwdSYCTA/view",
  },
  {
    keyword:
      "STR-F-16 Issue-02 Rev.00 01-Jan-2018_Store Issue Report - Non BOM.pdf",
    link: "https://drive.google.com/file/d/1T0bs4AGEiQz-l7dyyDDb3GTmvbURHzda/view",
  },
  {
    keyword: "STR-F-17 Issue-02 Rev.00 01-Jan-2018_Store Issue Report-BOM.pdf",
    link: "https://drive.google.com/file/d/1TJp62AJ6ucjR2ENyCkIylsZZZrGIdWKN/view",
  },
  {
    keyword: "STR-F-18 Issue-02 Rev.00 01-Jan-2018_Packing Note.pdf",
    link: "https://drive.google.com/file/d/1Civlx1n-_Tj3VFdTWebfUOVArA03n6J2/view",
  },
  {
    keyword:
      "STR-F-20 Issue-02 Rev.02_05-Sept-2024_Stock Assessment Report Form.xlsx",
    link: "https://drive.google.com/file/d/17kbOzSTdJ01F0oUyMxpx1S7W0uTKGtdJ/view",
  },
  {
    keyword:
      "STR-F-21 Issue-02 Rev.00 01-Jan-2018_Material Identification Tags.pdf",
    link: "https://drive.google.com/file/d/1W4VtMlXCp55dRORU5kLrjw5CmjQi6HfM/view",
  },
  {
    keyword: "STR-C-01 Issue-02 Rev.00 01-Jan-2018_Layout of Stores.pdf",
    link: "https://drive.google.com/file/d/1KUJM6hrtMSmFfkgD0Lwnu3aOFpNEqDf9/view",
  },
  {
    keyword:
      "HRD-P-01_Issue 02_Rev 06_05-Apr-24_Procedure Human Resource Management.pdf",
    link: "https://drive.google.com/file/d/1YAZl1abWvU4mEoAW9kStu0jh7j7WGZyN/view",
  },
  {
    keyword: "HRD-O-01 Issue-02 Rev.00 01-Jan-2018_Objectives HR.pdf",
    link: "https://drive.google.com/file/d/1QQkcCAC5TQZmve8sFJL90B1dSWxL1HSB/view",
  },
  {
    keyword: "HRD-F-01 Issue-02 Rev. 03 25-Aug.-2021_Competency Matrix.xls",
    link: "https://drive.google.com/file/d/1jP2lfLN6H49_rc1unibw1Fh4QjVi4gDD/view",
  },
  {
    keyword: "HRD-F-02 Issue-02 Rev.00 01-Jan-2018_Employee Data Form.doc",
    link: "https://drive.google.com/file/d/1gvSP9pcKFV47tnerhi0wZ_iXqlCkW--2/view",
  },
  {
    keyword: "HRD-F-03 Issue-02 Rev.00 01-Jan-2018_New Joinee Check List.xlsx",
    link: "https://drive.google.com/file/d/1j3DSjK4aHyNfjIkJ0Pf15ftBWdmS2k7n/view",
  },
  {
    keyword: "HRD-F-04 Issue-02 Rev.00 01-Jan-2018_Half Yearly Calendar.xls",
    link: "https://drive.google.com/file/d/1VpJKsKuzTVaLGsCzIhyMI8Qn0uDgv0SD/view",
  },
  {
    keyword:
      "HRD-F-05 Issue-03 Rev.01_28-July-2025 Trainer and Comprehensive Training Assessment Response sheet.xls",
    link: "https://drive.google.com/file/d/1aa1rB-0oPVDSmWdfsLTLbzws2TmSvhg7/view",
  },
  {
    keyword: "HRD-F-06 Issue-02 Rev.00 01-Jan-2018_Departure Checklist.xlsx",
    link: "https://drive.google.com/file/d/1o6-q2AQVFC7cughxbJhwMKw9Z1U59FKv/view",
  },
  {
    keyword:
      "HRD-F-07 Issue-03 Rev.01_ 21-Jun-2025_Trainer form and Training Attendance & Feedback.pdf",
    link: "https://drive.google.com/file/d/14A7JPzpg6Zw-5fZQH8cc-KcNogRWtCb_/view",
  },
  {
    keyword:
      "HRD-F-08 Issue-03 Rev.00_12-Apr-2024_Performance Appraisal Form.doc",
    link: "https://drive.google.com/file/d/1OyE0EFJIfQRxep9rKxcUsQrCeESqa8Di/view",
  },
  {
    keyword:
      "HRD-F-09 Issue-02 Rev.00 01-Jan-2018_Format for Attendance Register.pdf",
    link: "https://drive.google.com/file/d/1K9VEp5G7M7peF9AoNDrPhsNBs1EfpQo1/view",
  },
  {
    keyword: "HRD-F-10 Issue 02 Rev.00 01-Jan-2018_Format for ESIC.pdf",
    link: "https://drive.google.com/file/d/1MZLMrmv1svYomdYUy9m4RlwK1A2PVYPD/view",
  },
  {
    keyword: "HRD-F-11 Issue-02 Rev.00 01-Jan-2018_PF Register.pdf",
    link: "https://drive.google.com/file/d/1BliMMYm1rG3jbk9X0VS96gKz4eRX3NsT/view",
  },
  {
    keyword:
      "HRD-F-12 Issue-02 Rev.00 01-Jan-2018_Format for Accident Book.pdf",
    link: "https://drive.google.com/file/d/16S0rSzf1z0KjssAYAhkfbILxsCIaL08O/view",
  },
  {
    keyword: "HRD-F-13 Issue-02 Rev.00 01-Jan-2018_Bonus Register.pdf",
    link: "https://drive.google.com/file/d/1whwn7P8P6pCZWrENjREIeDEYDpV98N5P/view",
  },
  {
    keyword: "HRD-F-14 Issue-02 Rev.00 01-Jan-2018_Leave Register.pdf",
    link: "https://drive.google.com/file/d/1BN-2w-Uxkr5Vp4CTvxuETaUSfPI-oen0/view",
  },
  {
    keyword: "HRD-F-15 Issue-02 Rev.00 01-Jan-2018_No Dues Form.doc",
    link: "https://drive.google.com/file/d/1HrUgSVqLqsniU0w9CLMvkhbaFiKxf0Jh/view",
  },
  {
    keyword: "HRD-F-16 Issue-02 Rev.01 01-July-2019_Transition Form.xls",
    link: "https://drive.google.com/file/d/1h0o8DNz9Fef3eQnRHHWqNiNKSR0hcxTu/view",
  },
  {
    keyword:
      "HRD-F-17_Issue-03_Rev.02_21-Jun-2025_Training Cum Effectiveness Form",
    link: "https://drive.google.com/file/d/1D0UqF-5oG_8G6gLDvWM0mHECGyZ_2awZ/view",
  },
  {
    keyword: "HRD-F-18 Issue-02 Rev.02 01-Jul-2021_Rapid Chart.xls",
    link: "https://drive.google.com/file/d/1nwrr3xFnQryCjBJ4Sp1Gllx-yYo2eq6i/view",
  },
  {
    keyword:
      "HRD-F-19_Issue02_Rev.01_20-Jun-2023_Induction Schedule for New Joinee.xlsx",
    link: "https://drive.google.com/file/d/15fi0TXP3_PjoYPThYg2eAck__IdTdmru/view",
  },
  {
    keyword: "HRD-F-20_Issue-01 Rev.00 01-Jan-2018_Onboarding Form.xlsx",
    link: "https://drive.google.com/file/d/1rhpUERtxrnMXnzTi13T85HhcrI8fOAdZ/view",
  },
  {
    keyword: "HRD-F-21 Issue-02 Rev.00 01-Jan-2018_JD Format.doc",
    link: "https://drive.google.com/file/d/1ZSkRJFAVghOXk3--K7Z_FPERi6dLV_Yt/view",
  },
  {
    keyword:
      "HRD-F-22 Issue-02 Rev.00 01-Jan.-2018 Resource Requirement form.xlsx",
    link: "https://drive.google.com/file/d/14wjQ1ALtNZ9TD_ZXdFkWjtjhdzeZ5XLC/view",
  },
  {
    keyword:
      "HRD-F-23 Issue 01 Rev. 00 01-Jan. -2021_List of Key or Essential Personnel for MOC Process.xlsx",
    link: "https://drive.google.com/file/d/1QVYosd1qYCCVqGhPf-UUK-tudYaFFpRh/view",
  },
  {
    keyword:
      "HRD-C-01_Issue-01_Rev.00_01-Jan-2018_Organizational Knowledge Chart.pdf",
    link: "https://drive.google.com/file/d/1KUa5n65Rh7ll6WOLmC8H46I9uSC523f3/view",
  },
  {
    keyword:
      "PLN-P-01_Issue-02_Rev.02_05-Apr-2024_Contracts & Project Management.pdf",
    link: "https://drive.google.com/file/d/1MX8Nbd_LFExGyhQqWLIYn4JKE2IEylu5/view",
  },
  {
    keyword:
      "PLN-P-02_Issue-02_Rev.02_10-Apr-2024_Risk Assessment Management.pdf",
    link: "https://drive.google.com/file/d/1ZNza4HtptpkcF6USOj8shrk0HNCmsf-i/view",
  },
  {
    keyword: "PLN-P-03_Issue-02_Rev.02_10-Apr-2024_Contengency Planning.pdf",
    link: "https://drive.google.com/file/d/1D40VSVhx_zC6dkhGxWpXOWRZsRO8js2f/view",
  },
  {
    keyword:
      "PLN-O-01_Issue.02_Rev.04_08 Jul 2025_Objective-Contracts & Project Management.pdf",
    link: "https://drive.google.com/file/d/1s049LYptseAzsdWHbktmJLvDdgRbLbR4/view",
  },
  {
    keyword:
      "PLN-C-01 Issue-01 Rev-00 01-Jan-2018_Chart on Rating Criteria for Severity.pdf",
    link: "https://drive.google.com/file/d/1ttPsp5ScgQL025gN9rzedyEEnrux7q8b/view",
  },
  {
    keyword:
      "PLN-C-02 Issue-01 Rev-00 01-Jan-2018_Chart On Rating Criteria For Occurrence.pdf",
    link: "https://drive.google.com/file/d/1rXOHMEVrm9_JlQdhjNvLXqdL5Mmr74UK/view",
  },
  {
    keyword:
      "PLN-C-03 Issue-01 Rev-00 01-Jan-2018_Chart on Rating Criteria for Detection.pdf",
    link: "https://drive.google.com/file/d/1oAMEdIb7c7SgqSplZGvWzPlweM8wJdu2/view",
  },
  {
    keyword: "PLN-F-01 Issue-02 Rev-00 01-Jan-2018_Planning Sheet Format.xlsx",
    link: "https://drive.google.com/file/d/1zT845hjnvukx6rF6SoXUgbujB7Em0kg-/view",
  },
  {
    keyword: "PLN-F-02 Issue-02 Rev-00 01-Jan-2018_Monthly Sales Plan.xls",
    link: "https://drive.google.com/file/d/15S9-pG-QF7YfcjjRuOMfeCuRVIVlS9nQ/view",
  },
  {
    keyword: "PLN-F-03 Issue-02 Rev-00 01-Jan-2018_Manufacturing Status.xlsx",
    link: "https://drive.google.com/file/d/1klW8jq1CJ9wp_mqxGb8yOXKpH5h0h4vy/view",
  },
  {
    keyword: "PLN-F-04_Issue-02_Rev-02_23-Feb-2024_Request for Change Document",
    link: "https://drive.google.com/file/d/1c5spouy1igOW23Xwhu35gfz9scCxAz7T/view",
  },
  {
    keyword:
      "PLN-F-05 Issue-02 Rev-00 01-Jan-2018_Impact Tracking Including Changes During Order Execution.xlsx",
    link: "https://drive.google.com/file/d/1WLDp5bZN2Js7uNEib0X2Ze1skRQz3ykc/view",
  },
  {
    keyword:
      "PLN-F-06_Issue-02_Rev-02_31-Dec-2024_Risk Assesment & Contingency Plan Sheet.xlsx",
    link: "https://drive.google.com/file/d/1ezDTXUdHYc9QVKTGHGyiUwo00s1G6BPL/view",
  },
  {
    keyword:
      "PLN-F-08 Issue-01 Rev-00 01-Jan-2018_Check List of Potential Risks / failures Modes.docx",
    link: "https://drive.google.com/file/d/1Y2iLY4oFfl5_VWFQP8Wr0HFiDSnSj01L/view",
  },
  {
    keyword:
      "PLN-F-11 Issue-01 Rev.00 01-Jan-2018_Risk & Opportunity Register.docx",
    link: "https://drive.google.com/file/d/18FnngMwBL33McBKYtx0PesIG-cVDUX2p/view",
  },
  {
    keyword:
      "PLN-F-12_Issue-01_Rev-02_23-Feb-2024_Change Tracking Sheet - (Responses).xlsx",
    link: "https://drive.google.com/file/d/1gIey3Ns17m6A2zKEmT32n50kkdOy_VlC/view",
  },
  {
    keyword: "PLN-F-13_Issue-02_Rev.01_23-Feb-2024_RFC Closure Form.pdf",
    link: "https://drive.google.com/file/d/1zzu-aFUTJtgBKTwrBz4H_DKQdxZ4auJa/view",
  },
  {
    keyword: "PLN-F-14_Issue-01_Rev.00_23-Feb-2024_RFC Closure Form (Response)",
    link: "https://drive.google.com/file/d/12LU4rngmgAbaYYkKpSk6ndJwio20AYHx/view",
  },
  {
    keyword:
      "PLN-F-15 Issue-01_Rev. 00_8-Apr-2024_Work Order Review Check List",
    link: "https://drive.google.com/file/d/11ncx6_9w4MwxYeMcsWftEwjdtLO4U5CG/view",
  },
  {
    keyword:
      "PLN-F-16_Issue01_Rev.00_17-Jun-2024_Customer Feedback form for Post Order",
    link: "https://drive.google.com/file/d/1SzXgeDJ-0-okAubU2uwyaqR2yyPjGJiB/view",
  },
  {
    keyword: "IT-P-01 Issue-02 Rev.00 01-Jan-2018_IT Procedure.pdf",
    link: "https://drive.google.com/file/d/1crvC_ZQQTxaOWjN3NBYv768QLxvlkjBP/view",
  },
  {
    keyword: "IT-O-01 Issue-02 Rev-01_17-Dec-2024_Quality Objectives- IT.pdf",
    link: "https://drive.google.com/file/d/1WrImMZBW_BlQeffpR7G1hHDKErfRuSMZ/view",
  },
  {
    keyword:
      "IT-W-01 Issue-02 Rev.00 01-Jan-2018_Work Instruction for Backup and Recovery.pdf",
    link: "https://drive.google.com/file/d/15uJ_uPUZSaOxZmZU9CjQC0DTG6B5ZOCj/view",
  },
  {
    keyword:
      "IT-F-01 Issue-02 Rev.01 05-Nov-2024_List of Hardware & Software.xlsx",
    link: "https://drive.google.com/file/d/1CQEOz7uOkTEepCbQtWLwFFjPTIyW_of6/view",
  },
  {
    keyword: "IT-F-02 Issue-02 Rev.01 05-Nov-2024_New Joinee Check List.xlsx",
    link: "https://drive.google.com/file/d/1MS8E5YBMuGItQ-T392o0NhmBko4qh-YR/view",
  },
  {
    keyword:
      "IT-F-03 Issue-02 Rev.00 01-Jan-2018_Employee Departure Check List.xlsx",
    link: "https://drive.google.com/file/d/1AujPH4yquuN53cvRFFdHMA19Rm7NUK08/view",
  },
  {
    keyword:
      "IT-F-04 Issue-02 Rev.03_07-Oct-2024_Hardware & Software Audit Form.xlsx",
    link: "https://drive.google.com/file/d/1EuRXfFbWwiTse8KDCiGDdTxEH_SHUA3r/view",
  },
  {
    keyword:
      "IT-F-05_Issue02_Rev.01_01-Jul-2023_ERP Supplier Registration Form.xlsx",
    link: "https://docs.google.com/spreadsheets/d/1O4Fn-yJfCj6c_So7kCj46di9qBgTLamK/edit#gid=2143129930",
  },
  {
    keyword:
      "IT-F-06 Issue-02 Rev.00 01-Jan-2020_Computer Hardware Parts Disposal Record.xlsx",
    link: "https://drive.google.com/file/d/1JXc-6zSG5CWntXinBXcwqGMZfln0yvju/view?usp=sharing",
  },
  {
    keyword:
      "MNT-P-01_Issue 02_Rev. 03_05-Apr-2024_Procedure for Preventive Maintenance of Equipments.pdf",
    link: "https://drive.google.com/file/d/16fEE7DuD22H9-nFYC1AN4cRJcy1ldd17/view",
  },
  {
    keyword:
      "MNT-W-01 Issue-03 Rev. 00 07-Oct.-2020_Air Compressor Maintenance.pdf",
    link: "https://drive.google.com/file/d/1DY4vebWMrW8t9T-Mbh1dWNsMs02dmONx/view",
  },
  {
    keyword:
      "MNT-W-02 Issue 03 Rev. 00 07-Oct.-2020_Lathe Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1E-cyQcY3xyYniNDiMVBZEZJdlq9Lh87F/view",
  },
  {
    keyword:
      "MNT-W-03 Issue 03 Rev. 00 07-Oct.-2020_Milling Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1BxZqjyXD-3hbYEwKg0Wt9IJOTnFVuyHK/view",
  },
  {
    keyword:
      "MNT-W-04 Issue 03 Rev. 00 07-Oct.-2020_Drilling Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1wjKDupKUtTw_Eff5QN9tQqFfJbBFxTnM/view",
  },
  {
    keyword: "MNT-W-05 Issue 03 Rev. 00 07_Oct.-2020_Generator Maintenance.pdf",
    link: "https://drive.google.com/file/d/19FBSq8I2Uw1yqbgMh8OuD1gi_JAlr4OJ/view",
  },
  {
    keyword:
      "MNT-W-06 Issue 03 Rev. 00 07-Oct.-2020_VTL Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/10Er-yhQjjIKd15HKBNLYfJpbg6L6qwHP/view",
  },
  {
    keyword: "MNT-W-07 Issue-03 Rev.00 07-Oct.-2020_Boring Machine.pdf",
    link: "https://drive.google.com/file/d/1Qs6TXEnOwjEGEHnGaxrsIa_rCtN64zEy/view",
  },
  {
    keyword:
      "MNT-W-08 Issue 03 Rev. 00 07-Oct.-2020_Hydraulic Test Bed Maintenance.pdf",
    link: "https://drive.google.com/file/d/1VCyhYi6TWY5gPfrkeMQ9ufVYyq9zBePq/view",
  },
  {
    keyword:
      "MNT-W-09 Issue 03 Rev. 00 07-Oct.-2020_Welding Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1NxlZZzk-nFg-zrxFPX1NBPBNuvIoKVKk/view",
  },
  {
    keyword:
      "MNT-W-10 Issue 03 Rev. 00 07-Oct.-2020_Surface grinder Maintenance.pdf",
    link: "https://drive.google.com/file/d/1ZQWlbbhfqJZwDfV2HIK345XTK4wbdK58/view",
  },
  {
    keyword:
      "MNT-W-11 Issue 03 Rev. 00 07-Oct.-2020_CNC Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1LmU4ajqGazqziKtytB7ID906mdcmxtAj/view",
  },
  {
    keyword:
      "MNT-W-12 Issue 03 Rev. 00 07-Oct.-2020_Shot Blasting Maintenance.pdf",
    link: "https://drive.google.com/file/d/1Intxbd9cEh9ulLpbq_qcuSFhgCMTxG6X/view",
  },
  {
    keyword:
      "MNT-W-13 Issue 03 Rev. 00 07-Oct.-2020_Slotting Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1sXCZwpAEmBfP6dw2aKYgdGpndQPHrAab/view",
  },
  {
    keyword:
      "MNT-W-14 Issue 03 Rev. 00 07-Oct.-2020_Shaper Machine Maintenance.pdf",
    link: "https://drive.google.com/file/d/1XJwKkClnUEzXjXJDbz8FcTFnhEPV87g_/view",
  },
  {
    keyword:
      "MNT-F-01 Issue-02 Rev. 00 01-Jan-2018_Breakdown Maintenance Log Book.xls",
    link: "https://drive.google.com/file/d/1Zh6PC3Ad6ZLmVocgJBUthU_sJb1lHjOY/view",
  },
  {
    keyword:
      "MNT-F-02 Issue-02 Rev. 00 01-Jan-2018_Master List of Machines and Equipments.xls",
    link: "https://drive.google.com/file/d/1nLjnGzDqPrUa1FmcLizO3tbKF3SPJTn6/view",
  },
  {
    keyword:
      "MNT-F-03 Issue-02 Rev. 00 01-Jan-2018_Equipement / Machine History Card.xls",
    link: "https://drive.google.com/file/d/1VutE-IMHhHebIqUW1bD_qu8bZ0umqhWU/view",
  },
  {
    keyword:
      "MNT-F-04 Issue-02 Rev. 00 01-Jan-2018_Annual Preventive Maintenance Plan.xls",
    link: "https://drive.google.com/file/d/1rTLczg1QNwXBGyTWkyrE8aCpd8FERBFH/view",
  },
  {
    keyword:
      "MNT-F-05 Issue-02 Rev. 00 01-Jan-2018_Annual Preventive Frequency of Machines & Equipments.xls",
    link: "https://drive.google.com/file/d/1l1j_Gz70RJT6Km6ZX4154nhuvvTi1q96/view",
  },
  {
    keyword:
      "MNT-F-06 Issue-02 Rev. 00 01-Jan-2018_Annual Machine Calibration Calendar.xls",
    link: "https://drive.google.com/file/d/1zogRlGqD7ZjkWxoG2PZYo12xmyueCw8h/view",
  },
  {
    keyword: "MNT-F-07 Issue-02 Rev. 00 01-Jan-2018_Master List of Manuals.xls",
    link: "https://drive.google.com/file/d/1pTUfOyZ6wfRrd4QSs2MMHbOGTBLnTZpq/view",
  },
  {
    keyword:
      "MNT-F-08 Issue-02 Rev. 00 01-Jan-2018_Master List of Lubricants.xls",
    link: "https://drive.google.com/file/d/1EL0pM9ZWGKS9ZF4_Rv82uPFrgBA6aZYR/view",
  },
  {
    keyword:
      "MNT-F-09 Issue-02 Rev. 00 01-Jan-2018_Preventive Maintenance Record.xls",
    link: "https://drive.google.com/file/d/1zv_W_tb9yrhjeWPpQjsK_sed3hIo5mZO/view",
  },
  {
    keyword:
      "MNT-F-10 Issue-02 Rev. 00 01-Jan-2018_Daily Preventive Maintenance Check List.xls",
    link: "https://drive.google.com/file/d/10ZX9vPCJQajlBymwdKKHNQ9mtWiHzpYk/view",
  },
  {
    keyword:
      "MNT-F-11 Issue-02 Rev. 00 01-Jan-2018_Permitted Crane Operator.xls",
    link: "https://drive.google.com/file/d/1tOUPkuBRj5OesEiEXiA_594aFsbnB0Ly/view",
  },
  {
    keyword: "MNT-F-12 Issue-02 Rev. 00 01-Jan-2018_Crane Operator Permit.xls",
    link: "https://drive.google.com/file/d/1GZG6Q5vNop2QofyLRtYN-z3ECZURYp55/view",
  },
  {
    keyword:
      "MNT-F-13 Issue-01 Rev. 00 01-Jan-2018_Machine Calibration Test Chart.xls",
    link: "https://drive.google.com/file/d/1M9FJSGMlCaNScPe_IvgeRWYQbpf-SrbG/view",
  },
  {
    keyword:
      "MNT-F-14 Issue-01 Rev. 00 01-Jan-2018_Master List of Spare Parts of Machines or Equipments.xls",
    link: "https://drive.google.com/file/d/1xH47TF7sQYUu7d1b6DI1zGgnknkpTfgT/view",
  },
  {
    keyword:
      "MNT-F-15 Issue-02 Rev. 00 01-Jan-2018_Daily Machine Availability Vs Utilization.xls",
    link: "https://drive.google.com/file/d/1T7KkXDT0fpczpGu4rrbgEK4RZnfjH0oi/view",
  },
  {
    keyword: "DSG-P-01_Issue-02_Rev.05_05-Apr-2024_Design and Development.pdf",
    link: "https://drive.google.com/file/d/1bnYNG37wgYnzBHxTUG_jY8VBQa-PXR9V/view",
  },
  {
    keyword:
      "DSG-P-02_Issue-02_Rev.02_05-Apr-2024_Control and use of External Documents in Product Realization.pdf",
    link: "https://drive.google.com/file/d/1mbymgiwTSSZS-vBdCXeplqo2wtlQMZn4/view",
  },
  {
    keyword:
      "DSG-O-01 Issue-02 Rev.01 01-Feb.-2021_Objectives - Design & Development.pdf",
    link: "https://drive.google.com/file/d/1SwC5GpLvY82IOykEuwxZCAwJKkIesZEs/view?usp=sharing",
  },
  {
    keyword:
      "DSG-W-01_Issue-02_Rev. 02_30-Apr-2022_Drawing Numbering System.pdf",
    link: "https://drive.google.com/file/d/1WQC3m9w3q6AU9QCJrerCvCHEt00rOt7p/view",
  },
  {
    keyword:
      "DSG-W-02 Issue-02 Rev. 01 25-May-2020_Impact Analysis Guidelines for SIL Certified Product.pdf",
    link: "https://drive.google.com/file/d/11TByCpm8AGi9_SBPA2BbhnPra_zRT8ue/view",
  },
  {
    keyword:
      "DSG-W-03 Issue-01 Rev. 02 01-Jun-2021_Guidelines for Castings for Prototypes.pdf",
    link: "https://drive.google.com/file/d/16dNm3ZpDTj3bfwddazKeTaCojhTDH_gT/view",
  },
  {
    keyword:
      "DSG-W-04_Issue-01_Rev. 02_02-Dec-2024_Work instruction for Design & Development review process.pdf",
    link: "https://drive.google.com/file/d/1DFRUpfvUb8FgQOnBbeLCreywf3KJvAa8/view",
  },
  {
    keyword:
      "DSG-W-05_Issue-02_Rev.-01_20-Jul-2020_Design Concept Dual Plate Check Valve.pdf",
    link: "https://drive.google.com/file/d/1Jg9NBNKR5Qdu3sANQFn2SWfaBiMklx2C/view",
  },
  {
    keyword:
      "DSG-W-06_Issue-02_Rev.-01_05-Aug-2020_Design Concept Concentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1S7x6ogY_lTr4jV7QH21GYoTLXIUmtPeY/view",
  },
  {
    keyword:
      "DSG-W-07_Issue-02_Rev. 01_05-Aug-2020_Design Concept Double Eccentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1nArMoqRMVue38iYzVK6BpgeBy2WVPAAG/view",
  },
  {
    keyword:
      "DSG-W-08_Issue-02_Rev. 01_05-Aug-2020_Design Concept Triple Eccentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1jZqcLtWGn3ubCSv6O6HuqSfWpQKbuyB8/view",
  },
  {
    keyword:
      "DSG-W-09_Issue-02_Rev. 00_01-Jan-2018_Creation &Checking of GADs.pdf",
    link: "https://drive.google.com/file/d/1G0NoOlnpbj597QjA9lz4j3MK7LwIC50I/view",
  },
  {
    keyword:
      "DSG-W-10_Issue-02_Rev. 01_30-Apr-2022_Technical Requirement Specification (TRS).pdf",
    link: "https://drive.google.com/file/d/16jo8ikUOWLeKc0sTQjSQR6arna3BZngt/view",
  },
  {
    keyword:
      "DSG-W-11_Issue-02_Rev.01_05-Aug-2020_Instructions for Storage, Installation, Operation and Maintenance of Concentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1n8YevuScoDOmr5vzfSyFp-paZrgFqv8K/view",
  },
  {
    keyword:
      "DSG-W-12_Issue-02_Rev.01_05-Aug-2020_Instructions for Storage, Installation, Operation and Maintenance of Double Offset Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/13Ra6P8ceFjoChWdzlIqLZMjIDnAkVhOx/view",
  },
  {
    keyword:
      "DSG-W-13_Issue-02_Rev03_01-Aug-2023_Instructions for storage, installation, operation and maintenance of Triple Eccentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1jXM3wUF0SBx92v9HIY425ZYO1C-JKP-u/view",
  },
  {
    keyword:
      "DSG-W-14_Issue 02_Rev.03_05-APR-2023_Instructions for Storage, Installation, Operation & maintenance of Dual Plate Check.pdf",
    link: "https://drive.google.com/file/d/17ampwWjwGMKF2QHvmSE_ls0Q6abZfzku/view",
  },
  {
    keyword:
      "DSG-W-15 Issue-01_Rev. 00_01-Jun-2019 Reference Elastomer Suitability Chart.pdf",
    link: "https://drive.google.com/file/d/1--3tnxVD5YoWtGrCf1Pdh0d0xWc9m-jo/view",
  },
  {
    keyword:
      "DSG-W-16_Issue-02_Rev. 01_05-May-2023_Selection of Elastomer material",
    link: "https://drive.google.com/file/d/1PwbzGUmaX69wLA7-KqibZzor_5b9sXP_/view",
  },
  {
    keyword:
      "DSG-W-17_Issue-01_Rev. 00_25-May-2020_Dual Plate Check Valve Sizing.pdf",
    link: "https://drive.google.com/file/d/1auNxIHwKLLvBVxmjcRoA6uGQPZRszTpB/view",
  },
  {
    keyword:
      "DSG-W-18_Issue-01_Rev. 04_30-Apr-2022_Unspecified machining tolerances on Engineering drawings.pdf",
    link: "https://drive.google.com/file/d/1u0F-j2C0erHN3FPhKGyE7vGrCJXBPHk3/view",
  },
  {
    keyword:
      "DSG-W-19_Issue 01_Rev. 00_05-Aug-2020_Design Concept Axial Flow Check Valve.pdf",
    link: "https://drive.google.com/file/d/12PGxdrGfExsmCVxaSJwi6fe_cfq6Sctx/view",
  },
  {
    keyword:
      "DSG-W-20_Issue 01_Rev.03_07-MAR-2025_Instructions for Storage, Installation, Operation & maintenance of Axial Flow Check valve.pdf",
    link: "https://drive.google.com/file/d/1QiojdxuUhBnkEJaf5q3ZSSd5TE90Q5DM/view",
  },
  {
    keyword:
      "DSG-W-21_Issue-01_Rev. 00_20-July-2020_Guidelines for identifying critical & essential dimensions and parameters in the Design Output.pdf",
    link: "https://drive.google.com/file/d/1GuJFAU5w0pUOnYy7lDxJwIZ-pZmpnCID/view",
  },
  {
    keyword:
      "DSG-W-22_Issue-01_Rev.00_11-Mar-2022_Instructions for Storage, Installation, Operation and Maintenance of UL Listed Concentric Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1CMU8-Ez-a2jtg26Fd6T4QJMqicHrIrBi/view",
  },
  {
    keyword:
      "DSG-F-01_Issue-02_Rev. 03_15-JUNE-2024_Design and Development Plan.xls",
    link: "https://drive.google.com/file/d/1MmUYtSCSaeuEkofUweKaWgcdaGHUpSLP/view",
  },
  {
    keyword:
      "DSG-F-02 Issue-02 Rev.01 15-May-2020 Manufacturing Drawing for A4 Landscape.pdf",
    link: "https://drive.google.com/file/d/12wTRcxFCMbAYwoT8-MCfejjFCBHwhWkJ/view",
  },
  {
    keyword:
      "DSG-F-03 Issue-02 Rev.01 15-May-2020 General Assembly Drawing For A3 Landscape.pdf",
    link: "https://drive.google.com/file/d/1pfqHh9zmewufLdsK2H22ppWxI7pSwPw5/view",
  },
  {
    keyword:
      "DSG-F-04_Issue-02_Rev.07_15-Oct-2024_Design Inputs Butterfly Valve.xlsx",
    link: "https://drive.google.com/file/d/1FPxUR5SEw_lpKvTaJ5plwsYkif5nRTFw/view",
  },
  {
    keyword:
      "DSG-F-05 Issue-02 Rev.00 01-Jan-2018_TechnicaI Specification for Procurement (Actuator).xls",
    link: "https://drive.google.com/file/d/1tqYEkLWp2TZ3BLF30ReTupciLyNPL_0N/view",
  },
  {
    keyword:
      "DSG-F-06 Issue-02 Rev.02 05-May-2023_Action Plan for Design Documents.docx",
    link: "https://docs.google.com/document/d/1lxuMeleRT8pKC8itbLBloqbfYi3_s79C/edit",
  },
  {
    keyword:
      "DSG-F-08_Issue-01_Rev. 01_27-May-2021_Decision Table (Butterfly Valves).xls",
    link: "https://drive.google.com/file/d/1eCsWLN0B1jaXLSelr_8c3iAGcuedhe5Q/view",
  },
  {
    keyword:
      "DSG-F-09 Issue-02 Rev.01 15-May-2020 Manufacturing Drawing for A3 Landscape.pdf",
    link: "https://drive.google.com/file/d/1NeT9vzxUGgFNj4H4qHJqIL8KhXWCamkw/view",
  },
  {
    keyword:
      "DSG-F-10 Issue-02 Rev.01 15-May-2020 Manufacturing Drawing for A4 Portrait.pdf",
    link: "https://drive.google.com/file/d/1ElVaeSwXQoYTNXIN6iF4dgC5S0bD6Jpl/view",
  },
  {
    keyword:
      "DSG-F-11 Issue-02 Rev.01 15-May-2020 General Assembly Drawing For A4 Portrait .pdf",
    link: "https://drive.google.com/file/d/1oNUZsfAVBbpuQ1wHBdyDyt61HNOHpQGT/view",
  },
  {
    keyword: "DSG-F-12 Issue 02 Rev.01 20-July-2019_BOM Format.pdf",
    link: "https://drive.google.com/file/d/1BED2HvcXUdaEDO5Z7BUFmEdgdz-oIVNI/view",
  },
  {
    keyword:
      "DSG-F-13 Issue-02 Rev.01 15-May-2020 General Assembly Drawing For A4 Landscape.pdf",
    link: "https://drive.google.com/file/d/187LsiEHFOJf8y-wx4MslJwfW6BqCRi74/view",
  },
  {
    keyword:
      "DSG-F-14 Issue-02 Rev.00 01-Jan-2018_Technical Specification for Procurement (Gear Box).xls",
    link: "https://drive.google.com/file/d/1HTbgGJHY6j51Rf0iVK68ttOO7k3Yqea8/view",
  },
  {
    keyword:
      "DSG-F-15_Issue-02_Rev.01_15-Jun-2020 Work order format for DPCV.pdf",
    link: "https://drive.google.com/file/d/1lbAp0k8Qrq4NdrrQ8KtPrcD2TwlBA9_-/view",
  },
  {
    keyword:
      "DSG-F-16_Issue-01_Rev. 01_27-May-2021_Decision Table (Dual Plate Check Valves)",
    link: "https://drive.google.com/file/d/1GWJAobI-TXiO7lh-CA_4x5tLpsYsH8G0/view",
  },
  {
    keyword:
      "DSG-F-17 Issue-02 Rev.01 15-May-2020_Check List for checking the GAD.xls",
    link: "https://drive.google.com/file/d/1IpmejhzVjndQ_9BHCpWzZyd1wYxFSda8/view",
  },
  {
    keyword:
      "DSG-F-18_Issue-02_Rev.01_15-Jun-2020 Work order format for BD.pdf",
    link: "https://drive.google.com/file/d/1fcR046ScXgVkeh_akxyqWHn8QQNHK0B3/view",
  },
  {
    keyword:
      "DSG-F-19_Issue-02_Rev.01_15-Jun-2020 Work order format for BT.pdf",
    link: "https://drive.google.com/file/d/1Lkc2pwSas1aU_-xTmYWdsmcwc9rwe0zd/view",
  },
  {
    keyword: "DSG-F-20_Issue-02_Rev.01_15-Jun-2020_BFV Work Order Format.pdf",
    link: "https://drive.google.com/file/d/1EGcuQtyapYwXnuzmNqNrax5tIr3Mtl2v/view",
  },
  {
    keyword:
      "DSG-F-21 Issue-02 Rev.01 15-May-2020_List of Available Standards.xlsx",
    link: "https://drive.google.com/file/d/1M_j1vmh4Zjqv7xO4EfB4vHW335SXkUod/view",
  },
  {
    keyword:
      "DSG-F-22 Issue-02 Rev.01 15-May-2020_Format for Review of Standards.docx",
    link: "https://drive.google.com/file/d/1Kn8kL6u5W2yegTqfJou7L9bBfhQ1kyMu/view",
  },
  {
    keyword: "DSG-F-23 Issue-02 Rev.01 15-May-2020_Impact Analysis Report.doc",
    link: "https://drive.google.com/file/d/1UoF5PN-1NDJ4cr7pJzyEGsJlCxSUZBF0/view",
  },
  {
    keyword:
      "DSG-F-24_Issue-02_Rev.06_15-Oct-2024_Design Inputs Dual Plate Check Valves.xlsx",
    link: "https://drive.google.com/file/d/1nPDoZda7IiBmSwZwKVS23mM-pUmki2x4/view",
  },
  {
    keyword:
      "DSG-F-25 Issue-02 Rev.03 01-Dec-2022_Design Validation Format.xlsx",
    link: "https://drive.google.com/file/d/1gh4Wak_NpXO0BDHILt16WzNYptitWuzI/view",
  },
  {
    keyword:
      "DSG-F-26_Issue-02_Rev. 02_02-MAR-2022_Hazard & Risk Analysis for Check Valves.xls",
    link: "https://drive.google.com/file/d/1RgiGEBIqtN05269ea2pFkNLBCj3ToiHI/view",
  },
  {
    keyword: "DSG-F-27 Issue-02 Rev.01 25-May-2020_BOM Checklist.xls",
    link: "https://drive.google.com/file/d/1ViAqwcx4cv4vpYNQpSfiGpbaeDxTuHUe/view",
  },
  {
    keyword:
      "DSG-F-28_Issue-02_Rev.05_24-June-2025_Technical Requirement Specification.xlsx",
    link: "https://drive.google.com/file/d/15p-17O986ADrqzILh6lTtV5BcE2tFhHd/view",
  },
  {
    keyword:
      "DSG-F-29_ISSUE-02_REV.05_24-JUNE-2025_Technical Requirement Specification for API 6D Valve.xlsx",
    link: "https://drive.google.com/file/d/1cTPHrdEoCIJ_lbDMlzW5uXHSUIL_Hecr/view",
  },
  {
    keyword:
      "DSG-F-30_Issue 02_Rev 02_25-Sep-2021_ Design Verification & Review Sheet for Triple Offset Butterfly Valves.xlsx",
    link: "https://drive.google.com/file/d/1peA83E_kGGB0Qu-Io1kMVzPesB2ONVdE/view",
  },
  {
    keyword:
      "DSG-F-31_Issue-02_Rev.03_15-JUN-2024_Design Verification & Review Sheet for Dual Plate Check Valves.xlsx",
    link: "https://drive.google.com/file/d/146XvADhtQ_Kvry0Mv7Fb3HLXyQ0veSV2/view",
  },
  {
    keyword:
      "DSG-F-32_Issue-01_Rev. 00_01-Jan-2018_List of Standard Designs.xlsx",
    link: "https://drive.google.com/file/d/1H2WH9YumH2EnAgqKl-tJ7xJWPA_df1DF/view",
  },
  {
    keyword:
      "DSG-F-33_Issue 02_Rev 02_25-Sep-2021_Design Verification & Review Sheet for Double Offset Butterfly Valve.xlsx",
    link: "https://drive.google.com/file/d/1gvPzxatRuuWNdq9o5hkPGvJzs4LW52uO/view",
  },
  {
    keyword:
      "DSG-F-34_Issue-02_Rev.02_15-Oct-2024_Design Inputs For API 6D Dual Plate Check Valves.xlsx",
    link: "https://drive.google.com/file/d/1430DT6T6Nfevo8rrBCH-oArnnNjczi9D/view",
  },
  {
    keyword: "DSG-F-35_Issue-02_Rev.00_21-Mar-2022_ESR CHECKLIST.xlsx",
    link: "https://drive.google.com/file/d/19-tiQONYMGtmWeM-vYsRD4Pvm89aTS1Q/view",
  },
  {
    keyword:
      "DSG-F-36_Issue-02_Rev.02_15-Oct-2024_Design Inputs For Axial Flow Check Valves.xlsx",
    link: "https://drive.google.com/file/d/1UIeROx96LZ-qFBZvVw7rH7VvUwR0DkjS/view",
  },
  {
    keyword:
      "DSG-F-37_ Issue-02_Rev.01_25-Sep-2021_Design Verification & Review Sheet for Concentric Butterfly Valves.xlsx",
    link: "https://drive.google.com/file/d/1YjuCCTXub5BvtVgGEPeSeubCFti_YrrX/view",
  },
  {
    keyword:
      "DSG-F-38 Issue-02_Rev.01_15-Sep-2022_HAZARD & RISK ANALYSIS FOR BUTTERFLY VALVES",
    link: "https://drive.google.com/file/d/1VZjIV7VssbMoBXT1tM-g4bv9bboU5hnp/view",
  },
  {
    keyword:
      "DSG-F-39_Issue-02_Rev.03_07-MARCH-2025_Design Verification & Review Sheet for Axial Flow check valves.xlsx",
    link: "https://drive.google.com/file/d/1Rv7htXC2BdT6njppo-9iTJ_YgC2M5Arh/view",
  },
  {
    keyword: "DSG-F-40_ISSUE-02_REV. 00_15-JUN-2020_AFCV Work Order Format.pdf",
    link: "https://drive.google.com/file/d/19WCDjaobT3m-eWHvbsc27Vnz8cUjDepJ/view",
  },
  {
    keyword:
      "DSG-F-41_Issue 02_Rev.00_15-01-2022_Design Calculation sheet for Dual Plate Check Valve.xlsx",
    link: "https://docs.google.com/spreadsheets/d/1IwnmZpBU-3DTTH9kLYkwXgCNxTll02Tk/edit#gid=1235277284",
  },
  {
    keyword:
      "DSG-F-42_Issue 01_Rev.01_02-07-2025_Design Calculation sheet for Concentric Butterfly Valve.xlsx",
    link: "https://drive.google.com/file/d/1kLqQfOgsBSJ8Udxt71-8BWr_aJyj1-iw/view",
  },
  {
    keyword:
      "DSG-F-43_Issue 01_Rev.00_01-02-2021_Design Calculation sheet for Double offset Butterfly Valve.xlsx",
    link: "https://drive.google.com/file/d/1A93NDPYZFcW1oeajwJomwOzojbEmehy5/view?usp=sharing",
  },
  {
    keyword:
      "DSG-F-44_Issue 02_Rev.00_15-01-2022_Design Calculation sheet for Triple offset Butterfly Valve.xlsx",
    link: "https://drive.google.com/file/d/1gPz4eobPlHi7xLjnSG67E4bwo0yoRs2P/view",
  },
  {
    keyword:
      "DSG-F-45_Issue 01_Rev.01_06-03-2024_Design Calculation sheet for Axial Flow Check Valve.xlxs",
    link: "https://drive.google.com/file/d/1cjdODd99c3hjl1z3NBtmbOl4vH3TbnRA/view",
  },
  {
    keyword:
      "DSG-F-46 Issue 01 Rev.00 01-03-2021_Checklist for Inspection of Electrical Actuated Valves Integration & Operation.xlxs",
    link: "https://drive.google.com/file/d/1Lf8bi5O6Iw6EPtsfMgEC_HAX7q56p9nE/view?usp=sharing",
  },
  {
    keyword:
      "DSG-F-47 Issue 01 Rev.00 01-03-2021_Checklist for Inspection of Pneumatic Actuated Valves Integration & Operation.xlxs",
    link: "https://drive.google.com/file/d/1AMNRtCgmy5hsDQHLa0SA_pSpq66BHqv4/view?usp=sharing",
  },
  {
    keyword:
      "DSG-F-48_Issue02_Rev.00_22-Mar-2022_Equipment definition & design parameters.xls",
    link: "https://drive.google.com/file/d/11K6zSauYui8kwGdqNF_brnT6KAGgR1Ct/view",
  },
  {
    keyword:
      "QAD-P-01_Issue-02_Rev. 02_05-April-2024_Inspection, Testing & Verification.pdf",
    link: "https://drive.google.com/file/d/1v5McFDOG1qUvQ25vNXXt-_WKADeRn7ea/view",
  },
  {
    keyword:
      "QAD-P-02_Issue-02_Rev. 05_25-April-2025_Verification of Purchased Products & Activities.pdf",
    link: "https://drive.google.com/file/d/1Q_qEE9ffti6jtHpHhOh0HTEfSEArBFtY/view",
  },
  {
    keyword:
      "QAD-P-03 Issue-02 Rev. 04 07-Mar-2025- Identification and Traceability Procedure.pdf",
    link: "https://drive.google.com/file/d/1MAMsm1TZNKoYZS50BUVCEd07-sR0RIU5/view",
  },
  {
    keyword:
      "QAD-P-04_Issue-02_Rev. 02_05-April-2024_Product Status or Test Status.pdf",
    link: "https://drive.google.com/file/d/1c2PKWCuCP_h8RDuT0C94jYec6m9bBEpd/view",
  },
  {
    keyword:
      "QAD-P-05_Issue-02_Rev. 06_07-Sep-2024_Validation of Processes.pdf",
    link: "https://drive.google.com/file/d/1nomqyml2Nmj9XhvBbK8Y0-hGdonolnda/view",
  },
  {
    keyword: "QAD-P-06_Issue-02_Rev. 03_05-April-2024_Product Release.pdf",
    link: "https://drive.google.com/file/d/1ZsBFkZDP0AUvU7M3xXAC-WK-Hw6fqLZM/view",
  },
  {
    keyword:
      "QAD-P-07_Issue-02_Rev. 02_05-April-2024_Control of Testing, Measuring, Monitoring & Detection Equipments.pdf",
    link: "https://drive.google.com/file/d/1RjNmrWZDY784qTsK4kesZv6BCWzI_3LI/view",
  },
  {
    keyword:
      "QAD-P-08_Issue-02_Rev. 02_05-April-2024_Control of Non-Conforming Products.pdf",
    link: "https://drive.google.com/file/d/1zgWJRtj_8ILoOtW4Z-pFew1tsEujlvSv/view",
  },
  {
    keyword:
      "QAD-P-09_Issue-02_Rev. 02_05-April-2024_Use of API Monogram by Licensee.pdf",
    link: "https://drive.google.com/file/d/1ACf9MRty6iVUH-7Z4T_7XjvxTr_kfkU8/view",
  },
  {
    keyword: "QAD-O-01_Issue 02_Rev. 02_02-Jan.-2025_Objective Quality.pdf",
    link: "https://drive.google.com/file/d/1PWWK2GZwMO4KYQ2VScqF8Fzb5mG8hpqM/view",
  },
  {
    keyword:
      "QAD-C-01 Issue-02 Rev. 01_01-April-2024_Chart on Acceptance Criteria for Testing, Measuring, Monitoring & Detection Equipments.pdf",
    link: "https://drive.google.com/file/d/13NbdBJTtmKiSIvzoH-4CXQPdv2LHsh6-/view",
  },
  {
    keyword:
      "QAD-C-02 Issue-02 Rev. 00 01-Jan-2018_Organogram for Quality Assurance",
    link: "https://drive.google.com/file/d/1tnKXa_Gao6-dRts9M7km5NsVMnPKrF1W/view",
  },
  {
    keyword:
      "QAD-C-03 Issue 01 Rev. 03 25-June-2025_Critical Products, Component & Activity Verification Plan (CPCV).pdf",
    link: "https://drive.google.com/file/d/1v0yE6ZMfe84M83wK3rAxkvjJkKd5SM9h/view",
  },
  {
    keyword:
      "QAD-W-01_Issue-02_Rev. 05_29-Jan-2025_Functional or Pressure Testing - Dual Plate Check Valve.pdf",
    link: "https://drive.google.com/file/d/14S91DJniph4a-uXLmHIa8sra6bqCBE2j/view",
  },
  {
    keyword:
      "QAD-W-02_Issue-02_Rev. 03_01-April-2023_Functional or Pressure Testing - Butterfly Valve.pdf",
    link: "https://drive.google.com/file/d/1qqTlmyDAiqONlzqpG1NX6d_C-8N9BONV/view",
  },
  {
    keyword:
      "QAD-W-03 Issue-02 Rev.00 01-Jan-2018_Functional or Pressure Testing - Balancing Valve G.M.pdf",
    link: "https://drive.google.com/file/d/1sgRwVw6P-LJC5TfEc3va8YRcS1BTIQbF/view",
  },
  {
    keyword:
      "QAD-W-04 Issue-No. 02 Rev. 02 05-Apr-2025_Blasting & Painting on Valves.pdf",
    link: "https://drive.google.com/file/d/1IefdgDCmhwaNKYADUtMLAm89sn8P7K0G/view",
  },
  {
    keyword: "QAD-W-05_Issue 02_Rev. 04_26-Sep.-2023_Radiography Procedure.pdf",
    link: "https://drive.google.com/file/d/1u8dgViwpTIc55IIcVusEqqlEM-dQU_sf/view",
  },
  {
    keyword: "QAD-W-06__Issue 02_Rev. 04_26-Sep.-2023_UT procedure.pdf",
    link: "https://drive.google.com/file/d/18Vt57QNMhzywu_0XwiOJLIAYK619KG2P/view",
  },
  {
    keyword: "QAD-W-07_Issue 02_Rev. 04_27-Sep.-2023_LPT Procedure.pdf",
    link: "https://drive.google.com/file/d/1BpWezbHtfP70rAG1l5chADD1d86p3C__/view",
  },
  {
    keyword:
      "QAD-W-08_Issue 02_Rev. 03_27-Sep.-2023_Magnetic Particle Testing.pdf",
    link: "https://drive.google.com/file/d/1RrbsE0Zev8_OH-6oGdyRwCGPMBVp2VIv/view",
  },
  {
    keyword:
      "QAD-W-09 Issue-02 Rev.01 05-May-2020_Positive Material Identification.pdf",
    link: "https://drive.google.com/file/d/16Jz_xmlHtSZwIhBeYQRMaGZdopH6eABg/view",
  },
  {
    keyword: "QAD-W-10_Issue 02_Rev. 01_01-April-2023_Rubber Testing.pdf",
    link: "https://drive.google.com/file/d/1psC_MLtVqw75L-gvaokiQevo49CTwNTy/view",
  },
  {
    keyword:
      "QAD-W-12 Issue-02 Rev.01 05-May-2020_Cleaning Procedure of Valves for Oxygen Service.pdf",
    link: "https://drive.google.com/file/d/1BK-0r_g0ccZ1AOtZxUy2Cn_r-gmo9WTB/view",
  },
  {
    keyword:
      "QAD-W-13 Issue-02 Rev.01 05-May-2020_Cryogenic or Low Temperature Testing.pdf",
    link: "https://drive.google.com/file/d/1rb3NghsNMrPYgrRH8OpWbiPbdgrjSu4l/view",
  },
  {
    keyword:
      "QAD-W-14 Issue-02 Rev. 02 01-Nov.-2022_Fugitive Emission Test for Type Test & Production Test of Butterfly Valves Using Helium Gas.pdf",
    link: "https://drive.google.com/file/d/15QMsUxAwPH3iUlbjFCHdWid756sI5MW4/view",
  },
  {
    keyword:
      "QAD-W-15_Issue 02 Rev. 00 01-Sep-2021_Marking for “CE” Marking Valves.pdf",
    link: "https://drive.google.com/file/d/1DV9p4-3Dgh2QtPM_VuC7RQriXsInIM67/view",
  },
  {
    keyword:
      "QAD-W-16 Issue-02 Rev.01 05-June-2020_Casting for “CE” Marking Valves.pdf",
    link: "https://drive.google.com/file/d/1IPAGZ9GhQpyJVKmwyExW7Qx7dvf9rVL9/view",
  },
  {
    keyword:
      "QAD-W-17A_Issue 02_Rev. 02_01-April-2024_Marking for API 594 & API 609 Valves Valves for Advance Valve Global LLP.pdf",
    link: "https://drive.google.com/file/d/1-Vxu-qaKFqNzQjREpdxMexS5qExnj1Md/view",
  },
  {
    keyword:
      "QAD-W-17B_Issue 02_Rev. 05_25-Sep.-2023_Marking of API 6D and API 609 Valves for Advance Valves Pvt. Ltd. Greater Noida.pdf",
    link: "https://drive.google.com/file/d/1dX5BuUbc4XizwoFZf7ky5SRCf9ILRmbx/view",
  },
  {
    keyword:
      "QAD-W-18 Issue-02 Rev.03 25-March-2021_Heat Treatment of Springs For Check Valves.pdf",
    link: "https://drive.google.com/file/d/1RRK9DsAFb1L_n-Uk9EMC4gdMsPHhXCj-/view",
  },
  {
    keyword:
      "QAD-W-19 Issue-02 Rev.00 01-Jan-2018_Heat Treatment of Valve Components.pdf",
    link: "https://drive.google.com/file/d/1u2Mp94dLd6tegw8YXNiGLItUCKQsXL6q/view",
  },
  {
    keyword: "QAD-W-20 Issue-02 Rev.01 25-May-2020_Hardness Testing.pdf",
    link: "https://drive.google.com/file/d/1c6rwDqaFLPGxsLgi3Sqs4y8uGNm-vY3Z/view",
  },
  {
    keyword:
      "QAD-W-22 Issue-02 Rev.01 25-May-2020_Dry Cycle Testing procedure For Springs Of Dual Plate Check Valve.pdf",
    link: "https://drive.google.com/file/d/1gwHLM6IlMrz6_AZECM1qrzABuzH8KoU1/view",
  },
  {
    keyword: "QAD-W-23 Issue-02 Rev. 02 02-Jan.-2023_Colour Coding.pdf",
    link: "https://drive.google.com/file/d/1XX4hGi4C4Ucrd14OayOaZKHxteMSvYxu/view",
  },
  {
    keyword:
      "QAD-W-24 Issue-02 Rev. 01 01-Feb.-2021_Functional/Pressure Testing Procedure-Balancing Valves-Flanged.pdf",
    link: "https://drive.google.com/file/d/1Q-pLyx4MbfIDBTPN-25N1xINsRCIA2-t/view",
  },
  {
    keyword:
      "QAD-W-25 Issue-02 Rev.00 01-Jan-2018_EPDM Coating Procedure on Disc.pdf",
    link: "https://drive.google.com/file/d/1AdvYy4oO4ZexeJ52fckyIz2MbE3etMmm/view",
  },
  {
    keyword:
      "QAD-W-26 Issue-02 Rev.00 01-Jan-2018_Testing Procedure For Validation for ENP Coating.pdf",
    link: "https://drive.google.com/file/d/15s5yWkbiyp3aA_ry5qPKVmf6jvCx666N/view",
  },
  {
    keyword:
      "QAD-W-27 Issue-02 Rev.02 01-Sep-2022_ Testing Requirements for concentric Butterfly Valves for UL Marks.pdf",
    link: "https://drive.google.com/file/d/1GM9tdxwRm1J2h7HW5LC5o9daKCRwE0-n/view",
  },
  {
    keyword:
      "QAD-W-28 Issue-02 Rev.01 05-May-2020_Salt Contamination Procedure.pdf",
    link: "https://drive.google.com/file/d/1iF1ufySbLEpG7J0hBdAGOZRKY7PaxJ4p/view",
  },
  {
    keyword:
      "QAD-W-29_Issue-02_Rev. 02_01-Aug.-2023 Triple Offset Butterfly Valve (TOV) Safety Manual.pdf",
    link: "https://drive.google.com/file/d/1oSLkJ4o-_ktQNpoM_1YYpmVMa1qOGgR8/view",
  },
  {
    keyword: "QAD-W-30_Issue02_Rev05_29-Jan-2025_Written Practice for NDT.pdf",
    link: "https://drive.google.com/file/d/1sOXgUyfOMjBxqfe9pzU24tV5GsPqNros/view",
  },
  {
    keyword: "QAD-W-31_Issue-02_Rev. 03_28-Sep.-2023_VT PROCEDURE.pdf",
    link: "https://drive.google.com/file/d/1fQK40vxxXalqDHz4nAldqhytuf22jnve/view",
  },
  {
    keyword:
      "QAD-W-32 Issue-02 Rev.00 01-Jan-2018_Post Weld Heat Treatment of Valve Components.pdf",
    link: "https://drive.google.com/file/d/1weNaYjNBvaVCWbZXFGfaJwkQ-3tDFuKU/view",
  },
  {
    keyword: "QAD-W-37 Issue-02 Rev.00 01-Jan-2018_Repair Procedure.pdf",
    link: "https://drive.google.com/file/d/1dTiA5prims22FHfVo0W0eumtRhREY4gJ/view",
  },
  {
    keyword:
      "QAD-W-38 Issue-02 Rev.00 01-Jan-2018_Welding Material Handling Procedure.pdf",
    link: "https://drive.google.com/file/d/1F-9rXuV0oneH4x7yqpxUfTb6N5HDhwMB/view",
  },
  {
    keyword: "QAD-W-39 Issue-02 Rev.00 01-Jan-2018_Pickling & Passivation.pdf",
    link: "https://drive.google.com/file/d/1iqSdryLeevoiGD4jNBUUmPhPz4gFAe04/view",
  },
  {
    keyword:
      "QAD-W-40 Issue-02 Rev.00 01-Jan-2018_Cleaning Procedure of Valves for Air Separation Unit (ASU).pdf",
    link: "https://drive.google.com/file/d/1-zR9up5SAnN9X_NUdKXH_UwSABE4_hVG/view",
  },
  {
    keyword:
      "QAD-W-41 Issue-02 Rev.01 05-May-2020_Casting Inspection Procedure.pdf",
    link: "https://drive.google.com/file/d/1Ed1G4TxMjm00zi2S1heD6RUp59gvAc4q/view",
  },
  {
    keyword:
      "QAD-W-42 Issue-02 Rev. 02 01-April-2024_Calibration Procedure.pdf",
    link: "https://drive.google.com/file/d/1wIhSLvf010CdmEV0NSaJGt_jzVFT1E-I/view",
  },
  {
    keyword:
      "QAD-W-43_Issue-02_Rev. 02_25-Sep.-2023_Procedure for Qalification Heat Treating Equipment (Furnace).pdf",
    link: "https://drive.google.com/file/d/15WbfYBGPfonWiWWEqV0e8-aBt6PRtGEi/view",
  },
  {
    keyword:
      "QAD-W-44_Issue-02_Rev. 03_29-Jan-2025_Purchase Technical Requirements for API 6D Compliant Valve Components.pdf",
    link: "https://drive.google.com/file/d/1s-leEe8ysLm4GDfaZ9B_dZVaoHxRfDp2/view",
  },
  {
    keyword:
      "QAD-W-45 Issue-02 Rev.00 01-Jan-2018_Written Practice For Documented Program For Training And Certification of Welding Inspection Personnel.pdf",
    link: "https://drive.google.com/file/d/1sIib4usrNb2UlKFhpdSJbTBkYhfUVlei/view",
  },
  {
    keyword:
      "QAD-W-46_Issue-02_Rev. 02_01-April-2024 Procedure for Unique ID of Instruments.pdf",
    link: "https://drive.google.com/file/d/1loWHx9IL3MYaVJdpvIkVKH39qNCUP2ln/view",
  },
  {
    keyword:
      "QAD-W-47_Issue-01_Rev-01_01-May-2023_Butterfly Valve Fire Test Valve Qualification and Test Report Checklist.pdf",
    link: "https://drive.google.com/file/d/1lnsTGdMZfvEppKF7Eory6a0I8RdaZVAI/view",
  },
  {
    keyword:
      "QAD-W-48 Issue-01 Rev. 00 01-Jan.-2021 Valve Qualification Procedure as per API RP 59pdf",
    link: "https://drive.google.com/file/d/1qeG-4wU3KW7qEY1m-JEYajJ_sNlhPcqY/view",
  },
  {
    keyword:
      "QAD-W-49_Issue-01_Rev. 04_29-Jan-2025_Functional or Pressure Testing - Axial Flow Check Valve.pdf",
    link: "https://drive.google.com/file/d/1diQ30oueg4hga0ITbWvYdfnE8zJqgEvB/view",
  },
  {
    keyword:
      "QAD-W-50 Issue 01 Rev. 00 01-Feb.-2021_Functional-Pressure Testing of Pressure Indepent Control Valve.pdf",
    link: "https://drive.google.com/file/d/1ZBKMqWMrO14BgIxfPomlIYFWNv-FScqk/view",
  },
  {
    keyword:
      "QAD-W-51 Issue 01 Rev. 00 19-April-2021_Fire Test Valve API 6FA.pdf",
    link: "https://drive.google.com/file/d/1KH9Rruaf2qh3ZkL4UrL5nzfz9whjfUnn/view",
  },
  {
    keyword:
      "QAD-W-52_Issue01_Rev.00_01-May-2023_Periodical Verification of Test Bar Sample for Castings.pdf",
    link: "https://drive.google.com/file/d/1qBZKUBAvxsUNBVBudu2Q84txi0ZrCY8V/view",
  },
  {
    keyword:
      "QAD-F-01_Issue-02 Rev.02_01-Jan-2020_Incoming Inspection Report.xlsx",
    link: "https://drive.google.com/file/d/1KwIhJdbJQWEX0mJ21ApDxmfoWV_FXY91/view",
  },
  {
    keyword:
      "QAD-F-02_Issue-02 _Rev.02_01-June-2024_Non Conformance Report and Corrective Action Form",
    link: "https://drive.google.com/file/d/1rUuSQFKApam3Ys77MP1lXv0PaKVQa5FM/view",
  },
  {
    keyword:
      "QAD-F-03_Issue-02_Rev. 03_01-April-2024_Liquid Penetrant Examination.docx",
    link: "https://drive.google.com/file/d/1S0tTToaJWHYKjqR1Fxx9tph1Zo0Tewsn/view",
  },
  {
    keyword:
      "QAD-F-04 Issue-02 Rev.01 01-Oct-2021_Magnetic Particle Examination.docx",
    link: "https://drive.google.com/file/d/1pC_MFvWuAzVpUhn3nOlSDacAZBTIHc24/view",
  },
  {
    keyword: "QAD-F-05 Issue-02 Rev.00 01-Jan-2018_PMI Report.docx",
    link: "https://drive.google.com/file/d/14cPcr64HqHzkudbAyPi0Q34QCqVVdbd2/view",
  },
  {
    keyword:
      "QAD-F-06 Issue-02 Rev.01 10-June-2019_Dual Plate Check Valve TC.pdf",
    link: "https://drive.google.com/file/d/1qaifd8-RUIXVBrIK7eRcD6fPV1U2FTC1/view",
  },
  {
    keyword:
      "QAD-F-07 Issue-02 Rev.00 01-Jan-2018_ Butterfly Concentric Valve TC.pdf",
    link: "https://drive.google.com/file/d/1I1HZjDM98xKuWd9ljppTSaPe3vE-4jFY/view",
  },
  {
    keyword:
      "QAD-F-08 Issue-02 Rev.00 01-Jan-2018_Butterfly Double Eccentric Valve TC.pdf",
    link: "https://drive.google.com/file/d/10OMpaU0GSBQGYX2kZCiAQ4Gm-tewqKx1/view",
  },
  {
    keyword:
      "QAD-F-09 Issue-02 Rev.00 01-Jan-2018_Butterfly Triple Eccentric Valve TC.pdf",
    link: "https://drive.google.com/file/d/1vAEacHwMTFjMWqAMefIjM6HTOjnkzhuw/view",
  },
  {
    keyword:
      "QAD-F-10 Issue-02 Rev.00 01-Jan-2018_Welding Procedure Specification.docx.doc",
    link: "https://drive.google.com/file/d/1cgHkcJGM80y1_QI2k2nqS5jveX6EQYhV/view",
  },
  {
    keyword:
      "QAD-F-11 Issue-02 Rev.01 20-May-2019_Procedure Qualification Record.doc",
    link: "https://drive.google.com/file/d/11KIrNhP6zCGY1tZg_qdjxqiLjWgbBP0y/view",
  },
  {
    keyword:
      "QAD-F-12 Issue-02 Rev.00 01-Jan-2018_QW-484A Suggested Format for Welder Performance Qualification (WPQ).docx",
    link: "https://drive.google.com/file/d/1oBDzsdJI_1dblIP7f3uiwc4nOcIR6dqr/view",
  },
  {
    keyword:
      "QAD-F-13 Issue-02 Rev.00 01-Jan-2018_Cast Iron or SG Iron Balancing Valve TC.pdf.xls",
    link: "https://drive.google.com/file/d/1WivYiW8SiAl1xBNrrImB-dRNeqE_AzXZ/view",
  },
  {
    keyword:
      "QAD-F-14 Issue-02 Rev.00 01-Jan-2018_Product Consession Release Form.doc",
    link: "https://drive.google.com/file/d/1iXH_hTcdoREGmxeVKpjBgf95eLXuCzDO/view",
  },
  {
    keyword: "QAD-F-15 Issue-02 Rev.00 01-Jan-2018_Rejection Report.docx",
    link: "https://drive.google.com/file/d/1XjZeBPZ7jDSXn-ChrGw41Vto1ilBBCbf/view",
  },
  {
    keyword:
      "QAD-F-16 Issue 03 Rev. 00 01-June-2024_Non Conformity Product Register.xlsx",
    link: "https://drive.google.com/file/d/12BQA7gvFivo_LTbC8yWgKq0b2fA9ph8z/view",
  },
  {
    keyword:
      "QAD-F-17 Issue-02 Rev.00 01-Jan-2018_Surface Preparation, Painting & Marking Report.docx",
    link: "https://drive.google.com/file/d/15acSmJhuxTGE23ZGhHl_7ptL8yGy9ryE/view",
  },
  {
    keyword:
      "QAD-F-18 Issue-02 Rev.00 01-Jan-2018_Valve Packing Check List.xls.xls",
    link: "https://drive.google.com/file/d/1m2afFffzVDnKuVZmtr65m4fo572vxD3x/view",
  },
  {
    keyword:
      "QAD-F-19 Issue-02 Rev.01 01-June-2020_Finish Valve Inspection Report or Product Release Form.pdf",
    link: "https://drive.google.com/file/d/19O2MY_RZLYNWhKqeSvlO_e8KcYiph6KZ/view",
  },
  {
    keyword:
      "QAD-F-20_Issue-03_Rev. 01_05-Dec.-2024_Inspection & Test Plan.xls",
    link: "https://drive.google.com/file/d/1udiqkGY42hJHubdVOnhFVVD8Xt6SdpBE/view",
  },
  {
    keyword:
      "QAD-F-21 Issue-02 Rev. 02 01-Oct.-2021_Name Plate Details for CE Marking Valves.xls",
    link: "https://drive.google.com/file/d/1U4pcwNQskNY0YrhG1lEcj4NPopL5-01J/view",
  },
  {
    keyword:
      "QAD-F-22 Issue-02 Rev. 01 01-April-2023_Inspection Notification Format.doc",
    link: "https://docs.google.com/document/d/1ygBNl4qbEluyRJ7RyBke_qyRxIKtvq6p/edit",
  },
  {
    keyword:
      "QAD-F-23_Issue-02_Rev. 02_01-April-2024_Master List of Testing, Measuring, Monitoring & Detection Equipements.xls",
    link: "https://drive.google.com/file/d/11FdwWD211sWekDblUiZrXAM_jM-cg2Uw/view",
  },
  {
    keyword:
      "QAD-F-24 Issue-02 Rev.00 01- Jan- 2018_Cryogenic or Low Temperature Test Record.xls",
    link: "https://drive.google.com/file/d/1wl_I_iHYKJ6xabx982fwrbJabbxGHtgS/view",
  },
  {
    keyword:
      "QAD-F-25 Issue-02 Rev.00 01-Jan-2018_Dimensional & Visual Examination Report for Dual Plate Check Valve.doc",
    link: "https://drive.google.com/file/d/1IQlP1Um-fQaGk23LGUvGov681Ult_GCZ/view",
  },
  {
    keyword:
      "QAD-F-26 Issue-02 Rev.00 01-Jan-2018_Offer List of Valves for Final Inspection (EN 10204, Type 1).docx",
    link: "https://drive.google.com/file/d/1tucNyHtGjZCs5qrXridCqmn1YDP7_Pwp/view",
  },
  {
    keyword:
      "QAD-F-27 Issue-02 Rev.01 01-Sep-2021_Offer List of Valves for Pressure Testing (EN 10204, Type 1).docx",
    link: "https://drive.google.com/file/d/1TMXetkGWsTta3p4bzm0qQBI2YbS9-hb4/view",
  },
  {
    keyword:
      "QAD-F-28 Issue-02 Rev.00 01-Jan-2018_Pickling & Passivation Report.xls",
    link: "https://drive.google.com/file/d/10loNybOez_R6IWba6FPW3mKAkbwbPDj2/view",
  },
  {
    keyword:
      "QAD-F-29_Issue-02_Rev.01_10-June-2019_Name Plate Marking for API 6D.xlsx",
    link: "https://drive.google.com/file/d/1H6DGF_xJM4T6215PQGyCc0U00sFIz9by/view?usp=sharing",
  },
  {
    keyword:
      "QAD-F-30 Issue-02 Rev.00 01-Jan-2018_Vendor Visit Report Format.docx",
    link: "https://drive.google.com/file/d/1VBEFEySa88yHcEhiLlQ40Hmb9v4cLDoR/view",
  },
  {
    keyword:
      "QAD-F-31 Issue-02 Rev.00 01-Jan-2018_Ultrasonic Testing Report.xlsx",
    link: "https://drive.google.com/file/d/12rmmzN1mCvS-zlhpE-De3YR2OSz7ymXa/view",
  },
  {
    keyword:
      "QAD-F-32 Issue-02 Rev.00 01-Jan-2018_List of Inspectors & their NDT Certifications.xlsx",
    link: "https://drive.google.com/file/d/1WK_evPHF3k4uElFy7YS_5O_6k8b5l4nm/view",
  },
  {
    keyword:
      "QAD-F-33 Issue-02 Rev.00 01-Jan-2018_ Product Concession Release Register.xlsx",
    link: "https://drive.google.com/file/d/1g66wRjSEMFCYUEKI3RfkQIGVyZNzarZ_/view",
  },
  {
    keyword:
      "QAD-F-34 Issue-02 Rev.00 01-Jan-2018_List of Approved WPS,PQR&WPQ.xls",
    link: "https://drive.google.com/file/d/13Tf1FaGitM4sIi1r1LUUbZQ3UOjuDObt/view",
  },
  {
    keyword:
      "QAD-F-35 Issue-02 Rev.00 01-Jan-2018_Surface Preparation & Salt Contamination Test Report.xls",
    link: "https://drive.google.com/file/d/1YKAaM8m2xQKS0Z1kk6EAcSPh3q7wsPZB/view",
  },
  {
    keyword:
      "QAD-F-36 Issue-02 Rev.00 01-Jan-2018_Index for Final Documentation.doc",
    link: "https://drive.google.com/file/d/1mgP5R6g4B6I4Wcha6LWuIs0i3yEbROtK/view",
  },
  {
    keyword:
      "QAD-F-37 Issue-02 Rev.01 01-Jan-2022_Test cum Guarantee Certificates.docx",
    link: "https://drive.google.com/file/d/1P-bVqVY1j3MLwmxUqgIP1nN8fYv27sGj/view",
  },
  {
    keyword:
      "QAD-F-38 Issue-02 Rev.01 01-Feb.-2022_Practical Examination form form Liquid Penetrant Examination.docx",
    link: "https://drive.google.com/file/d/1frmXMSoswrtVIGJYAXd8zESkrRILLG29/view",
  },
  {
    keyword:
      "QAD-F-39 Issue-02 Rev.01 01-Feb.-2022_Practicle Examination form for Visual Testing.docx",
    link: "https://drive.google.com/file/d/1CJFZz6TkPp6A6CRd4hK4ibTFidWlEAEy/view",
  },
  {
    keyword:
      "QAD-F-40 Issue-02 Rev.00 01-Jan-2018_Name Plate Details for API 594 Dual Plate Check Valve.xlsx",
    link: "https://drive.google.com/file/d/1y5Q84ZqL_u51x5oFXSBgqCx6-9fxUkbu/view",
  },
  {
    keyword:
      "QAD-F-41 Isuse-02 Rev. 01 01-Feb.-2022_Pracrtical Examination form for Magnetic Particle Examination.doc",
    link: "https://drive.google.com/file/d/1vEwiik_lsOhcGsm0DhwnplbZd_irlFKB/view",
  },
  {
    keyword:
      "QAD-F-42 Issue-02 Rev.00 01-Jan-2018_Practical Examination form for Welding.doc",
    link: "https://drive.google.com/file/d/1DFb5w6MFX2MJoElsFj22kpIW-ZnTRlLQ/view",
  },
  {
    keyword:
      "QAD-F-43 Issue-02 Rev.01 01-Feb.-2022_Practical Examination form for Ultrasonic Testing.docx",
    link: "https://drive.google.com/file/d/1Ss6nVwMVXhMyLJ9GkpECYR31jBMWXVcP/view",
  },
  {
    keyword:
      "QAD-F-44 Issue-02 Rev.00 01-Jan-2018_Practical Examination Form for Butterfly Valve Testing.doc",
    link: "https://drive.google.com/file/d/12LJBEyz1XIjv0NjNIKocBK5Hv91DGkKQ/view",
  },
  {
    keyword:
      "QAD-F-45 Issue-02 Rev. 01 30-Dec.-2022_Practical Examination Form for Check Valves Testing.docx",
    link: "https://drive.google.com/file/d/1BwTms05BWjsR-0iXgAlKsTN51ggM7ODN/view",
  },
  {
    keyword:
      "QAD-F-47 Issue-02 Rev.01 05-May-2020_Hydro Test Parameters Check List.xlsx",
    link: "https://drive.google.com/file/d/1X2Fi6Av61WmBy9H9K7moGsF2CHVoawrS/view",
  },
  {
    keyword:
      "QAD-F-48 Issue-02 Rev.00 01-Jan-2018_Process Check List - Dye Penetrant Test.xlsx",
    link: "https://drive.google.com/file/d/1kF27lKpRI5K4T3hHl7nACPeizv-L_-jO/view",
  },
  {
    keyword:
      "QAD-F-49 Issue-02 Rev.00 01-Jan-2018_Process Check List - Magnetic Particle Testing.xlsx",
    link: "https://drive.google.com/file/d/1sFsVEbtiNZadkSwu1q6j4lT2ICKTL4Wz/view",
  },
  {
    keyword:
      "QAD-F-50_Issue-02_Rev. 01_01-Feb.-20_Dye Penetrant Log Register.xlsx",
    link: "https://drive.google.com/file/d/10gb-9sV31A4JUtuz6iz51WaksHj_mbZk/view",
  },
  {
    keyword:
      "QAD-F-51 Issue-02 Rev. 01 01-Feb.-2023_Magnetic Particle Log Register.xlsx",
    link: "https://drive.google.com/file/d/19wpkprIU9dp_Dj0v3Ycet46cvOZxpDku/view",
  },
  {
    keyword:
      "QAD-F-52 Issue-02 Rev. 00 01-Jan.-2018 Process Check List- Ultrasonic Testing",
    link: "https://drive.google.com/file/d/1zSzzJOunWbadA0xI6DihFpJgexdsWDSV/view?usp=sharing",
  },
  {
    keyword:
      "QAD-F-53 Issue 03 Rev. 00 01-Nov.-2022_MT PROCEDURE VALIDATION REPORT.docx",
    link: "https://drive.google.com/file/d/1OvFSTum-P6mJ3420AaCb6tga4CaWMePB/view",
  },
  {
    keyword:
      "QAD-F-54 Issue 03 Rev. 00 01-Nov.-2022_PT PROCEDURE VALIDATION REPORT.docx",
    link: "https://drive.google.com/file/d/1_tMpj1_vI1kgIcXcfuJ-oudJGLJrET6i/view",
  },
  {
    keyword: "QAD-F-55 Issue-02 Rev.01 10-Jul-2023_Valve Traveller Sheet.xlsx",
    link: "https://docs.google.com/spreadsheets/d/1b_KcqxADc1FuukBhhD8A7UVBKHxlFEfD/edit#gid=1125303073",
  },
  {
    keyword:
      "QAD-F-56 Issue-02 Rev.01 01-Feb.-2022_Practical Examination form for Radiography Examination.docx",
    link: "https://drive.google.com/file/d/1uJF4hcMiVSZkid7eY05N1V6cGIBiroDK/view",
  },
  {
    keyword:
      "QAD-F-57 Issue-02 Rev.01 01-Oct-2021_Name Plate Details for API 609 Butter Fly Valves.xlsx",
    link: "https://drive.google.com/file/d/1Gw8Iwdm8C2EQuRtofjKxatuAIUv4K5Si/view",
  },
  {
    keyword:
      "QAD-F-58 Issue-02 Rev.00 01-Jan-2018_Dimensional Visual Examination Report for BT-BD-BF.doc",
    link: "https://drive.google.com/file/d/1EB5XUCxbDID3irX1LGeeP1vHA9CnQ2H8/view",
  },
  {
    keyword:
      "QAD-F-59_Issue-02_Rev. 04_01-April-2024_Antistatic Report (EN 10204, TYPE 1).xlsx",
    link: "https://drive.google.com/file/d/1Whcs_UnbASbKmbN5zXcHocl8tY02__ZD/view",
  },
  {
    keyword:
      "QAD-F-60A Issue-02 Rev. 01 01-April-2023_Certificate of Compliance - Butterfly Valves",
    link: "https://docs.google.com/document/d/1aAfiCTUilylWL3yxqMo0w9q3qyTTRD6F/edit",
  },
  {
    keyword:
      "QAD-F-60B Issue-02 Rev. 02 01-April-2023_Certificate of Compliance -Dual Plate Check Valve.docx",
    link: "https://docs.google.com/document/d/1shMhoKsFGcxtIAaXgbwILvWhnviulTjP/edit",
  },
  {
    keyword:
      "QAD-F-61 Issue-02 Rev. 01 01-April-2022_Declaration of Conformity for CE Valves.docx",
    link: "https://drive.google.com/file/d/15Hs1p4f6n92mZ7h_tT4EYXjfgeqAJAc7/view",
  },
  {
    keyword:
      "QAD-F-62 Issue-02 Rev.00 01-Jan-2018_Welding Defectogram Form.docx",
    link: "https://drive.google.com/file/d/12SGeOb5DcRr_Z3b-Z7bHkMxsVN4NJMKE/view",
  },
  {
    keyword: "QAD-F-63 Issue-01 Rev.00 01-Jan-2020 Dry Cycle Test Report.doc",
    link: "https://drive.google.com/file/d/1MNavdsCQj7062BVM5OlYBZAXg-qtv7jv/view",
  },
  {
    keyword:
      "QAD-F-64 Issue-02 Rev.02 06-Feb.-2022_Weld Overlay Hard facing Weld Visual, PT, PMI & Hardness Test Report.xls",
    link: "https://drive.google.com/file/d/1XIFJxYW9WySUkLXATeEBg_jwNow8ohgu/view",
  },
  {
    keyword:
      "QAD-F-65_Issue-01_Rev. 01_10-Apr-2023_Calibration of Welding Machine for Wire Feed Speed & Travel Speed",
    link: "https://docs.google.com/document/d/1rJkLG7afXiONcbNAhjNnYTVL7s57_X6K/edit",
  },
  {
    keyword: "QAD-F-65A Issue-01 Rev. 00 16-May-2019 Welding Consumable Slip",
    link: "https://drive.google.com/file/d/1HbRUJIoOlGwmfvuygm87cCsZOhtCOsWf/view?usp=sharing",
  },
  {
    keyword:
      "QAD-F-66 Issue-01 Rev. 00 10-June-2019_Checklist for Verification of WPS",
    link: "https://drive.google.com/file/d/1YQ3cVJpOghZCCrp7J0ST4lpkObIedxAB/view?usp=sharing",
  },
  {
    keyword:
      "QAD-F-67 Issue-01 Rev. 00 18-July-2019_Checklist for Filing NDT & Welding Training Record",
    link: "https://drive.google.com/file/d/1RRleRCsjnNjShprmjKDsBxgf5PwYlpmB/view?usp=sharing",
  },
  {
    keyword:
      "QAD-F-68 Issue-01 Rev.01 07-April-2025_Hardness Thickness Report.xlsx",
    link: "https://drive.google.com/file/d/15jN5A0m08btV3pz6lwPtLMx0vZljeIyE/view",
  },
  {
    keyword:
      "QAD-F-69 Issue 01 Rev 00 01-June-2020 Process Check List - Inspection of Casting Marking (As per MSS-SP-25).xlsx",
    link: "https://drive.google.com/file/d/1SWPsJx66DKDAUAFKeys1pVgw6bj6DUAR/view",
  },
  {
    keyword:
      "QAD-F-70 Issue 02 Rev. 00 01-Nov.-2022_RT PROCEDURE VALIDATION REPORT.docx",
    link: "https://drive.google.com/file/d/1r__b1svJmtm_bahhLrmdGZiRfDOxUaB0/view",
  },
  {
    keyword:
      "QAD-F-71 Issue 02 Rev. 00 01-Nov.-2022_UT PROCEDURE VALIDATION REPORT.docx",
    link: "https://drive.google.com/file/d/19MrGJlfDWxaq5Z4AqNhUEnpQke4YWphR/view",
  },
  {
    keyword:
      "QAD-F-72 Issue 02 Rev. 00 01-Jan.-2020 Hydro-static & Pneumatic Test Report- Butterfly Valve.xls",
    link: "https://drive.google.com/file/d/1BYigMCrCefj5P5qbo4yBCTbewwZcw-MJ/view",
  },
  {
    keyword:
      "QAD-F-73 Issue 02 Rev. 00 01-Jan.-2020 Hydro-static & Pneumatic Test Report- Dual Plate Check Valve.xls",
    link: "https://drive.google.com/file/d/1PXQXS0Z2lm7TSy834O9umhZ8CC1_dYGD/view",
  },
  {
    keyword: "QAD-F-74 Issue 01 Rev. 00 05-May-2020 Oxygen Service Valve.doc",
    link: "https://drive.google.com/file/d/1AABP0FU67K5UyTAvI21_tll-kVswBJWu/view",
  },
  {
    keyword:
      "QAD-F-75 Issue-01 Rev. 00 25-Jan-2021_Hydro static & Pneumatic Test Report-Axial Flow Check Valve.xls",
    link: "https://drive.google.com/file/d/1b9-hnESGAwCTpZ71QiBMjKZfsnPUzRqQ/view",
  },
  {
    keyword: "QAD-F-76 Issue-01 Rev. 00 25-Jan.-2021_Axial Flow Check Valve TC",
    link: "https://drive.google.com/file/d/1vezE9frxe8g0K_wDRsrU0VWo6GNPWhIS/view",
  },
  {
    keyword:
      "QAD-F-77 Issue 02 Rev. 00 01-Feb.-2021 Balancing Valve Hydro-static Test Reports.xls",
    link: "https://drive.google.com/file/d/1YBrdfKwzcAfGZC9vJtLHtGktLwuLczDQ/view",
  },
  {
    keyword:
      "QAD-F-78 Issue 01 Rev. 00 01-March-2021_Oxygen Cleaning Valve Register- BT & DPCV.xls",
    link: "https://drive.google.com/file/d/1_-_HZ4b8gX3Kt1VdDVr3YvEyjWcTVg7T/view",
  },
  {
    keyword:
      "QAD-F-79 Issue-01 Rev. 00 01-March-2021 Daily Checklist for Cleaning of Oxygen Room.xls",
    link: "https://drive.google.com/file/d/1UIciU7B2um1_DlI1bnM1HmWfg8cBhwKt/view",
  },
  {
    keyword:
      "QAD-F-80 Issue 01 Rev. 00 01-March-2021_Welding Operator Performance Qualifications (WOPQ).doc",
    link: "https://drive.google.com/file/d/1YPUG6ABmmOz2C2BMyh8kacpSx_7nrggo/view",
  },
  {
    keyword:
      "QAD-F-81 Issue 02 Rev. 00 01-Nov.-2022_VT PROCEDURE VALIDATION REPORT.docx",
    link: "https://drive.google.com/file/d/1sxto5TJchZTy8XCZyChGnQyjHw127u7c/view",
  },
  {
    keyword:
      "QAD-F-82_Issue 01_Rev. 00_01-Dec.-2021 Heat Treatment and PWHT Log Book.xlsx",
    link: "https://drive.google.com/file/d/1bJN_lNPwovM6oDaxRW1_nwjSEoLa4-ne/view",
  },
  {
    keyword:
      "QAD-F-83 Issue-01 Rev-02 01-April-2023_Certificate of Compliance for API 6D Valves.docx",
    link: "https://docs.google.com/document/d/1rUn49Ioy2upIvAU4MwGL1P6krVHStLvD/edit",
  },
  {
    keyword:
      "QAD-F-84 Issue-01 Rev.00 01-Feb-2022_Dimensional & Visual Examination Report for Axial Flow Check Valve.doc",
    link: "https://drive.google.com/file/d/1yJaILKFXmVeJ7TcBePAxTTPFCk-GQP7o/view",
  },
  {
    keyword: "QAD-F-85_Issue 01_Rev. 00_01-Oct.-2022_Torque Test report.xls",
    link: "https://drive.google.com/file/d/1ApXo-K1tcjO_Ru1sdmA_9r_6OGza8gPO/view",
  },
  {
    keyword:
      "QAD-F-86_ISSUE-01_REV.00_02-JAN-2023_Welder Continuity log Book Format.xlsx",
    link: "https://drive.google.com/file/d/1-KLSBSJHFaE_tyquwlmiaQTVDT133b-H/view",
  },
  {
    keyword:
      "QAD-F-87_ISSUE-01_REV.00_01-FEB.-2023_Ultrasonic Testing log Book Format.xlsx",
    link: "https://drive.google.com/file/d/11oEfDK89_dN6KeCllWHkbRujxGEEkFH7/view",
  },
  {
    keyword:
      "QAD-F-88_Issue 01_Rev. 01_01-April-2024_Testing, Measuring, Monitoring & Detection Equipments History Card",
    link: "https://drive.google.com/file/d/1fFMVsMyjbcsGPLNYCCLKR0J1cdgGLG6G/view",
  },
  {
    keyword:
      "MFG-P-01_Issue-02_Rev.08_21-June-2025_Control of Product Realization.pdf",
    link: "https://drive.google.com/file/d/1jvj7UCfBva7IJEUwSlTv5-Rc9SoTUlnq/view",
  },
  {
    keyword: "MFG-O-01_Issue02_Rev.03_10-Nov-2024_Objectives_Production",
    link: "https://drive.google.com/file/d/1EElurs09f3Y_HUWf7hs5l0G9dkZw-Fe0/view",
  },
  {
    keyword:
      "MFG-C-01 Issue-02 Rev.00 01-Jan-2018 Production Process Flow Chart.pdf",
    link: "https://drive.google.com/file/d/1vcClJvI3-iXwXVPHSQ9jwQ4LEI4RalWw/view",
  },
  {
    keyword:
      "MFG-C-02 Issue-02 Rev.-01 01-July-2020 Machining Sequence Chart for Dual Plate Check Valve- Body.pdf",
    link: "https://drive.google.com/file/d/1nzRT4Q9RwUrYHqhpNzBRi2THixn0_9cs/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-03 Issue-02 Rev.-01 01-July-2020 Machining Sequence Chart for DPCV Plate.pdf",
    link: "https://drive.google.com/file/d/1k_wQ9AZponR-aDyd0WJ7kiYpJhnl7JFC/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-04 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- BODY.pdf",
    link: "https://drive.google.com/file/d/1cTwm93jhRUb4kIfPrwaBngzatU-gaIJH/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-05 Issue-02 Rev.-01 01-July-2020 MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE - DISC.pdf",
    link: "https://drive.google.com/file/d/1qeLkt4YQ1zq0MpYz_UdmLNnyAni6hSf9/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-06 Issue-02 Rev.01 01-July-2020 MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- SEAT RING.pdf",
    link: "https://drive.google.com/file/d/1vXgS5PMwY54HdnBL-KNsfVhX0ig9pvkz/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-07 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- SEAL RING.pdf",
    link: "https://drive.google.com/file/d/1hwUf3o_2ftA8KAa5r97eu0bO0abBXoNA/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-08 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- RETAINER RING.pdf",
    link: "https://drive.google.com/file/d/1zU2kxcqL3D99pXLjJVM5hKu-WzmhYdxX/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-09 Issue-02 Rev.01 01-July 2020 MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE- BODY.pdf",
    link: "https://drive.google.com/file/d/1KvLTKCOAZBpk6MdvvfQRYip8xskhuU4F/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-10 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE - DISC.pdf",
    link: "https://drive.google.com/file/d/1aRtbKmOZgrQe6unai_prt_pZQfIggBMs/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-11 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE- SEAT RING.pdf",
    link: "https://drive.google.com/file/d/1jJCoz_rjMTbKOMY8YQbpUy9uXDbwrWFG/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-12 Issue-02 Rev.01 01-July 2020 MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE- RETAINER RING.pdf",
    link: "https://drive.google.com/file/d/13JslaqhM99IhMu6LKA4GRD4_-JMK6K7G/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-13 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR CONCENTRIC VALVE- BODY MACHINING SEQUENCE CHART FOR CONCENTRIC VALVE- BODY.pdf",
    link: "https://drive.google.com/file/d/1Xzo80e3GtDZONXxhxnpBml-mqsVXzRKM/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-14 Issue-02 Rev. 01 01-July-2020 MACHINING SEQUENCE CHART FOR CONCENTRIC VALVE - DISC.pdf",
    link: "https://drive.google.com/file/d/1m4argEA4-EEl8jdzCmTvjo_GRPwbyyeQ/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C-101 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET pdf",
    link: "https://drive.google.com/file/d/1OwQUjzNvd5VEJWdVA203_nQHvDzDYeJk/view",
  },
  {
    keyword:
      "MFG-C-102 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET pdf",
    link: "https://drive.google.com/file/d/1hFCuQ463Zk6RjymBEXjMa57qTIxqbEgZ/view",
  },
  {
    keyword:
      "MFG-C-103 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- BODY.pdf",
    link: "https://drive.google.com/file/d/1qnzM5vG5rzJJSZ65mEwMRoiKB3UAXsV0/view",
  },
  {
    keyword:
      "MFG-C-104 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - GEAR BOX SIDE BORING.pdf",
    link: "https://drive.google.com/file/d/1aA_IOfk-2MQ_CCXFIXnWxOs41SfXYrqQ/view",
  },
  {
    keyword:
      "MFG-C-105 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE- BODY - END COVER SIDE BORING.pdf",
    link: "https://drive.google.com/file/d/1bE5jJiV5rztfsLTTR0PTpEvCMNIpeMY1/view",
  },
  {
    keyword:
      "MFG-C-106 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING INLET.pdf",
    link: "https://drive.google.com/file/d/1WgMyke8zYF_Q8zlulf0A4TLmejrpUSSu/view",
  },
  {
    keyword:
      "MFG-C-107 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING OUTLET SIDE.pdf",
    link: "https://drive.google.com/file/d/1OE-B_kynu0urda3zyjE2E7kZ4OnmXR2C/view",
  },
  {
    keyword:
      "MFG-C-108 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/12heND4RN8prKGDHxD6LWNnRZyPaLNUu9/view",
  },
  {
    keyword:
      "MFG-C-109 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1r2rgyTIROay2pZzhzNL2K0gKLodqusQL/view",
  },
  {
    keyword:
      "MFG-C-110 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1xkVfYwb979OJ4mX-PTaNB5zOSws6OWYe/view",
  },
  {
    keyword:
      "MFG-C-111 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1Gtk7h6btKrIIWyE6VdGfoRKbrpL0lw_k/view",
  },
  {
    keyword:
      "MFG-C-112 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- BODY.pdf",
    link: "https://drive.google.com/file/d/1y6yfHfOhNubuLAJYXoDTmMC8IvWFOR1l/view",
  },
  {
    keyword:
      "MFG-C-113 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - BORING GEAR BOX SIDE.pdf",
    link: "https://drive.google.com/file/d/1W3TYydiNeKEyJoPw6bCHfKRmWOGx-cfi/view",
  },
  {
    keyword:
      "MFG-C-114 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - BORING END COVER SIDE.pdf",
    link: "https://drive.google.com/file/d/1WjPKzYuPDpsT0Uc5aJ9Ec7GPCtPrJA0E/view",
  },
  {
    keyword:
      "MFG-C-115 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING INLET.pdf",
    link: "https://drive.google.com/file/d/1kVQR8IMPNl2HiuJptKsPyBn8H2lDBpKx/view",
  },
  {
    keyword:
      "MFG-C-116 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING OUTLET SIDE.pdf",
    link: "https://drive.google.com/file/d/1eOMrVFujgOtJFmieDP8Uwj-64rCt2bxr/view",
  },
  {
    keyword:
      "MFG-C-117 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET pdf",
    link: "https://drive.google.com/file/d/1GE46IdKGcN_GNGhK6C8osPnD646k3NzD/view",
  },
  {
    keyword:
      "MFG-C-118 Issue-01 Rev.00 01-July-2020 WELDING PROCESS STANDARD FOR BUTTER FLY TRIPPLE OFFSET VALVE - BODY - SEAT WELDING (OVER LAY).pdf",
    link: "https://drive.google.com/file/d/1hf7E5tZKT9Ch91jZMeaNWARnOeTH9qfR/view",
  },
  {
    keyword:
      "MFG-C-119 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1FCSvmWy9vUCfcpu-3SYVq9q_nlvyYBHC/view",
  },
  {
    keyword:
      "MFG-C-120 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1KleARGFUbdTVAiQFeK9zy-C5qauRl4KZ/view",
  },
  {
    keyword:
      "MFG-C-121 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET -pdf",
    link: "https://drive.google.com/file/d/1hjYMkooORETjjnWyQujeKtTyZUi3py3N/view",
  },
  {
    keyword:
      "MFG-C-122 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - DISC - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1JBmMO0MJKjooWp1DxnptyD_ZAAg7zN3y/view",
  },
  {
    keyword:
      "MFG-C-123 Issue-01 Rev.00 01-July-2020MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - DISC - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1U70ZerRGYlr4fVl5GZFJifEObuNwdZfP/view",
  },
  {
    keyword:
      "MFG-C-124 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- DISC - CENTRELINE MARKING.pdf",
    link: "https://drive.google.com/file/d/1-7DGJVYAcTtIhpBe6OflH6XBAfEoiHZ-/view",
  },
  {
    keyword:
      "MFG-C-125 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - DISC - BORING INLET.pdf",
    link: "https://drive.google.com/file/d/1X-kizXZh6B9ay7E2FH8olLhjsFhKO3Ni/view",
  },
  {
    keyword:
      "MFG-C-126 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFSET VALVE - DISC - DRILLING INLET-pdf",
    link: "https://drive.google.com/file/d/1VPXJvEQ-LjPEFbCzfzRemiKqX-9etvAP/view",
  },
  {
    keyword:
      "MFG-C-127 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFSET VALVE - DISC - DRILLING OUTLET.pdf",
    link: "https://drive.google.com/file/d/1KVFIpxN-lCfbA7wW_5zgNy6hKOADisBD/view",
  },
  {
    keyword:
      "MFG-C-128 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFSET VALVE - DISC - KEY CUTTING.pdf",
    link: "https://drive.google.com/file/d/1De21VZqdil3LGSPyjc0jGcZR0ziL-F5q/view",
  },
  {
    keyword:
      "MFG-C-129 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1X9HPUK3FUEyEIejt07j9bA2oXqiYfH9O/view",
  },
  {
    keyword:
      "MFG-C-130 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1YddVCvsbrAEjmAldGrARzdEQ_i5KIAZH/view",
  },
  {
    keyword:
      "MFG-C-131 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- SEAT RING - CENTRELINE MARKING.pdf",
    link: "https://drive.google.com/file/d/1VdNJcyUtju2Ep4Jvsd8kmbsjUdF7yGyh/view",
  },
  {
    keyword:
      "MFG-C-132 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - DRILLING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1JAvl0-oHT-cSorqQ4VkLqOIydl0AW1aj/view",
  },
  {
    keyword:
      "MFG-C-133 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1JTXTL09Z8hNgorzalRu0shzL_LrCN2o7/view",
  },
  {
    keyword:
      "MFG-C-134 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - WELDING (TIGMIG).pdf",
    link: "https://drive.google.com/file/d/1y_Q7Jznvw66IxUt-BQvDsn_9pIdgzaHi/view",
  },
  {
    keyword:
      "MFG-C-135 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1P33YDbRQHpwiypRbSET3ZfXZ4Hamh3kY/view",
  },
  {
    keyword:
      "MFG-C-136 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1bFiNkx7hTz_vut8TLfGa78ar2RUBx_Z5/view",
  },
  {
    keyword:
      "MFG-C-137 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - DRILLING (COUNTER HOLE).pdf",
    link: "https://drive.google.com/file/d/1U1ww95DKY1n3-1oHiyt9l6FNI98vykNw/view",
  },
  {
    keyword:
      "MFG-C-138 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1xk8NseEDWRvH_QxolHUPzSGcdYF7_f6i/view",
  },
  {
    keyword:
      "MFG-C-139 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - CAM PROFILING.pdf",
    link: "https://drive.google.com/file/d/1JgzW_-Yls4e4BUtKJFYlMVRGBX-qI7Yy/view",
  },
  {
    keyword:
      "MFG-C-140 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/19Qno6dgYMBMzM8Jvayu1sGvI8025aQdd/view",
  },
  {
    keyword:
      "MFG-C-141 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1Qe-MVZejOHWYalRlz4S61QrDhSUXfi_p/view",
  },
  {
    keyword:
      "MFG-C-142 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- SEAT RING.pdf",
    link: "https://drive.google.com/file/d/1olSZ295Xadnfhku0Q_ZedxuiolYJ3Goh/view",
  },
  {
    keyword:
      "MFG-C-143 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - TURNING OUT-pdf",
    link: "https://drive.google.com/file/d/1dMuTC6ln-mELM6VFH5Pf2Egw5SVndafs/view",
  },
  {
    keyword:
      "MFG-C-144 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - SEAT RING - CAM PROFILING.pdf",
    link: "https://drive.google.com/file/d/155wyumYJZehgS2xADv-BMgCqzPexELZl/view",
  },
  {
    keyword:
      "MFG-C-145 Issue-01 Rev.00 01-July-2020 LAMINATION & STACKING PROCESS STANDARD FOR TRIPLE OFFSET VALVE- SEAL RING.pdf",
    link: "https://drive.google.com/file/d/1K7YMo3iW_4Cbp04vQie_CV6eXWNGdne5/view",
  },
  {
    keyword:
      "MFG-C-146 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- SEAL RING.pdf",
    link: "https://drive.google.com/file/d/1K4YHsYX1buBW3DYWJTtFoR7-ZceKMint/view",
  },
  {
    keyword:
      "MFG-C-147 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE- SEAL RING - TURNING INLET-pdf",
    link: "https://drive.google.com/file/d/1Z5-Veb6uH_l8OAZmS5bXMzTSqPYd862i/view",
  },
  {
    keyword:
      "MFG-C-148 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE- SEAL RING - GRINDING OR POLISING.pdf",
    link: "https://drive.google.com/file/d/1yCkrF7JUpc7AaXZVf3NDP4XvgkNJSTmT/view",
  },
  {
    keyword:
      "MFG-C-149 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/1KOKVHPm0o8mUiweJeJGNI0s1Ub-3FgaB/view",
  },
  {
    keyword:
      "MFG-C-150 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - TURNING INLET -pdf",
    link: "https://drive.google.com/file/d/1Y3Z-dvMr7wOQQ4hPPJjCnL6cE34mYNkX/view",
  },
  {
    keyword:
      "MFG-C-151 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- RETAINER RING.pdf",
    link: "https://drive.google.com/file/d/1UfhlRKeqP2M5uP5eJnw732zT36ROsYUe/view",
  },
  {
    keyword:
      "MFG-C-152 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - RETAINER RING - DRILLING OUTLET.pdf",
    link: "https://drive.google.com/file/d/1EjVcPJGXBnrPrXqLyh5wIWB4mIe9qMR9/view",
  },
  {
    keyword:
      "MFG-C-153 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - TURNING OUTLET -pdf",
    link: "https://drive.google.com/file/d/1dLByJ4Ux-XNyi7J-K7GF9DSXye_T7Yvg/view",
  },
  {
    keyword:
      "MFG-C-154 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - TURNING OUTLET-pdf",
    link: "https://drive.google.com/file/d/18aWVCNWvfnUkxAAvlV8YueVErFmz1kWL/view",
  },
  {
    keyword:
      "MFG-C-155 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - TURNING INLET -pdf",
    link: "https://drive.google.com/file/d/1q0usIC0X8JtlU2reVpXwLPibX7yDbHgy/view",
  },
  {
    keyword:
      "MFG-C-156 Issue-01 Rev.00 01-July-2020 CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- RETAINER RING.pdf",
    link: "https://drive.google.com/file/d/1L_xg-jbBLQDzOlQKTf7CWTQp9m0cJZWl/view",
  },
  {
    keyword:
      "MFG-C-157 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFFSET VALVE - RETAINER RING - DRILLING OUTLET.pdf",
    link: "https://drive.google.com/file/d/1mS36NWa1viAhc1nuAjJq7b523rinUBzP/view",
  },
  {
    keyword:
      "MFG-C-158 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - TURNING OUTLET - pdf",
    link: "https://drive.google.com/file/d/13Gx8unNiDV9xz4hH-wYo3D0-aZk4OnGe/view",
  },
  {
    keyword:
      "MFG-C-159 Issue-01 Rev.00 01-July-2020 MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - RETAINER RING - CAM PROFILING.pdf",
    link: "https://drive.google.com/file/d/1-29wXm8jgDVpGB-iRFhbg1dECPomSp5J/view",
  },
  {
    keyword:
      "MFG-W-01 Issue 02 REV. 03 01-Oct.-2022 Procedure for Tag number of Valves.pdf",
    link: "https://drive.google.com/file/d/1ZzvCE3uRezR5CA8ayHQ_8PAH4HCNZFtb/view",
  },
  {
    keyword:
      "MFG-W-04 Issue-02 Rev. 00 01-Feb.-2021_Balancing Valve Assembly Gun Metal.pdf",
    link: "https://drive.google.com/file/d/1rIZVpBu8wVJoYO9OWM0sj2k7fnGoPu_z/view",
  },
  {
    keyword:
      "MFG-W-05 Issue-02 Rev. 00 01-Feb.-2021_Balancing Valve Assembly Cast Iron.pdf",
    link: "https://drive.google.com/file/d/1ANYDrJirfgHnQeEtselrfw1wcYotWNcJ/view",
  },
  {
    keyword:
      "MFG-W-06 Issue 02 REV. 01 01-Jul.-2020 Butterfly Valve Assembly (Concentric).pdf",
    link: "https://drive.google.com/file/d/1ETpDWyGwmJHEO4iSi-jaXVDFjMKLYbZr/view",
  },
  {
    keyword:
      "MFG-W-07 Issue 02 REV. 00 01-Jan-2018 DP Valve Assembly Procedure.pdf",
    link: "https://drive.google.com/file/d/1niuVuw7St26OoASbMVDc-bAXou5T7LsM/view",
  },
  {
    keyword: "MFG-W-09_Issue 02_REV. 01_13-Dec-2024_Vulcanization.pdf",
    link: "https://drive.google.com/file/d/1HbZQH5VP3xMutcBfMn8wH-V89Pi9I6y_/view",
  },
  {
    keyword:
      "MFG-W-11 Issue 02 REV. 00 01-Jan-2018 Codification of Rubber Chemical.pdf",
    link: "https://drive.google.com/file/d/17mTlA8wc_1pKdj1FyyNET31BNnVLPlv1/view",
  },
  {
    keyword: "MFG-W-12 Issue 02 REV. 00 01-Jan-2018 Rubber Composition.pdf",
    link: "https://drive.google.com/file/d/1jm2gH1_ltJ9YwtNsqFiyaORNLCEaTCWV/view",
  },
  {
    keyword:
      "MFG-W-13 Issue 02 REV. 00 01-Jan-2018 Electroless Nickel Phosphorus Coating Procedure.pdf",
    link: "https://drive.google.com/file/d/15HFtmtUDqDFTkdhzV6INwJyHuIrBamBI/view",
  },
  {
    keyword:
      "MFG-W-16 Issue 02 REV. 00 01-Jan-2018 Double Eccentric Butterfly Valve Assembly.pdf",
    link: "https://drive.google.com/file/d/15XsNKyB2Aln0kU7kpE7gaaKd0bXpI3y_/view",
  },
  {
    keyword:
      "MFG-W-17_Issue 02_REV.02_01-May-2023_BT Valve Assembly Procedure.pdf",
    link: "https://drive.google.com/file/d/1MzHm6lpFK2rgLrzGuoG6zqcJJxlTv3r0/view",
  },
  {
    keyword:
      "MFG-W-20 Issue 02 REV. 00 01-Jan-2018 Surface Preparation of Casting Procedure.pdf",
    link: "https://drive.google.com/file/d/1r-ZflRQd70Fr0_utHrn8HR-Gb4e_VVmK/view",
  },
  {
    keyword:
      "MFG-W-21 Issue 02 REV. 00 01-Jan-2018 Electrode Baking procedure.pdf",
    link: "https://drive.google.com/file/d/1uIFXEN3f5SEhrxXquaO8Db7CzkfTwIKu/view",
  },
  {
    keyword: "MFG-W-22 Issue 02 REV. 00 01-Jan-2018 Welding Procedure.pdf",
    link: "https://drive.google.com/file/d/1PYqiso81WYaOgKRKaXP-rNYN0rWmB1my/view",
  },
  {
    keyword:
      "MFG-W-23_Issue 02_Rev. 04_01-Jul-2023_Cutting Parameters for Machining Operations.pdf",
    link: "https://drive.google.com/file/d/1X11rSzbCnvE1Gtzkm0fPVKTzlpsjNtkg/view",
  },
  {
    keyword:
      "MFG-W-24 Issue 02 REV 03 01-July-2020 Machining - Operations Sequencing & Process Standards.pdf",
    link: "https://drive.google.com/file/d/1Rxb9gvU3PzZfTg2nZVQJmJjrd-8d8Z9d/view",
  },
  {
    keyword:
      "MFG-W-28 Issue 02 REV. 00 01-Jan-2018 Extended Bonnet Assembly Procedure.pdf",
    link: "https://drive.google.com/file/d/1VfZNKP_AHJzU33VA-J3PLG5pIUt9w7h4/view",
  },
  {
    keyword:
      "MFG-W-29 Issue 02 REV. 00 01-Jan-2018 Valve Flange Marking & Drilling.pdf",
    link: "https://drive.google.com/file/d/1KK1HzJfztI3CQlgClJ5ZzgPGA2EKHsYo/view",
  },
  {
    keyword:
      "MFG-W-30 Issue 02 REV. 00 01-Jan-2018 Painting of Steam Jacketed Valves Before Jacketing.pdf",
    link: "https://drive.google.com/file/d/1T6TPqeHeu0HlxCMHW8B5eNPd1myghvWN/view",
  },
  {
    keyword:
      "MFG-W-31 Issue 02 REV. 00 01-Jan-2018 Handling of BOM Drawing.pdf",
    link: "https://drive.google.com/file/d/11-xqb7vwaRtedrxFYMMoW-lo1VcqAxdC/view",
  },
  {
    keyword: "MFG-W-32 Issue 02 REV. 00 01-Jan-2018 Nylon Coating.pdf",
    link: "https://drive.google.com/file/d/1e-WvtqaW3WscM5VzWa9MVjsisxPZ1vjk/view",
  },
  {
    keyword:
      "MFG-W-33 Issue-02 Rev.00 1-July-2020_Jigs and Fixtures Management.pdf",
    link: "https://drive.google.com/file/d/10fXPZpELTH7lxMlcF4Dmww6MALNKTgUt/view",
  },
  {
    keyword:
      "MFG-W-35 Issue-01 Rev. 00 25-Jan.-2021 Axial Flow Check Valve Assembly.pdf",
    link: "https://drive.google.com/file/d/1xFB5lq-j83k4_jKrI1u2KzRgJQOF7-ba/view",
  },
  {
    keyword:
      "MFG-W-38 Issue 01 Rev. 00 01-Feb.-2021_Pressure Independent Control Valve Assembly.pdf",
    link: "https://drive.google.com/file/d/1ohfoGZm05UzumQEj0XfYqwKdiCgH7gbI/view",
  },
  {
    keyword:
      "MFG-W-39_Issue-01_Rev00_01-Apr-2023_Bolt Sequencing & Tightening for Valves",
    link: "https://drive.google.com/file/d/1aamILqJLKEV84fcvQw6fRGb_eQ2ZUL-4/view",
  },
  {
    keyword:
      "MFG-F-01 Issue-02 Rev. 01 24-Jun-2025_Daily Production Report.xls",
    link: "https://drive.google.com/file/d/1Hn0dZaOys6BK-TQoFso3UDXB_9RmRLjB/view",
  },
  {
    keyword: "MFG-F-02_Issue-02_Rev. 01_15-May-2024_Weld Record Log Book.xls",
    link: "https://drive.google.com/file/d/1qtgBScoLiDW1ix6YGOge8sleeUyjSyiv/view",
  },
  {
    keyword:
      "MFG-F-03 Issue-02 Rev. 00 01-Jan-2018 Valve Completion Analysis Report_DPCV.docx",
    link: "https://drive.google.com/file/d/1XP9Rap3TS84h_Qq47oqXFF3xue1p44_9/view",
  },
  {
    keyword:
      "MFG-F-04 Issue-02 Rev. 00 01-Jan-2018 Butterfly Valve (Double Eccentric) Assembly Log Book.xls",
    link: "https://drive.google.com/file/d/1bIqNKX-LHMUrn-pQM7rNzNvhDxhNI1KL/view",
  },
  {
    keyword:
      "MFG-F-05 Issue-02 Rev. 00 01-Jan-2018 Butterfly Valve (Concentric) Assembly Log Book.xls",
    link: "https://drive.google.com/file/d/107FWf6PwyiNYo_S7Wn52AR9f18ncTtUT/view",
  },
  {
    keyword:
      "MFG-F-06 Issue-02 Rev. 01 01-JULY-2020 Butterfly Valve (Triple Eccentric) Assembly Log Book .xlsx",
    link: "https://drive.google.com/file/d/1gKXFJmXhGx4STr4AjV-v-UaSMcwIe3ku/view",
  },
  {
    keyword:
      "MFG-F-07 Issue-02 Rev. 01 01-JULY-2020 Dual Plate Check Valve Assembly Log Book .xlsx",
    link: "https://drive.google.com/file/d/1wWVdEC4rMEATuThxTuK_XqBSuyKzJAuU/view",
  },
  {
    keyword:
      "MFG-F-08 Issue-02 Rev. 00 01-Jan-2018 Jig & Fixture Inspection Report.xls",
    link: "https://drive.google.com/file/d/1RGkfaW5t2ltM6FkxDJRJpARv6N1ZoFTm/view",
  },
  {
    keyword:
      "MFG-F-09 Issue-02 Rev. 00 01-Jan-2018 Jigs & Fixture Validation.xls",
    link: "https://drive.google.com/file/d/1ZIRu6Tc4o0Nv_AKWoUaDf6Qt26-xpkva/view",
  },
  {
    keyword:
      "MFG-F-10_Issue-02_Rev. 01_10-July-2023 Machining Inspection Report.xls",
    link: "https://drive.google.com/file/d/1DGtP0INJvFLIasHAyq3gWDIquzHjR0d4/view",
  },
  {
    keyword: "MFG-F-11 Issue-02 Rev. 01 05-Sept-2024_Job Card.xls",
    link: "https://drive.google.com/file/d/1tj0saspcgQ1_kS07e-8aK8uJ4jUb-Fjz/view",
  },
  {
    keyword: "MFG-F-12 Issue-01 Rev. 00 01-Jan-2018 Micro Planning.xls",
    link: "https://drive.google.com/file/d/1rQbi1Dub3lSKmredM3yW6Wq_faDABdzx/view",
  },
  {
    keyword:
      "MFG-F-13 Issue-02 Rev. 00 01-Jan-2018 Monthly Production Plan.xls",
    link: "https://drive.google.com/file/d/1ktWfeg0mn4YXixUHxqY6vGahyly1aLAd/view",
  },
  {
    keyword: "MFG-F-14 Issue-02 Rev.01_18-Jul-2025 Valve Handover Report.xls",
    link: "https://drive.google.com/file/d/1UmmaPuxT23XAa72v7WC3SggTDC_Cz588/view",
  },
  {
    keyword:
      "MFG-F-15_Issue-02_Rev. 01_02-Sept-2024_Advance Notification (Inspection Call).xls",
    link: "https://drive.google.com/file/d/1hEqNWTJl8iXFoEYiEhTnIq7zL147d-cZ/view",
  },
  {
    keyword: "MFG-F-16 Issue-02 Rev. 00 01-Jan-2018 Paint Report.xls",
    link: "https://drive.google.com/file/d/1Oi3T89UddBbu-FGwh9pRD6UqjA0fsUsR/view",
  },
  {
    keyword:
      "MFG-F-18 Issue-01 Rev. 00 01-Jan-2018 Valve Tag Allotment Record.xls",
    link: "https://drive.google.com/file/d/1yyCUnp_4idggCRvZlG6-v_HctLqxmwVP/view",
  },
  {
    keyword: "MFG-F-19 Issue-02 Rev. 01 05-Sept-2024_Stage Tag.xls",
    link: "https://drive.google.com/file/d/1wCXepeT2jucoSl85diga7iLS_a1HmL2H/view",
  },
  {
    keyword: "MFG-F-22 Issue-01 Rev. 00 01-Jan-2018 Heat Treatment Record.xls",
    link: "https://drive.google.com/file/d/1G4uhA7MPtn3vDiXkFrR2qjpxuER0uX4p/view",
  },
  {
    keyword:
      "MFG-F-23 Issue-02 Rev. 01_24-Jun-2025 Validation Report-Paint and Nylon Coating.xlsx",
    link: "https://drive.google.com/file/d/1iA5IeaTXzqzx4kGZY0zzAljiocHjJEyP/view",
  },
  {
    keyword:
      "MFG-F-24 Issue-02 Rev.00 1-Jan-2018 Validation Report-Heat Treatment.xlsx",
    link: "https://drive.google.com/file/d/1raKfk5UgMWXYmRugoZ19aOd072L-JY0W/view",
  },
  {
    keyword:
      "MFG-F-25 Issue-01 Rev.01 01-July-2019_Assembly Rework Record for DPCV.dox",
    link: "https://drive.google.com/file/d/1VfikNWp2Nv3yj2S3pocdT3ewyBuPjR_q/view",
  },
  {
    keyword:
      "MFG-F-26 Issue-01 Rev.01 01-July-2019_Assembly Rework Record for BD & BT.doc",
    link: "https://drive.google.com/file/d/13HIWDE4Kbhq8W0wl-qQA1qp9cldMnzFI/view",
  },
  {
    keyword:
      "MFG-F-27 Issue-01 Rev.01 01-July-2019_Assembly Rework Record for BFV",
    link: "https://drive.google.com/file/d/1OCrN34O0ecKGOYA1lb_Uxn0xDKpcIecJ/view",
  },
  {
    keyword:
      "MFG-F-28 Issue-02 Rev.00 01-JULY-2020_Format for Jigs and Fixtures Indexing Sheet.xlsx",
    link: "https://drive.google.com/file/d/1lV9G5Oen9KKDTX5xajbhL2-ZtWyM2n4q/view",
  },
  {
    keyword:
      "MFG-F-29 Issue-01 Rev.00 01-July-2020_Decision Tree for Valve Machining.xls",
    link: "https://drive.google.com/file/d/1e1cMvAyj6ORLMUMJQ47CDzDybMlR6765/view",
  },
  {
    keyword:
      "MFG-F-30 Issue-01 Rev.00 01-JULY-2020_Machine capability Master Matrix for Machining.xls",
    link: "https://drive.google.com/file/d/1ALlK6U96zfo3Z54p_ZOOf-k-dYMMf4VK/view",
  },
  {
    keyword:
      "MFG-F-32 Issue-01 Rev.00 01-JULY-2020_List of Seal or Seat or Integral Seat Profile Machining Fixure.xlsx",
    link: "https://drive.google.com/file/d/1678U-sxiImNCwGhAeIJ3_LJBTCmrg1JZ/view",
  },
  {
    keyword:
      "MFG-F-33 Issue-01 Rev.00 1-July-2020 Body Integral Seat Profile.xlsx",
    link: "https://drive.google.com/file/d/1OYmdhyO30NkQBSiqZrW0HA_RItOk8mw-/view",
  },
  {
    keyword:
      "MFG-F-34 Issue-01 Rev. 00 -1 Jul 2020 List of Bore Alignment Checking Functional Gauge for BT Valve.xlxs",
    link: "https://drive.google.com/file/d/1ID73TM56jndt6y1fuc3KIWEzMSTYzYSc/view",
  },
  {
    keyword:
      "MFG-F-35 Issue-01 Rev.00 01-July-2020_List of Flange PCD Checking Functional Gauge.xlsx",
    link: "https://drive.google.com/file/d/1eml0LMphWGiGa93p564tQ1UT06tjetnU/view",
  },
  {
    keyword:
      "MFG-F-36 Issue-01 Rev.00 01-July-2020_List of POC Checking Functional Gauge.xlsx",
    link: "https://drive.google.com/file/d/1q_G7e8re9KnIVI9YYwGErvPbJrfkpKOS/view",
  },
  {
    keyword:
      "MFG-F-37 Issue-01 Rev.00 01-July-2020_Flange Hole Drilling Jigs.xls",
    link: "https://drive.google.com/file/d/1ycIYSOkz91INEaaskCNyRDqF_ad44JOJ/view",
  },
  {
    keyword:
      "MFG-F-38 Issue-01 Rev-00 01-July-2020 List of Vulcanising Dies for BF Body.xls",
    link: "https://drive.google.com/file/d/10ZtlOUbvxYAMFSoaPr5NUPmP46WiVn2E/view",
  },
  {
    keyword:
      "MFG-F-39 Issue-01 Rev.00 01-Jul-2020_List of Retainer Ring PCD Checking Functional Gauge.xls",
    link: "https://drive.google.com/file/d/1h7HhH9EcPKtDMupi6G2e7rIGoz-lwWZm/view",
  },
  {
    keyword:
      "MFG-F-40 Issue-01 Rev.00 01-July-2020 Jigs & Fixtures Issue Form.xls",
    link: "https://drive.google.com/file/d/1sxSqDjusyfRZJeA7qttVGQBVtwxKPzjj/view",
  },
  {
    keyword:
      "MFG-F-41 Issue-02 Rev. 00 01-March-2020 Performance Test Data Sheet-Balancing Valve.xls",
    link: "https://drive.google.com/file/d/1Jq3DITObxwh-nBxFi99n2XFh5-6CFbwW/view?usp=sharing",
  },
  {
    keyword:
      "MFG-F-42 Issue-02 Rev. 00 01-Feb.-2021 Balancing Valve Assembly Log Book.xls",
    link: "https://drive.google.com/file/d/1w9umE_vyVY9PbiyVURXE2bnTjboIQVgo/view?usp=sharing",
  },
  {
    keyword:
      "MFG-F-43 Issue-01 Rev. 00 25-JAN-2021 Axial Flow Check Valve Assembly Log Book.xls",
    link: "https://drive.google.com/file/d/1TAoQYCu4EZricECdINaJjSVUFY3Z_csr/view?usp=sharing",
  },
  {
    keyword:
      "MFG-F-44 Issue-01 Rev.00 25-Jan-2021_Assembly Rework Record for Axial Flow Check Valve.xls",
    link: "https://drive.google.com/file/d/1wc0BKdh3ZlUjFlei9Q65GJFU-P22IbiC/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-F-27 Master List of Documents",
    link: "https://docs.google.com/spreadsheets/d/17l_ZoyZgODLXIdP_giTH_mTorYzMlfuq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-M-01 Issue 01 Rev.01 15-Mar-2022 Quality Manual",
    link: "https://drive.google.com/file/d/1xkxM0eIM3_WINgPN8GO0qZzsibAXG1U2/view?usp=share_link",
  },
  {
    keyword: "BSV-SYS-P-01 Issue 01 Rev.00 11-Oct-2021 Management Review",
    link: "https://drive.google.com/file/d/1eIhKuPV_TZEyfy8_-gP1Ev-mg2YigI5Z/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-02 Issue 01 Rev.00 11-Oct-2021 Internal Audit",
    link: "https://drive.google.com/file/d/1C9PaKHpydPTubTx_9TcvePR35TSX_yK6/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-03 Issue 01 Rev.-00 11-Oct-2021 Control of Documents",
    link: "https://drive.google.com/file/d/1O377V-dlnwtXxQyLB9Bfabuyg2zM4oMI/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-04 Issue 01 Rev.00 11-Oct-2021 Control of Records",
    link: "https://drive.google.com/file/d/1XV7C1SatL_HYcyGOfSYdlhikdauQeLkC/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-05 Issue 01 Rev.00 11-Oct-2021 Analysis of Data",
    link: "https://drive.google.com/file/d/1MsNKbYLya-r6nfOO_Xl2JNrDR9ykGmsE/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-06 Issue 01 Rev.00 11-Oct-2021 Management of Change",
    link: "https://drive.google.com/file/d/1uLUsBaTAurXV6iStiFHcMHmpPvxB7cvj/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-07 Issue 01 Rev.00 11-Oct-2021 Corrective Action",
    link: "https://drive.google.com/file/d/1rGxZGf8KnUfVflSa3zk4bXQRg-j3z-qD/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-P-08 Issue 01 Rev.00 11-Oct-2021 Preventive Action",
    link: "https://drive.google.com/file/d/1-lN0nZPR8gB25fXR2zslOnhiAo7vVoXo/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-O-01 Issue 01 Rev.01 11-Aug-2023 Organization Quality Objectives",
    link: "https://drive.google.com/file/d/1LYam7pVsF67q06zL_YXWLTrsCDnOrf9x/view?usp=drive_link",
  },
  {
    keyword: "BSV-L-01 Issue 01 Rev.01 15-Mar-2022 Quality Policy",
    link: "https://drive.google.com/file/d/1KW90IdA8vG5UyBOa4OCD5tp5QP1sdZiq/view?usp=share_link",
  },
  {
    keyword:
      "BSV-SYS-W-01 Issue 01 Rev.02 01-Apr-2023 Valve Recall or Withdrawal Procedure",
    link: "https://drive.google.com/file/d/1ZVZRfpBaDhOt7CcvkYJYnZ0Hm6xVW6XL/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-C-01 Issue 01 Rev. 01 11-Aug-2023 Quality Objectives Chart",
    link: "https://drive.google.com/file/d/1OLiHskOM6OCDEBLcvsbupeJDk1Z7yOmS/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-C-02 Issue 01 Rev.00 11-Oct-2021 Communication Control Plan",
    link: "https://drive.google.com/file/d/1XhFVr3bEoWzUMVkX3bOyL8HKXYAKQxfK/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-C-03 Issue 01 Rev.01 20-June-2024 Company Organogram for Building Service Vertical",
    link: "https://drive.google.com/file/d/1IGUxnzyaY5S8ScnEoOJvRJxWJ56RDQoU/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-C-04 Issue-01 Rev.01 15-Mar-2022 Scope of QMS or Certification",
    link: "https://drive.google.com/file/d/1286JM8Ek3pnem-_tTl8ZXHb7CwcHL8B_/view",
  },
  {
    keyword:
      "BSV-SYS-C-05 Issue 01 Rev.00 11-Oct-2021 Needs & Expectations of Interested Parties",
    link: "https://drive.google.com/file/d/1_ogeYbuPInIw9rPm17_oFT_g2UJkDrbt/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-C-06 Issue 01 Rev. 01 15-Mar-2022 Master list of Building Work Space and Associated Utilities",
    link: "https://drive.google.com/file/d/1lMvY_13tleL7gztxNJxrOEW3RyGOTmvM/view?usp=share_link",
  },
  {
    keyword:
      "BSV-SYS-C-07 Issue 01 Rev.00 11-Oct-2021 Guidelines for QRL Identification based on Customer Specifications",
    link: "https://drive.google.com/file/d/1EPTyIpK3koKuR9IU2TDLsHDHvEUC4euF/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-C-08 Issue 01 Rev.00 11-Oct-2021 PFD for Customer Work Orders",
    link: "https://drive.google.com/file/d/1DC_87B_H68J1gtoqh7lF6ZmANSKv6R-L/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-C-09 Issue 01 Rev.00 11-Oct-2021 PFD for Stock Work Orders - QRL 2, 3 and 4",
    link: "https://drive.google.com/file/d/17WBgw35lIDbqh3KZcCrVSUl20GtRqhdV/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-C-10 Issue 01 Rev.00 11-Oct-2021 Details of Patents",
    link: "https://drive.google.com/file/d/1dGSYXaQQCMscLrHJHa4QWy4fsm_8YXGm/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-F-01 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for TM or MR",
    link: "https://docs.google.com/document/d/183PTIax8KvW6ZTjSDb95J9vTDU_5gpwR/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-02 Issue 01 Rev.02 19-Aug-2025 Internal Audit Check list cum observation Report for Design",
    link: "https://docs.google.com/document/d/1eUBzb-Cwi6of4LUGnV77TWlGf-dAJ3vA/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-03 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for Marketing",
    link: "https://docs.google.com/document/d/1bV_dKsgkWDUQWhTcxQ5uNV8ElGpO9S3g/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-04 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for Purchase",
    link: "https://docs.google.com/document/d/1lOnr0Do_wWnL_YtuLt49UY02geppW_ej/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-05 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for Production",
    link: "https://docs.google.com/document/d/1wQltJ1WM1BtR21COBXPL7u6gAeWXsRzX/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-06 Issue 01 Rev.02 19-Aug-2025 Internal Audit Check list cum observation Report for Quality",
    link: "https://docs.google.com/document/d/1SyNjjmOquiJaaJd5eLSgB0T5dxYfB8j_/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-07 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for Store",
    link: "https://docs.google.com/document/d/19RB_Uh2zqQs5RcTR7DVQZTiBKybMl8cm/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-08 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for C&PM",
    link: "https://docs.google.com/document/d/1FuNJJf8hm5BEGlroNgKaKQT8aE8IBN3m/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-09 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for Maintenance",
    link: "https://docs.google.com/document/d/1PXCwWXIGr0iWOjijbhJLvlSrdoA92mXH/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-10 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for IT",
    link: "https://docs.google.com/document/d/1PM-4k4J0pEn9GybSP1dyHu_1iHalQuZF/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-11 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check list cum observation Report for HR",
    link: "https://docs.google.com/document/d/1Ej78eYZ0McAUBff3SspZmUydFU1Gxa_D/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-12 Issue 01 Rev.01 11-July-2024 Case Study Root Cause Analysis",
    link: "https://drive.google.com/file/d/139rKJ_3Lhxe-TXeuRhVC_E0ZxPnZsl9s/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-F-13 Issue 01 Rev. 01 29-June-2024 Internal audit NC summary report",
    link: "https://docs.google.com/spreadsheets/d/10BJtLXfc_5aKc0CfQwkYmfX_it0h7hrM/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-14 Issue 01 Rev.00 11-Oct-2021 Filing Maintenance, Storage & Disposal of Records",
    link: "https://docs.google.com/spreadsheets/d/1NpYN8T4oAvr_prQgwMm07qOBYeVIeT6_/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-15 Issue 01 Rev.01 10-June-2024 Internal Audit Non-Conformance Report Sheet (Responses)",
    link: "https://docs.google.com/spreadsheets/d/1aHjB0ibuEMl0--oqfr0yBz4OsZEEOQ2i/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-16 Issue 02 Rev 00 18-Sep-2025 Internal Document Change request Form",
    link: "https://drive.google.com/file/d/1rJzksmwDRSTX_2bfEfjPib9Ygp3Sfxep/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-F-17 Issue 01 Rev.03 29-June-2024 Internal Audit Schedule Report",
    link: "https://docs.google.com/document/d/1ivC7he6-ELzMjSxkn7jOR_P-OOgLv2Zg/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F-18 Issue 01 Rev.01 29-June-2024 Internal Audit Plan",
    link: "https://docs.google.com/document/d/14AK5RFryYPoVQURAm8S9_792OUag6seG/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-19 Issue 01 Rev.01 02-May-2024 Document Release Cum Amendment Note.pdf",
    link: "https://drive.google.com/file/d/1KMWxcNEjv44wB42DolEmwFV9VcxGal-4/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-F-20 Issue 01 Rev.01 29-June-2024 Minutes of Management Review Meeting",
    link: "https://docs.google.com/spreadsheets/d/1CQG93sHfTEinJ6J5jhR6vgSghiPrrjQI/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-21 Issue 01 Rev.00 11-Oct-2021 Preventive Action Report",
    link: "https://docs.google.com/document/d/1BoGe79Ihd5xMHt7wefWaoOLSJQfqgCD5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F-22 Issue 01 Rev.00 11-Oct-2021 Table of Contents",
    link: "https://docs.google.com/spreadsheets/d/1DYOYTe0CvRSW8DkSQjC0qncB6ZWskxB6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-23 Issue 02 Rev.00 14-Mar-2024 Management of Change Form",
    link: "https://drive.google.com/file/d/1n3Gg3bVnielQzsHIR4BB0gTJpTn7Zx4x/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-F-24 Issue 01 Rev.01 10-June-2024 Internal Audit Non Conformance Report",
    link: "https://drive.google.com/file/d/1XYSpilVvB3KdBOj0wCWHph3OGWyAQMzk/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-F-25 Issue 01 Rev.00 11-Oct-2021 Tracking Sheet for Potential Non-Conformities & OFI",
    link: "https://docs.google.com/spreadsheets/d/1eCF9ZOv_UbfixOXC9aRIuYW0h7RwgIxM/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-26 Issue 01 Rev.00 11-Oct-2021 Review & Updation of Quality Certification",
    link: "https://docs.google.com/spreadsheets/d/1RAWPywiX4ICba6atdUYIuAaHLNfbiaz4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-27 Issue 01 Rev.00 11-Oct-2021 Master List of Documents",
    link: "https://docs.google.com/spreadsheets/d/1-ZyxjEPotk-gjOmstzKd0djlzmmnsCnB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-29 Issue 01 Rev.01 15-Mar-2022 List of Internal Quality Auditors",
    link: "https://docs.google.com/spreadsheets/d/1W31ZDJERL96iN09X7tTrvgWYb1GtLZeM/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-30 Issue 01 Rev.00 11-Oct-2021 Summary assessment on Effectiveness of QMS for MRM Minutes",
    link: "https://docs.google.com/document/d/1hYgroJzdIEQ5ELZzp2ll8GbpFTwWeUja/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F-31 Issue 01 Rev.01 29-Jun-2024_Minutes of Meeting",
    link: "https://docs.google.com/document/d/1a4yn6oB6DOQ6sx_AGbp7qUAUmEDdmR2a/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F-32 Issue 02 Rev.00 14-Mar-2024 MOC Register",
    link: "https://drive.google.com/file/d/1valikXhSrAaHrHX9ZaWTaISspIsG6BV-/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-F-33 Issue 01 Rev.00 11-Oct-2021 List of Support Services - Transport, Communication Facility",
    link: "https://docs.google.com/spreadsheets/d/13yo1phHqsIS8Ph652KniJ1aTg4sYcmCe/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-34 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check List for Outsourced Vendors during Product Realization",
    link: "https://docs.google.com/document/d/1r-ZuDJbtsL4-SjV_GfQN7M4ToWyqA_0j/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-35 Issue 01 Rev.01 19-Aug-2025 Internal Audit Check List cum Observation Report for Sales",
    link: "https://docs.google.com/document/d/1cMYd8Es-RHE2agC5iJlmlh9-CpaEyyVM/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-36 Issue 01 Rev.00 02-May-2024 Document Release cum Amendment Note Sheet (Responses).xlsx",
    link: "https://docs.google.com/spreadsheets/d/1efn-ALJK62qyBYyM8f773xFzBufhPgaD/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-37 Issue 01 Rev.00 11-July-2024 Case Study on Root Cause Analysis Sheet (Responses)",
    link: "https://docs.google.com/spreadsheets/d/1dSp688zPe_JMmpkg-bj6ZYgcPGhPyYxt/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F-39_Issue01_Rev.00_04-Nov-2024_Opportunity for improvement form",
    link: "https://drive.google.com/file/d/1zygiDvufrEJ_1X6dBdP0UKQHyCWG_Kfp/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SYS-F-40_Issue01_Rev.00_04-Nov-2024_Opportunity For improvement response",
    link: "https://docs.google.com/spreadsheets/d/1nAdjA6khv5gkkMUMLTd67dRj3gRVW_4X/view",
  },
  {
    keyword:
      "BSV-SYS-F-41 Issue 01 Rev.00 18-Sep-2025 Internal Document Change Request Record",
    link: "https://drive.google.com/file/d/1X5CxecKJPrfbi0dLWuAhd5JJGj8cIIbZ/view?usp=drive_link",
  },
  {
    keyword: "BSV-MKT-P-01 Issue-01 Rev.01_04 Nov. 2024_Contract Review",
    link: "https://drive.google.com/file/d/1f6hpTJKQMVJYxdFmfCuaC8JLZFUcXYSG/view",
  },
  {
    keyword:
      "BSV-MKT-P-02 Issue 01 Rev.00 11-Oct-2021 Customer Satisfaction Measurement",
    link: "https://drive.google.com/file/d/1KoOzxc57iX0kqynhnvXVVgsXGg5yCyYI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-P-03 Issue 01 Rev.00 11-Oct-2021 Customer & Suppliers Supplied Property",
    link: "https://drive.google.com/file/d/1XhDsz5-Kye7eVblA1OlBKnWre7VjBzQu/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-P4 Issue 01 Rev.00 11-Oct-2021 Servicing of Products",
    link: "https://drive.google.com/file/d/1Xe-8MH-V71lxD0u6VMxRigXYOWRrs8rF/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-O-01 Issue 01 Rev.01 23-July-2025 Quality Objectives Marketing",
    link: "https://drive.google.com/file/d/1wkp-RxJB8RNkHsin-kJiNea823XT7NnE/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MKT-W-01 Issue 01 Rev.00 11-Oct-2021 Preparation of the Sales order cum Order Acceptance",
    link: "https://drive.google.com/file/d/1deOetRFnoqTR6u-qK3wl8Vq8EzMZVsC7/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-W-02 Issue 01 Rev.00 11-Oct-2021 Control of Client Documents & Data",
    link: "https://drive.google.com/file/d/1wNqAMaObxZrK4u-hGDG8Cy6KpXKluZFj/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-W-03 Issue 01 Rev.00 11-Oct-2021 Servicing of Valves at Site",
    link: "https://drive.google.com/file/d/1upOtWXNCxDdaWD_Q9ZWCUgNAXo21BVmW/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-01 Issue 01 Rev.00 11-Oct-2021 Advance Corporate Brochure",
    link: "https://docs.google.com/spreadsheets/d/1un9kANGDLBKHdsTiB8tCNw2JcpLmo2Sw/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-C-02 Issue 01 Rev.00 11-Oct-2021 Catalogue for Dual Plate Check Valve",
    link: "https://drive.google.com/file/d/1e3h1frysN-PBy-hPqhvKUBxqxFsU5S55/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-03 Issue 01 Rev.00 11-Oct-2021 Catalogue for Concentric Butterfly Valve",
    link: "https://drive.google.com/file/d/1lGKy0-WbQDzadJiknUS7p-eXTejmz0tz/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-04 Issue 01 Rev.00 11-Oct-2021 Catalogue for Double Eccentric Butterfly Valve",
    link: "https://drive.google.com/file/d/1J1R70r41Wj6ZyES0OsrGMJf9ibfvrLce/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-06 Issue 01 Rev.00 11-Oct-2021 Catalogue for Balancing Valve",
    link: "https://drive.google.com/file/d/1pVFs8zpj8gR6SWVasLB5ENSTY7z0AE4L/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-07 Issue 01 Rev.00 11-Oct-2021 Product Realization Capability Chart",
    link: "https://drive.google.com/file/d/1g74sx3iv0DzDl4zgfsJi_118L1EdaZbi/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-08 Issue 01 Rev.00 11-Oct-2021 Catalogue for Motorized Butterfly Valves",
    link: "https://drive.google.com/file/d/1vUNurTd9C8gFnRPHkxqELVPHWLMAtYh4/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-C-09 Issue 01 Rev.00 11-Oct-2021 Catalogue for Pre-Insulated Valves",
    link: "https://drive.google.com/file/d/1aFTmlC5oLiWs167HkWU-JffPv6mQu5ne/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MKT-F-01 Issue 01 Rev.00 11-Oct-2021 Contract Review Check List - Dual Plate Check Valves",
    link: "https://drive.google.com/file/d/1dz9pZiqd7soZNGtejlbnjVAaDA9zcMEQ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MKT-F-02 Issue 01 Rev.00 11-Oct-2021 Contract Review Check List - Concentric Butterfly Valves",
    link: "https://docs.google.com/spreadsheets/d/1bC-Md-GJlmwz9HVJULa_jBZBzJVL-6Py/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-03 Issue 01 Rev.01 12-June-2024 Contract Review Check List Double Ecentric Butterfly Valves",
    link: "https://docs.google.com/spreadsheets/d/1ahU1MHdo8z50-0wHh2IRVJsR8_BaqHdG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-05 Issue 01 Rev.00 11-Oct-2021 Contract Review Check List - Balancing Valves Gun Metal",
    link: "https://docs.google.com/spreadsheets/d/1sLl6VQr_lyLRNQfUkGEBUpJ5yfvRTX6S/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-06 Issue 01 Rev.00 11-Oct-2021 Contract Review Check List - Balancing Valves Cast Iron",
    link: "https://docs.google.com/spreadsheets/d/1DaArACyWOhDq49wbFGzyo9BifNHxhGWc/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-07 Issue 01 Rev.01 12-June-2024 Priced Quotation Format (AVS, Gagret)",
    link: "https://docs.google.com/spreadsheets/d/1SNks_fQsX8eHo7_s9Pj7t_9wXFBHYNM-/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-09 Issue 01 Rev.00 11-Oct-2021 Priced Quotation Format (AVPL, Gagret)",
    link: "https://docs.google.com/document/d/1TroYhgTz9Brk-wzWFKnwi7RzjzVsgDEA/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-10 Issue 02 Rev.00 05-Apr-2025 Sales Order Cum Order Acceptance-Domestic",
    link: "https://drive.google.com/file/d/14imFGQ3FW3oDt7bHrVPRTKfVk_g32WAX/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MKT-F-11 Issue 02 Rev.00 05-Apr-2025 Sales Order Cum Order Acceptance-Export",
    link: "https://drive.google.com/file/d/1W2f1jDAR6owVlMTtCmM18GJuoLI0G708/view?usp=drive_link",
  },
  {
    keyword: "BSV-MKT-F-13 Issue 01 Rev.00 11-Oct-2021 Document Control Format",
    link: "https://drive.google.com/file/d/1gEbY6g5Rjex2mqdNVF6nZy29jArvmdXq/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MKT-F-18 Issue 01 Rev.00 11-Oct-2021 Control of Filing Records",
    link: "https://docs.google.com/spreadsheets/d/1DL6grfsHmdAlMmiFem4gxsxOXab8Xq_8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-19 Issue 01 Rev.00 11-Oct-2021 Complaint Registration - Tracking Format",
    link: "https://docs.google.com/spreadsheets/d/17fJtJtwuvdVF5ZR0arFE4hRQGam-XQx5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-20 Issue 01 Rev.00 11-Oct-2021 Service-Cum-Complaint Attendance Report",
    link: "https://docs.google.com/spreadsheets/d/13gw4gqKkafiv73gaXKegcNfSy4w8zC5u/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-21 Issue 01 Rev.01 25-July-2025 Complaint Review Report",
    link: "https://docs.google.com/document/d/1Ebv2BrMc52g0p2vC9Y-sRHZ9kq4pXC_K/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-23 Issue 01 Rev.00 11-Oct-2021 Document Review - Cover Sheet",
    link: "https://docs.google.com/spreadsheets/d/1p1F8df6fh-k_MJUdT_1_BqD1kbb-sMPU/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-25 Issue 01 Rev.00 11-Oct-2021 Spare Parts List Interchangeability Record",
    link: "https://docs.google.com/spreadsheets/d/17Zd45FHXtMB05nPmW3jLnD9kzRTHMN_G/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-28 Issue 01 Rev.00. 11-Oct-2021 Servicing Requirement Record",
    link: "https://docs.google.com/spreadsheets/d/1bWm7HQrR0EuJsCv4tgvq8IJnWvOmYiMC/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-29 Issue 01 Rev.00 11-Oct-2021 Customer Property Register",
    link: "https://docs.google.com/spreadsheets/d/1haoHBSUwSVOYgHQfrRsLr8ZD_5favsAR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-30 Issue 01 Rev.00 17-June-2024 Customer Feedback form for Pre-order",
    link: "https://docs.google.com/spreadsheets/d/1BPOQ6e8gq7c4fv-Gb37QQDvzsnp78kmZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-31 Issue 01 Rev.01 12-June-2024 Check List for Approval of Sales Order cum Order Acceptance",
    link: "https://drive.google.com/file/d/1HgZy38rM0h82LyomAQrJ0_XkidXyIf0b/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MKT-F-33 Issue 01 Rev.00 11-Oct-2021 Contract Review List Pressure Independent Control Valves",
    link: "https://docs.google.com/spreadsheets/d/14UkJV1aJppgkyX_7GwlXLTeoFBO9rwNI/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MKT-F-34 Issue 01 Rev.00 11-Oct-2021 Contract Review Check List - Large Size Balancing Valves",
    link: "https://docs.google.com/spreadsheets/d/1ea8uRRl7WpiUywxDczZ8m1SpF5FUcQC4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SLS-P-01 Issue 01 Rev. 00 11-Oct-2021 Sales & Dispatch",
    link: "https://docs.google.com/spreadsheets/d/1RQ_-uXxhgk9HR9l5H4CIT7bz9hVEObBZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SLS-O-01 Issue 01 Rev.01 07-Apr-2025 Quality Objectives -Sales",
    link: "https://drive.google.com/file/d/1ozYgYhaCC4NRRWB4iW4ifPKW7uI7nARm/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SLS-W-01 Issue 01 Rev.00 11-Oct-2021 Preparation of The Sales Invoice",
    link: "https://drive.google.com/file/d/1To0E6ORM0_zgBMLg1tyqoCG3MQKRsOPe/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-SLS-W-02 Issue 01 Rev.00 11-Oct-2021 Packing, Shipping, Handling, Storage & Preservation Procedure for Overseas Shipments",
    link: "https://drive.google.com/file/d/1zPkRoit2S9yc3XQF1nZ9unP0umSVgfv5/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SLS-F-01 Issue 01 Rev.00 11-Oct-2021 Sales Order Intimation Register",
    link: "https://drive.google.com/file/d/1WC2dsUvOeY8ciHDUnYFV58syRWLjK_Tm/view?usp=sharing",
  },
  {
    keyword: "BSV-SLS-F-02 Issue 01 Rev.00 11-Oct-2021 Dispatch Intimation",
    link: "https://docs.google.com/spreadsheets/d/1g9vi4wGnA4aLqaydn2Xpq-0HOKCQNdS9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SLS-F-03 Issue 01 Rev.00 11-Oct-2021 Sales Plan for QRL1 & QRL 2",
    link: "https://docs.google.com/spreadsheets/d/1M_hXmC1JD2VJ7KBFh0DYggcJc0Ta9old/edit#gid=2040526610",
  },
  {
    keyword: "BSV-SLS-F-04 Issue 02 Rev.00 07-Apr-2025 Domestic Invoice",
    link: "https://drive.google.com/file/d/1NjI29KzVqd3FZxlrI381k9jEhX1Cwos5/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F-05 Issue 02 Rev.00 07-Apr-2025 Export Invoice",
    link: "https://drive.google.com/file/d/1Yf2auI2a0J-EWQxGC5mYDfVA-g2NbMxZ/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F-06 Issue 02 Rev.00 07-Apr-2025 Domestic Packing List",
    link: "https://drive.google.com/file/d/1I6P3VhhpuBJM0aIs-862oZ8dAwv8MMQs/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F-07 Issue 02 Rev.00 07-Apr-2025 Export Packing List",
    link: "https://drive.google.com/file/d/1vdLNcRZemdEw9NPeM1cJ-vDL15oyc1j7/view?usp=drive_link",
  },
  {
    keyword: "BSV-DSG-P-01 Issue 01 Rev.02 05-Aug-2025 Design and Development",
    link: "https://drive.google.com/file/d/1IJGHAGZbd5v8JcZXNTbGXDmMrhcdxYPZ/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-DSG-P-02 Issue 01 Rev.01 05-June-2024 Control and Use of External Documents in Product Realization",
    link: "https://drive.google.com/file/d/1AtDZ6W7qwjdPtdoZKCi4g0DYgjVn5OGX/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-DSG-O-01_Issue 01_Rev.01_15-Apr-2023 Quality Objectives - Design & Development",
    link: "https://drive.google.com/file/d/1svl9qiSj6QEqpiqLVIv0OPAN8GiYALJZ/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-DSG-W-01 Issue 01 Rev.00 11-Oct-2021 Drawing Numbering System",
    link: "https://drive.google.com/file/d/1Ph69I4J9Mbr15eKvLp0Elav_0whvgK3h/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-51 Issue 01 Rev.00 11-Oct-2021 Design Concept Balancing Valves",
    link: "https://drive.google.com/file/d/1XfL4moj5KDLLZYGki-fC-ke-y1wVbiRF/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-52 Issue 01 Rev.00 11-Oct-2021 Instructions for Storage, Installation, Operation and Maintenance of Balancing Valves",
    link: "https://drive.google.com/file/d/1g-FfGCVbf_jZ1ep5jVCSg3yN1opqrSBj/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-53 Issue 01 Rev.00 11-Oct-2021 Design Concept Y-Strainer",
    link: "https://drive.google.com/file/d/1DxuLfe9dOKh1HVP1bng22J234EnwV4n1/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-54 Issue 01 Rev.00 11-Oct-2021 Instructions for Storage, installation, Operation and Maintenance of Y-Strainer",
    link: "https://drive.google.com/file/d/1r5jYmh4fAj8QnHu4neAYn74-1K66SCZ6/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-55 Issue 01 Rev.00 11-Oct-2021 Design Concept Pre-Insulated Valve",
    link: "https://drive.google.com/file/d/1kqk8TYgNQdWSaYCaAMCu6WdDzjJ-Msj3/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-W-56 Issue 01 Rev.00 11-Oct-2021 Marking of Valves",
    link: "https://drive.google.com/file/d/1hZty9IbVHd2rogFzXOeVowA5zWRyFqHY/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-58 Issue 01 Rev.00 11-Oct-2021 Design Outputs for Pressure Independent Control Valve",
    link: "https://drive.google.com/file/d/1PVtLqb4UnhZ95zLwPY6cFN-wRImMFl-4/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-W-59 Issue 01 Rev.01 01-Aug-2022 Specifications & Marking for UL listed Butterfly Valves",
    link: "https://drive.google.com/file/d/1AuqV3Pd-8Aewrz9u2AI_DyWo-7_8aWg1/view?usp=sharing",
  },
  {
    keyword:
      'BSV-DSG-W-60 Issue 01 Rev.00 11-Oct-2021 Marking for "CE" Marking Valves',
    link: "https://drive.google.com/file/d/151PXkhVOXg9-ympLGSlYWyvxgkvDof2k/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F-12 Issue 01 Rev.00 11-Oct-2021 BOM Format",
    link: "https://drive.google.com/file/d/1uA9PZAJZePv_apwsWmf7xI5EDxbanmXW/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F-15 Issue 01 Rev.00 11-Oct-2021 Work Order DPCV",
    link: "https://drive.google.com/file/d/19ai0GLBauLGb9246DQm4cuGlY3kdnqlh/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F-18 Issue 01 Rev.00 11-Oct-2021 Work Order BD",
    link: "https://drive.google.com/file/d/1iVUq-rRSMphCNPyvyk6onTrzM3FKYdIn/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F-19 Issue 01 Rev.00 25-July-2022 Work Order BT",
    link: "https://drive.google.com/file/d/1_OB8LBGgWrlmsaTyo6Vm3DSviVi2FIKF/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F-20 Issue 01 Rev.00 11-Oct-2021 Work Order BF",
    link: "https://drive.google.com/file/d/1WONXq9EAW75vCMBAcfkZsaxqXB1KPZeS/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG-F-21 Issue 01 Rev.00 11-Oct-2021 List of Available Standards",
    link: "https://docs.google.com/spreadsheets/d/1NtxeFQFmpcfMbmzhvf1RrYbXxsc3Cxo9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-22 Issue 01 Rev.00 11-Oct-2021 Format for Review of Standards",
    link: "https://docs.google.com/document/d/1wN5AIsgiabZ_BqmGxwyQb6WlG34lRD7x/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-51 Issue 01 Rev.00 11-Oct-2021 Design Inputs Balancing Valves",
    link: "https://docs.google.com/spreadsheets/d/1U93upS9NArvkl02jz6_TcDKcJpI_VBKU/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-52 Issue 01 Rev.00 11-Oct-2021 Work Order Balancing Valves",
    link: "https://docs.google.com/spreadsheets/d/1xDC0ZBWTNLyj26RkKO_6MwJdWSGLDLv0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-53 Issue 01 Rev.00 11-Oct-2021 Design Verification & Review Sheet for Balancing Valves",
    link: "https://docs.google.com/spreadsheets/d/1EO2UWw5XRcWm4Dcf--h-XAVg2_EpYqr8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-54 issue 01 Rev.00 11-Oct-2021 Design Calculation Sheet Balancing Valves",
    link: "https://docs.google.com/spreadsheets/d/1cfTho5w4epgO0G9tdHZgx4p_jglYXQc3/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-55 Issue 01 Rev.00 11-Oct-2021 Design Inputs Y-Strainer",
    link: "https://docs.google.com/spreadsheets/d/18D8uSqwHmK9Ni44PYZRNi7v75-lMtUH2/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F-56 Issue 01 Rev.00 11-Oct-2021 Work Order Y-Strainer",
    link: "https://docs.google.com/spreadsheets/d/17-8k3OmH0KGOjsG3FD05DPZ1Vjgv34TV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-57 Issue 01 Rev.00 11-Oct-2021 Design Verification Review Sheet for Y-Strainer",
    link: "https://docs.google.com/spreadsheets/d/1QZdUiLBY3JdNAYsIpX5jcpe7uVZQhpvb/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-58 Issue 01 Rev.00 11-Oct-2021 Design Calculation Sheet Y-Strainer",
    link: "https://docs.google.com/spreadsheets/d/1HE3OFxILh98msHIpJjVdB8pDJagtL7Yq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F-59 Issue 01 Rev.00 11-Oct-2021 Work Order PICV",
    link: "https://docs.google.com/spreadsheets/d/1913xemgu_TjuGHBmRyzq50xBKzPtpxrp/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-60 Issue 01 Rev.00 11-Oct-2021 Insulation Thickness Calculation Sheet for Pre-Insulated Valves",
    link: "https://docs.google.com/spreadsheets/d/1BQT-yYSrqYQA_qHZV7hO8QEKgVGNATHu/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F-61 Issue 01 Rev.00 11-Oct-2021 Design Inputs - Pressure Independent Control Valves (PICV)",
    link: "https://docs.google.com/spreadsheets/d/1tT3nOy1YBMe-TjEYmsxqbfHDoFtEYn1k/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-IT-P-01 Issue 01 Rev.00 11-Oct-2021 IT Procedure",
    link: "https://drive.google.com/file/d/1GFGMu2hRJ28ArGAK2CFpKT8tO5yDzMP7/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-O-01 Issue 01 Rev.00 11-Oct 2021 Objectives",
    link: "https://drive.google.com/file/d/1ibhpJNjUfSGUo9xMmGOUIctzKurKEDaO/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-W-01 Issue 01 Rev.00 11-Oct-2021 Backup & Recovery",
    link: "https://drive.google.com/file/d/1WulSv0-G78CQP-Lu_V_BorrHpOxp_2EX/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-C-01 Issue 01 Rev.00 11-Oct-2021 Security Architecture",
    link: "https://drive.google.com/file/d/1jltHd0OlbciwOjgzCjg84_H_hdCc_MQE/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-C-02 Issue 01 Rev.00 11-Oct-2021 AV Network Diagram",
    link: "https://drive.google.com/file/d/1JxiDC53uv149lrhd-RbFnY6mOKbfZbie/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-F-01 Issue 01 Rev.00 11-Oct-2021 List of Hardware",
    link: "https://docs.google.com/spreadsheets/d/1oTB0OONhf53XRP7v33fG9YXTv0ku3sYU/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-IT-F-02 Issue 01 Rev.00 11-Oct-2021 New Joinee Check List",
    link: "https://docs.google.com/spreadsheets/d/1gSNkZjSeYAAx5aM_f5DbkUxPKFSZq2aO/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-IT-F-03 Issue 01 Rev.00 11-Oct-2021 Employee Departure Check List",
    link: "https://docs.google.com/spreadsheets/d/1CJ0Z2AsyZqr-CQYCr-SYNzP4d2U6DEln/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-IT-F-04 Issue 01 Rev.00 11-Oct-2021 Hardware & Software Audit Form",
    link: "https://docs.google.com/spreadsheets/d/1kPUmyu1RzyyzctWKRObk5afOMIKTOxyk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-P-01 Issue 01 Rev.01 11-Jan-2024 Production Process Control",
    link: "https://drive.google.com/file/d/117mBJm1XjO-nbZh8RyxxU3mcGLeAm_YI/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MFG-O-01 Issue 01 Rev.01 01-Feb-2023 Quality Objectives - Production & Maintenance",
    link: "https://drive.google.com/file/d/1QOeVjKp_FrfarW3YqJghjmgE3Iwn-06G/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MFG-W-04 Issue 01 Rev.00 11-Oct-2021 Balancing Valve Assembly - Gun Metal",
    link: "https://drive.google.com/file/d/1OxvCs4C_m-cGoj1cqo5qADrUKfWpKkUx/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MFG-W-05 Issue 01 Rev.00 11-Oct-2021 Balancing Valve Assembly - Cast Iron",
    link: "https://drive.google.com/file/d/1HGZbLY5jUNL2X3FSLyx0LeubDN4jM-Pu/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-06 Issue 01 Rev.01 04-Sep-2023 Butterfly Valve Assembly (Concentric)",
    link: "https://drive.google.com/file/d/1UpK8f04YLAS9qrn35VNQ_fcZPhk-bUAM/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-07 Issue 01 Rev.00 11-Oct-2021 Dual Plate Check Valve Assembly",
    link: "https://drive.google.com/file/d/1oxGomXeGtRTHrfPe3-fN9JervCaEf8vE/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-W-09 Issue 01 Rev.01 04-Sep-2023 Vulcanization",
    link: "https://drive.google.com/file/d/1y8hr6Jrd3q0SbDQGVXQdx4louw2cHXOW/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MFG-W-11 Issue 01 Rev.00 11-Oct-2021 Codification of Rubber Chemical",
    link: "https://drive.google.com/file/d/1D2nfPJnAlCUEZ_STgj0VoT0HGYRV19LT/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-W-12 Issue 01 Rev.00 11-Oct-2021 Rubber Composition",
    link: "https://drive.google.com/file/d/1U-VDSRn6YgetZEi-B46imHlcZWhD5AYv/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-13 Issue 01 Rev.00 11-Oct-2021 Electroless Phosphorus Coating Procedure",
    link: "https://drive.google.com/file/d/1wmbg_SrR5MU2ZkPmU0M5RL0Po8F_ICl1/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-16 Issue 01 Rev.00 11-Oct-2021 Double Eccentric Butterfly Valve Assembly",
    link: "https://drive.google.com/file/d/1jZGt12GiVo2rP1UZqKiVaMdY1AP9scLg/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-20 Issue 01 Rev.00 11-Oct-2021 Surface Preparation of Casting",
    link: "https://drive.google.com/file/d/1d-lvS_elr0rhiCfglysysx8r_wSi2ZDx/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-W-21 Issue 01 Rev.00 11-Oct-2021 Electrode Baking",
    link: "https://drive.google.com/file/d/1zzHPfdmnop_5IX7KAbqaFaJRvJ6CWqYX/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-W-22 Issue 01 Rev.00 11-Oct-2021 Welding",
    link: "https://drive.google.com/file/d/1YZmIgsMB922tXOeTHKrPivUtcMMQVmjv/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-23 Issue 01 Rev.00 11-Oct-2021 Cutting Parameters for Machining Operations",
    link: "https://drive.google.com/file/d/1iaJGwz2n6AnyZjJDjvf_wnRXPgPJhF2L/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-24 Issue 01 Rev.00 11-Oct-2021 Operation Sequencing for Machining & Welding Processes",
    link: "https://drive.google.com/file/d/19Jh7V7jmlTerPZeJVzIwa94qTs2CN5Sw/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-28 Issue 01 Rev.00 11-Oct-2021 Extended Bonnet Assembly of Butterfly Concentric Valves",
    link: "https://drive.google.com/file/d/1DGsJl8gz_y-nux3XenVoSb8iErKtp5hX/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-29 Issue 01 Rev.00 11-Oct-2021 Valve Flange Marking and Drilling",
    link: "https://drive.google.com/file/d/1VfsRQHmOmHp31sPC3p1pjfwTYKHv5zIn/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-30 Issue 01 Rev.00 11-Oct-2021 Painting of Steam Jacketed Valves Before Jacketing",
    link: "https://drive.google.com/file/d/1i5odqKaKBNuCywnlhVJPiz0Ziz_J_O_1/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-W-31 Issue 01 Rev.00 11-Oct-2021 Handling of BOM Drawing",
    link: "https://drive.google.com/file/d/18rinEXBEz0ehTC9JkLijeNHwa1ukcrQN/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-W-32 Issue 01 Rev.01 01-July-2022 Nylon Coating",
    link: "https://drive.google.com/file/d/1G7nZIxm2D4KVC5I4vApwJQ6rXaUIRKdo/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MFG-W-33 Issue 01 Rev.01 04-Sep-2023 Jigs and Fixtures Management",
    link: "https://drive.google.com/file/d/1DFHQpBHuUJxBImIekiqG0GfG7Vzu4S49/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-38 Issue 01 Rev.00 11-Oct-2021 Pressure Independent Control Valve (PICV) Assembly",
    link: "https://drive.google.com/file/d/1g3SFfjZvX9KFQJ4VQyhh9sE_J4Fg4ZZT/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-39 Issue 01 Rev.00 11-Oct-2021 Blasting & Painting on Valves",
    link: "https://drive.google.com/file/d/1z0hK1mWVWgldb_w3oSYuGrn0hrA8wa6m/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MFG-W-40 Issue 01 Rev.00 11-Oct-2021 Pre-Insulation Process on Semi-Finished Valves",
    link: "https://drive.google.com/file/d/11uRz_-50Dsu6xBlkGyfwmrk3OLzngSqe/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-W-41 Issue 01 Rev. 00 01-April-2023 Work Instruction for Bolt Sequencing & Tightening for Valves.ChartsCharts",
    link: "https://drive.google.com/file/d/1hhPFFzM7_TNB7sbKVAzG5oSnsC-bJRQu/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MFG-C-01 Issue-01 Rev.00 11-Oct-2021 Production Process Flow Chart",
    link: "https://drive.google.com/file/d/11x_yjuTfiQodBTLr616IWbiecS24UuHj/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-02 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Dual Plate Check Valve - Body",
    link: "https://drive.google.com/file/d/1AETjstai1zKloyUi5ZOsrVtNVqQUBQoL/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-03 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Dual Plate Check Valve - Plates",
    link: "https://drive.google.com/file/d/1AfU9kuwBcO1tGb57tLJtXF0v4GWhtcNk/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-04 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Balancing Valve Gun Metal Body",
    link: "https://drive.google.com/file/d/1prN8toYQvkRffeGwdUUKxOEi5CA-RXIF/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-05 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Gun Metal Balancing Valve Bonnet",
    link: "https://drive.google.com/file/d/1cUrV64-SKNBSyOrOCT2YavMaOFEFW3UX/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-06 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Iron Balancing Valves Bodies",
    link: "https://drive.google.com/file/d/1RN-9Pi5dphpbjXx2ALqj2M3k3hWYMez5/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-07 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Cast Iron Balancing Valves Discs",
    link: "https://drive.google.com/file/d/1nMFDOoo3QwhsQ1ZEf7Ruhb2sAy6wg3yj/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-09 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Double Offset Valve - Body",
    link: "https://drive.google.com/file/d/1uVXAZN_G0xYE7YNFSDnTviLHYnwyKlpI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-10 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Double Offset Valve - Disc",
    link: "https://drive.google.com/file/d/1M1FKcsZRAzehdx9_Nn3Y3taRkA49JiUP/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-11 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Double Offset Valve - Seat Ring",
    link: "https://drive.google.com/file/d/1MHc-PiT9GKx2wDhu2mv5p9j9-wiOJylp/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-12 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Double Offset Valve - Retainer Ring",
    link: "https://drive.google.com/file/d/1ELOUtudOp8BQNKs42bbFPlaRm3o2HYr3/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-13 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Concentric Valve - Body",
    link: "https://drive.google.com/file/d/1LGTnk9ef2AJA_AS1mMy1gD27j9_KSiQI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-14 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Concentric Valve - Disc",
    link: "https://drive.google.com/file/d/1P1O9bPJTMqlm3AUy_elYh2T9QxKt4mqb/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-15 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Pressure Independent Valves Bodies",
    link: "https://drive.google.com/file/d/12voyXj9-suaRLyY-1Z5N7acUspPn0FiC/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-16 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Pressure Independent Valves Diaphragm Cover",
    link: "https://drive.google.com/file/d/1ro1e3uGQOVj4hRJh0OmXR8ZbgfexkxHI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-17 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Large Size Balancing Valves Bodies",
    link: "https://drive.google.com/file/d/1qhlLsoXVGeSTPzGy6YI-R67AbeoeTQ5O/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-18 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Cast Iron Balancing Valves Discs",
    link: "https://drive.google.com/file/d/1vyZr5_7CA6OR-bAyDRERvD7QZSpYxMC6/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C-19 Issue 01 Rev.00 11-Oct-2021 Machining Sequence Chart for Pressure Independent Valves Top Flange",
    link: "https://drive.google.com/file/d/1ZxRqnC_6tHqkz-sFAQtkV-8q2MDejkr6/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-F-01 Issue 01 Rev.00 11-Oct-2021 Daily Production Report",
    link: "https://docs.google.com/spreadsheets/d/1YWHwZSh23BPUBWNYG_GTL1aOhToSbQIv/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-02 Issue 01 Rev.00 11-Oct-2021 Weld Record Log Book",
    link: "https://docs.google.com/spreadsheets/d/1IBedDdynk6IrSgzQqfUl7rUstWiJAvME/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-03 Issue 01 Rev.00 11-Oct-2021 Valve Completion Analysis Report - DPCV",
    link: "https://docs.google.com/document/d/1iDRAlETvF0RanclVSkfVlyzo58LiqvN0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-04 Issue 01 Rev.00 11-Oct-2021 Butterfly Valve (Double Eccentric) Assembly Log Book",
    link: "https://docs.google.com/spreadsheets/d/1qpnPP2VgFaGDBS6Wla6mFDjNrIYpKRrA/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-05 Issue 01 Rev.00 11-Oct-2021 Butterfly Valve (Concentric) Assembly Log Book",
    link: "https://docs.google.com/spreadsheets/d/16Lasvq0_RWVoOLxXPGMa8IIYOwiOi6OE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-07 Issue 01 Rev.00 11-Oct-2021 DPCV Assembly Log Book",
    link: "https://docs.google.com/spreadsheets/d/1ADu8jF8RcwW5utDX4Cw9iW2V-b_Yrk4I/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-08 Issue 01 Rev.00 11-Oct-2021 Jig & Fixture Inspection Report",
    link: "https://docs.google.com/spreadsheets/d/1ooKqbAllatbfLVZCSYzzltkH7AzmKW4i/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-09 Issue 01 Rev.00 11-Oct-2021 Jigs & Fixture Validation",
    link: "https://docs.google.com/spreadsheets/d/1Bk3pBuMJ2-W-0Ug9aM1ymgl0wjni0tGZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-10 Issue 01 Rev.00 11-Oct-2021 Machining Inspection Report",
    link: "https://docs.google.com/spreadsheets/d/1GhqHsXMsC29wk3fBrS6eu7go6uEYBqS9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-11 Issue 01 Rev.00 11-Oct-2021 Job Card A, B and C",
    link: "https://docs.google.com/spreadsheets/d/1692ysmip6LG9krB1P9kDoRIoZktexcoh/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-13 Issue 01 Rev.00 11-Oct-2021 Monthly Production Plan",
    link: "https://docs.google.com/spreadsheets/d/19QvMqLC3plrr1FmUEt-zfVkpkKqVKIiY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-14 Issue 01 Rev.00 11-Oct-2021 Valve Handover Report",
    link: "https://docs.google.com/spreadsheets/d/1TMFRVqV4I9ZDYHpDD4IILDID21jXMDSZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-15 Issue 01 Rev.00 11-Oct-2021 Advance Notification",
    link: "https://docs.google.com/spreadsheets/d/1yGOOxTPNQmkHvpbrNUw2lG4kfSBb1CR6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-16 Issue 01 Rev.00 11-Oct-2021 Painting Log Book",
    link: "https://docs.google.com/spreadsheets/d/1JeV194rHfDUaswHiROroKMiEv8e8fFwG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-17 Issue 01 Rev.00 11-Oct-2021 Work Order Review Checklist",
    link: "https://docs.google.com/spreadsheets/d/1MVwisdvBMegOp39uxcVAeAk-M4Kw-7DE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-18 Issue-01 Rev. 00 11-Oct-2021 Valve Tag Allotment Record",
    link: "https://docs.google.com/spreadsheets/d/16srfQme3LsqzBIFMRKT9LhrMza4plYtb/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-19 Issue 01 Rev.00 11-Oct-2021 Stage Tag",
    link: "https://docs.google.com/spreadsheets/d/1BZC_naxGKisa7KjO7yl29qBjuPyFtyby/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-22 Issue 01 Rev.00 11-Oct-2021 Heat Treatment Record",
    link: "https://docs.google.com/spreadsheets/d/12L8-P-i3l4LrElgAJTNEEziDASnUZlbR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-23 Issue 01 Rev.00 11-Oct-2021 Validation Report - Paint and Nylon Coating",
    link: "https://docs.google.com/spreadsheets/d/1Qp4mpHuPmZ133G0ezpkdjR0IT-EbbWkr/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-24 Issue 01 Rev.00 11-Oct-2021 Validation Report - Heat Treatment",
    link: "https://docs.google.com/spreadsheets/d/1di_1hsrGuwDis1Hw1K1Je7xSjSb5ZMZJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-25 Issue 01 Rev.00 11-Oct-2021 Assembly Rework Record for DPCV",
    link: "https://docs.google.com/spreadsheets/d/1n8CF22YY9MnSYHJmCa_TGK50Y-q-iRdG/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-26 Issue 01 Rev.00 11-Oct-2021 Assembly Rework Record for BD",
    link: "https://docs.google.com/spreadsheets/d/1JwrBNoEDUNB1IC2xXxoyBjyH76ioqxws/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-27 Issue 01 Rev.00 11-Oct-2021 Assembly Rework Record for BFV",
    link: "https://docs.google.com/spreadsheets/d/14baD9MaJ7TYcVpt9q1KqGvftG6dilNQi/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-28 Issue 01 Rev.00 11-Oct-2021 Format for Jigs and Fixtures Indexing Sheet",
    link: "https://docs.google.com/spreadsheets/d/1aY3ekYCzd2NPDapEC4WtYbX1Hv18hf7g/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-29 Issue 01 Rev.00 11-Oct-2021 Decision Tree for Valve Machining",
    link: "https://docs.google.com/spreadsheets/d/1Pxbauv31HJDf_Ai_I9QNzLkBnm_zJVCt/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-30 Issue 01 Rev.00 11-Oct-2021 Machine capability Master Matrix for Machining",
    link: "https://docs.google.com/spreadsheets/d/1955SIWLaWzqf5IfjO6q58pTlYTHZyObB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-37 Issue 01 Rev.00 11-Oct-2021 Flange Hole Drilling Jigs",
    link: "https://docs.google.com/spreadsheets/d/1I4ifzFhnnkSAJtWvEpbYtQe8c9Pk-R83/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-38 Issue 01 Rev.00 11-Oct-2021 List of Vulcanising Dies for BF Body",
    link: "https://docs.google.com/spreadsheets/d/1q8fuh5AXmiLSZPRoMl8BM9A42BcPoCgj/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-40 Issue 01 Rev.00 11-Oct-2021 Jigs & Fixtures Issue Form",
    link: "https://docs.google.com/spreadsheets/d/10HFVVZ78Xx4jiEBJ7ZL8ADm8fuq6lq45/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-41_Issue 01 Rev.00 11-Oct-2021 Performance Test Data Sheet - Balancing Valve",
    link: "https://docs.google.com/spreadsheets/d/1UfWkBPIlhYw4uDP0qImJUG3BDBaWxFsq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-42 Issue 01 Rev.00 11-Oct-2021 Balancing Valve Assembly Log Book",
    link: "https://docs.google.com/spreadsheets/d/1K9tv_DNT5meorpNfd5CEN9GgQ1p9hZ0p/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-45 Issue 01 Rev.00 11-Oct-2021 List of Insulation Dies for Valves",
    link: "https://docs.google.com/spreadsheets/d/19NvSL-NoHOnNuUnyJ8isRtPDVEEKV5F0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-46 Issue 01 Rev.00 11-Oct-2021 PICV Assembly Log book",
    link: "https://docs.google.com/spreadsheets/d/1-Eg4z4ygbIgGZulGLkn3dtsfJwPh72xx/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-48-Issue 01 Rev.00 11-Oct-2021 Assembly Rework Record PICV",
    link: "https://docs.google.com/spreadsheets/d/16dO3AkUMmVjI6Yye1sZxsmzVf-h_mqCP/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MFG-F-49 Issue 01 Rev.00 11-Oct-2021 Assembly Rework Record BV",
    link: "https://docs.google.com/spreadsheets/d/1kIw19KYsqsfNByEWgfir233nnLpGM4yg/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F-50 Issue 01 Rev.00 01-July-2022 Nylon Coating Log Book",
    link: "https://docs.google.com/spreadsheets/d/1NxDaNZ2tK7fvhbEFTu0-194QZvwLy8cR/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-P-01 Issue 01 Rev.00 11-Oct-2021 Preventive Maintenance of Equipment",
    link: "https://drive.google.com/file/d/1x3Aa8TN3jpTL96KyXULuadUTTJMRhTop/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-O-01 Issue 01 Rev.01 01-Feb-2023 Quality Objectives - Production & Maintenance",
    link: "https://drive.google.com/file/d/1QOeVjKp_FrfarW3YqJghjmgE3Iwn-06G/view?usp=share_link",
  },
  {
    keyword:
      "BSV-MNT-W-01 Issue 01 Rev.00 11-Oct-2021 Air Compressor Maintenance",
    link: "https://drive.google.com/file/d/1tDm1ssvxaVp5TCww0nWpI-G531dGkG7b/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-02 Issue 01 Rev.00 11-Oct-2021 Lathe Machine Maintenance",
    link: "https://drive.google.com/file/d/1Clha7GDYOfQhEVDpgLMf_kppExQmR9am/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-03 Issue 01 Rev.00 11-Oct-2021 Milling Machine Maintenance",
    link: "https://drive.google.com/file/d/1vTEdkSRdoOfFe77KsZSU8TLawnExSkA-/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-04 Issue 01 Rev.00 11-Oct-2021 Drilling Machine Maintenance",
    link: "https://drive.google.com/file/d/1vuyji4hg87nGGLEsQ7QB3kYDDYppW5VI/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT-W-05 Issue 01 Rev.00 11-Oct-2021 Generator Maintenance",
    link: "https://drive.google.com/file/d/1RZeQ3WtQcCCT-WM1pzDAP-sFjWYmY-1K/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT-W-06 Issue 01 Rev.00 11-Oct-2021 VTL Machine Maintenance",
    link: "https://drive.google.com/file/d/1SIzQQe2_5gaEI-RzGUxAO7C84j_jr8HU/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-07 Issue 01 Rev.00 11-Oct-2021 Boring Machine Maintenance",
    link: "https://drive.google.com/file/d/17PPA4AJ6b1ZrlVu2L1yYE70FeuTb9XOT/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-08 Issue 01 Rev.00 11-Oct-2021 Hydraulic Test Bed Maintenance",
    link: "https://drive.google.com/file/d/1_naIWeq2l_PHSwd2iAfZyH0WexcdbEd4/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-09 Issue 01 Rev.00 11-Oct-2021 Welding Machine Maintenance",
    link: "https://drive.google.com/file/d/1PJ9qFAMP6UpMd9gQkPeK98XSLeF_RZYZ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-10 Issue 01 Rev.00 11-Oct-2021 Surface grinder Maintenance",
    link: "https://drive.google.com/file/d/11HSimYvd6X-D3jCZ_ybVoOXL3JuZZmjA/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT-W-11 Issue 01 Rev.00 11-Oct-2021 CNC Machine Maintenance",
    link: "https://drive.google.com/file/d/1n2vbnPvm1LhhTFRiN3yVCmv0exzxBGmn/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-12 Issue 01 Rev.00 11-Oct-2021 Shot Blasting Maintenance",
    link: "https://drive.google.com/file/d/1dtUwKh76XjLm-5NOvHMpNKwcT62d4dgZ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-13 Issue 01 Rev.00 11-Oct-2021 Slotting Machine Maintenance",
    link: "https://drive.google.com/file/d/1mupAUkXdPtzbBUf3pEbjOBFAFGg3inxW/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MNT-W-14 Issue 01 Rev.00 11-Oct-2021 Shaper Machine Maintenance",
    link: "https://drive.google.com/file/d/1hWfgE7uQuAIduYCbQ8ezqBKRT1AAMUiT/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT-F-01 Issue 01 Rev.00 11-Oct-2021 Breakdown Maintenance",
    link: "https://docs.google.com/spreadsheets/d/1nUBI01cslgnJPmiXCSJG07EhoCMWIcjL/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F-02 Issue 01 Rev.00 11-Oct-2021 Master List of Machines",
    link: "https://docs.google.com/spreadsheets/d/1QXH8mWlD_Sy7RWj6T5VL4s7cLaYuMdJx/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-03 Issue 01 Rev.00 11-Oct-2021 Equipment or Machine History Card",
    link: "https://docs.google.com/spreadsheets/d/1VMKcNyDFkqavOZrVXZrrwPEcVnheFWB9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-04 Issue 01 Rev.00 11-Oct-2021 Annual Preventive Maintenance Plan",
    link: "https://docs.google.com/spreadsheets/d/1oq8198sOCuTDQRDFaTwTBNUIcem4xoHy/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-05 Issue 01 Rev.00 11-Oct-2021 Annual Preventive Frequency",
    link: "https://docs.google.com/spreadsheets/d/1UYmUZdxcNmllJ1QfbZbVd61IDJ9J8Ysh/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-06 Issue 01 Rev.00 11-Oct-2021 Annual Machine Calibration Calendar",
    link: "https://docs.google.com/spreadsheets/d/18oCX9dIQDnNXSqoVd3pDvrCznWB5Nkon/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F-07 Issue 01 Rev.00 11-Oct-2021 Master List of Manuals",
    link: "https://docs.google.com/spreadsheets/d/1ug37JVf8dze_GHoXJacZXKxit_nVCw1t/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-08 Issue 01 Rev.00 11-Oct-2021 Master List of Lubricants",
    link: "https://docs.google.com/spreadsheets/d/1ayRJ3nm2vAdz6OV_yTnvMmamYFieBn_u/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-09 Issue 01 Rev.00 11-Oct-2021 Preventive Maintenance Record",
    link: "https://docs.google.com/spreadsheets/d/1pSJtvl_Hr1R-GT5-WM3xSs813z6uxDob/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-10 Issue 02 Rev.00 16-Jan-2023 Daily Preventive Maintenance",
    link: "https://docs.google.com/spreadsheets/d/1l7xTvMWD575GJHZ8URDo6Z0Z208uhut5/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-11 Issue 01 Rev.00 11-Oct-2021 Permitted Crane Operator",
    link: "https://docs.google.com/spreadsheets/d/1ddqJkHJeyIZqaTFSvZ04Eq_05ESkWaP4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F-12 Issue 01 Rev.00 11-Oct-2021 Crane Operator Permit",
    link: "https://docs.google.com/spreadsheets/d/1q6dqBhSO6h8xb8emClGPtpidwYfjqHY9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-13 Issue 01 Rev.00 11-Oct-2021 Machine Calibration Test Chart",
    link: "https://docs.google.com/spreadsheets/d/1gOHGdhixEaUdAQVC382Z4kN37bIU6sR3/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-14 Issue 01 Rev.00 11-Oct-2021 Master List of Spare Parts of Machines or Equipments",
    link: "https://docs.google.com/spreadsheets/d/12785QP9ZPjYIJHbAn_weBCLKHxvjjKaT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-MNT-F-15 Issue 01 Rev.00 11-Oct-2021 Daily Machine Availability vs Utilization",
    link: "https://docs.google.com/spreadsheets/d/18tJG-lekY9zTvjjC9fsgKdFOTDggXH68/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-P-01 Issue 01 Rev. 00 11-Oct-2021 Inspection and Testing",
    link: "https://drive.google.com/file/d/1kLP-rwAPLLe7hSGAiWwWnG2OjPVgI4Xw/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-P-02 Issue 01 Rev. 00 11-Oct-2021 Verification of Purchased Products & Activities",
    link: "https://drive.google.com/file/d/1RxX0rP9oDiTvHXb_Seb1_A-3JZIulQk2/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-P-03 Issue 01 Rev. 00 11-Oct-2021 Identification & Traceability",
    link: "https://drive.google.com/file/d/18yNrkb2t2ajnWrT9Iv84hBjeV9JABvxW/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-P-04 Issue 01 Rev. 00 11-Oct-2021 Product Inspection / Test Status",
    link: "https://drive.google.com/file/d/1ztiI1yTv0Ml_Mlqt5gFAHXl9yo-ACREM/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-P-05 Issue 01 Rev. 00 11-Oct-2021 Validation of Processes for Production and Servicing",
    link: "https://drive.google.com/file/d/1nY1WU6f2W3pCj2vlGNnWNOKcFyjT7uAR/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P-06 Issue 01 Rev. 01 10-Jan-2023 Product Release",
    link: "https://drive.google.com/file/d/1bLEnk1J3sbIALx1HpAXHqi1PpNtnUT8i/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-P-07 Issue 01 Rev. 00 11-Oct-2021 Control of Testing, Measuring & Monitoring Equipments",
    link: "https://drive.google.com/file/d/1E5chCkpaoiXrC-LjAJZy7mtnl9b--6zy/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-P-08 Issue 01 Rev. 00 11-Oct-2021 Control of Non-conforming Products",
    link: "https://drive.google.com/file/d/1aH8GMlaRHQp8gYBHwr6Tfg2VBqAKe8wi/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-O-01 issue 01 Rev.01 01-Feb-2023 Quality Objectives - Quality",
    link: "https://drive.google.com/file/d/1S6GbNl0Auz-oFz0KndlLhffsLBgsEfwz/view?usp=share_link",
  },
  {
    keyword:
      "BSV-QAD-W-01 Issue 01 Rev.02 15-Mar-2023 Functional or Pressure Testing - Dual Plate Check Valve",
    link: "https://drive.google.com/file/d/1rhgm0uw9OfccKetyUiHKo5eS-Q7j7uIa/view",
  },
  {
    keyword:
      "BSV-QAD-W-02 Issue 01 Rev.02 15-Mar-2023 Functional or Pressure Testing - Butterfly Valve",
    link: "https://drive.google.com/file/d/1igQRPlyW-gC_s66W2pq3L08IfdOE9O6A/view",
  },
  {
    keyword:
      "BSV-QAD-W-03 Issue 01 Rev.00 11-Oct-2021 Functional / Pressure Testing - Screwed Balancing Valve",
    link: "https://drive.google.com/file/d/1W1hcnc8Jzi7k1QAOsFWMTyY0sLOCTBDP/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-05 Issue 01 Rev.03 10-May-2024 Radiography Procedure",
    link: "https://drive.google.com/file/d/19urzevARiB78da4RmcNyd-xalltRys6i/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-06 Issue 01 Rev.00 11-Oct-2021 Ultrasonic Testing Procedure",
    link: "https://drive.google.com/file/d/13LTS6zQyVsMacsmBY3hqwXf8uuSMfKXt/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-07 Issue 01 Rev.01 10-May-2024 Liquid Penetrant Testing",
    link: "https://drive.google.com/file/d/1AsiMttDtuGrdRsiItIKxro-cS-X180bb/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-QAD-W-08 Issue 01 Rev. 00 11-Oct-2021 Magnetic Particle Testing",
    link: "https://drive.google.com/file/d/1kPhctxYEIdJhCeXQXibVLP8903TFNyND/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-09 Issue 01 Rev.00 11-Oct-2021 Positive Material Identification",
    link: "https://drive.google.com/file/d/1ybju7Zk-yourZchJtSeKr0xEbo7_XmtT/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-10 Issue 01 Rev.00 11-Oct-2021 Rubber Testing",
    link: "https://drive.google.com/file/d/1vDWEZgH5nG7HP-O5wfS3_8yboTN_d14E/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-12 Issue 01 Rev.00 11-Oct-2021 Cleaning Procedure of Valves for Oxygen Service",
    link: "https://drive.google.com/file/d/1OHMVGkbk9vg-OxaE-o9e-iVyddqQOMtb/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-13 Issue 01 Rev.00 11-Oct-2021 Cryogenic / Low Temperature Testing",
    link: "https://drive.google.com/file/d/1wuSjvOY7rO7ljtdZhlfQ23B1VOJHYqfC/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-16 Issue 01 Rev.00 11-Oct-2021 Casting for CE Marking Valves",
    link: "https://drive.google.com/file/d/19h-fvgrrwjchZh0YqrASxrhzBGC6Z7NI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-18 Issue 01 Rev.00 11-Oct-2021 Heat Treatment of Springs for Dual Plate Check Valves",
    link: "https://drive.google.com/file/d/1eapRyIddH4D_BsMIhK34dkz-HmpSSzrG/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-19 Issue 01 Rev.00 11-Oct-2021 Heat Treatment of Valve Components",
    link: "https://drive.google.com/file/d/1e7oS9N_5xKsIpxIQDzLxsRFAqqWNt4tS/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-20 Issue 01 Rev.00 11-Oct-2021 Hardness Testing",
    link: "https://drive.google.com/file/d/1ut7ay1XUMFom5M2aTe1t7tYnguLs8bAg/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-22 Issue 01 Rev.00 11-Oct-2021 Dry Cycle Testing Procedure for Springs of Dual Plate Check Valve",
    link: "https://drive.google.com/file/d/1ViaV7TvPOlR6clcQ_cRVQT0Sf8RqzRHN/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-23 Issue 01 Rev. 01 01-Apr-2023 Colour Coding",
    link: "https://drive.google.com/file/d/1XZRNiyX4Y8TrBgTD7-HejU7T1ika9D-v/view",
  },
  {
    keyword:
      "BSV-QAD-W-24 Issue 01 Rev.01 01-Feb-2023 Functional / Pressure Testing Procedure - Flanged Balancing Valve",
    link: "https://drive.google.com/file/d/1hD2W-_rAHijuoJffhVYwGikbYP0hRKGE/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-25 Issue 01 Rev.00 11-Oct-2021 EPDM Coating Procedure on Disc",
    link: "https://drive.google.com/file/d/173rbeJOnKFd5Zhzk8ovb1UverpVxhcI_/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-26 Issue 01 Rev.00 11-Oct-2021 Testing Procedure for Validation for ENP Coating",
    link: "https://drive.google.com/file/d/1YGalf_qu1pAVlUOn1qunaKB0N4xqxOi2/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-28 Issue 01 Rev.00 11-Oct-2021 Salt Contamination Procedure",
    link: "https://drive.google.com/file/d/1k0VaKv4jR2oQnQndf0suaZfCAmtvNsVs/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-30 Issue 01 Rev.02 10-May-2024 Written Practice for NDT",
    link: "https://drive.google.com/file/d/1dbyU_trYK2OBquPFBTgPvpDspnBK9Cir/view?usp=drive_link",
  },
  {
    keyword: "BSV-QAD-W-31 Issue 01 Rev.01 10-May-2024 Visual Inspection",
    link: "https://drive.google.com/file/d/1AyLhaa3e0l9nCXm79sA-oAnifwKT4gWH/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-QAD-W-32 Issue 01 Rev.00 11-Oct-2021 Post Weld Heat Treatment of Valve Components",
    link: "https://drive.google.com/file/d/1v5p1_nlQzQ90WKurvkyOKgh8S99Pwjm7/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-37 Issue 01 Rev.00 11-Oct-2021 Repair Procedure",
    link: "https://drive.google.com/file/d/1OuyLHhMxR3bGuWqIFhrhLxgOTPhlxc-E/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-38 Issue 01 Rev.00 11-Oct-2021 Welding Material Handling Procedure",
    link: "https://drive.google.com/file/d/1TMFpaRSalAY7aib1XrGhm0J4ltJOUsVg/view?usp=share_link",
  },
  {
    keyword: "BSV-QAD-W-39 Issue 01 Rev.00 11-Oct-2021 Pickling & Passivation",
    link: "https://drive.google.com/file/d/1r8fmUmSS8Q_8NciJWgDw3hNUgnCrUWt1/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-40 Issue 01 Rev.00 11-Oct-2021 Cleaning Procedure of Valves for Air Separation Unit (ASU)",
    link: "https://drive.google.com/file/d/1QaDSqUhokRt5Fee8837LsghSibXUU2Ca/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-41 Issue 01 Rev.00 11-Oct-2021 Casting Inspection Procedure",
    link: "https://drive.google.com/file/d/1C7IwIFjoxS9j6eh-k9ExRHU2QGqHspIE/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-42 Issue 01 Rev.00 11-Oct-2021 Calibration Procedure",
    link: "https://drive.google.com/file/d/1uNwP1pYdtCkxUOLeFf-xJVonoPTY_9AJ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-43 Issue 01 Rev.00 11-Oct-2021 Procedure for Qualification of Heat-Treating Equipment (Furnaces)",
    link: "https://drive.google.com/file/d/1kx0Z4n9DWiCrx71zORiG-0dZ586w1fZJ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-45 Issue 01 Rev 00 11-Oct-2021 Written Practice for Documented Program for Training",
    link: "https://drive.google.com/file/d/15nH82-UmRlRu4ZMWntf_PNFqgrD72pwq/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-46 Issue 01 Rev.00 11-Oct-2021 Unique ID of Instruments",
    link: "https://drive.google.com/file/d/1aFym7ZGBLm97UZYgSEGPWu0FI-GE_c4E/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-48 Issue 01 Rev.00 11-Oct-2021 Valve Qualification Procedure",
    link: "https://drive.google.com/file/d/1en2qcDuyh_XgqbpW6NXGVx6YdxOXFH0e/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-50 Issue 01 Rev.00 11-Oct-2021 Functional / Pressure Testing Procedure - PICV",
    link: "https://drive.google.com/file/d/1Ik5Z0AjMh3TVe6UzCiCIlbmOQDU8OVmU/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-W-51 Issue 01 Rev.00 11-Oct-2021 Fire Test Valve API 6FA",
    link: "https://drive.google.com/file/d/1vykcL_vAOLUb9eaZYIhNNEdekyOrtp4H/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-W-52 Issue 01 Rev.01 01-Apr-2023 -YS Testing Work Instruction",
    link: "https://drive.google.com/file/d/1p-t4YMMVEbORmVOtAUOYuhuZI9VeW-7X/view",
  },
  {
    keyword:
      "BSV-QAD-W-53 Issue 01 Rev.00 01-Apr-2023 Pressure Testing Procedure – Large Flanged",
    link: "https://drive.google.com/file/d/1u1nxGQmNhIjsUcg38lvIX1EJ3XZFWrGI/view",
  },
  {
    keyword:
      "BSV-QAD-C-01 Issue-01 Rev.00 11-Oct-2021 Chart on Acceptance Criteria for Testing, Monitoring & Measuring Equipments",
    link: "https://drive.google.com/file/d/1nV0ORTDa0cjzUBTormvxjoWBZPwGFUrH/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD-C-02 Issue-01 Rev.00 11-Oct-2021 Organogram for Quality Assurance",
    link: "http://goog_1081876975/",
  },
  {
    keyword:
      "BSV-QAD-C-03 Issue-01 Rev.00 11-Oct-2021 Critical Products & Components Verification Plan",
    link: "https://drive.google.com/file/d/1yG8g5djjzfSeXwjvGylPYREDsO1cMYoC/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-F-01 Issue 01 Rev.00 11-Oct-2021 Inspection Report",
    link: "https://docs.google.com/document/d/1tujaCraoAsco9tsPqdUVOCs1W16K3SnU/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-02 Issue 01 Rev.01 10-June-2024 Non Conformance Report & Corrective Action Form",
    link: "https://drive.google.com/file/d/1LfHyM7dWqpnZKrAa3-0kV6KSNoHmVyJ_/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-QAD-F-03 Issue 01 Rev.01 22-Apr-2023 Liquid Penetrant Examination",
    link: "https://docs.google.com/document/d/1kahy0ddfJgoBYyKHvaSapCq1r4UrbWPi/edit?usp=share_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-04 Issue 01 Rev.00 11-Oct-2021 Magnetic Particle Examination",
    link: "https://docs.google.com/document/d/1my8vvPcDR_uRn2TkaRmleXWrvGTtCgFn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-05 Issue 01 Rev.00 11-Oct-2021 Positive Material Identification Report",
    link: "https://docs.google.com/document/d/1h5QkDGY2LX4kXELatlRoUEgmy0HN40bN/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-06 Issue 01 Rev.00 11-Oct-2021 Dual Plate Check Valve Test Certificate",
    link: "https://docs.google.com/document/d/1oj6K5d0QY8b1DsT25wmHAVt47bOdx6R4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-07 Issue 01 Rev.00 11-Oct-2021 Butterfly Concentric Valve Test Certificate",
    link: "https://docs.google.com/document/d/1c3Z3ggiE9q6O3YIXl1KRmUuNEyi8knHf/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-08 Issue 01 Rev.00 11-Oct-2021 Double Eccentric Valve Test Certificate",
    link: "https://docs.google.com/document/d/1_jZrorkw8SRr7uDT8NEBVNDG1Hg8TUSu/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-10 Issue 01 Rev.00 11-Oct-2021 Welding Procedure Specification",
    link: "https://docs.google.com/document/d/1FK4f3qiqwsyPFsj4HKdEOT9Hh6KlPaL6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-11 Issue 01 Rev.00 11-Oct-2021 Procedure Qualification Record",
    link: "https://docs.google.com/document/d/11crPZhwzt2Zttxm1wd03BetXk6wOOTyo/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-12 Issue 01 Rev.00 11-Oct-2021 QW-484 Suggested Format a for Welder Performance Qualification (WPQ)",
    link: "https://docs.google.com/document/d/1HV1ZFJS8Cw_GqOo_e7pm4eKV2XP7DkRv/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-13 Issue 01 Rev.00 11-Oct-2021 Balancing Valve Test Certificate",
    link: "https://docs.google.com/document/d/1y_-sJWnXKKMHrxj482hzKBg9V4qw3vOk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-14 Issue 01 Rev.00 11-Oct-2021 Product Concession Release Form",
    link: "https://docs.google.com/document/d/1rOuAjPDChjdohVjoWzfQCLtsAn0gYoGz/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F-15 Issue 01 Rev.00 11-Oct-2021 Rejection Report",
    link: "https://docs.google.com/document/d/1JMu4lL89I50X4hD2A5LyBFO2vTk7RoTA/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-16 Issue 01 Rev. 01 10-June-2024 Non Conformity Product Register",
    link: "https://docs.google.com/spreadsheets/d/1UJtPD5r2AseoXK9nSUf7pO3ngAGjVgzt/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-17 Issue 01 Rev.00 11-Oct-2021 Surface Preparation, Painting & Marking Report",
    link: "https://docs.google.com/document/d/1YMP3P283yeA5W9MGdpR4TsuDul1WL6Hc/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-18 Issue 01 Rev.00 11-Oct-2021 Valve Packing Check List",
    link: "https://docs.google.com/spreadsheets/d/1_aSrMBFAO8Tqd7ztUuqvBAbwwySdBIaP/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-19 Issue 01 Rev.01 10-Jan-2023 Finish Valve Inspection Report - Product Release Form",
    link: "https://docs.google.com/document/d/1fAEHATmxppa1dEoQPuai4v5pDbjOSfGP/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F-20 Issue 01 Rev.01 15-Mar-2023 Inspection & Test Plan",
    link: "https://docs.google.com/spreadsheets/d/1iYkFhJ3VISUW1M2YQdNGv-G8wkyEqdhc/edit#gid=952983413",
  },
  {
    keyword:
      "BSV-QAD-F-21 Issue 01 Rev.00 11-Oct-2021 Name Plate Details for CE Marking Valves",
    link: "https://docs.google.com/spreadsheets/d/1Ovfa1o1tes-gUWWVo7g-OLfxwsHyNOM5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-22 Issue 01 Rev.01 01-Apr-2023 Inspection Notification Format",
    link: "https://docs.google.com/document/d/1QFd8TDjrvLtI3S9IxJjCh5D-IYMlkanM/edit",
  },
  {
    keyword:
      "BSV-QAD-F-23 Issue 01 Rev.00 11-Oct-2021 Master List of Inspection, Measuring & Test Equipments",
    link: "https://docs.google.com/spreadsheets/d/1TEFxxL4N_Lo7XyaXcRavDzFVl_NjKdEJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-24 Issue 01 Rev.00 11-Oct-2021 Cryogenic or Low Temperature Test Record",
    link: "https://docs.google.com/spreadsheets/d/1-gTXGkC5wz8YxmwbK3a-KjkLeO2AwMge/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-25 Issue 01 Rev.00 11-Oct-2021 Dimensional & Visual Examination Report for DPCV",
    link: "https://docs.google.com/document/d/1xnKKGj7jMJBcQwNMJPemS-NNxJEr9Sej/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-26 Issue 01 Rev.00 11-Oct-2021 Offer List for Final Inspection (EN 10204, Type 1)",
    link: "https://docs.google.com/document/d/14_HpcAN7HXshTXgIPWnTkUzGddVFvSwW/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-27 Issue 01 Rev.00 11-Oct-2021 Offer List for Pressure Testing (EN 10204, Type 1)",
    link: "https://docs.google.com/document/d/1a2aH80EWwSkH0N-YmDTI5K6XUbkfoYX0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-28 Issue 01 Rev.00 11-Oct-2021 Pickling & Passivation Report",
    link: "https://docs.google.com/spreadsheets/d/1l0nEnESGVb5Y_Vcm2GzRz6h3U7C_wcDE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-30 Issue 01 Rev.00 11-Oct-2021 Vendor Visit Report Format",
    link: "https://docs.google.com/document/d/1L5Hvg5xwCzV423Y-__AeW9F28jSBbidI/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-31 Issue 01 Rev.00 11-Oct-2021 Ultrasonic Testing Report",
    link: "https://docs.google.com/spreadsheets/d/12VuQJTTrit-Ui9QWa5sFOXLuCiGBrYsZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-32 Issue 01 Rev.00 11-Oct-2021 List of Quality Inspectors & Their NDT Certifications",
    link: "https://docs.google.com/spreadsheets/d/1Ymnd_ejLYBXBf8-pFcP4OtScje6J7UKB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-33 Issue 01 Rev.00 11-Oct-2021 Product Concession Release Register",
    link: "https://docs.google.com/spreadsheets/d/1BLcuAVqUik6YryD_7qiQggCVjkTBlNGV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-34 Issue 01 Rev.00 11-Oct-2021 List of Approved WPS,PQR & WPQ",
    link: "https://docs.google.com/spreadsheets/d/1oxdRqM_L8YVrINgbngfHhwKNb8Qj3dh4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-35 Issue 01 Rev.00 11-Oct-2021 Surface Preparation & Salt Contamination Test Report",
    link: "https://docs.google.com/spreadsheets/d/1RNL1Vg60EJ_gW_Qj4K3zeTyOgIsEX0x3/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-36 Issue 01 Rev.00 11-Oct-2021 Index for Final Documentation",
    link: "https://docs.google.com/document/d/1AiYDw6sSP6f3sLYnpQO2rCI-VfQ4c3Dy/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-37 Issue 01 Rev.01 23-Jan-2023 Test cum Guarantee Certificates",
    link: "https://docs.google.com/document/d/125_o16XOwuKeGlw2_OgaqihI4ZLNdZxW/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-38 Issue 01 Rev.01 25-Aug-2022 Practical Examination form form Liquid Penetrant Examination",
    link: "https://docs.google.com/document/d/1SzJtNYOTc7aE2iONQkccNcaAZsB99DQ6/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-39 Issue 01 Rev.01 25-Aug-2022 Practical Examination Form for Visual Testing",
    link: "https://docs.google.com/document/d/1AAdjjIgH9DDHG0SaHf8JF4-lmXgvMk88/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-40 Issue 01 Rev.00 11-Oct-2021 Name Plate Details for API 594 Dual Plate Check Valve",
    link: "https://docs.google.com/spreadsheets/d/128Wtiq58BmChQ4kVHtqP2_RPF3eeWTpd/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-41 Issue 01 Rev.01 25-Aug-2022 Practical Examination Form for Magnetic Particle Examination",
    link: "https://docs.google.com/document/d/1E6Q9glUZwSsuFF3xpyHMZbY_cDJqQHA_/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-42 Issue 01 Rev.00 11-Oct-2021 Practical Examination form for Welding",
    link: "https://docs.google.com/document/d/1UYsWI3gxQR2wd82AK20-fJVVjQS61ORX/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-43 Issue 01 Rev.01 25-Aug-2022 Practical Examination Form for Ultrasonic Testing",
    link: "https://docs.google.com/document/d/1PJkEQTuMky3KFWjW07GCDIFDH_n5IG55/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-44 Issue 01 Rev.00 11-Oct-2021 Practical Examination Form for Butterfly Valve Testing",
    link: "https://docs.google.com/document/d/1IMcCXlk2G8o67fd_NMSxotmCU3qQe7fQ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-45 Issue 01 Rev.00 11-Oct-2021 Practical Examination Form for DPCV Testing",
    link: "https://docs.google.com/document/d/12gbX23elSELsmgK5rCoS23yR0NupIOUl/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-47 Issue 01 Rev.00 11-Oct-2021 Hydro Test Parameters Check List",
    link: "https://docs.google.com/spreadsheets/d/1Q-WU6rVkRow2NKLtMhIos4IsjSdX8mVz/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-50 Issue 01 Rev.01 01-Apr-2023 Dye Penetrant Log Register",
    link: "https://docs.google.com/spreadsheets/d/1XzTPx8nHn2yvk-CUjWJuuHd0sNqRmux1/edit#gid=274959036",
  },
  {
    keyword:
      "BSV-QAD-F-51 Issue 01 Rev.01 01-Apr-2023 Magnetic Particle Log Register.xls",
    link: "https://docs.google.com/spreadsheets/d/1vrUbUNyeQsajMEJseGVqvCtNIjnBm30u/edit#gid=543434508",
  },
  {
    keyword:
      "BSV-QAD-F-52 Issue-01 Rev.00 11-OCT-2021 Process Check List - Ultrasonic Testing",
    link: "https://docs.google.com/spreadsheets/d/17-ltOBr_xOgdowr24cUd6kxQVtqyX9o5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-53 Issue 02 Rev.00 25-Aug-2022 MT Procedure Demonstration Report",
    link: "https://docs.google.com/document/d/1YKeJAkv4BbcvzgpZ75voEAvirgXNgwln/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-54 Issue 02 Rev.00 25-Aug-2022 LP Demonstration Report Format",
    link: "https://docs.google.com/document/d/1z5th-m6Ngrat9YcsnQAKQbJh6vW_Shfg/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F-55 Issue 01 Rev.00 11-Oct-2021 Valve Traveler Sheet",
    link: "https://docs.google.com/spreadsheets/d/1-2AbVyhxY4mIHqlWXpBWXHNP9_PBDmKn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-56 Issue 01 Rev.01 25-Aug-2022 Practical Examination form for Radiography Examination",
    link: "https://docs.google.com/document/d/1EEcoxW09GQKjPiDNtOmgFFy83t2PPqpK/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-57 Issue 01 Rev.00 11-Oct-2021 Name Plate Details for API 609 Butterfly Valves",
    link: "https://docs.google.com/spreadsheets/d/1KxI9MwsZDUJk6EsumWP9mXObe8jtZKQq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-58 Issue-01 Rev.00 11-OCT-2021_DIMENSIONAL & VISUAL EXAMINATION REPORT FOR BT_BD_BF",
    link: "https://docs.google.com/document/d/1FJeBHgosQ36YvGlCVUyrImKbBj5is4Em/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-59 Issue 01 Rev.00 11-Oct-2021 Antistatic Report (EN 10204, TYPE 1)",
    link: "https://docs.google.com/spreadsheets/d/1YnMHMvOChjMmk_52Qz4eQa-RXAthmccx/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-60A Issue 01 Rev. 01 01-Apr-2023 Certificate of Compliance - Butterfly Valves",
    link: "https://docs.google.com/document/d/1HBqYr1D-RC4S6y8ZGYxuPSsu2cpSHLZs/edit?usp=share_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-62 Issue 01 Rev.00 11-Oct-2021 Welding Defectogram Form",
    link: "https://docs.google.com/document/d/1lqp1aidAnoIg8Bm_Gztwc_412AtvRWNk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F-63 Issue 01 Rev.00 11-Oct-2021 Dry Cycle Test Report",
    link: "https://docs.google.com/document/d/1aZONA0GArO2tPVGlToc1W5RMRnRhVve-/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-64 Issue 01 Rev.00 11-Oct-2021 Weld Overlay Hard Facing Weld Visual, PT, PMI & Hardness Test Report",
    link: "https://docs.google.com/spreadsheets/d/1ysEYMBJh9PtKIqfY9fGhhp7H9r-MRTra/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-65A Issue 01 Rev.00 11-Oct-2021 Welding Consumable Issue Slip",
    link: "https://docs.google.com/spreadsheets/d/1s4mtwaOQ-MfSAn0c7Ct59nqUgIuh7jee/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-66 Issue 01 Rev.00 11-Oct-2021 Check list for Verification of WPS",
    link: "https://docs.google.com/spreadsheets/d/11ol-wdDPazwlvXR5Fy5J65em9mK0mD6G/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-67 Issue 01 Rev.00 11-Oct-2021 Checklist for Filing NDT & Welding Training Record",
    link: "https://docs.google.com/spreadsheets/d/1RlF5iEFteKaqec4J0gQFJyxQ8Tr5ZNhs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-68 Issue 01 Rev.00 11-Oct-2021 Hardness Thickness Report",
    link: "https://docs.google.com/spreadsheets/d/1FF997hblURtH8b09tnP9SskDiwsbPsLt/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-69 Issue 01 Rev.00 11-Oct-2021 Process Check List - Inspection of Casting Marking (As per MSS-SP-25)",
    link: "https://docs.google.com/spreadsheets/d/1RS1C8OGdCNvYROA2CzDa8F88orYyBB8W/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-70 Issue 02 Rev. 00 25-Aug-2022 Validation Checklist for RT Films",
    link: "https://docs.google.com/document/d/1LCShWPlx3k0fvgyDbIxOgkB8KnJTvqrs/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-71 Issue 02 Rev.00 25-Aug-2022 UT Procedure Demonstration Report",
    link: "https://docs.google.com/document/d/1pwZSvtOdsRS0z6lvsD-O5BoZ0OqVN0y8/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-72 Issue 01 Rev.00 11-Oct-2021 Hydrostatic & Pneumatic Test Report - Butterfly Valve",
    link: "https://docs.google.com/spreadsheets/d/1Kc4B5E9q3prZmozbD6oMbSDC7LWp5RVF/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-73 Issue 01 Rev.00 11-Oct-2021 Hydrostatic & Pneumatic Test Report - DPCV",
    link: "https://docs.google.com/spreadsheets/d/1M3XYd2w1hUpUlCMolIn-bmf_d479rXJZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F-74 Issue 01 Rev. 00 11-Oct-2021 Oxygen Service Report",
    link: "https://docs.google.com/document/d/1oW3lcECuD-jDkysjjTwrlUX-cIGhX7zl/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-77 Issue 01 Rev.00 11-Oct-2021 Balancing Valve Hydrostatic Test Report",
    link: "https://docs.google.com/spreadsheets/d/1Zh892JRVrI8QFMOINFPrURjhPi5J8A9q/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-78 Issue 01 Rev.00 11-Oct-2021 Oxygen Cleaning Register - DPCV",
    link: "https://docs.google.com/spreadsheets/d/17qvbOTWPwmkPY7QzeLdBj-Kkim_YpfdD/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-79 Issue 01 Rev.00 11-Oct-2021 Daily Checklist for Cleaning of Oxygen Room",
    link: "https://docs.google.com/spreadsheets/d/1m2yZt9dPPJXW23IhJnK8-bdv25dMxgvq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-81 Issue 02 Rev.00 25-Aug-2022 Validation Report for Visual Testing",
    link: "https://docs.google.com/document/d/12GH3Z46IIM2c3UYJH2ta_g7OfMGytOmf/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-82 Issue-01 Rev.00 11-OCT-2021_Large Size Balancing Valve TC",
    link: "https://docs.google.com/spreadsheets/d/1zlSXUQje6BK4CSzwF-94LWGMHntgAR6r/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F-83 Issue 01 Rev.00 11-Oct-2021 PICV TC",
    link: "https://docs.google.com/document/d/11MlNbsDH0ifnbAom_YVjp_n_y2Sd3ydV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-84 Issue 01 Rev.00 11-Oct-2021 Offer List of Valve for BV & PICV",
    link: "https://docs.google.com/document/d/1k_bRDH5wUEE7TOV5iDvKeTLTXviEZzkR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-85 Issue 01 Rev.00 11-Oct-2021 Dimensional Report for Balancing Valves",
    link: "https://docs.google.com/document/d/1WI9lKBroa_SglLLqOPTtTYLFokJFWfXr/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-86 Issue 01 Rev.00 11-Oct-2021 PICV Hydrostatic Test Report",
    link: "https://docs.google.com/spreadsheets/d/1MR7ovjMbkIZzZPRn-TZkkm9Nv1YiVyws/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-87 Issue 01 Rev.01 15-Mar-2023 ITP (Balancing and PICV)",
    link: "https://docs.google.com/spreadsheets/d/1oNfvQp5dk-4rMhn4SpgQRFzhf_RQ3UJ_/edit#gid=473506651",
  },
  {
    keyword:
      "BSV-QAD-F-88 Issue 01 Rev.00 01-Apr-2022 Hydrostatic Test Report- Y Strainer",
    link: "https://docs.google.com/spreadsheets/d/1HxdfBPf4OHjdag2cA-rr4CgIoH1fyLwR/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F-89 Issue 01 Rev.00 01-Apr-2022 Strainer Test Certificate",
    link: "http://goog_1491744408/",
  },
  {
    keyword:
      "BSV-QAD-F-90 Issue 01 Rev.00 01-Mar-2023 Torque Test Report (for validation purpose only)",
    link: "https://docs.google.com/spreadsheets/d/1vV2ds0D_Jlb1HY7bQbd_N_HnQ3_rnKm0/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-P-01 Issue-01 Rev.01 03-Aug-2024_Contracts & Project Management",
    link: "https://drive.google.com/file/d/1qaWd0MLHWrPQvfdRhFqS46Vgy5fTlx3q/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PLN-P-02 Issue-01 Rev.01 03-Aug-2024_Risk Assessment & Management",
    link: "https://drive.google.com/file/d/1E-d2EqsD2I3ETZUPbaLhViC_-tw6AqZ9/view?usp=drive_link",
  },
  {
    keyword: "BSV-PLN-P-03 Issue-01 Rev.01 03-Aug-2024 Contingency Planning",
    link: "https://drive.google.com/file/d/1tljv4DiMEE7q5LHopP0ecfzE71DmTI9S/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PLN-O-01 Issue 01 Rev.03 07-June-2025 Objective- Contracts and Project Management",
    link: "https://drive.google.com/file/d/1pMUvQAyMz_gu4vMDuRp5S2ci0vbxuW9Y/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PLN-C-01 Issue 01 Rev.00 11-Oct-2021 Chart on Rating Criteria for Severity",
    link: "https://drive.google.com/file/d/1dz9pZiqd7soZNGtejlbnjVAaDA9zcMEQ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PLN-C-02 Issue 01 Rev.00 11-Oct-2021 Chart On Rating Criteria for Occurrence",
    link: "https://drive.google.com/file/d/1EYNsyvDRsVq5P0lPOF_xlWvHswiZEtNd/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PLN-C-03 Issue 01 Rev.00 11-Oct-2021 Chart on Rating Criteria for Detection",
    link: "https://drive.google.com/file/d/1XNHvcKoh5B_4_xj2S8FXEYOdV6p-B1xx/view?usp=sharing",
  },
  {
    keyword: "BSV-PLN-F-01 Issue 01 Rev.00 11-Oct-2021 Planning Sheet",
    link: "https://docs.google.com/spreadsheets/d/1gUem_YoRA2KW8BLun21EMHbshCbqLaFv/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F-02 Issue 01 Rev.01 09-Apr-2025 Monthly Sales Plan",
    link: "https://docs.google.com/spreadsheets/d/1Zf_AG6isHmRwi4SKsUYuKJ3gHInOMEWt/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-03 Issue 01 Rev.00 11-Oct-2021 Manufacturing Plan & Status",
    link: "https://docs.google.com/spreadsheets/d/1vOphiAaUCz40BUy_656AbYo9ycNIpW8T/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-04 Issue 01 Rev.01 16-Mar-2024 Request for Change Document",
    link: "https://drive.google.com/file/d/10Ju-5vq6siBynjJCmw6sDkzLboijm1hV/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PLN-F-05 Issue 01 Rev.00 11-Oct-2021 Impact Tracking Including Changes During Order Execution",
    link: "https://docs.google.com/spreadsheets/d/1FY7q4IplCbwZv7cmNrJLS1D3utD6W8yj/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-06 Issue-01 Rev.01 09-Apr-2025 Risk Assessment & Contingency Plan Sheet",
    link: "https://docs.google.com/spreadsheets/d/1bGVr5Hlr7WbcYzMoxoANj9dNHTqRNtbC/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-08 Issue 01 Rev.00 11-Oct-2021 Checklist of Potential Risks or Failures Modes",
    link: "https://docs.google.com/document/d/1WpoTpVlTP2K89S9As8Gvub-NpIb7whgm/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-11 Issue 01 Rev.00 11-Oct-2021 Risk & Opportunity Register",
    link: "https://docs.google.com/document/d/12Kj33jnZkJOiWuIHdJTbFuMCaRi_dQ4o/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-12 Issue 01 Rev.01 16-Mar-2024 Change Tracking Sheet -(Responses)",
    link: "https://docs.google.com/spreadsheets/d/1ZmsVT08hljEe-PFqlXCcIy_KYSLZ-u2z/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F-13 Issue 01 Rev.01 16-Mar-2024 RFC Closure Form",
    link: "https://drive.google.com/file/d/1FweCHM3vzOmR7BRQ-q_-p7o5AfPQHutU/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PLN-F-14 Issue 01 Rev.00 16-Mar-2024 RFC Closure Form (Response)",
    link: "https://docs.google.com/spreadsheets/d/171hb4za4tOr-HOLMaM5B_X58E5O-oYBG/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PLN-F-15 Issue 01 Rev.00 17-June-2024 Customer Feedback form for Post-order",
    link: "https://drive.google.com/file/d/1irTxiFI1gGfMKNokMGnABJbaoFmd56Oz/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-HRD-P-01 Issue 01 Rev. 03 28-Jul-2025 Human Resource Management",
    link: "https://drive.google.com/file/d/16f3OdxM_k_NQsnlc_a2BxrxDoK4QFPxg/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-HRD-O-01 Issue 01 Rev.00 11-Oct-2021 Quality Objectives - Human Resources",
    link: "https://drive.google.com/file/d/1kgpiLgsd4q9bbNe0-StftpPxSmW8bGD8/view?usp=sharing",
  },
  {
    keyword: "BSV-HRD-C-01 Issue 01 Rev. 00 11-Oct-2021 Org Knowledge Chart",
    link: "https://drive.google.com/file/d/1QEbJmHbJiD_-xn4Pw5JDGII5U6gNE0WH/view?usp=sharing",
  },
  {
    keyword: "BSV-HRD-F-01 Issue 01 Rev.01 21-Mar-2025 Competency Matrix",
    link: "https://docs.google.com/spreadsheets/d/1E4-rmz8j8XoLku27uzVmk9IICFQ_hDvQ/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-02 Issue 01 Rev.00 11-Oct-2021 Employee Data Form",
    link: "https://docs.google.com/document/d/1SmS9bDXvTw8z9WRQVq23y2bJ3RRX0uN6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-03 Issue 01 Rev.00 11-Oct-2021 New Joinee Check List",
    link: "https://docs.google.com/spreadsheets/d/15tP5YLfxiWBx3DyTvhS2XlGyswKK0X1E/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-04 Issue 01 Rev.00 11-Oct-2021 Half Yearly Calendar",
    link: "https://docs.google.com/spreadsheets/d/1vOG-JrZvLqzIwygI1TupA8ghXi3vINOl/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-01 Issue 01 Rev.01 21-Mar-2025 Competency Matrix",
    link: "https://docs.google.com/spreadsheets/d/1E4-rmz8j8XoLku27uzVmk9IICFQ_hDvQ/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-06 Issue 01 Rev.00 11-Oct-2021 Departure Checklist",
    link: "https://docs.google.com/spreadsheets/d/1AnKWu7w42UgUxkTkJQRGn8s8ZF3DMS5O/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "HRD-F-08 Issue 03 Rev.00 12-Apr-2024 Performance Appraisal Form",
    link: "https://drive.google.com/file/d/13XIojQNJZ0vzyhcWxBma8izwUQmOnP3x/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-HRD-F-09 Issue 01 Rev.00 11-Oct-2021 Format for Attendance Register",
    link: "https://docs.google.com/spreadsheets/d/1SH9nxMQcj294ZGbQNrJa99Oj5PvWz_ZG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-HRD-F-10 Issue 01 Rev.00 11-Oct-2021 Compensatory Leave Register",
    link: "https://docs.google.com/document/d/1P7o-cZ02Xdeeo4CFz5nBinRaCy4AiVvT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-11 Issue 01 Rev.00 11-Oct-2021 Adult Worker Register",
    link: "https://docs.google.com/document/d/1uSbwMCwJQc04eS7D3c-c-dxK7aWeWea8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-HRD-F-12 Issue 01 Rev.00 11-Oct-2021 Format for Accident Book",
    link: "https://docs.google.com/spreadsheets/d/1byIZxgOy8DfYcouDpN60RqP3VnuXXAVk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-13 Issue 01 Rev.00 11-Oct-2021 Bonus Register",
    link: "https://docs.google.com/document/d/1tsb-0LHxhn9Tttz4fK1LXh2x7JNmxQvi/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-14 Issue 01 Rev.00 11-Oct-2021 Leave Register",
    link: "https://docs.google.com/document/d/1-BaWfGBI0MRlXh_gcejFl7C_lEQD_ImW/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-15 Issue 01 Rev.01 21-Mar-2025 No Dues Form",
    link: "https://docs.google.com/document/d/1XMTcO-pWbzFyzobkzRd-lZxr9-S64NWu/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-16 Issue 01 Rev.00 11-Oct-2021 Transition Form",
    link: "https://docs.google.com/spreadsheets/d/1MtP4kr6HlimGvKnkaY6ycc82Ne8sExhE/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "HRD-F-17 Issue 03 Rev.02 21-Jun-2025 Training Cum Effectiveness Form",
    link: "https://drive.google.com/file/d/1vupt3g7Gdmgx-atei_c-8UPELPQ9k33X/view?usp=drive_link",
  },
  {
    keyword: "BSV-HRD-F-18 Issue 01 Rev.01 21-Mar-2025 Rapid Chart",
    link: "https://docs.google.com/spreadsheets/d/1_mB5fhVMQtBvS7HL0zK-cPudi0Nvbm0R/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-HRD-F-19 Issue 01 Rev.00 11-Oct-2021 Induction Schedule for New Joinees",
    link: "https://docs.google.com/spreadsheets/d/1RF6yNNJ2wOvrN3paWrU4V77qtyjry1HF/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-20_Issue 01 Rev.01 21-Mar-2025 Onboarding Form",
    link: "https://docs.google.com/spreadsheets/d/11m1HYKrCV6fLptL1nwBJ9rwsrsve0pYo/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-21 Issue 01 Rev.00 11-Oct-2021 JD Format",
    link: "https://docs.google.com/document/d/19ZzNnoCyi5jRDDK4KCv833gjN5XDIux6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-HRD-F-22 Issue 01 Rev.00 11-Oct-2021 Resource Requirement form",
    link: "https://docs.google.com/spreadsheets/d/1fKX7_vZy_dpDKBfD8uMXEgl6iA-jxAVs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-HRD-F-23 Issue 01 Rev. 00 11-Oct-2021 List of Key or Essential Personnel for MOC Process",
    link: "https://docs.google.com/spreadsheets/d/1-aUkHvszL1-8lQ-Q49Ayw4Alnn5SBXoY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-24 Issue 01 Rev.00 11-Oct-2021 Advance Register",
    link: "https://docs.google.com/document/d/1beGr_IKzpX3D6SGPTKxfVWWrBBctVTO0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-25 Issue 01 Rev.00 11-Oct-2021 Fines Register",
    link: "https://docs.google.com/document/d/17zznVlYbObn8StjsYVR9KCnoOnEQlFp8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-26 Issue 01 Rev.00 11-Oct-2021 Inspection Register",
    link: "https://docs.google.com/document/d/1Vp9MfDhgyK4thjiVH3kvIN1gRY8oKBnp/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F-27 Issue 01 Rev.00 11-Oct-2021 Register of Deductions",
    link: "https://docs.google.com/document/d/1P88Fucr8ALAXktXd2uFou988lH0g-MHF/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-P-01 Issue 01 Rev.00 11-Oct-2021 Purchase & Outsourcing Processes",
    link: "https://drive.google.com/file/d/1BhqaL_w-MIdZ0BC3eNtkDYXOcmaSl_ss/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PUR-O-01 Issue 01 Rev.02 08-Apr-2025 Quality Objectives - Purchase & Outsourcing",
    link: "https://drive.google.com/file/d/1nQijNYKmuM5JK9P7CM8K3T7EK1cDh5A2/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PUR-W-02 Issue 01 Rev.00 11-Oct-2021 Purchase Competent Authority",
    link: "https://drive.google.com/file/d/1rfQBVxd-ctA4IUeFVGt6myuuiLWqutvI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PUR-W-03 Issue 01 Rev.00 11-Oct-2021 Guidelines for Import of Goods",
    link: "https://drive.google.com/file/d/1zMaO_vDwQU2QSlKKqlUGyjDvn-1A68cp/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PUR-W-04 Issue 01 Rev.00 11-Oct-2021 Pattern Management System",
    link: "https://drive.google.com/file/d/1P89F4AL2y14y4WdHJEnxaqDym9ygmvBq/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PUR-W-05 Issue 01 Rev.00 11-Oct-2021 Procedure for Tag Numbers & Batch Nos. of Valves",
    link: "https://drive.google.com/file/d/1RM1Spd8fEUM3khAUuI4T3ACjVVu2QMJf/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PUR-C-01 Issue 01 Rev.00 11-Oct-2021 Supply Chain Control Plan",
    link: "https://drive.google.com/file/d/1KEEpWFzhRXJZTPwiXU8sli9ReVV6vWHt/view?usp=sharing",
  },
  {
    keyword:
      "BSV-PUR-C-02 Issue 01 Rev.00 11-Oct-2021 Suppliers Re-Evaluation Frequency Plan",
    link: "https://drive.google.com/file/d/1yWowOwcxqM9am9HfjcCiyxhR2ZJWvoYL/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR-F-01 Issue-01 Rev.00 11-Oct-2021_Purchase Order",
    link: "https://drive.google.com/file/d/1XD2RvLz3hzoMgTgttvzZmaJ31fv9Ax4v/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PUR-F-02 Issue 01 Rev.00 11-Oct-2021 Purchase Casting Planning & Tracking Sheet",
    link: "http://goog_1582225075/",
  },
  {
    keyword: "BSV-PUR-F-04 Issue 01 Rev.00 11-Oct-2021 Supplier Approval Form",
    link: "https://docs.google.com/document/d/1LAa_rE-aDMyXxbUhodNXT0QUApjhq_o4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F-05 Issue 01 Rev.00 11-Oct-2021 Supplier Approval List",
    link: "https://docs.google.com/spreadsheets/d/1xhm2j8nYEAFy57xEBmyAn-VkKYQA8xQp/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-06 Issue 01 Rev.00 11-Oct-2021 Pattern Management System",
    link: "https://docs.google.com/spreadsheets/d/1NjYIpufQETxsMKHfJSUHRi_0E43iqq1x/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F-07 Issue 01 Rev.00 11-Oct-2021 Bid Analysis",
    link: "https://docs.google.com/spreadsheets/d/1CuKGRIOS1oEz2jd5dllX0PhYSvXWC7Ir/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F-08 Issue 01 Rev.00 11-Oct-2021 Pattern List",
    link: "https://docs.google.com/spreadsheets/d/13Iv0IMR_RMdni-jBzpD13DOzurvJ3AsR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-09 Issue 01 Rev.00 11-Oct-2021 Purchase - Check List for PO Approval",
    link: "https://docs.google.com/spreadsheets/d/1EhCYEIh9EGd8Au2HC1C31z26Fm6lcz-e/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F-10 Issue 01 Rev.00 11-Oct-2021 Rate Contract Format",
    link: "https://docs.google.com/spreadsheets/d/1b_vdWg2kk1pbAGa3MLG-xYtUCXaUOBLY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F-11 Issue-01 Rev.00 11-Oct-2021_Purchase Requisition",
    link: "https://drive.google.com/file/d/1aNLLWznEKW_CTMvfWp9t2Ovt9eXaYTNj/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PUR-F-12 Issue 01 Rev.00 11-Oct-2021 Supplier Re-Evaluation or Rating Form",
    link: "https://docs.google.com/document/d/13HKhW5GlOBdz3oyo1zzD3d0ohuXUq9gm/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F-13 Issue 01 Rev.00 11-Oct-2021 Enquiry Form",
    link: "https://docs.google.com/spreadsheets/d/1YKqnqApr4OFNKgbsZ-Tg7Ypul6JnUBCB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-14 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report for Casting & Forging Items",
    link: "https://docs.google.com/spreadsheets/d/1f5mA4Ux4jZgJGp5OMLQSwV2FvlD29guE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-15 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Machining Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1J8pxfwR1JlE8qOAd3mQf7Kw1bNFNwT7A/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-16 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Bought Out & Raw Material Items",
    link: "https://docs.google.com/spreadsheets/d/1DDWmZIf8vC7fqLb4HkwUnqSWJv5x_QUN/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-17 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report for NDE Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1x8-3XQP15JMFR4VUqbqZ1kBcl64VNgHf/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-18 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Welding Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1ZM7txaTRc3wSXneSQeS2vj0I1zd3L7F0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-19 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Calibration Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1BNIkqZf4f6TAcAsSbTmY76GHknv9ucXK/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-20 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of ENP Coating Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1pDg_TTXpVMhSk_6HnaicAWx7YymqQzL_/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-21 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Vulcanizing & Rubber Lining Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/13Aub_WxyUz23l3Pe4XDt6jrv3xLtweGV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-22 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Spring Coiling Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1kpO-7D_pKHJlsuar3ZlCmMXIjW-gek13/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-23 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Other Products or Activities",
    link: "https://docs.google.com/spreadsheets/d/1yVKSr-CyTySBuA_pfOYBahPJQ03ZbTGf/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-25 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Heat Treatment Services Out Sourced",
    link: "https://docs.google.com/spreadsheets/d/1yzLVeI9-Tflg1LIiT-XZVqggC8UGhDiA/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-26 Issue 01 Rev.00 11-Oct-2021 Advance Valves Casting Procurements Experience",
    link: "https://docs.google.com/spreadsheets/d/1hBhz3wy8oyfTogrpFeRNCMA3EyuQ-Bbn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-27 Issue 01 Rev.00 11-Oct-2021 Validation Report - Rubber Vulcanization or Lining",
    link: "https://docs.google.com/spreadsheets/d/117_HNPIEuIfdRJg7GQcdqn8Dy1rTVE0R/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-28 Issue 01 Rev.00 11-Oct-2021 ENP Coating Validation Format",
    link: "https://docs.google.com/spreadsheets/d/1HrbuN8ayahJcuR5ZIap_-YVOupb7o2uT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-29 Issue 01 Rev.00 11-Oct-2021 Suppliers Internal & Supply Chain Control Form",
    link: "https://docs.google.com/spreadsheets/d/1VVdHsr2bADVazRS-L31VSD4IewK2h-KG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-30 Issue 01 Rev.00 11-Oct-2021 Annual Suppliers Re-Evaluation Plan Form",
    link: "https://docs.google.com/spreadsheets/d/1LEV-aN72oPQ7nb-Gy4fPdAq2iAQq3jRL/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-31 Issue 01 Rev.00 11-Oct-2021 Supplier Evaluation Report of Consultant or Certification Activities",
    link: "https://docs.google.com/spreadsheets/d/1qCcD3UTvyJFWY3l42ihCRHqWMVcul6K9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-32 Issue 01 Rev.00 11-Oct-2021 Supplier Risk Assessment",
    link: "https://docs.google.com/spreadsheets/d/1vzh6p57fapM410W_7ylUauNCA3QA7tMJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-34 Issue 01 Rev.01 01-July-2023 ERP Supplier Registration Form",
    link: "https://docs.google.com/spreadsheets/d/1nJy2SrjxWEnhdyw3j3EvyUWU4EC0iu61/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-35 Issue 01 Rev.00 11-Oct-2021 Batch Code No and Valve Tag No Allocation Sheet for Rubberized Valves",
    link: "https://docs.google.com/spreadsheets/d/1xr-NpoXouaUISRgNglWHDzE9F4jZ60N9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F-36 Issue 01 Rev. 00 11-Oct-2021 Batch Code No and Valve Tag No Allocation Sheet for Non-Rubberized Valves",
    link: "https://docs.google.com/spreadsheets/d/1bobfwAaq968wtXVKwm7B31qfOhvkgEs1/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-STR-P-01 Issue 01 Rev.00 11-Oct-2021 Preservation of Products",
    link: "https://drive.google.com/file/d/1pqX7btHZtGSpjxmxUvPyg9MJ1T_y33h6/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-O-01 Issue 01 Rev.02 13-Aug-2025 Quality Objectives - Stores",
    link: "https://drive.google.com/file/d/1dE3AM0OrTqgMgIamdqdYPjmrELlvAlnf/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-STR-W-02 Issue 01 Rev.00 11-Oct-2021 Preservation and Shelf Life Items and Control of Welding Consumables",
    link: "https://drive.google.com/file/d/1Pk4W6R8lu0aypvkQzyw2uytYjZuQ5oaK/view?usp=share_link",
  },
  {
    keyword:
      "BSV-STR-W-04 Issue 01 Rev.01 07-July-2023 Long Term Preservation Procedure",
    link: "https://drive.google.com/file/d/1QMcBvKEEvJPlkiVnwQ7rS0w72vuFqpPo/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-STR-W-06 Issue 01 Rev.00 11-Oct-2021 Handling Storing Flammable Hazardous Items",
    link: "https://drive.google.com/file/d/1Iqog7DfYtkl8gugXBkuagmqmO5qnN-rw/view?usp=share_link",
  },
  {
    keyword:
      "BSV-STR-W-09 Issue 01 Rev.01 07-July-2023 Procedure of Paint Storage",
    link: "https://drive.google.com/file/d/1Bh1yePIkOdRW3qLHvWmTzra4aUtUmta2/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-STR-W-10 Issue 01 Rev.00 11-Oct-2021 Procedure on Identification & Traceability during Storage and Preservation",
    link: "https://drive.google.com/file/d/1tqdxeq25S2nzCHInR-_G5kVslDJEUKxm/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-C-01 Issue 01 Rev.00 11-Oct-2021 Layout of Store",
    link: "https://drive.google.com/file/d/1vOh6fSWkz3tmDHhUJUgUlIY5VSpbDxdA/view?usp=share_link",
  },
  {
    keyword:
      "BSV-STR-F-01 Issue 01 Rev.00 11-Oct-2021 Material Issue Request - Non BOM Issuance",
    link: "https://drive.google.com/file/d/1IyGjODIt9nkBVE-V-t8Q1soUudI3uycm/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F-02 Issue 01 Rev.00 11-Oct-2021 Store Return Note",
    link: "https://drive.google.com/file/d/1-Sb7IBjHv3o3WFoKRLwb0PvbsGEyRtle/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-03 Issue 01 Rev.00 11-Oct-2021 Combined Stock Report (Value)",
    link: "https://drive.google.com/file/d/1tOwcY-Mpa3IRQXwKQzwCrmx1fN4a6URW/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F-04 Issue 01 Rev.00 11-Oct-2021 Bill Entry Register",
    link: "https://docs.google.com/spreadsheets/d/1ltM9PN2iGL7aeOfh6gijP9zxIFYk6noS/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-STR-F-05 Issue 01 Rev.00 11-Oct-2021 Stock Ledger",
    link: "https://drive.google.com/file/d/1huSB9dW_7MOuF5O-doDZjAYN74WpF8o3/view?usp=share_link",
  },
  {
    keyword: "BSV-STR-F-06 Issue 01 Rev.00 11-Oct-2021 Stock FIFO Value",
    link: "https://drive.google.com/file/d/1Imu7qq9Tbl0ThXxazESTcazJx3oH_KV9/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-07 Issue 01 Rev.00 11-Oct-2021 Returnable Challan - WIP",
    link: "https://drive.google.com/file/d/1r5I6IjjATXIObs4SL3y3nH5QThEcpNiM/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-08 Issue 01 Rev.00 11-Oct-2021 Material Receipt Report - MRN with PO",
    link: "https://drive.google.com/file/d/1Rw6mhYPqYUQWmze3bJaKZ4Rl6obULUfK/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-09 Issue 01 Rev.00 11-Oct-2021 Material Receipt Report - MRN Imported",
    link: "https://drive.google.com/file/d/1XGZNs95qwTq9hAcdlGkPiuR-wQALkxFT/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-10 Issue 01 Rev.00 11-Oct-2021 Material Receipt Report - General",
    link: "https://drive.google.com/file/d/1YbxBCR-jpWmMEsgTs0IWFdzPjf-rFjpB/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-11 Issue 01 Rev.00 11-Oct-2021 Material Receipt Report - Job Work",
    link: "https://drive.google.com/file/d/1xoAmoWdv43TJSBhIsUTwyGutkiBiUoxp/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-12 Issue 01 Rev.00 11-Oct-2021 Material Receipt Report - RRGP",
    link: "https://drive.google.com/file/d/1C5Kxf1H5rCAVT3wFq6_FpRVcTBxZvePV/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F-13 Issue 01 Rev.00 11-Oct-2021 Non Returnable Challan",
    link: "https://drive.google.com/file/d/1_v1eU_9JAgg26747ChxpCbayUCVTEhkD/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F-14 Issue 01 Rev.00 11-Oct-2021 Returnable Challan",
    link: "https://drive.google.com/file/d/1v3uQDKEZsPC3LQD-Dl1enR57YtowQbb9/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-15 Issue 01 Rev.00 11-Oct-2021 Material Return After Job Work",
    link: "https://drive.google.com/file/d/127TEw6Y_OIos29whxQEJQozQOCtWwCQh/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-16 Issue 01 Rev.00 11-Oct-2021 Store Issue Report - Non BOM",
    link: "https://drive.google.com/file/d/1gWIuwonAAmZVglK-DuxQ5_QJLTa5PmaI/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F-17 Issue 01 Rev.00 11-Oct-2021 Store Issue Report-BOM",
    link: "https://drive.google.com/file/d/1D06fHWToxKz9dHT954P7ILURfDfXkCvO/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F-19 Issue 01 Rev.00 11-Oct-2021 Challan",
    link: "https://drive.google.com/file/d/1ds-kxeDOllxyb4v0_jbjvxkJpgeoiko_/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR-F-20 Issue 01 Rev.00 11-Oct-2021 Stock Assessment Report Form",
    link: "https://docs.google.com/spreadsheets/d/1_g2G7xByMTEO9JtQvpe1grRYlRkmF9gJ/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-STR-F-21 Issue 01 Rev.00 11-Oct-2021 Material Identification Tags",
    link: "https://drive.google.com/file/d/1mIp0uEQGhtKRjz2cvObs7w0Pb5cySj2X/view?usp=sharing",
  },
  {
    keyword: "Leave Policy",
    link: "https://drive.google.com/file/d/11FefnJgVMJb6Uq-ZNfYDWEfggASJ31SG/view?usp=drive_link",
  },
  {
    keyword: "Tour Policy",
    link: "https://drive.google.com/file/d/1xzEQOny1lxp8cj4Sm4apxUSwK2ai53iR/view?usp=drive_link",
  },
  {
    keyword: "Employee Referral Policy",
    link: "https://drive.google.com/file/d/1pbgjXHMAN3fVgNvg8hgPzDQJJoCTrIl_/view?usp=drive_link",
  },
  {
    keyword: "Local Conveyance Policy",
    link: "https://drive.google.com/file/d/16JMDUFGmuwJEHvaqPNhGF0VJh5viL4hb/view?usp=drive_link",
  },
  {
    keyword: "Office Timing Policy",
    link: "https://drive.google.com/file/d/11FefnJgVMJb6Uq-ZNfYDWEfggASJ31SG/view?usp=drive_link",
  },
  {
    keyword: "Mobile Policy",
    link: "https://drive.google.com/file/d/1bLV8ZlQ5AWEgIM_Y_8IDldPRI2SNu8Y3/view?usp=drive_link",
  },
  {
    keyword: "Mobile Request Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfeGgaQnrk6OYV57OWirUGP3MotdozszEZAJlEHq4GL_wGgng/viewform",
  },
  {
    keyword: "RFC - Noida",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeqwT6cmg97WMGxrS-EUV0zLp6kdgKsfp8Z_6jLl6PDdNVcsA/viewform",
  },
  {
    keyword: "RFC - Gagret",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfqP5Wfq0c75BwC8cku09LYKrf7MswRUUrsILknZcagrX65Eg/viewform",
  },
  {
    keyword: "Advance Tour Request",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFTcJres5apUXH3pT4XOWJtmUat1IGcUfX8swMR9aFy3LBrQ/viewform",
  },
  {
    keyword: "Training Attendance",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfk5lK6yW_bouxeCMiE0Rn5F5qG_OWcEXAk4x0XFurAD83bAg/viewform",
  },
  {
    keyword: "Training cum Action Effectiveness Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeM2bQk-qRs0L0tyqx1RzPfvbUpSJAg3iR2HKpjAusUPrUusg/viewform",
  },
  {
    keyword: "Employee Reference Information",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/employee-reference-information",
  },
  {
    keyword: "Kaizen Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSebPUrwCHFfr_-fXDHTKtGIc00QDmVNQMCXGLP3Deecb-Osjg/viewform",
  },
  {
    keyword: "Kaizen SOPs",
    link: "https://drive.google.com/file/d/1JAaNQFTE5XpXFFQ42Uw_Bk87FYATpco9/view?usp=drive_link",
  },
  {
    keyword: "Resource Deployment Form (Staff)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdrYjOAP37xEO4VQ0Vd6yGzDgDrevm285eu4kKtdI1ARibWMQ/viewform",
  },
  {
    keyword: "Resource Deployment Form (Workers)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeHEnJPgm4v0pcvVj2UdfqsGAjRWh9Y5ow90kSSTj7bL2et5A/viewform",
  },
  {
    keyword: "Resource Deployment Form (HODs)",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/e/1FAIpQLSfJ-kiP6uPN2MqN1mDnEtVrmeWq19f8jnxnF2ivt7szjMoBLA/viewform",
  },
  {
    keyword: "Holidays List",
    link: "https://drive.google.com/file/d/1R_ebvd2-S2a8hMF58GJ8ommMbDhxebnj/view",
  },
  {
    keyword: "Employee Directory",
    link: "https://docs.google.com/spreadsheets/d/1k4cOruvN6giWU2M7Kyxrn-WvaEzGmNsWp0gVCXVzVbA/edit#gid=235872177",
  },
  {
    keyword: "HOD Area",
    link: "https://sites.google.com/advancevalves.com/moc/home",
  },
  {
    keyword: "OHS-M-01, Issue 01, Rev 01, 01 Feb 2023 OHS Manual.pdf",
    link: "https://drive.google.com/file/d/14_jfx16aV93tkUZgEcp4FJEHH9TNgqbn/view?usp=sharing",
  },
  {
    keyword: "OHS-O-01, Issue 01, Rev 01, 01 Feb 2023, Objectives.pdf",
    link: "https://drive.google.com/file/d/1lLkjB7on6aP4RzPiVY7IheUHZtHCP9Mj/view?usp=sharing",
  },
  {
    keyword: "OHS-P-01, Issue 01, Rev 01, 01 Feb 2023, OH&S Policy",
    link: "https://drive.google.com/file/d/1Z2_XWNG340LF8msWwwRHyEnW9VF8cRcc/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-01, Issue 01, Rev 01, 01 Feb 2023, Procedure for OHSMS Planning and Management Review",
    link: "https://drive.google.com/file/d/1JPPW-aaWUtzvD6-z3hyvuLcQ_CskYuEp/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-02, Issue 01, Rev 02, 01 Feb 2023, Procedure for OHS Competence Evaluation and Training",
    link: "https://drive.google.com/file/d/1ZikRaOie-gxhMIobWCJWw6LlJ7SFRgoL/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-03, Issue 01, Rev 01, 01 Feb 2023, Procedure for Consultation and Participation of Workers",
    link: "https://drive.google.com/file/d/13t1xQY5CqyxmKPjs5WL6y0sLj9GsjyzU/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-04, Issue 01, Rev 01, 01 Feb 2023, Procedure for Internal and External Communication",
    link: "https://drive.google.com/file/d/1csvQlPY3Z9ct0gzDPI3l3nB3bWkvpH_g/view",
  },
  {
    keyword:
      "OHS-PRO-05, Issue.01,_Rev.01, 01 Feb 2023, PROCEDURE FOR HAZARD IDENTIFICATION AND ASSESSMENT OF OHS RISKS & OPPORTUNITIES",
    link: "https://drive.google.com/file/d/1whBKop0d9gJokzFUpk_85d94p3goo_OV/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-06, Issue 01, Rev 01, 01 Feb 2023, Procedure for Determination and Compliance Evaluation of Legal Requirements",
    link: "https://drive.google.com/file/d/1pYzjhz_CHCfmNA3gzmEV9wx7ibyixW9R/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-07, Issue 01, Rev 01, 01 Feb 2023, Procedure for Operational Planning and Control",
    link: "https://drive.google.com/file/d/1UBjAH2dAFYVVvkvOLYlLVVz7KMpwKAqW/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-08, Issue 01, Rev 01, 01 Feb 2023, Procedure for Eliminating Hazards and Reducing OHS Risks",
    link: "https://drive.google.com/file/d/1M6vqUfLrxYi0qpOicIuUWnfgH1DcwkP2/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-09, Issue 01, Rev 01, 01 Feb 2023, Procedure for Management of Change",
    link: "https://drive.google.com/file/d/1EY3kMNLnhmamlTwCZwnjCAZ-6QsGpGwV/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-10, Issue 01, Rev 01, 01 Feb 2023, Procedure for Control of Procurement of Products and Services",
    link: "https://drive.google.com/file/d/18jKVuOLAqT4Rdjz1VtSL-wbQW5OPa7_8/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-11, Issue 01, Rev 01, 01 Feb 2023, Procedure for Handling of Emergency Situations",
    link: "https://drive.google.com/file/d/1sqNciZbyQGLfiOTjYjE06MfXs9GCCNSO/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-12, Issue 01, Rev 01, 01 Feb 2023, Procedure for Monitoring, Measurement, Analysis and Evaluation",
    link: "https://drive.google.com/file/d/1QMEYre90W0vLeeRgpwSR2-XVWGuDL_Oj/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-13, Issue 01, Rev 01, 01 Feb 2023, Procedure for Maintenance and Calibration of Measuring Equipment",
    link: "https://drive.google.com/file/d/1DB3gLLumZC-QrSBCPn73scOdwnl-7VRJ/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-14, Issue 01, Rev 01, 01 Feb 2023, Procedure for Internal OHSMS Audit",
    link: "https://drive.google.com/file/d/1o85lWd8sETR_5VQWZVO6ZcbXHe4fp8Sw/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-15, Issue 01, Rev 01, 01 Feb 2023, Procedure for Incident Investigation",
    link: "https://drive.google.com/file/d/1T624ku_re16-iTBLS07ViyLF2DpABSVn/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-16, Issue 01, Rev 01, 01 Feb 2023, Procedure for Non-conformity Handling and Corrective Action",
    link: "https://drive.google.com/file/d/1oJicRQ4WOPNx1iL5eu8QKHoAZ8sOMI9Y/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO-17, Issue 01, Rev 01, 01 Feb 2023, Procedure for Management of Documented Information",
    link: "https://drive.google.com/file/d/1rSVufuAMIhwAk0PvCP5Tm_57S_QVBV2u/view?usp=sharing",
  },
  {
    keyword:
      "OHS-F-01, Issue 01, Rev 01, 01 Feb 2023, Context of the Organization",
    link: "https://docs.google.com/document/d/128Km8iZKLL6FBlHrRiJ7Z5c0AT19w39q/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-02, Issue 01, Rev 01, 01 Feb 2023, Objective Realization Plan",
    link: "https://docs.google.com/document/d/1bneiXMIdM-XV0jjHeCfrsi6HUUJ9ixZQ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-03, Issue 01, Rev 01, 01 Feb 2023, Minutes of OHSMS Planning and MRM",
    link: "https://docs.google.com/document/d/1uQkTRw8_zrKyjtBCAS94ik6rJQYbSvOM/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-04, Issue 01, Rev 01, 01 Feb 2023, Master List of Identified Risks and Opportunities",
    link: "https://docs.google.com/document/d/1VXaxIu7VY-Ct6wr7aSyJRCH3E47Ti1Os/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-05, Issue 01, Rev 01, 01 Feb 2023, Job Description Matrix",
    link: "https://docs.google.com/document/d/1Pn0kBhvqSP8TQq-nj4zFIY2hnU0hT2at/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-06, Issue 01, Rev 01, 01 Feb 2023, List of Personnel",
    link: "https://docs.google.com/document/d/1vKnjrR0JXuYbtH2Hfc2GJ8k2G26Ef85H/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-07, Issue 01, Rev 01, 01 Feb 2023, Competence Evaluation Record",
    link: "https://docs.google.com/document/d/1tk8b8_nn2CrT3XTjFDWL_HOb1Vgpi7Bn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-08_Issue.01_Rev.00 08 Aug 2025_Hot Work Permit",
    link: "https://drive.google.com/file/d/1BuVAfMXF6T2m8z9uCsPGTE5kiPIF9lj_/view",
  },
  {
    keyword: "OHS-F-09_Issue 01_Rev 00_08 Aug 2025_Cold Work Permit",
    link: "https://drive.google.com/file/d/1PxJ76JfnimddUpQLnaJeULZj9xxRgH9n/view",
  },
  {
    keyword:
      "OHS-F-10, Issue 01, Rev 01, 01 Feb 2023, Minutes of OHS Committee Meeting",
    link: "https://docs.google.com/document/d/1-pfRoSzKnQqktNDjgYIPJVf65HI-iV3t/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-11, Issue 01, Rev 01, 01 Feb 2023, OHSMS Hazard Identification Checklist",
    link: "https://docs.google.com/document/d/1iQms1FtMHkastpP4K7eZqCYEvTLLqdYt/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-12, Issue 01, Rev 01, 01 Feb 2023, Master List of Legal Requirements and Other Requirements",
    link: "https://docs.google.com/document/d/154MchnNJVZmSnTe21KMZ30jhi_fVHjeV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-13, Issue 01, Rev 01, 01 Feb 2023, OHS Risk Assessment Worksheet",
    link: "https://docs.google.com/document/d/1lbQyVIWpjvwR9qAw3fOJOMjfAJVaqZ9l/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-14, Issue 01, Rev 01, 01 Feb 2023, List of Potential OHS Emergencies and Responses",
    link: "https://docs.google.com/document/d/1dmQktm6FuZR9Feg3rgv5kkpLwKGZJX4G/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-15, Issue 01, Rev 01, 01 Feb 2023, OHS Monitoring Plan",
    link: "https://docs.google.com/document/d/1vMhC4A-uX-gtKjL3oHLjSnbUBfbRjxrW/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-16_Issue01_Rev.00_20-Aug-2025_LOTO Kit Issue Monitoring Sheet",
    link: "https://drive.google.com/file/d/1OFx7FL3uCjDdc15Bvj6NG-FvwY2zTdP2/view",
  },
  {
    keyword:
      "OHS-F-17, Issue 01, Rev 01, 01 Feb 2023, Register of Out of Calibration Events",
    link: "https://docs.google.com/document/d/1pLTp0kuZRx85y55bxhhc-so49x8RMSlg/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-18, Issue 01, Rev 01, 01 Feb 2023, Master List of Internal OHSMS Auditors",
    link: "https://docs.google.com/document/d/1vVcikhTG5-JVJahhcXnnf9xlnicpBF09/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-19, Issue 01, Rev 01, 01 Feb 2023, Yearly OHSMS Audit Calendar",
    link: "https://docs.google.com/document/d/1dyyYWEocfAQcALuWJaHs_ydUDA9X6ovu/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-20, Issue 01, Rev 01, 01 Feb 2023, Internal Audit Note",
    link: "https://docs.google.com/document/d/1SqcysaQU5gaCkVXVJ84RYSDgRyqaGJC0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-21_Issue01_Rev.00_20-Aug-2025_LOTO Inspection Checklist",
    link: "https://drive.google.com/file/d/12GXNYx6NEHH_vxjOxAhT6m_zMj-4jRR8/view",
  },
  {
    keyword:
      "OHS-F-22, Issue 01, Rev 01, 01 Feb 2023, Non-conformity Investigation Report",
    link: "https://docs.google.com/document/d/1tsVfDoBG0LIVcKjmS99yBbFv7q1SGKHa/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-23, Issue 01, Rev 01, 01 Feb 2023, Master List of Document Controllers",
    link: "https://docs.google.com/document/d/1f0MlvP29NIU-pYjUZOIV_CmcbTK9KCrd/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-24, Issue 01, Rev 01, 01 Feb 2023, Master List of OHS Documents and Records",
    link: "https://docs.google.com/document/d/1hDfWPDItOuJPFfuzIqPr5Po_9XcGOt2P/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-25, Issue 01, Rev 01, 01 Feb 2023, Document Addition or Change Request",
    link: "https://docs.google.com/document/d/1UTmpYYdBT3n9_S4ovlYhuBeNc4ZL4Fit/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-26, Issue 01, Rev 01, 01 Feb 2023, Document Issue-cum-Receipt Note",
    link: "https://docs.google.com/document/d/1msPDevXRWz3_GqGLoIFR8Upvi8M3Ym8-/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-27, Issue 01, Rev 01, 01 Feb 2023, Document Withdrawal Notice",
    link: "https://docs.google.com/document/d/1fXHTzJjn69uVp5bKmewTHSIPYng8Brz7/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F-28, Issue 01, Rev 01, 01 Feb 2023, Training Request Memo",
    link: "https://docs.google.com/document/d/1oEyKD1cd2dHKwIwi5atngPRMLQ1aZrTs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "OHS-F-29_ISSUE-01_REV.00_12 Aug 2025_Internal Audit Schedule Report",
    link: "https://drive.google.com/file/d/1LEWwCDmU4Qn8W3m4ba3fsMlb3ohsXFjv/view",
  },
  {
    keyword:
      "OHS-F-30_Issue01_Rev.00_20-Aug-2025_Incident and Countermeasure Report",
    link: "https://drive.google.com/file/d/1tQBGkM_gvjZh8pDqhNtuo06lTAoWjcC2/view",
  },
  {
    keyword: "OHS-F-31_Issue01_Rev.00_20-Aug-2025_One Point Lesson",
    link: "https://drive.google.com/file/d/1oSWntbSr6O6rkC-JGRFKbQR3YJiGjVrL/view",
  },
  {
    keyword: "OHS-F-32_Issue01_Rev.00_20-Aug-2025_EOT Daily Check sheet",
    link: "https://drive.google.com/file/d/11XwA72wJyxNrDJ9I9Xlfjsv24De2D80r/view",
  },
  {
    keyword: "OHS-F-33_Issue01_Rev.00_20-Aug-2025_Forklift Daily Check Sheet",
    link: "https://drive.google.com/file/d/1PtOjVqHzRYzlKBFj9_DwFxmMgoEAMm9l/view",
  },
  {
    keyword: "OHS-F-34_Issue01_Rev.00_05-Sept-2025_5S Red Tag Format",
    link: "https://drive.google.com/file/d/166KhegXPKSxX2Fnzib1Fi7aAd9b4v4kR/view",
  },
  {
    keyword:
      "OHS-F-35_Issue.01_Rev.00 25 Aug 2025_Internal Audit checklist for MR",
    link: "https://drive.google.com/file/d/1O6XeQA8l33zJUIxndINQLJjBBYwZJp49/view",
  },
  {
    keyword:
      "OHS-F-36_Issue.01_Rev.00 25 Aug 2025 Internal Audit checklist for Material",
    link: "https://drive.google.com/file/d/1JqSLJTdL2fLJTNcPWzveA9DhABBddJSW/view",
  },
  {
    keyword:
      "OHS-F-37_Issue.01_Rev.00 25 Aug 2025 Internal Audit checklist for Packing & Dispatch",
    link: "https://drive.google.com/file/d/1PLGvPvNUhmGnVQshDUi2mJ10WL_xxS04/view",
  },
  {
    keyword: "OHS-F-38_Issue.01_Rev.00 25 Aug 2025 Internal Audit checklist QA",
    link: "https://drive.google.com/file/d/1-9me6plAs4E6_jqSybX0dIbR_AEjnNy-/view",
  },
  {
    keyword:
      "OHS-F-39_Issue.01_Rev.00 25 Aug 2025 Internal Audit checklist for Production and maintenance",
    link: "https://drive.google.com/file/d/1pfaNVDzfiG97O9xc3awYUHa2MvMQTiJH/view",
  },
  {
    keyword:
      "OHS-F-40_Issue.01_Rev.00 25 Aug 2025 Internal Audit checklist for OH&S",
    link: "https://drive.google.com/file/d/1SFnkNZD-eD2okD0n8WkjdtZzTAO2y0IH/view",
  },
  {
    keyword:
      "OHS-F-41_Issue.01_Rev.00 25 Aug 2025 Internal Audit Checklist for Admin",
    link: "https://drive.google.com/file/d/1HcIDu3p6vvBTjnXT0ckBOcUDxEs80I5x/view",
  },
  {
    keyword:
      "OHS-F-42_Issue.01_Rev.00 25 Aug 2025 Internal Audit Checklist for HR",
    link: "https://drive.google.com/file/d/14jzT6o4PvZV1r9kkqp20Q2889pmnoJQU/view",
  },
  {
    keyword: "OHS-F-43_Issue01_Rev.00_05-Sept-2025_Red Tag Register",
    link: "https://drive.google.com/file/d/1zu0y6E6o7paprVjSjg6afjpFUwDXy6uS/view",
  },
  {
    keyword: "OHS-F-44_Issue.01_Rev.00_05 Sept 2025 FIRST AID MONITORING SHEET",
    link: "https://drive.google.com/file/d/1x966ciWCR8Ivw2_Ggm9r19l4n2vKvaJ5/view",
  },
  {
    keyword:
      "OHS-F-45_Issue.01_Rev.00 05 Sept 2025 Fire Extinguisher monitoring List",
    link: "https://drive.google.com/file/d/1TKQ_d1yKtF9GowJ0q0f-dLrWe99tb2SK/view",
  },
  {
    keyword:
      "OHS-F-46_Issue.01_Rev.00 05 Sept 2025 FIRE EXTINGUISHER CHECK LIST",
    link: "https://drive.google.com/file/d/19EoVshEnhUsbtfEcOPOVNJPu5nXJMxXG/view",
  },
  {
    keyword:
      "OHS-F-47 Issue.01_Rev.00 05 Sept 2025 Emergency contact list updated 2025 Master",
    link: "https://drive.google.com/file/d/1C57RBCpGLWQVNE5Qf26_jm8fdIv_DyHa/view",
  },
  {
    keyword: "OHS-F-48_Issue.01_Rev.00 05 Sept 2025 Safety induction",
    link: "https://drive.google.com/file/d/10Xw-Z_z4oQKYH2vb-yx4KagqrVx3Hgbr/view",
  },
  {
    keyword: "OHS-F-49_Issue.01_Rev.00 05 Sept 2025 Mock Drill Report",
    link: "https://docs.google.com/spreadsheets/d/1PaduyBmZSuDDLrCli2kJsxLtMD4W0PQM/edit?gid=1012917559#gid=1012917559",
  },
  {
    keyword: "OHS-F-50 Issue.01_Rev.00 05 Sept 2025 ERT TEAM MASTER",
    link: "https://drive.google.com/file/d/1XMmLOUl2qgr_miYhW4x4zgEBbj4sfBBI/view",
  },
  {
    keyword:
      "OHS-F-51_Issue.01_Rev.0 05 Sept 2025 fire hydrant and reel master list",
    link: "https://drive.google.com/file/d/1GBmbku1WM0VOCCv7uSOiRB-HVKkkOs8V/view",
  },
  {
    keyword: "OHS-F-53_Issue.01_Rev.00 10 Sept 2025 List of First Aider Master",
    link: "https://drive.google.com/file/d/1BlGhnz1oOLWjb-EPwE2J9iMWQQQbRY2E/view",
  },
  {
    keyword:
      "OHS-F-54_Issue.01_Rev.00 10 Sept 2025 FIRE HYDRANT HOSE REEL INSPECTION CHECK LIST",
    link: "https://drive.google.com/file/d/1YLwlY1VUPWiD5t5zC_oHx6iynCUhulwe/view",
  },
  {
    keyword: "OHS-F-55 Issue.01_Rev.00 10 Sept 2025 FIRE FIGHTING TEAM MASTER",
    link: "https://drive.google.com/file/d/1DN7O0yQ-CN9z7pDnykVTuapgDmPs3XY5/view",
  },
  {
    keyword: "OHS-F-56_Issue.01_Rev.00 10 Sept 2025 SAFETY AUDIT CHECK SHEET",
    link: "https://drive.google.com/file/d/1p2XYxcRiivZe7LhbqZGFsg3m-I8jxVhi/view",
  },
  {
    keyword: "OHS-W-01-Issue01-Rev.02_20-Aug-2025_Overhead Crane Guidelines",
    link: "https://drive.google.com/file/d/1eRzNzbDAr3PRjnHdQJFn4iMJvzbJPdii/view",
  },
  {
    keyword:
      "OHS-W-02, Issue 01, Rev 01, 01 Feb 2023, Welding Safety Guidelines",
    link: "https://drive.google.com/file/d/1EBk7NsToQnh6xyPLgmTfu9o2uWhMe4Np/view?usp=sharing",
  },
  {
    keyword:
      "OHS-W-03, Issue 01, Rev 01, 01 Feb 2023, Painting & Grit Blasting Safety Guidelines",
    link: "https://drive.google.com/file/d/1yKRFt0P7EstG5XA-qVotrOHFMCk2asxF/view?usp=sharing",
  },
  {
    keyword: "OHS-W-04, Issue 01, Rev 01, 01 Feb 2023, Testing Safety",
    link: "https://drive.google.com/file/d/1GaecUcd-cATTdC_wjMirCdJJCmr9MhOZ/view?usp=sharing",
  },
  {
    keyword:
      "OHS-W-05, Issue 01, Rev 01, 01 Feb 2023, Fitness Guidelines for Office Executives",
    link: "https://drive.google.com/file/d/1zlmt9PuzMxd4ris34Lrjd7W1qIrHPS-k/view?usp=sharing",
  },
  {
    keyword:
      "OHS-W-06_Issue01_Rev.00_20-Aug-2025_Forklift Operation Guidelines",
    link: "https://drive.google.com/file/d/1OK5qxBcuivlxs30lUF1LvOPHnBSOqSdK/view",
  },
  {
    keyword: "OHS-C-01_Issue.01_Rev00_08 Aug 2025_PPE matrix",
    link: "https://drive.google.com/file/d/1qV_s3D_OCgks8-Y5jnM7NPHd9xfP5ISF/view",
  },
  {
    keyword: "OHS-C-02_Issue.01_Rev00_08 Aug 2025_Emergency Procedure",
    link: "https://drive.google.com/file/d/1C4DCk6n16jDkaYsn5vBSfj4tU_Dn1wyE/view",
  },
  {
    keyword: "OHS-C-03_Issue01_Rev.00_20-Aug-2025_LOTO Basic Rules",
    link: "https://drive.google.com/file/d/1r3F855ZipQgGv6QldAGmgvzc9KlNMUu5/view",
  },
  {
    keyword:
      "OHS-C-04_Issue01_Rev.00_20-Aug-2025_Work Instruction for Electric Over Head Crane Travelling (EOT)",
    link: "https://drive.google.com/file/d/1S6MAFtbZ4Bcm3TYOrZGNKPTmzxuMX502/view",
  },
  {
    keyword: "OHS-C-05_Issue.01_Rev.00 05 Sept 2025 Scope of OHSMS",
    link: "https://drive.google.com/file/d/13bknkAH227BicVWBVOL3ah4pFRow1GQA/view",
  },
  {
    keyword: "OHS-C-06_Issue.02_Rev.00 10 Sept 2025 Daily KYT Sheet",
    link: "https://drive.google.com/file/d/1zy3NiLQynleBDyWAx4C8S-AFAAG6ylOG/view",
  },
  {
    keyword: "ISO 9001 : 2015 for AVG LLP and AVPL Noida",
    link: "https://drive.google.com/file/d/1JJdXLXTtAGWN-sSWOYeVIy0VR8v0sSWK/view",
  },
  {
    keyword: "ISO 9001 : 2015 for AVPL Gagret and AVS",
    link: "https://drive.google.com/file/d/1iUuRPJGpvhFPDEQmKM1JqWi9wt0snU9A/view",
  },
  {
    keyword: "API 6D for AVPL Noida Plant",
    link: "https://drive.google.com/file/d/12JFm75Rvvc_ZjlioMStoMXrnbP5_YuNr/view",
  },
  {
    keyword: "API 609 for AVPL Noida Plant",
    link: "https://drive.google.com/file/d/1h49RyyzSfurBr9KgTAGFsGjBFXM2F1Cx/view",
  },
  {
    keyword: "API 594 for AVG LLP Plant",
    link: "https://drive.google.com/file/d/1ADGMkg97Tcp2-E9qpsaw5wChdhKAYKD1/view",
  },
  {
    keyword: "API 609 for AVG LLP Plant",
    link: "https://drive.google.com/file/d/18cuJCHDjdgaObSlFeLD3mGbStnRlXJPo/view",
  },
  {
    keyword: "CE Certificate for AVG LLP Plant",
    link: "https://drive.google.com/file/d/1suj2gB8zi9JZAax6X30Lok-TcOGeEQD4/view",
  },
  {
    keyword: "Shell Global Certificate - for AVG LLP",
    link: "https://drive.google.com/file/d/1tkz1ScCxOQdzQuSsfczyLhTcoLog2g4T/view",
  },
  {
    keyword: "SIL-3 Certificate for AVG LLP & AVPL Noida Plant",
    link: "https://drive.google.com/file/d/1SW0z5hxXmL6de7VxsTiHZEscEScheaV4/view",
  },
  {
    keyword: "UL Certificate for AVG LLP Plant",
    link: "https://drive.google.com/file/d/12N13J1Ilowv_G3j-kJoPJSxnehTAOOxh/view",
  },
  {
    keyword: "ISO 45001 : 2018 OHSMS Certificate for AVG LLP Plant",
    link: "https://drive.google.com/file/d/1t86PRs5LndZiififX7yeU-B8EZuDQG6s/view",
  },
  {
    keyword:
      "ISO 45001 : 2018 OHSMS Certificate for AVPL Noida & AVPL Gagret Plant",
    link: "https://drive.google.com/file/d/1G5xi_Kxut0n9Ss9nysBTc8kINMFSxuTL/view",
  },
  {
    keyword: "ISO 45001 : 2018 OHSMS Certificate for AVS Plant",
    link: "https://drive.google.com/file/d/1ffMAeN2X1nFbHZtMGyKxkAx8QtAPT9Ka/view",
  },
  {
    keyword: "HR Activity Calendar",
    link: "https://www.google.com/calendar/hosted/advancevalves.com/embed?src=advancevalves.com_1r37adbitdcjurgvb6nro9vv4o%40group.calendar.google.com&ctz=Asia/Calcutta&pvttk=5e28cd3901bcef274a3685c7eab67480",
  },
  {
    keyword: "HR New Joinee Checklist",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AteH4MsUC3C3dFRHV0Z0c05RbEtMUm83c0JGdW43SXc&hl=en",
  },
  {
    keyword: "HR Employee Departure Checklist",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AteH4MsUC3C3dFRHV0Z0c05RbEtMUm83c0JGdW43SXc&hl=en",
  },
  {
    keyword: "Full & Final Settlement Form",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0Am5OGVo2PJdcdDZtVkZNRGkyUUJCVUI5dlVqZWllMXc&hl=en",
  },
  {
    keyword: "AV PMS announcement",
    link: "https://docs.google.com/document/d/1iSF9kLrfz_uOW_w80AuZ9sO1mCoeO8n9YIi8ADa-zXI/edit#heading=h.gjdgxs",
  },
  {
    keyword: "Office Timing Policy",
    link: "https://drive.google.com/file/d/11FefnJgVMJb6Uq-ZNfYDWEfggASJ31SG/view?usp=drive_link",
  },
  {
    keyword: "Child Labour policy",
    link: "https://drive.google.com/file/d/154zE1WXFwlOzplDDT8RK4r9Xj9yiG5za/view?usp=drive_link",
  },
  {
    keyword: "Social Accountability Policy",
    link: "https://drive.google.com/file/d/1sygzSVwLtwy-caB99QK9rBi3DTPtHqcA/view?usp=drive_link",
  },
  {
    keyword: "Human Rights Policy",
    link: "https://drive.google.com/file/d/18POprlBW3kj71cf4ghBap_UH80EzFCVh/view?usp=drive_link",
  },
  {
    keyword: "Grievance Policy",
    link: "https://drive.google.com/file/d/14UNxhRJQpjpi_AwOm8jRqtA3533gQx5P/view?usp=drive_link",
  },
  {
    keyword: "Rapid",
    link: "https://drive.google.com/drive/u/0/folders/10ip13SPJe6U2UzoFJAOzP0_nM5dj5c1r",
  },
  {
    keyword: "Employee Data Form",
    link: "https://docs.google.com/a/advancevalves.com/fileview?id=0B25OGVo2PJdcNDc5YjgzNmItYjE2NS00NGMxLWEwNzQtMjNkOGZkZWU5MmQw&hl=en",
  },
  {
    keyword: "Interviewee Evaluation Form",
    link: "https://docs.google.com/spreadsheets/d/1ln5eQpwQww2lPqUHbhtVSV7NujrSinyMeiWXQO_AAWY/edit#gid=543205599&vpid=A1",
  },
  {
    keyword: "No Dues Form",
    link: "https://docs.google.com/a/advancevalves.com/Doc?docid=0AdeH4MsUC3C3ZGY0cXI2ODRfNjQ5ajRyZ2No&hl=en",
  },
  {
    keyword: "Transition Form",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AteH4MsUC3C3dE9BSVBTaHQxTHd4OFNNS1FnRmxVSVE&hl=en",
  },
  {
    keyword: "Appraisal Form",
    link: "https://docs.google.com/a/advancevalves.com/file/d/0Bz9VXyUEqhOeZHRJQnVtTHJ1RFU/edit",
  },
  {
    keyword: "HOD Feedback Form",
    link: "https://docs.google.com/a/advancevalves.com/file/d/0Bz9VXyUEqhOeZHRJQnVtTHJ1RFU/edit",
  },
  {
    keyword: "Self Evaluation and Feedback as a Manager",
    link: "https://drive.google.com/a/advancevalves.com/?tab=mo#folders/0Bz9VXyUEqhOeUlJMVUtmQnFUR0U",
  },
  {
    keyword: "Training Cum Effectiveness Form (To be filled by HOD)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeM2bQk-qRs0L0tyqx1RzPfvbUpSJAg3iR2HKpjAusUPrUusg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628",
  },
  {
    keyword: "Training Feedback Form",
    link: "https://docs.google.com/forms/d/1Gy_IGguFy4AAnTdMSqxhXkVmJY8zPI7-Sq9C_0X8xX8/edit",
  },
  {
    keyword: "Backup Strategy",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ApibeLTjVmekdHprTjFUazlRRlR0UTJuQ1hKNUg5WGc&authkey=CO-EzfkG&authkey=CO-EzfkG#gid=0",
  },
  {
    keyword: "MOC matrix",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldFg5V1lHMFd6Y0FkYTFPNWVzYlprdmc#gid=0",
  },
  {
    keyword: "Master sheet for MOC",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AtFUTpXGAKQGdF9fd2RXOEphZzAzZXV3OGZTQWpWQ3c#gid=3",
  },
  {
    keyword: "Check list for New Machine Installation",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AhSExRIIZ2eldFBERlVaR2hSWEZaMzRXanBVdmltX0E#gid=0",
  },
  {
    keyword: "List of Software (Department Wise)",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ApdA1zbxOuQvdGUxV0YzZU5kaEtibzZIeUlZX0NyekE&usp=sharing",
  },
  {
    keyword: "Computer H/w Parts Disposal Record (IT-F-06)",
    link: "https://docs.google.com/spreadsheets/d/1j4LthBy-vXinr-RnFYeD2dRtslwGg1gD8tk88cwMU28/edit?usp=sharing",
  },
  {
    keyword: "FinSYS",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/finsys",
  },
  {
    keyword: "QA Software",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/qa-software-details",
  },
  {
    keyword: "GAD generation software",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/gad-generation-software-details",
  },
  {
    keyword: "FinSYS Installation guidelines on Linux",
    link: "https://docs.google.com/document/d/1_CnodFDZDSs6Q5lrWsqLEEQoxY8WtAHJOyPSEQupKWY/edit",
  },
  {
    keyword: "OS Image / Software description",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AhSExRIIZ2eldFlGNVZKSkhfS1BaYkQtckRHT215ekE&hl=en",
  },
  {
    keyword: "Digital Certificates",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/digital-certificates",
  },
  {
    keyword: "Meter Reading (SEZ)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdJy78e8397KC3GTB4lquyVG3v605OPSE7ng5HE8Fb7n6TGCg/viewform",
  },
  {
    keyword: "Solar Data",
    link: "https://docs.google.com/spreadsheets/d/17pBaKeH7tnv5QwDu4y6xY1iSNMQSYIYSvINzhR9o4Zk/edit#gid=1839859996",
  },
  {
    keyword: "DMS Documents Folder Structure details",
    link: "https://docs.google.com/spreadsheets/d/1UcCZ28fBL3qB1SG-Iwb3UXYsLJXhsk7mX9OpWmoTifA/edit#gid=1081843126",
  },
  {
    keyword: "DMS Evaluations",
    link: "https://docs.google.com/spreadsheets/d/1GgIZZQQ9Yh5wLQx0KuYVRXpdbh8bzV7fGDfmci94tmI/edit?usp=drive_link",
  },
  {
    keyword: "IT Budget - Cap-Ex",
    link: "https://docs.google.com/spreadsheets/d/1Mbs3VB6fP7Vg8-rGc9A0y9EUJpO3w1ZvMjAF46qhFIA/edit#gid=270123406",
  },
  {
    keyword: "IT Tracking Sheet",
    link: "https://docs.google.com/spreadsheets/d/1R5LsfVbFj1kIspcgbbkmDmvEeQR1UXc8ss5qWASmlQs/edit#gid=0",
  },
  {
    keyword: "Quality Objectives Achievement report",
    link: "https://docs.google.com/spreadsheets/d/1-9CGT02itqkxBoujg_poZqq4NHzdAkP4cpeCeB4toag/edit?gid=1534479085#gid=1534479085",
  },
  {
    keyword: "File Server User credentials",
    link: "https://docs.google.com/spreadsheets/d/1EERAWArr87LW3Si4DmSUlGxz5Qvu7UJ_KuzDQ22MaSY/edit?gid=413522435#gid=413522435",
  },
  {
    keyword: "IP Address Details",
    link: "https://docs.google.com/spreadsheets/d/1l6kWG3xh12RbgRuK_lWiW-udfbNe16vL9rz58JZPX5E/edit?gid=1#gid=1",
  },
  {
    keyword: "Heavy Gmail User list to download mails",
    link: "https://docs.google.com/spreadsheets/d/1TCjsrdt3APuOHlK3As6PZf1HuV6HTdk2533bB0cguuw/edit?gid=1121541395#gid=1121541395",
  },
  {
    keyword: "EPDM User List",
    link: "https://docs.google.com/spreadsheets/d/1xm36RwFgJ-fCYZlNdwSSKG1pJYKPb265/edit?gid=1168712665#gid=1168712665",
  },
  {
    keyword: "Movement Plan",
    link: "https://docs.google.com/spreadsheets/d/1vcL81hxbmSgPUR4ccWqyaEUtou8YwKV-Nv10Vohdfu0/edit?gid=1428872967#gid=1428872967",
  },
  {
    keyword: "List of Hardware Report",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AhSExRIIZ2eldFJoMWgyVnVoamwzUHBydThZV2V0WGc&hl=en",
  },
  {
    keyword: "BSV Network Diagram",
    link: "https://docs.google.com/document/d/1Ev0bi61LeNi8arUmbJruGuj4Un_63FruBdMkIOR7NTg/edit",
  },
  {
    keyword: "SEZ Network Diagram",
    link: "https://drive.google.com/a/advancevalves.com/file/d/0BxSExRIIZ2elUmNjRUU3V1F1bDQ/view?usp=sharing",
  },
  {
    keyword: "D-8 Network Diagram",
    link: "https://drive.google.com/a/advancevalves.com/file/d/0BxSExRIIZ2elc2ZxdlJ6cF9Yam8/view?usp=sharing",
  },
  {
    keyword: "CCTV & IP Camera.",
    link: "https://docs.google.com/spreadsheets/d/1DsN0ZrJRkp_UTS6ezAAx1AvWAdNR2jov2n0G5bZmlCg/edit#gid=0",
  },
  {
    keyword: "HUPS Details",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AhSExRIIZ2eldFVzMWNMekozU09DdEl2ZE5FemdrZXc&hl=en&authkey=CJquha4",
  },
  {
    keyword: "IT Objective (ISP Down Time , Virus Attack & HwSw Audit)",
    link: "https://docs.google.com/spreadsheets/d/1WqgDF291K7X16vpuCLLfYj9J9WMw4Iapw5ICDWXq6fQ/edit?usp=drive_link",
  },
  {
    keyword: "Video Conference",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1OsiO-kyxZ2kjiFMqW2Tsgd4HD-G2gst6CoWHfedQBY0/edit",
  },
  {
    keyword: "EPDM WEB SERVER",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1PR0ixa5bkXjjV1OnL1TIj3mvAuKg-JF-IYGXc6lyNtI/edit",
  },
  {
    keyword: "Attendance Machine Details",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/attendance-machine",
  },
  {
    keyword: "Mobile Issue Details",
    link: "https://docs.google.com/spreadsheets/d/1T1fV9HlCfOEdZBhE2nQ_BCCiJdhmk8Dou83sr1t40dg/edit#gid=0",
  },
  {
    keyword: "Offsite_Backup",
    link: "https://docs.google.com/spreadsheets/d/1d5y6qPtRXxkcafsKuWoeNRYu_Jx23G_v1pqaw5gr65I/edit#gid=1119604821",
  },
  {
    keyword: "EPDM Queries",
    link: "https://docs.google.com/spreadsheets/d/18QCj74LTXiH6gR_Z7TJoGUrxjklmJ2IqzvPY7m8gc_g/edit#gid=0",
  },
  {
    keyword: "ISO Consolidated list",
    link: "https://docs.google.com/spreadsheets/d/1M8e95hpmNC3OiGu3hfDuvxEGV72SmbQwSg1PCMgAVxw/edit#gid=0",
  },
  {
    keyword: "QMS Controlled Documents",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/qms-controlled-documents",
  },
  {
    keyword: "BSV-QMS & MRM Docs",
    link: "https://drive.google.com/drive/folders/1psfUlc9IKo06Z5lEOkRx_J9XWjXSCqXX",
  },
  {
    keyword: "Restoration from Backup Server",
    link: "https://docs.google.com/spreadsheets/d/1iR3jJfZPSbq72spr_ZFIjQAzqChCLjByWG5ls1prjLk/edit#gid=1232142988",
  },
  {
    keyword: "Hardware Inventory",
    link: "https://docs.google.com/spreadsheets/d/1jyTE9gPj2KE8EO_zNGOavHNUrzwLDFxwPk5jGhbEbDU/edit#gid=1215073195",
  },
  {
    keyword: "ISPs Details",
    link: "https://docs.google.com/spreadsheets/d/11rubjZOm8YFVljJSwkdRz5jmhs81YliOYz07CzUOzV0/edit#gid=1312662014",
  },
  {
    keyword: "Mapped IPs",
    link: "https://docs.google.com/spreadsheets/d/1SwQSdhXmlnblkRnWmcUHST5iorOmiEvj3co836C_coY/edit#gid=472435293",
  },
  {
    keyword: "IDs_to_be_deleted",
    link: "https://docs.google.com/spreadsheets/d/1Bi6laTbF1Z7VRVbwhJw-AxuA68kTPmHXJmMOhNwJkKQ/edit#gid=1075792655",
  },
  {
    keyword: "Digital Signature",
    link: "https://docs.google.com/spreadsheets/d/17PVj1xtCSiuldys52vhr5RKEjsc-bAJFBKwESkAp4Vw/edit#gid=1724397257",
  },
  {
    keyword: "IT Budget",
    link: "https://docs.google.com/spreadsheets/d/1Mbs3VB6fP7Vg8-rGc9A0y9EUJpO3w1ZvMjAF46qhFIA/edit#gid=326813488",
  },
  {
    keyword: "Google Analytics",
    link: "https://docs.google.com/document/d/17-Q_kk-ui4JU2pUlcV4txfyVlAZ9qaBSFrL03n39rCI/edit",
  },
  {
    keyword: "RF and P2P details",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/rf-and-p2p-details",
  },
  {
    keyword: "Sophos firewalls Credentials",
    link: "https://docs.google.com/document/d/1vdv2NuqKKZ6HDANAx2M0SNGlkvLv0I050nO-Kk-Whd8/edit",
  },
  {
    keyword: "IT_Renewals",
    link: "https://docs.google.com/spreadsheets/d/10UhFHTytKpdmgBC8Y01HbwApRT88YTRdNmrQ4UhGjyw/edit#gid=1634392265",
  },
  {
    keyword: "Salesforce Dashboards & Target Price",
    link: "https://docs.google.com/spreadsheets/d/1tL0bvpz6MuYVBvHeky_GzqonlTsCA7-owaOemaw9twk/edit?gid=807178368#gid=807178368",
  },
  {
    keyword: "Google Tracking Sheet",
    link: "https://docs.google.com/spreadsheets/d/1ZQOm69WwfU7W_muWVKtv58K3HBp1j1aSONhKA1tCjDs/edit?usp=share_link",
  },
  {
    keyword: "H/w and S/w Audit Reports",
    link: "https://docs.google.com/spreadsheets/d/1Q-JPNW5iczddzQ-aHW1vNnxM5eUtvQS87HcVrycMrEM/edit#gid=0",
  },
  {
    keyword: "Internal Phone Extension List (NSEZ)",
    link: "https://docs.google.com/spreadsheets/d/1k4cOruvN6giWU2M7Kyxrn-WvaEzGmNsWp0gVCXVzVbA/edit#gid=235872177",
  },
  {
    keyword: "Remote Access Details",
    link: "https://docs.google.com/spreadsheets/d/13Ts4j5C-6wJzXKf63Ek1rC1cqAhIOUzmXNe0E94zY7M/edit#gid=2033260411",
  },
  {
    keyword: "Sophos AV CIXA+XDR (270+6 Servers lics.) Expire- 10 Sep 20",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/sophos-firewall-endpoint-protection-interceptx",
  },
  {
    keyword: "Google Apps - (275) Expiry-02 Dec 2025)",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/google-apps-details",
  },
  {
    keyword:
      "Advancevalves.net (50) (Expiry-04 March 2025)TrendMicro Lic. - (275) nos. (Expiry Oct 2025)TrendMicro Lic. - (275) nos. (Expiry Oct 2025)",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/advancevalves-net",
  },
  {
    keyword: "Tally",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/tally-details",
  },
  {
    keyword: "Payman",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/payman",
  },
  {
    keyword: "Solidworks / Driveworks",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/solidworks-driveworks-details",
  },
  {
    keyword: "Webhosting & Domain Registration",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/webhosting-domain-registration",
  },
  {
    keyword: "Hardware Insurance",
    link: "https://docs.google.com/a/advancevalves.com/?tab=3o&pli=1#folders/0BxSExRIIZ2elRUlJWmRPWm1yemM",
  },
  {
    keyword: "Leased Lines & RF",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/lease-lines-mpls-rf-details",
  },
  {
    keyword: "Go Global",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/go-global-details",
  },
  {
    keyword: "MS Visual Studio Pro 2013",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1C7jyjvjRgHrLN1RuU7lskIAWbNUmWikyKxNsyEKiQNM/edit",
  },
  {
    keyword: "Adobe photoshopCC & DreamweaverCC",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1SCfg2-D78x81g2k1hJi2qsrNr2OngxlhWkVX-ojA7qc/edit",
  },
  {
    keyword: "Software Inventory (Purchased)",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AhSExRIIZ2eldElJOS1Rb05yTm9id0pLbXd4S2lhZFE&usp=drive_web#gid=0",
  },
  {
    keyword: "Software Storage Location",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheets/d/1BPwTj8VmtDHyFPl8Zagr0Rd-ExU7-w02ANO2Qtd_1p4/edit#gid=725466893",
  },
  {
    keyword: "VMware License",
    link: "https://drive.google.com/open?id=1wvmWCQ_Iyl_G71Itc3rWrvJo4wIP81pG",
  },
  {
    keyword: "Go To Meeting",
    link: "https://docs.google.com/document/d/12AO8zg4-vikA_Zq-aT1VqR-wXyfDGMmAIbNtwDQKxAc/edit?usp=sharing",
  },
  {
    keyword: "O365-Lic-40nos,Expire- 6 Sep 2022",
    link: "https://docs.google.com/spreadsheets/d/1HzucKn46era2SOhQBi2tKIpKiXuBpyKlWlZ2Y6W_qMo/edit?hl=en&hl=en#gid=5",
  },
  {
    keyword: "Team Essentials 26 lics., Expiry- 11 Jan 2024",
    link: "https://docs.google.com/spreadsheets/d/1HzucKn46era2SOhQBi2tKIpKiXuBpyKlWlZ2Y6W_qMo/edit?hl=en&hl=en#gid=5",
  },
  {
    keyword: "Realwear & Mobile for Video Inspection",
    link: "https://docs.google.com/spreadsheets/d/1BrAHFu95Dqc6uGzuoQCDzq-Mb89hBt1c5jgtn5ZB6TQ/edit#gid=0",
  },
  {
    keyword: "MOVAVI Video Software",
    link: "https://docs.google.com/document/d/1SeO3GUd5P2pkxSeRaG2FEfFCRhhzCuu0AVO68KyPRmU/edit",
  },
  {
    keyword: "CA ArcServe LicensesMiscellaneousMiscellaneous",
    link: "https://docs.google.com/document/d/1zYfanQraMlH5wGbVUQaYE3_C9fyZ8hs_hWA05ob3IX8/edit",
  },
  {
    keyword: "Printing",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/information",
  },
  {
    keyword: "Call Request Entry Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfi3BdXPOZ93Kcfqn2Na4g3pZJBEzEuWeBRvr1zep7lEemBHQ/viewform",
  },
  {
    keyword: "Scada (Citect 42 r0)",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/scada-citect-5-43-r0",
  },
  {
    keyword: "New Mobile & Handsets Policy",
    link: "https://drive.google.com/a/advancevalves.com/file/d/0B5dA1zbxOuQvdjlUM2pwSk5vbVE/edit?usp=sharing",
  },
  {
    keyword: "Tour & Travel details from (Apr-11 to till date)",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0Aj9VXyUEqhOedGlPQTZHYkJCSWR6WkU2aS12ajM2OHc&usp=sharing_eid#gid=5",
  },
  {
    keyword: "File SVR & ERP installation on Linux",
    link: "https://docs.google.com/document/d/1_CnodFDZDSs6Q5lrWsqLEEQoxY8WtAHJOyPSEQupKWY/edit",
  },
  {
    keyword: "ERP logs - documents edited_deleted_opened by IT",
    link: "https://docs.google.com/spreadsheets/d/14PTDrzexyEH8IE6z4CwxhxLGhNulDEHMjCgAJgXeTZM/edit#gid=382009618",
  },
  {
    keyword: "File Server User Login Details",
    link: "https://docs.google.com/spreadsheets/d/1O92JfZuGdIyFe9Lh4MX-AFF8SDIiTa_qV7SEzM27dXY/edit#gid=1876320225",
  },
  {
    keyword: "Iotosafe Inventory list",
    link: "https://docs.google.com/spreadsheets/d/17jJBOsIyPZ-NlKwf5FNHFKJVKAn1gULms1ABONhUxtM/edit#gid=313091668",
  },
  {
    keyword: "List of Hardware Report",
    link: "https://docs.google.com/spreadsheets/d/1ckbe8EIopeQnALnV1G0kr679ZWIWbg4muOQ4U9kZioM/edit#gid=1553478372",
  },
  {
    keyword: "Minutes of Monthly Review",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGV3RzZteUpzdC0xdE1kMG5VNFdOVGc#gid=0",
  },
  {
    keyword: "Minutes of Monthly Review",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdDBIOVViX3Q3SEtiVE4wTWdRNTc0MEE#gid=0",
  },
  {
    keyword: "Active Task List",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/ppc-area/ppc-task-list",
  },
  {
    keyword: "Minutes of Monthly Review",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdHpiZ0tMWjdhWEZoZ2hsSXJrV0RLZFE#gid=0",
  },
  {
    keyword: "BD Tracking Sheet",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldGJqaG1GVnM0dVpmREhTMGZzWlEzdGc#gid=5",
  },
  {
    keyword: "BT Tracking Sheet",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldGJqaG1GVnM0dVpmREhTMGZzWlEzdGc#gid=5",
  },
  {
    keyword: "DPCV Tracking Sheet",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldEtwbS1tV21Vd3g4XzF2SzdnX05La2c#gid=0",
  },
  {
    keyword: "Metric Sheets",
    link: "https://docs.google.com/a/advancevalves.com/?tab=3o&pli=1#folders/0B7rGa0i6obTlRUdaOG1KWklCWHc",
  },
  {
    keyword: "Assembly plan for Noida",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AmX-lBV0OSuhdHlJSm1lR0dLRlI0d09JY2U3eU1QbEE&usp=sharing",
  },
  {
    keyword: "Production Plans",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AojChAtWpcURdG1ZeGw0TDRHNW1DaFVMeWJQVTc5aXc&usp=sharing",
  },
  {
    keyword: "Leave & Tour Calender for PPC",
    link: "https://www.google.com/calendar/render?tab=3c",
  },
  {
    keyword: "Working Template for client status.",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AgeXQKevfi--dC13cG5raFExX1lsOV83aWVpMktkcXc&pli=1#gid=0",
  },
  {
    keyword: "Customer Care Cell- Status submission Tracking sheet",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AojChAtWpcURdGs3Y0dvQ3FRMjc0eWxYc20zMDRTN3c#gid=0",
  },
  {
    keyword: "PPC Task List",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Lh6s48E4tCjI93rt7F-86xx-c6KvQd4T/edit",
  },
  {
    keyword: "Daily Production Report Form (BD/BT Assembly Shop)",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1W3gIyCWsn5H-N_LM2VbX6_95ostYSoYawV_3hro9HCg/viewform?c=0&w=1",
  },
  {
    keyword: "BD/BT Assy. Shop",
    link: "https://docs.google.com/spreadsheets/d/1A9cwYdvVpoBlxvxDhnwToQaR8c8-Elh9EHT3VnjMzM0/edit#gid=1593773910",
  },
  {
    keyword: "Daily Production Report Form (DPCV Assembly Shop)",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1bUUqrPCEbmjZbmJBJnnM-kQYc6gYjQC3-RiNGRq-cjA/viewform?c=0&w=1",
  },
  {
    keyword: "DPCV Assy. Shop",
    link: "https://docs.google.com/spreadsheets/d/1NGhj5WDxibGQ_YvZ36H8dQ0YQ9ImBwulkJEGbRNUrSg/edit#gid=1356509910",
  },
  {
    keyword: "Daily Production Report Form (Welding Shop)",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1LTgvqCv3UEB9Xm94mTAQLis62-tLEUEMshgLo3X_91A/viewform?c=0&w=1",
  },
  {
    keyword: "Welding Shop",
    link: "https://docs.google.com/spreadsheets/d/1ec97Mw1_aya2YfdQDulal7CqaZJAgvpIQpxxZNE9MJQ/edit#gid=1475959955",
  },
  {
    keyword: "Daily Production Report Form (Testing Shop)",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1h59fNIqoBr9YRjHrIW8ScVwy21-CeBmxpquqvHIi3p8/viewform?c=0&w=1",
  },
  {
    keyword: "Testing Shop",
    link: "https://docs.google.com/spreadsheets/d/1X0lxUDsMPfzNQY2qbSbNZ-yI339txCGz8_9huLiQzfc/edit#gid=1087868588",
  },
  {
    keyword: "Daily Production Report Form (Shot Blasting & Painting)",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1FffMTcIvaSlwbHUKlucTHgDexwy8bXTldsYGu0I_QJo/viewform?c=0&w=1",
  },
  {
    keyword: "Shot Blasting & Painting Shop",
    link: "https://docs.google.com/spreadsheets/d/1GbnETgRazjHCxE6YJ4JkvSJd77dk4Ps-Fzqj2NXUrps/edit#gid=1742504727",
  },
  {
    keyword: "BT internal testing form",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/e/1FAIpQLSdmbDCIecfzxNd6zEmyySizs8OgNVaNyj2DjwFQ0BS16979-A/viewform?c=0&w=1",
  },
  {
    keyword: "BT internal testing report",
    link: "https://docs.google.com/spreadsheets/d/1MPu8f7pGFS5rjCzoI-Q4-8xskz0dSBpySGOSt26rcJk/edit#gid=720888908",
  },
  {
    keyword: "DP internal testing form",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/e/1FAIpQLSfatL-oSbBuHlQReGwgnGJxNsQWxjrgN6sJKyF72Ymw7LdONw/viewform?c=0&w=1",
  },
  {
    keyword: "DP internal testing report",
    link: "https://docs.google.com/spreadsheets/d/16Fm71Tcppg1qUZD_C_Bee2__ZUYYzWXhzeJr5b0qjyY/edit#gid=937464293",
  },
  {
    keyword: "Route card tracking sheet",
    link: "https://docs.google.com/spreadsheets/d/1jU655z1Db5Wdc667_4fl-0PJ2iKb_T3inbS896DGxVo/edit?ts=58c108f2#gid=0",
  },
  {
    keyword: "Route card tracking sheet (AVPL D-8)",
    link: "https://docs.google.com/spreadsheets/d/1jU655z1Db5Wdc667_4fl-0PJ2iKb_T3inbS896DGxVo/edit?ts=58c108f2#gid=278593468",
  },
  {
    keyword: "Request for Change Form [RFC]",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScGOMnbENG_FYdEJWtfki7KIc-oUdqYGKX9fbVBPO4xE0RRAg/viewform",
  },
  {
    keyword: "RFC Closure form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeXNorUNxhoeV-5axJittWgVFuAmBSjm59ij0IFETmsYJHH7g/viewform",
  },
  {
    keyword: "NDT Eye Welding & Painting Personnel Certificates",
    link: "https://docs.google.com/spreadsheets/d/17NnZwxKYiI1V9iad4QedM1UPNllztDpeue81Uiz9YpU/edit#gid=0",
  },
  {
    keyword: "Conversion Sheet for Leakage Rate (ISO",
    link: "https://docs.google.com/spreadsheets/d/1hqwDveg1rUkLh3kSeYINbcWtd642p50XkR-ijjNG_Kg/edit#gid=0",
  },
  {
    keyword: "5208 & API 598)",
    link: "https://docs.google.com/spreadsheets/d/1hqwDveg1rUkLh3kSeYINbcWtd642p50XkR-ijjNG_Kg/edit#gid=0",
  },
  {
    keyword: "IBR Approved Drawings",
    link: "https://docs.google.com/spreadsheets/d/1eaHg7W3gZgsbdG2TfRbFTfgnWWLTmsCggWcX6I1UsEY/edit#gid=0",
  },
  {
    keyword: "External Audit Details",
    link: "https://docs.google.com/spreadsheets/d/1Jeb6S-XYpVroLCzlkE8FosOLCHnpdZ0z7zq2SQodaN4/edit",
  },
  {
    keyword: "Operating Folder for CE Mark Orders",
    link: "https://drive.google.com/drive/folders/0B9x8538EpFJHSXhnZi1jeEZ4UGM",
  },
  {
    keyword: "Master List of QA Records",
    link: "https://docs.google.com/spreadsheets/d/1LQSRC0NUjAaQXawPfXXp_tFYnST0J2JadAtm64Hi4-E/edit#gid=185591086",
  },
  {
    keyword: "ISO Consolidated List",
    link: "https://docs.google.com/spreadsheets/d/1M8e95hpmNC3OiGu3hfDuvxEGV72SmbQwSg1PCMgAVxw/edit#gid=2",
  },
  {
    keyword: "QA TPI Calendar",
    link: "https://www.google.com/calendar/b/1/render?tab=oc#g%7Cmonth-3+23105+23132+23105",
  },
  {
    keyword: "NCR Review Sheet - System",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0ArrGa0i6obTldFBZVC1oWXk0MzJjM1NGc2tDYjV5c0E&hl=en_GB",
  },
  {
    keyword: "TPI Feed Back Form",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/viewform?pli=1&formkey=dFRkZTdVVVJwckROSHhiMnFUMUlHcFE6MQ#gid=0",
  },
  {
    keyword: "Minutes of Monthly & Weekly Review",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGJhRVRRWS1ySzFKYnh0RTlrYU9yWUE#gid=0",
  },
  {
    keyword: "Calibration List - AVG",
    link: "https://docs.google.com/spreadsheets/d/1mI49umy_oM7mqShh4NZ1oj55X_drlecWhMU-p8ImYS8/edit#gid=1131637780",
  },
  {
    keyword: "QA_MIR Tracking Sheet (TAT)",
    link: "https://docs.google.com/spreadsheets/d/1bOGi1a1jdDDXG0L9T7Pe7WnPw3F7D8LhTgNsx2nokEo/edit#gid=1",
  },
  {
    keyword: "Casting Rejection Data",
    link: "https://docs.google.com/spreadsheets/d/1c1qXlZU14Ag8rwfAPozBYWqDBYGURzb2J7xZn6jNhIk/edit#gid=0",
  },
  {
    keyword: "Achievement Of 90% on time IRN as Per Planning Sheet- 2018",
    link: "https://docs.google.com/spreadsheets/d/11WifRUK-fQVsypwpqQ-oXkfqIkC33VuhS4V0TSCHHRw/edit#gid=0",
  },
  {
    keyword: "Functional Dashboard",
    link: "https://docs.google.com/spreadsheets/d/15V9LPFaQ30ufq1iAo-YKl2ZPCH971qJgN2kg6-8s47Y/edit#gid=0",
  },
  {
    keyword: "In-Process Non Conformity Tracking Sheet",
    link: "https://docs.google.com/spreadsheets/d/1M9fjrTz0mouD2X4AKkjInrhynA-X7eSR7Nj8KPbmoZ0/edit#gid=1710191170",
  },
  {
    keyword: "Dossier Data",
    link: "https://docs.google.com/spreadsheets/d/1aelUp6YCnyBVaiVCgTsEYZXsJMjm529iRDUhG2wtSCI/edit#gid=1729472408",
  },
  {
    keyword: "Dye Penetrant Log Register",
    link: "https://docs.google.com/spreadsheets/d/1gvqrZ6p2c79ZwLFktW6KGCjRXdX10m4c/edit#gid=1081868118",
  },
  {
    keyword: "Magnetic Particle Log Register",
    link: "http://goog_2019641603/Magnetic",
  },
  {
    keyword: "Ultrasonic Testing log Book",
    link: "https://docs.google.com/spreadsheets/d/18wyERGd17YnYktd20EyifWVe1EYWqLBb/edit?usp=sharing&ouid=106091621934223710729&rtpof=true&sd=true",
  },
  {
    keyword: "Minutes of Monthly Review",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGZWV2hDbl81a255emhZTjM1V29idVE#gid=0",
  },
  {
    keyword: "Minutes of Monthly Review - HVAC",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdE5GVER2bWhLd2VYV3F3b3F4OGlNVlE#gid=0",
  },
  {
    keyword: "Customer Visit Repor",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/viewform?rm=full&formkey=dFpPYmtKN1BPdzFtRjJwOFVmLWtNaXc6MQ#gid=0",
  },
  {
    keyword: "Feedback Form IBG & GBG",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc6DwNBejGVam-4f2ttCMt74Mk_AhiP1EpjKMQVwR-WNQpFhg/viewform",
  },
  {
    keyword: "Feedback Form ABG (HVAC)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScOw5XpdiSwKgtxzjmVAOmo3NC3oAcA2GgurCQYAt-Me8DY0g/viewform",
  },
  {
    keyword: "PQ Request Form",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScRa_XzhQT6rcNtyDA5X7qaye6IswIY1bRp6XPBoxFRSE6OmA/viewform",
  },
  {
    keyword: "Minutes of the Monthly Review",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGhpOVRNTHVKQkRvM0dmcE4xc3Bob3c#gid=0",
  },
  {
    keyword: "Compliance Report",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0Ajgyl9Bz2Hl1dG9zQkxpSWhwdXd5QVNsak9SN3FTelE#gid=0",
  },
  {
    keyword: "Pending C-Form",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0Ajgyl9Bz2Hl1dEdlcXlqZ2VnNHowekJXWUt5Z2ZlQ2c#gid=10",
  },
  {
    keyword: "AVPL-SEZ BG",
    link: "https://docs.google.com/spreadsheets/d/1uFfDLOMiGX_F0O-z6wFmmZE_KyL_BlSgjzRf4gpGilI/edit#gid=1954832454",
  },
  {
    keyword: "COMPANY GOAL FY 2024-25",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1siq14DZP87qV4YVchyeAMUeFi3h31slR/edit",
  },
  {
    keyword: "ORGANIZATION",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Z6wwNdDld8Ib4MDEev15ftaBvxlXH30m/edit",
  },
  {
    keyword: "MATERIAL",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Riw_weI9N0iafr-DDda8YORfc2lV93Jw/edit",
  },
  {
    keyword: "PRODUCTION",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1GgWuyQDfY7K6iWrW7Avn2oezJnpyI84K/edit",
  },
  {
    keyword: "PLANNING",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1e9g5n9hUxeoiGT3MpXGOxlL-vwjWw_IS/edit",
  },
  {
    keyword: "QUALITY",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1AXG0xzhJm1u453Jqa6Y0xMt8Kw060J2P/edit",
  },
  {
    keyword: "MARKETING",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/marketing-area/mktg-main-dashboard-charts?authuser=0",
  },
  {
    keyword: "SALES",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1i61o818yNV4HywlxYXjqOAS5Ggxc0FgY/edit",
  },
  {
    keyword: "STORE",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1heM7oA6K1nCB2CqHsO_172VUUwqmEASA/edit",
  },
  {
    keyword: "HR",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1p0-IvgTKyA-WmnK4Ha5EmsUQsGKms7HJ/edit",
  },
  {
    keyword: "IT",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1IeUPjjl42OpQSU8b4i6O8g4lRl-5lYjL/edit",
  },
  {
    keyword: "DESIGN",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Qf3NYDeCvhYVtTQheNkEaZ1JcmjLC0Eb/edit",
  },
];




