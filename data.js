const documents = [
  // --- Initial Data Set ---
  {
    keyword: "Marketing & objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tWkjRjC3XDndeHLsUJfiUZwcwkYm2H3Q/view",
  },
  {
    keyword: "Objective & Design",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SwC5GpLvY82IOykEuwxZCAwJKkIesZEs/view?usp=sharing",
  },
  {
    keyword: "Objective quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PWWK2GZwMO4KYQ2VScqF8Fzb5mG8hpqM/view",
  },
  {
    keyword: "Objective material",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MhcIoa2hu3hXR4Ybg8ZyNM7IRvCSkJbx/view",
  },
  {
    keyword: "Objective Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1myTwnh8M9XGop0Ccasby0t-b8YSW0QdR/view",
  },
  {
    keyword: "Objectives HRD",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QQkcCAC5TQZmve8sFJL90B1dSWxL1HSB/view",
  },
  {
    keyword: "Objective project management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sIZh_mFkHi-lr8DY8LruxCeMW8iIx5jc/view",
  },
  {
    keyword: "Quality Objectives IT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WrImMZBW_BlQeffpR7G1hHDKErfRuSMZ/view",
  },
  {
    keyword: "Quality objectives Quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S6GbNl0Auz-oFz0KndlLhffsLBgsEfwz/view?usp=share_link",
  },
  {
    keyword: "BSV Organization Quality objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1LYam7pVsF67q06zL_YXWLTrsCDnOrf9x/view?usp=drive_link",
  },
  {
    keyword: "Quality objective marketing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hwKvCVvaNPj9UG_KubKFMGPfbWIJYNw0/view?usp=sharing",
  },
  {
    keyword: "AVG Organization quality objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SM_SLVE4h1AINDkiZt6z__1gXT3BowC0/view",
  },
  {
    keyword: "Qualitiy objective design",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SwC5GpLvY82IOykEuwxZCAwJKkIesZEs/view?usp=sharing",
  },
  {
    keyword: "Quality objectives marketing and sales",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tWkjRjC3XDndeHLsUJfiUZwcwkYm2H3Q/view",
  },
  {
    keyword: "Objectives quality assurance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PWWK2GZwMO4KYQ2VScqF8Fzb5mG8hpqM/view",
  },
  {
    keyword: "Quality Objective Purchase",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MhcIoa2hu3hXR4Ybg8ZyNM7IRvCSkJbx/view",
  },
  {
    keyword: "Quality Objectives Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1myTwnh8M9XGop0Ccasby0t-b8YSW0QdR/view",
  },
  {
    keyword: "Quality Objectives HR",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QQkcCAC5TQZmve8sFJL90B1dSWxL1HSB/view",
  },
  {
    keyword: "Objective & Production",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sIZh_mFkHi-lr8DY8LruxCeMW8iIx5jc/view",
  },
  {
    keyword: "Quality objective IT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WrImMZBW_BlQeffpR7G1hHDKErfRuSMZ/view",
  },
  {
    keyword: "Organization quality objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SM_SLVE4h1AINDkiZt6z__1gXT3BowC0/view",
  },
  {
    keyword: "BSV Qualty objective quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S6GbNl0Auz-oFz0KndlLhffsLBgsEfwz/view?usp=share_link",
  },
  {
    keyword: "MKT-F , Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1349SRF0Mdam0uQ-oldZr_7yXYQROZroZ/view",
  },
  {
    keyword: "MKT-F, Concentric Butterfly valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fPmHI9idis-2ioV6JWgFqrMhziUcPEWn/view",
  },
  {
    keyword: "MKT -F, Double Eccentric Butterfly valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/17wgp9DdQl8ZEbjbEkP0sZacBpeffJCsU/view",
  },
  {
    keyword: "MKT-F, Triple Eccentric Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Mc6PtGUnctjogDu8Ep5m3htPmo5eOqkm/view",
  },
  {
    keyword: "MKT-F, First Information Report (FIR)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1J1WZFJn24VvmG1miJmqwwDHkxqWVh0Us/view",
  },
  {
    keyword: "MKT-F, Check list for Pneumatic actuator",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vEP1f01LXQIM0uharJ7OYPHav5Yte31u/view",
  },
  {
    keyword: "AVG Price Quotation format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VKaVCeSqKZ3Q5KTVOcxFGdY_lLwz8tId/view",
  },
  {
    keyword: "AVPL, Price Quotation format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1p0QFGjYv02wMtRY97iuIVtIyXzungUeJ/view",
  },
  {
    keyword: "MKT-F, Contract Review Check list for MOV actuator",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GabycuCfkbXc1PPkeMiPB7sDtV9WZoA9/view",
  },
  {
    keyword: "MKT-F, Sales Order Cum Order Acceptance- Domestic",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12g3jgNmGQiPkPTmz2eSqnBTahf4LodzD/view",
  },
  {
    keyword: "MKT-F, Sales Order Cum Order Acceptance- Export",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MkUHxDaGbeJBHqD92RxZrG9V2Rm0y6wl/view",
  },
  {
    keyword: "MKT-F, Document Transmittal Form.doc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13aglgxhSnvWodATN9RxEbrLDfP0K-GCo/view",
  },
  {
    keyword: "MKT, Customer Complaint Handling Form.doc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fOkBKuQz7lVFCe8VF0jOWhknkBu7HQge/view",
  },
  {
    keyword: "MKT-F, Packing list-Export",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1CoQHHleA3V8uCf9fGDNm3_GdsiEfxgNU/view",
  },
  {
    keyword: "MKT-F, Packing list-Domestic",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BZxZZggqpMruXuYHiVxwzDzia41sWOA7/view",
  },
  {
    keyword: "MKT domestic invoice",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hA_ttVxH8N_BwfmrRfkkYEqL8kWcWVkn/view",
  },
  {
    keyword: "MKT-F, Export Invoice.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yZba9e0Dy1UgUnzIy0-0-8Ox6yt6YAvw/view",
  },

  // --- New Data Set ---
  {
    keyword: "Organization quality objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SM_SLVE4h1AINDkiZt6z__1gXT3BowC0/view",
  },
  {
    keyword: "Objective & Design",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SwC5GpLvY82IOykEuwxZCAwJKkIesZEs/view?usp=sharing",
  },
  {
    keyword: "Marketing & objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tWkjRjC3XDndeHLsUJfiUZwcwkYm2H3Q/view",
  },
  {
    keyword: "Objective quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PWWK2GZwMO4KYQ2VScqF8Fzb5mG8hpqM/view",
  },
  {
    keyword: "Objective material",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MhcIoa2hu3hXR4Ybg8ZyNM7IRvCSkJbx/view",
  },
  {
    keyword: "Objective Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1myTwnh8M9XGop0Ccasby0t-b8YSW0QdR/view",
  },
  {
    keyword: "Objectives HRD",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QQkcCAC5TQZmve8sFJL90B1dSWxL1HSB/view",
  },
  {
    keyword: "Objective project management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sIZh_mFkHi-lr8DY8LruxCeMW8iIx5jc/view",
  },
  {
    keyword: "Quality Objectives IT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WrImMZBW_BlQeffpR7G1hHDKErfRuSMZ/view",
  },
  {
    keyword: "Quality objectives Quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S6GbNl0Auz-oFz0KndlLhffsLBgsEfwz/view?usp=share_link",
  },
  {
    keyword: "BSV Organization Quality objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1LYam7pVsF67q06zL_YXWLTrsCDnOrf9x/view?usp=drive_link",
  },
  {
    keyword: "Quality objective marketing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hwKvCVvaNPj9UG_KubKFMGPfbWIJYNw0/view?usp=sharing",
  },
  {
    keyword: "AVG Organization quality objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SM_SLVE4h1AINDkiZt6z__1gXT3BowC0/view",
  },
  {
    keyword: "Qualitiy objective design",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SwC5GpLvY82IOykEuwxZCAwJKkIesZEs/view?usp=sharing",
  },
  {
    keyword: "Quality objectives marketing and sales",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tWkjRjC3XDndeHLsUJfiUZwcwkYm2H3Q/view",
  },
  {
    keyword: "Objectives quality assurance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PWWK2GZwMO4KYQ2VScqF8Fzb5mG8hpqM/view",
  },
  {
    keyword: "Quality Objective Purchase",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MhcIoa2hu3hXR4Ybg8ZyNM7IRvCSkJbx/view",
  },
  {
    keyword: "quality Objectives Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1myTwnh8M9XGop0Ccasby0t-b8YSW0QdR/view",
  },
  {
    keyword: "Quality Objectives HR",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QQkcCAC5TQZmve8sFJL90B1dSWxL1HSB/view",
  },
  {
    keyword: "Objective& Production",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sIZh_mFkHi-lr8DY8LruxCeMW8iIx5jc/view",
  },
  {
    keyword: "Quality objective IT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WrImMZBW_BlQeffpR7G1hHDKErfRuSMZ/view",
  },
  {
    keyword: "BSV Qualty objective quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S6GbNl0Auz-oFz0KndlLhffsLBgsEfwz/view?usp=share_link",
  },
  {
    keyword: "MKT-F , Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1349SRF0Mdam0uQ-oldZr_7yXYQROZroZ/view",
  },
  {
    keyword: "MKT-F, Concentric Butterfuly valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fPmHI9idis-2ioV6JWgFqrMhziUcPEWn/view",
  },
  {
    keyword: "MKT -F,Double Eccentric Butterfly valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/17wgp9DdQl8ZEbjbEkP0sZacBpeffJCsU/view",
  },
  {
    keyword: "MKT-F,Triple Eccentric Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Mc6PtGUnctjogDu8Ep5m3htPmo5eOqkm/view",
  },
  {
    keyword: "MKT-F,First Information Report (FIR)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1J1WZFJn24VvmG1miJmqwwDHkxqWVh0Us/view",
  },
  {
    keyword: "MKT-F,Check list for Pneumatic actuator",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vEP1f01LXQIM0uharJ7OYPHav5Yte31u/view",
  },
  {
    keyword: "AVG Price Quotation format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VKaVCeSqKZ3Q5KTVOcxFGdY_lLwz8tId/view",
  },
  {
    keyword: "AVPL,Price Quotation format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1p0QFGjYv02wMtRY97iuIVtIyXzungUeJ/view",
  },
  {
    keyword: "MKT-F,Contract Review Check list for MOV actuator.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GabycuCfkbXc1PPkeMiPB7sDtV9WZoA9/view",
  },
  {
    keyword: "MKT-F,Sales Order Cum Order Acceptance- Domestic",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12g3jgNmGQiPkPTmz2eSqnBTahf4LodzD/view",
  },
  {
    keyword: "MKT-F,Sales Order Cum Order Acceptance- Export",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MkUHxDaGbeJBHqD92RxZrG9V2Rm0y6wl/view",
  },
  {
    keyword: "MKT-F,Document Transmittal Form.doc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13aglgxhSnvWodATN9RxEbrLDfP0K-GCo/view",
  },
  {
    keyword: "MKT,Customer Complaint Handling Form.doc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fOkBKuQz7lVFCe8VF0jOWhknkBu7HQge/view",
  },
  {
    keyword: "MKT-F,Packing list-Export.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1CoQHHleA3V8uCf9fGDNm3_GdsiEfxgNU/view",
  },
  {
    keyword: "MKT-F,Packing list-Domestic",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BZxZZggqpMruXuYHiVxwzDzia41sWOA7/view",
  },
  {
    keyword: "MKT domestic invoice",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hA_ttVxH8N_BwfmrRfkkYEqL8kWcWVkn/view",
  },
  {
    keyword: "MKT-F,Export Invoice.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yZba9e0Dy1UgUnzIy0-0-8Ox6yt6YAvw/view",
  },
  {
    keyword: "MKT-F ,Service-Cum-Complaint Attendance Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MhcIoa2hu3hXR4Ybg8ZyNM7IRvCSkJbx/view",
  },
  {
    keyword: "MKT Kick of meeting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14MTmaPnReHNpAL8rWWP9s8ygD0W3LYIZ/view",
  },
  {
    keyword: "MKT-F,Complaint Register & Review Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1CW24TFlOMxeWq6BqQt_vJPtl8p8dhtrl/view",
  },
  {
    keyword: "MKT-F,Spare Parts Interchangeability Record SPIR",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Y6zXdtL90iJKFXQVORE1tIVyNGAiwZsC/view",
  },
  {
    keyword: "MKT-F,Servicing Requirement Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zihfc_oWeYkhkQjGDsP4JGawEUKXZQZr/view",
  },
  {
    keyword: "MKT-F,Externally Owned Property Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11BIayM4XcdKMR-qUOUUvLPnbvpGzpvAB/view",
  },
  {
    keyword: "MKT-F,Customer Feedback form for Pre-Order.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1M3HuHupfIAyT3q6qu2seupkQFNN-ndHF/view",
  },
  {
    keyword:
      "MKT-F,Check List for Approval of Sales Order cum Order Acceptance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1pOZgUk4yeoLvltpRSy05Rral_OVIuR6l/view",
  },
  {
    keyword: "MKT-F,Contract Review Check list,Axial FlowCheck Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QQDMJeYkFA7xl0mt16tVVOF2Oots7t7G/view",
  },
  {
    keyword: "PUR-F,Purchase Order.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15x8cbDaITNgz4y9Kp3sG8NKHaKTuTtdT/view",
  },
  {
    keyword: "PUR-F,Purchase Casting Planing & Tracking Sheet.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AqAZGy1kPqwpXW6fshrbaaZyue-G92LU/view",
  },
  {
    keyword: "PUR-F,Purchase Order Wise Pending Supplies.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1NGVbKEkHpSCRP4nRwnnYtlBi1C6yYwez/view",
  },
  {
    keyword: "PUR-F,Supplier Approval Form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1Q4yzRPZCIM6UQaRP7TDiexRRm8WEIqOW/edit",
  },
  {
    keyword: "PUR-F,Approved Supplier List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14kpci_uchdOk74pAwsdsCUtmwIrPzjdc/view",
  },
  {
    keyword: "PUR-F,Pattern Management System (PMS) Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16OUVh5u63BoMKqDT6fxSZQUtnUGjGADk/view",
  },
  {
    keyword: "PUR-F,Bid analysis",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XSkGkI-Maoprt3SYBCR2pT5Kujl9UkJL/view",
  },
  {
    keyword: "PUR-F,Pattern List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1w11ZdRLLn1uq6_Ri7zW1xrIdvEDm8JoI/view",
  },
  {
    keyword: "PUR-F,Check List for PO Approve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RHrZO645dEnbxUjDpWAjlxDi-3hWZqpv/view?usp=sharing",
  },
  {
    keyword: "PUR-F,Rate Contract Format.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xA-uYs9FoZGYSgAjJwrJr0iBwV-Pi-Hd/view?usp=sharing",
  },
  {
    keyword: "PUR-F,Purchase Requisition.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18dXnn_mbPT0wm5hyVPfrwvFINRMjHkc5/view",
  },
  {
    keyword: "PUR-F,Supplier Re-evaluation or Rating form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QgBXhbiOQqunOp6S6UX5pht7MrEbP8jI/view",
  },
  {
    keyword: "PUR-F,Enquiry Form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1f5Ofg0iDXdX1gS-yJJePS0T95SayEVpI/view",
  },
  {
    keyword: "PUR-F,Supplier evaluation report of casting & forging item",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DR1tDDmxUCSgGSHsMYsq7B6FSUeLK29g/view",
  },
  {
    keyword:
      "PUR-F,Supplier evaluation report of machining services out sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16K2mrqAAXl1MoZt11fi3ebm0Jvp4--kF/view",
  },
  {
    keyword:
      "PUR-F,Supplier Evaluation Report of Bought Out & Raw Material Items.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1EYCQBjWBL1KI6ibkTxfIKnMY0Ti2DKhx/view",
  },
  {
    keyword: "PUR-F,Supplier Evaluation Report for NDE Services Out Sourced.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1waV8qmeAio3qlQLuHFpYLzBoFEZfzkNZ/view",
  },
  {
    keyword: "PUR-F,Welding Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MYJUtHdysgxKp2NqE4v3vaGtaFvczP-p/view",
  },
  {
    keyword: "PUR-F,Calibration Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1HTPnvMKZS_fWNbOthJPPYHpRA3AN7kFz/view",
  },
  {
    keyword: "PUR-F,ENP coating services out sourced.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zNaq7VWmHX-6qCdcvUO1UG6XAVF2L2J0/view",
  },
  {
    keyword: "PUR-F,vulcanizing & rubber lining services out sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lG3ab4JpcDdiGiMcyvmcpy7uPY78Nhtj/view",
  },
  {
    keyword: "PUR-F,Spring coiling services out sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lxoSZ2I71_3OnJb87nly59crcCbZJ1p-/view",
  },
  {
    keyword: "PUR-F,Other Products or Activities.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_-k2Zjz3dBo3mjg878JeXnQvXA6GlwpX/view",
  },
  {
    keyword: "PUR-F,List of On Hold & Deactivated Supplier",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lYmrNuIQpcghoOnsoSpO22YnDvbELCoC/view",
  },
  {
    keyword: "PUR-F,Heat Treatment Services out sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DoumqEpoampo9SqrVyV7RWo45aYYzqP4/view",
  },
  {
    keyword: "PUR-F,Advance valves casting , SIZE, RATING & WEIGHT/PIECE",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18i457zbhXdMpFW3RnTvG3bLua98jDTfZ/view",
  },
  {
    keyword: "PUR-F,Validation Report - Rubber Vulcanization or Lining",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lpafiTHhPBr2tN1vQnp_s3eh4A8RMPso/view",
  },
  {
    keyword: "PUR-F,ENP coating validation format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WFLktsfrE8BaureOzMa5Xv-ZIx9-7wfY/view",
  },
  {
    keyword: "PUR-F,Suppliers Internal & Supply Chain Control Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PkZ93jgfVyssYaCEmGn7j0IzGf06p9K2/view",
  },
  {
    keyword: "PUR QUARTERLY SUPPLIERS RE-EVALUATION PLAN FORM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PmkM3ofoovV_oJAv7iHTafS5AEG-hhls/view",
  },
  {
    keyword:
      "PUR-F,Evaluation Report of Consultant or Certification Activities.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lyH0R05TbujC582tBYk9aIqH4u6JQFi5/view",
  },
  {
    keyword: "PUR-F,Supplier Risk Assessment",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1gA6Srei_sduuPNxYwYXp3kyk6To5Ep7P/view",
  },
  {
    keyword: "PUR-F,Import PO format.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-rrlQ5gx2KDEmMeKGU81_DKecyItcDSc/view",
  },
  {
    keyword: "PUR-F,Supplier evaluation report of -Traders.xlsx",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11u2t2m0irA864KNqRyR-2-jVFaFdBvn1/view",
  },
  {
    keyword: "PUR-F,Supplier Feedback form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18jfmHxabdWSr6VKGbhRvQUsX_VRD2z7G/view",
  },
  {
    keyword: "PUR-F,Supplier Feedback Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1h_lqC84Sr4y7O4ZUaAPdLfC7Ahosm4pq/view",
  },
  {
    keyword: "PUR-F,PMS Closure Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sNxY4q3vEgC5nRj_hHo-PK1syAkcYUED/view",
  },
  {
    keyword: "PUR-F,Supplier Evaluation Report of Fasteners",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qERgryD3pwyIDM2IlvTb4HJtkhn4HxLN/view",
  },
  {
    keyword: "STR-F,Material Issue Request - Non BOM Issuance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MxH8V6SYqLHwNVFa_M2gPa8c4FqZpsd7/view",
  },
  {
    keyword: "STR-F,Store Return Note",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yYB8Jg90czCZpBHiTdxnxRqILlTB3PTU/view",
  },
  {
    keyword: "STR-F,Combined Stock Report (Value)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1g2-6YyXtWC-xbG_j6DbydjZvzucFLcvO/view",
  },
  {
    keyword: "STR-F Bill Entry Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18B_XEjoG7vO_e6sA_FeTwWLu-Q14m0w8/view",
  },
  {
    keyword: "STR-F,Stock Ledger.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14v0hnqxzw6t5AwakndFpy0hzv3qjFcUJ/view",
  },
  {
    keyword: "STR-F,Stock Fifo Value.pd",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1U-zPU7T3txptqt4TBf3re_a0TpiS5eRk/view?usp=sharing",
  },
  {
    keyword: "STR-F,Returnable Challan - WIP.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-vgvGZ82qCeeSJfYX_mf3Rr9mCV37QUk/view",
  },
  {
    keyword: "STR-F Material Receipt Report - MRN with PO",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1mZ0YNnWT9NCl4k8A3k17aT41jcMCQjUh/view",
  },
  {
    keyword: "STR-F,Material Receipt Report - MRN Imported.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1efrCzCoPsoRiY86mpxCJVoyfKOBuiNBh/view",
  },
  {
    keyword: "STR-F,_Material Receipt Report - General.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VMX56Cf-bBelWIjMDhy-C-i3XT-oYtNE/view",
  },
  {
    keyword: "Material Receipt Report - Job Work.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-C5gOt37sZGb16chrdHbBxhmSbHWyDer/view",
  },
  {
    keyword: "STR-F,Material Receipt Report - RRGP.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13IcQW2UGtcY8WZ8WA7o8G9Hu8ciqVQ1P/view",
  },
  {
    keyword: "STR-F,Non Returnable Challan.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fkD6ikTpNYLslIsuyQ98it1qcQPLagjK/view",
  },
  {
    keyword: "STR-F,Returnable Challan.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PXZjP_Knw9dGulXWQIo-iHzhoO1qFPgu/view",
  },
  {
    keyword: "STR-F,Material Return After Job Work.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12zbNq7jiN5PL1fOY2IMLOrTHBwdSYCTA/view",
  },
  {
    keyword: "STR-F,Store Issue Report - Non BOM.p",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1T0bs4AGEiQz-l7dyyDDb3GTmvbURHzda/view",
  },
  {
    keyword: "STR-F,Store Issue Report-BOM.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1TJp62AJ6ucjR2ENyCkIylsZZZrGIdWKN/view",
  },
  {
    keyword: "STR-F,Packing Note.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Civlx1n-_Tj3VFdTWebfUOVArA03n6J2/view",
  },
  {
    keyword: "STR-F,Stock Assessment Report Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/17kbOzSTdJ01F0oUyMxpx1S7W0uTKGtdJ/view",
  },
  {
    keyword: "STR-F,Material Identification Tags",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1W4VtMlXCp55dRORU5kLrjw5CmjQi6HfM/view",
  },
  {
    keyword: "HRD-F,Competency Matrix.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jP2lfLN6H49_rc1unibw1Fh4QjVi4gDD/view",
  },
  {
    keyword: "HRD-F,Employee Data Form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1gvSP9pcKFV47tnerhi0wZ_iXqlCkW--2/view",
  },
  {
    keyword: "HRD-F,New Joinee Check List.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1j3DSjK4aHyNfjIkJ0Pf15ftBWdmS2k7n/view",
  },
  {
    keyword: "HRD-F,Half Yearly Calendar.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VpJKsKuzTVaLGsCzIhyMI8Qn0uDgv0SD/view",
  },
  {
    keyword: "HRD-F,Training assessment response sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aa1rB-0oPVDSmWdfsLTLbzws2TmSvhg7/view",
  },
  {
    keyword: "HRD-F Departure Checklist.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1o6-q2AQVFC7cughxbJhwMKw9Z1U59FKv/view",
  },
  {
    keyword: "HRD-F,Trainer form and Training Attendance & Feedback",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14A7JPzpg6Zw-5fZQH8cc-KcNogRWtCb_/view",
  },
  {
    keyword: "HRD-F,Performance Appraisal Form.doc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OyE0EFJIfQRxep9rKxcUsQrCeESqa8Di/view",
  },
  {
    keyword: "HRD-F,Format for Attendance Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1K9VEp5G7M7peF9AoNDrPhsNBs1EfpQo1/view",
  },
  {
    keyword: "HRD-F,Format for ESIC.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MZLMrmv1svYomdYUy9m4RlwK1A2PVYPD/view",
  },
  {
    keyword: "HRD-F,PF Register.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BliMMYm1rG3jbk9X0VS96gKz4eRX3NsT/view",
  },
  {
    keyword: "HRD-F,Format for Accident Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16S0rSzf1z0KjssAYAhkfbILxsCIaL08O/view",
  },
  {
    keyword: "HRD-F,Bonus Register.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1whwn7P8P6pCZWrENjREIeDEYDpV98N5P/view",
  },
  {
    keyword: "HRD-F,Leave Register.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BN-2w-Uxkr5Vp4CTvxuETaUSfPI-oen0/view",
  },
  {
    keyword: "HRD-F,No Dues Form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1HrUgSVqLqsniU0w9CLMvkhbaFiKxf0Jh/view",
  },
  {
    keyword: "HRD-F,Transition Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1h0o8DNz9Fef3eQnRHHWqNiNKSR0hcxTu/view",
  },
  {
    keyword: "HRD-F,Training Cum Effectiveness Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1D0UqF-5oG_8G6gLDvWM0mHECGyZ_2awZ/view",
  },
  {
    keyword: "HRD-F,Rapid Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nwrr3xFnQryCjBJ4Sp1Gllx-yYo2eq6i/view",
  },
  {
    keyword: "HRD-F,induction Schedule for New Joinee.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15fi0TXP3_PjoYPThYg2eAck__IdTdmru/view",
  },
  {
    keyword: "HRD-F,Onboarding Form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rhpUERtxrnMXnzTi13T85HhcrI8fOAdZ/view",
  },
  {
    keyword: "HRD-F,JD Format.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZSkRJFAVghOXk3--K7Z_FPERi6dLV_Yt/view",
  },
  {
    keyword: "HRD-F,Resource Requirement form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14wjQ1ALtNZ9TD_ZXdFkWjtjhdzeZ5XLC/view",
  },
  {
    keyword: "HRD-F,List of Key or Essential Personnel for MOC Process.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QVYosd1qYCCVqGhPf-UUK-tudYaFFpRh/view",
  },
  {
    keyword: "PLN-F,Planning Sheet Format.x",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zT845hjnvukx6rF6SoXUgbujB7Em0kg-/view",
  },
  {
    keyword: "PLN-F,Monthly Sales Plan.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15S9-pG-QF7YfcjjRuOMfeCuRVIVlS9nQ/view",
  },
  {
    keyword: "PLN-F,Manufacturing Status",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1klW8jq1CJ9wp_mqxGb8yOXKpH5h0h4vy/view",
  },
  {
    keyword: "PLN-F,Request for Change Document",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1c5spouy1igOW23Xwhu35gfz9scCxAz7T/view",
  },
  {
    keyword: "PLN-F Impact Tracking Including Changes During Order Execution",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WLDp5bZN2Js7uNEib0X2Ze1skRQz3ykc/view",
  },
  {
    keyword: "PLN-F,Risk Assesment & Contingency Plan Sheet",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1ezDTXUdHYc9QVKTGHGyiUwo00s1G6BPL/view",
  },
  {
    keyword: "PLN-F,Check List of Potential Risks / failures Modes",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1Y2iLY4oFfl5_VWFQP8Wr0HFiDSnSj01L/view",
  },
  {
    keyword: "PLN-F,Risk & Opportunity Register",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/18FnngMwBL33McBKYtx0PesIG-cVDUX2p/view",
  },
  {
    keyword: "PLN-F,Change Tracking Sheet - (Responses",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1gIey3Ns17m6A2zKEmT32n50kkdOy_VlC/view",
  },
  {
    keyword: "PLN-F,RFC Closure Form",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1zzu-aFUTJtgBKTwrBz4H_DKQdxZ4auJa/view",
  },
  {
    keyword: "PLN-F,RFC Closure Form (Response)",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/12LU4rngmgAbaYYkKpSk6ndJwio20AYHx/view",
  },
  {
    keyword: "PLN-F Work Order Review Check List",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/11ncx6_9w4MwxYeMcsWftEwjdtLO4U5CG/view",
  },
  {
    keyword: "PLN-F,Customer Feedback form for Post Order",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1SzXgeDJ-0-okAubU2uwyaqR2yyPjGJiB/view",
  },
  {
    keyword: "IT-F,List of Hardware & Software",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1CQEOz7uOkTEepCbQtWLwFFjPTIyW_of6/view",
  },
  {
    keyword: "IT-F New Joinee Check List",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1MS8E5YBMuGItQ-T392o0NhmBko4qh-YR/view",
  },
  {
    keyword: "IT-F,Employee Departure Check List",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1AujPH4yquuN53cvRFFdHMA19Rm7NUK08/view",
  },
  {
    keyword: "IT-F,Hardware & Software Audit Form",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1EuRXfFbWwiTse8KDCiGDdTxEH_SHUA3r/view",
  },
  {
    keyword: "IT-F,ERP Supplier Registration Form",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://docs.google.com/spreadsheets/d/1O4Fn-yJfCj6c_So7kCj46di9qBgTLamK/edit#gid=2143129930",
  },
  {
    keyword: "IT-F,Computer Hardware Parts Disposal Record",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1JXc-6zSG5CWntXinBXcwqGMZfln0yvju/view?usp=sharing",
  },
  {
    keyword: "MNT-F,Breakdown Maintenance Log Book",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1Zh6PC3Ad6ZLmVocgJBUthU_sJb1lHjOY/view",
  },
  {
    keyword: "MNT-F,Master List of Machines and Equipments",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1nLjnGzDqPrUa1FmcLizO3tbKF3SPJTn6/view",
  },
  {
    keyword: "MNT-F,equipement / Machine History Card",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1VutE-IMHhHebIqUW1bD_qu8bZ0umqhWU/view",
  },
  {
    keyword: "MNT-F,Annual Preventive Maintenance Plan",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1rTLczg1QNwXBGyTWkyrE8aCpd8FERBFH/view",
  },
  {
    keyword: "MNT-F,Annual Preventive Frequency of Machines & Equipments",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1l1j_Gz70RJT6Km6ZX4154nhuvvTi1q96/view",
  },
  {
    keyword: "MNT-F,Annual Machine Calibration Calendar",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1zogRlGqD7ZjkWxoG2PZYo12xmyueCw8h/view",
  },
  {
    keyword: "MNT-F,Master List of Manuals",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1pTUfOyZ6wfRrd4QSs2MMHbOGTBLnTZpq/view",
  },
  {
    keyword: "MNT-F,Master List of Lubricants",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1EL0pM9ZWGKS9ZF4_Rv82uPFrgBA6aZYR/view",
  },
  {
    keyword: "MNT-F,Preventive Maintenance Record",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1zv_W_tb9yrhjeWPpQjsK_sed3hIo5mZO/view",
  },
  {
    keyword: "MNT-F,Daily Preventive Maintenance Check List",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/10ZX9vPCJQajlBymwdKKHNQ9mtWiHzpYk/view",
  },
  {
    keyword: "MNT-F,Permitted Crane Operator",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1tOUPkuBRj5OesEiEXiA_594aFsbnB0Ly/view",
  },
  {
    keyword: "MNT-F,Crane Operator Permit",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1GZG6Q5vNop2QofyLRtYN-z3ECZURYp55/view",
  },
  {
    keyword: "MNT-F,Machine Calibration Test Chart",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1M9FJSGMlCaNScPe_IvgeRWYQbpf-SrbG/view",
  },
  {
    keyword: "MNT-F,Master List of Spare Parts of Machines or Equipments",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1xH47TF7sQYUu7d1b6DI1zGgnknkpTfgT/view",
  },
  {
    keyword: "MNT-F,Daily Machine Availability Vs Utilization",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1T7KkXDT0fpczpGu4rrbgEK4RZnfjH0oi/view",
  },
  {
    keyword: "MFG-F,Daily Production Report",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1Hn0dZaOys6BK-TQoFso3UDXB_9RmRLjB/view",
  },
  {
    keyword: "MFG-F,Weld Record Log Boo",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1qtgBScoLiDW1ix6YGOge8sleeUyjSyiv/view",
  },
  {
    keyword: "MFG-F,Valve Completion Analysis Report_DPCV",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1XP9Rap3TS84h_Qq47oqXFF3xue1p44_9/view",
  },
  {
    keyword: "MFG-F,Butterfly Valve (Double Eccentric) Assembly Log Book",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1bIqNKX-LHMUrn-pQM7rNzNvhDxhNI1KL/view",
  },
  {
    keyword: "MFG-F,Butterfly Valve (Concentric) Assembly Log Book",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/107FWf6PwyiNYo_S7Wn52AR9f18ncTtUT/view",
  },
  {
    keyword: "MFG-F,Butterfly Valve (Triple Eccentric) Assembly Log Book",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1gKXFJmXhGx4STr4AjV-v-UaSMcwIe3ku/view",
  },
  {
    keyword: "MFG-F,Dual Plate Check Valve Assembly Log Book",
    linkText: "HERE IS YOUR DOCUMENT LINK",
    url: "https://drive.google.com/file/d/1wWVdEC4rMEATuThxTuK_XqBSuyKzJAuU/view",
  },
  {
    keyword: "MFG-F,Jig & Fixure Inspection Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RGkfaW5t2ltM6FkxDJRJpARv6N1ZoFTm/view",
  },
  {
    keyword: "MFG-F jigs & Fixture Validation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZIRu6Tc4o0Nv_AKWoUaDf6Qt26-xpkva/view",
  },
  {
    keyword: "MFG-F,Machining Inspection Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DGtP0INJvFLIasHAyq3gWDIquzHjR0d4/view",
  },
  {
    keyword: "MFG-F,Job Card.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tj0saspcgQ1_kS07e-8aK8uJ4jUb-Fjz/view",
  },
  {
    keyword: "MFG-F,Micro Planning",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rQbi1Dub3lSKmredM3yW6Wq_faDABdzx/view",
  },
  {
    keyword: "MFG-F,Monthly Production Plan.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ktWfeg0mn4YXixUHxqY6vGahyly1aLAd/view",
  },
  {
    keyword: "MFG-F, Valve Handover Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1UmmaPuxT23XAa72v7WC3SggTDC_Cz588/view",
  },
  {
    keyword: "MFG-F,Advance Notification (Inspection Call).",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hEqNWTJl8iXFoEYiEhTnIq7zL147d-cZ/view",
  },
  {
    keyword: "MFG-F,Paint Report.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Oi3T89UddBbu-FGwh9pRD6UqjA0fsUsR/view",
  },
  {
    keyword: "MFG-F,Valve Tag Allotment Record.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yyCUnp_4idggCRvZlG6-v_HctLqxmwVP/view",
  },
  {
    keyword: "MFG-F Stage Tag.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wCXepeT2jucoSl85diga7iLS_a1HmL2H/view",
  },
  {
    keyword: "MFG-F,Heat Treatment Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1G4uhA7MPtn3vDiXkFrR2qjpxuER0uX4p/view",
  },
  {
    keyword: "MFG-F,Validation Report-Paint and Nylon Coating.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1iA5IeaTXzqzx4kGZY0zzAljiocHjJEyP/view",
  },
  {
    keyword: "MFG-F,Validation Report-Heat Treatment.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1raKfk5UgMWXYmRugoZ19aOd072L-JY0W/view",
  },
  {
    keyword: "MFG-F,Assembly Rework Record for DPCV.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VfikNWp2Nv3yj2S3pocdT3ewyBuPjR_q/view",
  },
  {
    keyword: "MFG-F Assembly Rework Record for BD & BT.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13HIWDE4Kbhq8W0wl-qQA1qp9cldMnzFI/view",
  },
  {
    keyword: "MFG-F,Assembly Rework Record for BFV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OCrN34O0ecKGOYA1lb_Uxn0xDKpcIecJ/view",
  },
  {
    keyword: "MFG-F,Format for Jigs and Fixtures Indexing Sheet.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lV9G5Oen9KKDTX5xajbhL2-ZtWyM2n4q/view",
  },
  {
    keyword: "MFG-F,Decision Tree for Valve Machining.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1e1cMvAyj6ORLMUMJQ47CDzDybMlR6765/view",
  },
  {
    keyword: "MFG-F,Machine capability Master Matrix for Machining.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ALlK6U96zfo3Z54p_ZOOf-k-dYMMf4VK/view",
  },
  {
    keyword:
      "MFG-F,List of Seal or Seat or Integral Seat Profile Machining Fixure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1678U-sxiImNCwGhAeIJ3_LJBTCmrg1JZ/view",
  },
  {
    keyword: "MFG-F,Body Integral Seat Profile",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OYmdhyO30NkQBSiqZrW0HA_RItOk8mw-/view",
  },
  {
    keyword:
      "MFG-F, List of Bore Alignment Checking Functional Gauge for BT Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ID73TM56jndt6y1fuc3KIWEzMSTYzYSc/view",
  },
  {
    keyword: "MFG-F,List of Flange PCD Checking Functional Gauge",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1eml0LMphWGiGa93p564tQ1UT06tjetnU/view",
  },
  {
    keyword: "MFG-F,List of POC Checking Functional Gauge",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1q_G7e8re9KnIVI9YYwGErvPbJrfkpKOS/view",
  },
  {
    keyword: "MFG-F,Flange Hole Drilling Jigs.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ycIYSOkz91INEaaskCNyRDqF_ad44JOJ/view",
  },
  {
    keyword: "MFG-F,List of Vulcanising Dies for BF Body.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/10ZtlOUbvxYAMFSoaPr5NUPmP46WiVn2E/view",
  },
  {
    keyword: "MFG-F,List of Retainer Ring PCD Checking Functional Gauge",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1h7HhH9EcPKtDMupi6G2e7rIGoz-lwWZm/view",
  },
  {
    keyword: "MFG-F,Jigs & Fixtures Issue Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sxSqDjusyfRZJeA7qttVGQBVtwxKPzjj/view",
  },
  {
    keyword: "MFG-F,Performance Test Data Sheet-Balancing Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Jq3DITObxwh-nBxFi99n2XFh5-6CFbwW/view?usp=sharing",
  },
  {
    keyword: "MFG-F,Balancing Valve Assembly Log Book.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1w9umE_vyVY9PbiyVURXE2bnTjboIQVgo/view?usp=sharing",
  },
  {
    keyword: "MFG-F,Axial Flow Check Valve Assembly Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1TAoQYCu4EZricECdINaJjSVUFY3Z_csr/view?usp=sharing",
  },
  {
    keyword: "MFG-F,Assembly Rework Record for Axial Flow Check Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wc0BKdh3ZlUjFlei9Q65GJFU-P22IbiC/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for TM or MR",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1FHwspTNErMddm_R4Hh4QU4SfgN4e8g9S/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Design",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1SbWTWe6PhfA3EaRqABxMfbGiJAszdYU_/edit",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Marketing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1kHWIeDdXHrEgUHuzuMWK9ZL56yCP1gzc/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Purchase",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1XA-f6ytD6duG_cybua3Rf77ie8lOueQh/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Production",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1Hjh1jimjEimMyo-7zAD0ZeiOS6yRYFy5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Check list cum observation Report for Quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1gtXMQYFeUaZ15lTbG4hnlrAS4E99defj/view",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1PWIu_iHfYjpkDV62j0OH9tSzcNGyPVsH/edit?tab=t.0",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Planning",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1_STKaiQvC423nYWAgwG_78EBCNR_bkCc/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1GzhgwPx63yHgzncIZonQUr3wluw-PkT1/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report for IT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1AOPoecJQEC0wY47S66D9wWRx5JG0J7yY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Check list cum observation Report HR",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1BvRa-WafjYJv7fzdniw93CdwyaOiH4tZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Inspection Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1tujaCraoAsco9tsPqdUVOCs1W16K3SnU/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Non Conformance Report & Corrective Action Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1LfHyM7dWqpnZKrAa3-0kV6KSNoHmVyJ_/view?usp=drive_link",
  },
  {
    keyword: "BSV-QAD-F,Liquid Penetrant Examination",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1kahy0ddfJgoBYyKHvaSapCq1r4UrbWPi/edit?usp=share_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Magnetic Particle Examination",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1my8vvPcDR_uRn2TkaRmleXWrvGTtCgFn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Positive Material Identification Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1h5QkDGY2LX4kXELatlRoUEgmy0HN40bN/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Dual Plate Check Valve Test Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1oj6K5d0QY8b1DsT25wmHAVt47bOdx6R4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Butterfly Concentric Valve Test Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1c3Z3ggiE9q6O3YIXl1KRmUuNEyi8knHf/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Double Eccentric Valve Test Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1_jZrorkw8SRr7uDT8NEBVNDG1Hg8TUSu/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Welding Procedure Specification",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1FK4f3qiqwsyPFsj4HKdEOT9Hh6KlPaL6/edit?tab=t.0",
  },
  {
    keyword: "BSV-QAD-F,Procedure Qualification Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/11crPZhwzt2Zttxm1wd03BetXk6wOOTyo/edit?tab=t.0",
  },
  {
    keyword:
      "BSV-QAD-F,Suggested Format a for Welder Performance Qualification (WPQ)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1HV1ZFJS8Cw_GqOo_e7pm4eKV2XP7DkRv/edit?tab=t.0",
  },
  {
    keyword: "BSV-QAD-F, Balancing Valve Test Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1y_-sJWnXKKMHrxj482hzKBg9V4qw3vOk/edit?tab=t.0",
  },
  {
    keyword: "BSV-QAD-F,Product Concession Release Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1rOuAjPDChjdohVjoWzfQCLtsAn0gYoGz/edit?tab=t.0",
  },
  {
    keyword: "BSV-QAD-F,Rejection Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1JMu4lL89I50X4hD2A5LyBFO2vTk7RoTA/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Non Conformity Product Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1UJtPD5r2AseoXK9nSUf7pO3ngAGjVgzt/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Surface Preparation, Painting & Marking Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1YMP3P283yeA5W9MGdpR4TsuDul1WL6Hc/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Valve Packing Check List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1_aSrMBFAO8Tqd7ztUuqvBAbwwySdBIaP/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Finish Valve Inspection Report - Product Release Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1QfKTWUSEwiwMst8CmM37XNZI_FGZplG6/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Inspection & Test Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1iYkFhJ3VISUW1M2YQdNGv-G8wkyEqdhc/edit#gid=952983413",
  },
  {
    keyword: "BSV-QAD-F,Name Plate Details for CE Marking Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Ovfa1o1tes-gUWWVo7g-OLfxwsHyNOM5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Inspection Notification Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1QFd8TDjrvLtI3S9IxJjCh5D-IYMlkanM/edit",
  },
  {
    keyword: "BSV-QAD-F,Master List of Inspection, Measuring & Test Equipments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1TEFxxL4N_Lo7XyaXcRavDzFVl_NjKdEJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Cryogenic or Low Temperature Test Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1-gTXGkC5wz8YxmwbK3a-KjkLeO2AwMge/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Dimensional & Visual Examination Report for DPCV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1xnKKGj7jMJBcQwNMJPemS-NNxJEr9Sej/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,List for Final Inspection (EN 10204, Type 3.1)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/14_HpcAN7HXshTXgIPWnTkUzGddVFvSwW/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,List for Pressure Testing (EN 10204, Type 3.1)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1a2aH80EWwSkH0N-YmDTI5K6XUbkfoYX0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Pickling & Passivation Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1l0nEnESGVb5Y_Vcm2GzRz6h3U7C_wcDE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Vendor Visit Report Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1L5Hvg5xwCzV423Y-__AeW9F28jSBbidI/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Ultrasonic Testing Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/12VuQJTTrit-Ui9QWa5sFOXLuCiGBrYsZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,List of Quality Inspectors & Their NDT Certifications",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Ymnd_ejLYBXBf8-pFcP4OtScje6J7UKB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Product Concession Release Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1BLcuAVqUik6YryD_7qiQggCVjkTBlNGV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, List of Approved WPS,PQR & WPQ",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1oxdRqM_L8YVrINgbngfHhwKNb8Qj3dh4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Surface Preparation & Salt Contamination Test Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1RNL1Vg60EJ_gW_Qj4K3zeTyOgIsEX0x3/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Index for Final Documentation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1AiYDw6sSP6f3sLYnpQO2rCI-VfQ4c3Dy/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Test cum Guarantee Certificates",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/125_o16XOwuKeGlw2_OgaqihI4ZLNdZxW/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F, Practical Examination form form Liquid Penetrant Examination",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1SzJtNYOTc7aE2iONQkccNcaAZsB99DQ6/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Practical Examination Form for Visual Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1AAdjjIgH9DDHG0SaHf8JF4-lmXgvMk88/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Name Plate Details for API 594 Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/128Wtiq58BmChQ4kVHtqP2_RPF3eeWTpd/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F,Practical Examination Form for Magnetic Particle Examination",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1E6Q9glUZwSsuFF3xpyHMZbY_cDJqQHA_/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Practical Examination form for Welding",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1UYsWI3gxQR2wd82AK20-fJVVjQS61ORX/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Examination Form for Ultrasonic Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1PJkEQTuMky3KFWjW07GCDIFDH_n5IG55/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Practical Examination Form for Butterfly Valve Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1IMcCXlk2G8o67fd_NMSxotmCU3qQe7fQ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Practical Examination Form for DPCV Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/12gbX23elSELsmgK5rCoS23yR0NupIOUl/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Hydro Test Parameters Check List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Q-WU6rVkRow2NKLtMhIos4IsjSdX8mVz/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Dye Penetrant Log Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1XzTPx8nHn2yvk-CUjWJuuHd0sNqRmux1/edit#gid=274959036",
  },
  {
    keyword: "BSV-QAD-F, Magnetic Particle Log Register.xls",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1vrUbUNyeQsajMEJseGVqvCtNIjnBm30u/edit#gid=543434508",
  },
  {
    keyword: "BSV-QAD-F, Process Check List - Ultrasonic Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17-ltOBr_xOgdowr24cUd6kxQVtqyX9o5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,MT Procedure Demonstration Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1YKeJAkv4BbcvzgpZ75voEAvirgXNgwln/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,LP Demonstration Report Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1z5th-m6Ngrat9YcsnQAKQbJh6vW_Shfg/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Valve Traveler Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1-2AbVyhxY4mIHqlWXpBWXHNP9_PBDmKn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Practical Examination form for Radiography Examination",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1EEcoxW09GQKjPiDNtOmgFFy83t2PPqpK/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Name Plate Details for API 609 Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1KxI9MwsZDUJk6EsumWP9mXObe8jtZKQq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,DIMENSIONAL & VISUAL EXAMINATION REPORT FOR BT_BD_BF",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1FJeBHgosQ36YvGlCVUyrImKbBj5is4Em/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Antistatic Report (EN 10204, TYPE 3.1)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1YnMHMvOChjMmk_52Qz4eQa-RXAthmccx/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Certificate of Compliance - Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1HBqYr1D-RC4S6y8ZGYxuPSsu2cpSHLZs/edit?usp=share_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Certificate of Compliance -Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/16tcbOFdvPETSwsWbQyAfH-5XCibnUKiC/edit?usp=share_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Welding Defectogram Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1lqp1aidAnoIg8Bm_Gztwc_412AtvRWNk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Dry Cycle Test Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1aZONA0GArO2tPVGlToc1W5RMRnRhVve-/edit?tab=t.0",
  },
  {
    keyword:
      "BSV-QAD-F,Weld Overlay Hard Facing Weld Visual, PT, PMI & Hardness Test Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ysEYMBJh9PtKIqfY9fGhhp7H9r-MRTra/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Welding Consumable Issue Slip",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1s4mtwaOQ-MfSAn0c7Ct59nqUgIuh7jee/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Check list for Verification of WPS",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/11ol-wdDPazwlvXR5Fy5J65em9mK0mD6G/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Checklist for Filing NDT & Welding Training Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1RlF5iEFteKaqec4J0gQFJyxQ8Tr5ZNhs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Hardness Thickness Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1FF997hblURtH8b09tnP9SskDiwsbPsLt/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-QAD-F,Process Check List - Inspection of Casting Marking (As per MSS-SP-25)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1RS1C8OGdCNvYROA2CzDa8F88orYyBB8W/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Validation Checklist for RT Films",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1LCShWPlx3k0fvgyDbIxOgkB8KnJTvqrs/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,UT Procedure Demonstration Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1pwZSvtOdsRS0z6lvsD-O5BoZ0OqVN0y8/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Hydrostatic & Pneumatic Test Report - Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Kc4B5E9q3prZmozbD6oMbSDC7LWp5RVF/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Hydrostatic & Pneumatic Test Report - DPCV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1M3XYd2w1hUpUlCMolIn-bmf_d479rXJZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Oxygen Service Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1oW3lcECuD-jDkysjjTwrlUX-cIGhX7zl/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Balancing Valve Hydrostatic Test Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Zh892JRVrI8QFMOINFPrURjhPi5J8A9q/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Oxygen Cleaning Register - DPCV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17qvbOTWPwmkPY7QzeLdBj-Kkim_YpfdD/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Daily Checklist for Cleaning of Oxygen Room",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1m2yZt9dPPJXW23IhJnK8-bdv25dMxgvq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Validation Report for Visual Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/12GH3Z46IIM2c3UYJH2ta_g7OfMGytOmf/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Large Size Balancing Valve TC",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1zlSXUQje6BK4CSzwF-94LWGMHntgAR6r/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,PICV TC",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/11MlNbsDH0ifnbAom_YVjp_n_y2Sd3ydV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,List of Valve for BV & PICV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1k_bRDH5wUEE7TOV5iDvKeTLTXviEZzkR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,Dimensional Report for Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1WI9lKBroa_SglLLqOPTtTYLFokJFWfXr/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,PICV Hydrostatic Test Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1MR7ovjMbkIZzZPRn-TZkkm9Nv1YiVyws/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F,ITP (Balancing and PICV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1oNfvQp5dk-4rMhn4SpgQRFzhf_RQ3UJ_/edit#gid=473506651",
  },
  {
    keyword: "BSV-QAD-F,Hydrostatic Test Report- Y Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1HxdfBPf4OHjdag2cA-rr4CgIoH1fyLwR/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-QAD-F, Strainer Test Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1NQgO87XxhXIuO8R6CrOOJuYreT3d-UwI/edit?gid=979665673#gid=979665673",
  },
  {
    keyword: "BSV-QAD-F, Torque Test Report (for validation purpose only)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1vV2ds0D_Jlb1HY7bQbd_N_HnQ3_rnKm0/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F, Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1bC-Md-GJlmwz9HVJULa_jBZBzJVL-6Py/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F, Concentric Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ahU1MHdo8z50-0wHh2IRVJsR8_BaqHdG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Double Ecentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1sLl6VQr_lyLRNQfUkGEBUpJ5yfvRTX6S/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Balancing Valves Gun Metal",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1DaArACyWOhDq49wbFGzyo9BifNHxhGWc/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Balancing Valves Cast Iron",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1SNks_fQsX8eHo7_s9Pj7t_9wXFBHYNM-/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Priced Quotation Format (AVS, Gagret)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1TroYhgTz9Brk-wzWFKnwi7RzjzVsgDEA/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Priced Quotation Format (AVPL, Gagret)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14imFGQ3FW3oDt7bHrVPRTKfVk_g32WAX/view?usp=share_link",
  },
  {
    keyword: "BSV-MKT-F,Sales Order Cum Order Acceptance-Domestic",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1W2f1jDAR6owVlMTtCmM18GJuoLI0G708/view?usp=drive_link",
  },
  {
    keyword: "BSV-MKT-F,Sales Order Cum Order Acceptance-Export",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1gEbY6g5Rjex2mqdNVF6nZy29jArvmdXq/view?usp=drive_link",
  },
  {
    keyword: "BSV-MKT-F,Document Control Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1DL6grfsHmdAlMmiFem4gxsxOXab8Xq_8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Control of Filing Records",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17fJtJtwuvdVF5ZR0arFE4hRQGam-XQx5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Complaint Registration - Tracking Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/13gw4gqKkafiv73gaXKegcNfSy4w8zC5u/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Service-Cum-Complaint Attendance Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1Ebv2BrMc52g0p2vC9Y-sRHZ9kq4pXC_K/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Complaint Review Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1p1F8df6fh-k_MJUdT_1_BqD1kbb-sMPU/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Document Review - Cover Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17Zd45FHXtMB05nPmW3jLnD9kzRTHMN_G/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Spare Parts List Interchangeability Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1bWm7HQrR0EuJsCv4tgvq8IJnWvOmYiMC/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Servicing Requirement Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1haoHBSUwSVOYgHQfrRsLr8ZD_5favsAR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Customer Property Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1BPOQ6e8gq7c4fv-Gb37QQDvzsnp78kmZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,Customer Feedback form for Pre-",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1HgZy38rM0h82LyomAQrJ0_XkidXyIf0b/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-MKT-F, Check List for Approval of Sales Order cum Order Acceptance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/14UkJV1aJppgkyX_7GwlXLTeoFBO9rwNI/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F,List Pressure Independent Control Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ea8uRRl7WpiUywxDczZ8m1SpF5FUcQC4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-F, Check List - Large Size Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1RQ_-uXxhgk9HR9l5H4CIT7bz9hVEObBZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F, Planning Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1gUem_YoRA2KW8BLun21EMHbshCbqLaFv/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F, Monthly Sales Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Zf_AG6isHmRwi4SKsUYuKJ3gHInOMEWt/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,Manufacturing Plan & Status",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1vOphiAaUCz40BUy_656AbYo9ycNIpW8T/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,Request for Change Document",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/10Ju-5vq6siBynjJCmw6sDkzLboijm1hV/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-PLN-F, Impact Tracking Including Changes During Order Execution",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1FY7q4IplCbwZv7cmNrJLS1D3utD6W8yj/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,Risk Assessment & Contingency Plan Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1bGVr5Hlr7WbcYzMoxoANj9dNHTqRNtbC/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,Checklist of Potential Risks or Failures Modes",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1WpoTpVlTP2K89S9As8Gvub-NpIb7whgm/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,Risk & Opportunity Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/12Kj33jnZkJOiWuIHdJTbFuMCaRi_dQ4o/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,Change Tracking Sheet -(Responses)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ZmsVT08hljEe-PFqlXCcIy_KYSLZ-u2z/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F,RFC Closure Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1FweCHM3vzOmR7BRQ-q_-p7o5AfPQHutU/view?usp=drive_link",
  },
  {
    keyword: "BSV-PLN-F,RFC Closure Form (Response)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/171hb4za4tOr-HOLMaM5B_X58E5O-oYBG/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PLN-F, Customer Feedback form for Post-order",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1irTxiFI1gGfMKNokMGnABJbaoFmd56Oz/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F, Sales Order Intimation Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1g9vi4wGnA4aLqaydn2Xpq-0HOKCQNdS9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SLS-F, Dispatch Intimation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1wSSxFXeX4HxfN-eYSu8sH5c8TXAPbtq4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SLS-F,Sales Plan for QRL1 & QRL 2",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1M_hXmC1JD2VJ7KBFh0DYggcJc0Ta9old/edit#gid=2040526610",
  },
  {
    keyword: "BSV-SLS-F, Domestic Invoice",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1NjI29KzVqd3FZxlrI381k9jEhX1Cwos5/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F,Export Invoice",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Yf2auI2a0J-EWQxGC5mYDfVA-g2NbMxZ/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F, Domestic Packing List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1I6P3VhhpuBJM0aIs-862oZ8dAwv8MMQs/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-F,Export Packing List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vdLNcRZemdEw9NPeM1cJ-vDL15oyc1j7/view?usp=drive_link",
  },
  {
    keyword: "BSV-HRD-F,Competency Matrix",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1E4-rmz8j8XoLku27uzVmk9IICFQ_hDvQ/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Employee Data Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1SmS9bDXvTw8z9WRQVq23y2bJ3RRX0uN6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,New Joinee Check List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/15tP5YLfxiWBx3DyTvhS2XlGyswKK0X1E/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Half Yearly Calendar",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1vOG-JrZvLqzIwygI1TupA8ghXi3vINOl/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Training Attendance Sheet Including Feedback",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1VDDPL6dM2jzC5iYXLEzWCqjRHimVZAXg/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Departure Checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1AnKWu7w42UgUxkTkJQRGn8s8ZF3DMS5O/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Feedback form for Trainees",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1F2WNb3ZIUhU-UBWN29ZMAK5BYCYMF_v5/view?usp=drive_link",
  },
  {
    keyword: "BSV-HRD-F, Performance Appraisal Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13XIojQNJZ0vzyhcWxBma8izwUQmOnP3x/view?usp=drive_link",
  },
  {
    keyword: "BSV-HRD-F,Format for Attendance Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1SH9nxMQcj294ZGbQNrJa99Oj5PvWz_ZG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Compensatory Leave Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1P7o-cZ02Xdeeo4CFz5nBinRaCy4AiVvT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Adult Worker Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1uSbwMCwJQc04eS7D3c-c-dxK7aWeWea8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Format for Accident Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1byIZxgOy8DfYcouDpN60RqP3VnuXXAVk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Bonus Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1tsb-0LHxhn9Tttz4fK1LXh2x7JNmxQvi/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Leave Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1-BaWfGBI0MRlXh_gcejFl7C_lEQD_ImW/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,No Dues Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1XMTcO-pWbzFyzobkzRd-lZxr9-S64NWu/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Transition Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1MtP4kr6HlimGvKnkaY6ycc82Ne8sExhE/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Training Cum Action Effectiveness Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1cciopPJUyHJ4EOFsplxPRsmBLeniOTEl/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Rapid Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1_mB5fhVMQtBvS7HL0zK-cPudi0Nvbm0R/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Induction Schedule for New Joinees",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1RF6yNNJ2wOvrN3paWrU4V77qtyjry1HF/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Onboarding Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/11m1HYKrCV6fLptL1nwBJ9rwsrsve0pYo/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,JD Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/19ZzNnoCyi5jRDDK4KCv833gjN5XDIux6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F, Resource Requirement form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1fKX7_vZy_dpDKBfD8uMXEgl6iA-jxAVs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,List of Key or Essential Personnel for MOC Process",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1-aUkHvszL1-8lQ-Q49Ayw4Alnn5SBXoY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Advance Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1beGr_IKzpX3D6SGPTKxfVWWrBBctVTO0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Fines Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/17zznVlYbObn8StjsYVR9KCnoOnEQlFp8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Inspection Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1Vp9MfDhgyK4thjiVH3kvIN1gRY8oKBnp/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-HRD-F,Register of Deductions",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1P88Fucr8ALAXktXd2uFou988lH0g-MHF/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F, Design and Development Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1QjR7HXD_r6wSG74bz7VQ0uIEe-jNS1z-/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F, Landscape for Detail Drawing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "http://goog_229905115/",
  },
  {
    keyword: "BSV-DSG-F, Landscape for GAD",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vMgzipUoqKB_O-Qf5yxhvgq6b5Zaz75h/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,Design Inputs Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1t8ZIEHb9kfK8h0mwhhPoE1k41JW4j1bR/view",
  },
  {
    keyword: "BSV-DSG-F,Design Inputs Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/10LNM32cIT3xjasJkD5L_FtOdPb1TDPci/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F, Action Plan Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1gwrustyEIKHWcWH_vbvz3c6gye5eGb_-/edit?usp=share_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Decision Table (Butterfly Valves)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1hyF0B8MvZd-15Gt-3aU3nXKO_CPSMju2/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Landscape for Detail Drawing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1H0zpW-HD4FnXmAHJxK6CgY-XCHJlZyH0/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,A4 Portrait for Detail Drawing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fF2xzSJm7i4vknED9_2KfegRlRc93RrJ/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,A4 Portrait for General Assembly Drawing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S3-2ymiPdf8GXjl82Eg6KOf6dDX_l_mx/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,BOM Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1uA9PZAJZePv_apwsWmf7xI5EDxbanmXW/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,A4 Landscape for General Assembly Drawing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1f0r7QYoxNzL1NUW_EMhEa-vWilaUGDoa/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,Technical Specification for Procurement (Gear Box)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1sp1QmcMuFFzozOLa8Gxqeox1aOFPofI-/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Work Order DPCV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/19ai0GLBauLGb9246DQm4cuGlY3kdnqlh/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,Decision Table (Check Valves)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1HrHURvYj_Y5OQKmaQO0zoAEra95Y8fBs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Check List for Checking the GAD",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/11e_MoUITAf2gbWAlXT2IkvZU3pxWVHNT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Work Order BD",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1iVUq-rRSMphCNPyvyk6onTrzM3FKYdIn/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,Work Order BT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_OB8LBGgWrlmsaTyo6Vm3DSviVi2FIKF/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,Work Order BF",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WONXq9EAW75vCMBAcfkZsaxqXB1KPZeS/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG-F,List of Available Standards",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1NtxeFQFmpcfMbmzhvf1RrYbXxsc3Cxo9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Format for Review of Standards",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1wN5AIsgiabZ_BqmGxwyQb6WlG34lRD7x/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Inputs Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17c6O1DESuALuYiLLGLWNmBNVLtremxDS/view",
  },
  {
    keyword: "BSV-DSG-F, Design Validation Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1MX7XrJLIk-cybio1r8apNyRzOsXLEXFe/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Hazard & Risk Analysis for Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1AdHm5FTichMhT1kNOJiBY5UwHrrnhVpo/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,1 BOM Checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1OT9nQQhyRFgbUPvIMDmzKNV74KJ_3kZC/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Technical Requirement Specification (TRS)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1kKlNtpPRrwbk4DNA0SLNQSEbiMWWgwTs/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Design Verification & Review Sheet for Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1_mRUoEmuVGLQ5bgN_2UxPEr4UAbY1IfI/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,List of Standard Design Packages",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1IMmSM37MmakKlrN7CqtDUt8jjCHCbPUL/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Design Verification & Review Sheet for Double Offset Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1VpYoYIpU8QOy74T0IvsIYXWSKvN6Q76h/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F, ESR Checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1c2ChrsqwcZL5195YaaceVe7Hq3gwgHdK/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Design Verification & Review Sheet for Concentric Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/13mJLOS-GdaWNYgkdr19OYQ4WYORUr-_O/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Hazard & Risk Analysis for Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1L5XOLAmiPfVMHfd_BOike13MyVXm12j4/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F, Design Calculation Sheet Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/100kdFAoY6pB8cAKszKEYB3lsW1JIksY5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Calculation Sheet Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1f1bR70N0E1WDRVlVrp8m5lVS93E8slV1/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Calculation Sheet Double Offset Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1skNJQAP6SzCmqdw01176CkeqDfXA_Z6Z/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Checklist for Inspection of Electrical Actuated Valves Integration & Operation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1SRJycBMeGXoY-JkBXshfqz7wYW6jkhXJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Checklist for Inspection of Pneumatic Actuated Valves Integration & Operation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1EDc_srhmSE_HXXhYj6fmTWAS2rNn-W-O/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Inputs Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1U93upS9NArvkl02jz6_TcDKcJpI_VBKU/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Work Order Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1xDC0ZBWTNLyj26RkKO_6MwJdWSGLDLv0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Design Verification & Review Sheet for Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1EO2UWw5XRcWm4Dcf--h-XAVg2_EpYqr8/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Calculation Sheet Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1cfTho5w4epgO0G9tdHZgx4p_jglYXQc3/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Inputs Y-Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/18D8uSqwHmK9Ni44PYZRNi7v75-lMtUH2/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F, Work Order Y-Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17-8k3OmH0KGOjsG3FD05DPZ1Vjgv34TV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Verification Review Sheet for Y-Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1QZdUiLBY3JdNAYsIpX5jcpe7uVZQhpvb/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Design Calculation Sheet Y-Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1HE3OFxILh98msHIpJjVdB8pDJagtL7Yq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-DSG-F,Work Order PICV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1913xemgu_TjuGHBmRyzq50xBKzPtpxrp/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F,Insulation Thickness Calculation Sheet for Pre-Insulated Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1BQT-yYSrqYQA_qHZV7hO8QEKgVGNATHu/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-DSG-F, Design Inputs - Pressure Independent Control Valves (PICV)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1tT3nOy1YBMe-TjEYmsxqbfHDoFtEYn1k/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Purchase Order",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XD2RvLz3hzoMgTgttvzZmaJ31fv9Ax4v/view?usp=drive_link",
  },
  {
    keyword: "BSV-PUR-F, Purchase Casting Planning & Tracking Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "http://goog_1582225075/",
  },
  {
    keyword: "BSV-PUR-F,Supplier Approval Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1LAa_rE-aDMyXxbUhodNXT0QUApjhq_o4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Supplier Approval List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1xhm2j8nYEAFy57xEBmyAn-VkKYQA8xQp/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Pattern Management System",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1NjYIpufQETxsMKHfJSUHRi_0E43iqq1x/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Bid Analysis",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1CuKGRIOS1oEz2jd5dllX0PhYSvXWC7Ir/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Pattern List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/13Iv0IMR_RMdni-jBzpD13DOzurvJ3AsR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Check List for PO Approval",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1EhCYEIh9EGd8Au2HC1C31z26Fm6lcz-e/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Rate Contract Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1b_vdWg2kk1pbAGa3MLG-xYtUCXaUOBLY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Purchase Requisition",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aNLLWznEKW_CTMvfWp9t2Ovt9eXaYTNj/view?usp=drive_link",
  },
  {
    keyword: "BSV-PUR-F, Supplier Re-Evaluation or Rating Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/13HKhW5GlOBdz3oyo1zzD3d0ohuXUq9gm/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Enquiry Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1YKqnqApr4OFNKgbsZ-Tg7Ypul6JnUBCB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Evaluation Report for Casting & Forging Items",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1f5mA4Ux4jZgJGp5OMLQSwV2FvlD29guE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Evaluation Report of Machining Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1J8pxfwR1JlE8qOAd3mQf7Kw1bNFNwT7A/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Evaluation Report of Bought Out & Raw Material Items",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1DDWmZIf8vC7fqLb4HkwUnqSWJv5x_QUN/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Evaluation Report for NDE Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1x8-3XQP15JMFR4VUqbqZ1kBcl64VNgHf/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Evaluation Report of Welding Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ZM7txaTRc3wSXneSQeS2vj0I1zd3L7F0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Evaluation Report of Calibration Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1BNIkqZf4f6TAcAsSbTmY76GHknv9ucXK/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Evaluation Report of ENP Coating Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1pDg_TTXpVMhSk_6HnaicAWx7YymqQzL_/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F,Evaluation Report of Vulcanizing & Rubber Lining Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/13Aub_WxyUz23l3Pe4XDt6jrv3xLtweGV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F, Evaluation Report of Spring Coiling Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1kpO-7D_pKHJlsuar3ZlCmMXIjW-gek13/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Evaluation Report of Other Products or Activities",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1yVKSr-CyTySBuA_pfOYBahPJQ03ZbTGf/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F,Evaluation Report of Heat Treatment Services Out Sourced",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1yzLVeI9-Tflg1LIiT-XZVqggC8UGhDiA/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Advance Valves Casting Procurements Experience",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1hBhz3wy8oyfTogrpFeRNCMA3EyuQ-Bbn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Validation Report - Rubber Vulcanization or Lining",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/117_HNPIEuIfdRJg7GQcdqn8Dy1rTVE0R/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, ENP Coating Validation Format",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1HrbuN8ayahJcuR5ZIap_-YVOupb7o2uT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Suppliers Internal & Supply Chain Control Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1VVdHsr2bADVazRS-L31VSD4IewK2h-KG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F,Annual Suppliers Re-Evaluation Plan Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1LEV-aN72oPQ7nb-Gy4fPdAq2iAQq3jRL/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F,Evaluation Report of Consultant or Certification Activities",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1qCcD3UTvyJFWY3l42ihCRHqWMVcul6K9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, Supplier Risk Assessment",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1vzh6p57fapM410W_7ylUauNCA3QA7tMJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-PUR-F, ERP Supplier Registration Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1nJy2SrjxWEnhdyw3j3EvyUWU4EC0iu61/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F,Batch Code No and Valve Tag No Allocation Sheet for Rubberized Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1xr-NpoXouaUISRgNglWHDzE9F4jZ60N9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-PUR-F,Batch Code No and Valve Tag No Allocation Sheet for Non-Rubberized Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1bobfwAaq968wtXVKwm7B31qfOhvkgEs1/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-STR-F,Material Issue Request - Non BOM Issuance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1IyGjODIt9nkBVE-V-t8Q1soUudI3uycm/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Store Return Note",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-Sb7IBjHv3o3WFoKRLwb0PvbsGEyRtle/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F, Combined Stock Report (Value)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tOwcY-Mpa3IRQXwKQzwCrmx1fN4a6URW/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F, Bill Entry Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ltM9PN2iGL7aeOfh6gijP9zxIFYk6noS/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-STR-F, Stock Ledger",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1huSB9dW_7MOuF5O-doDZjAYN74WpF8o3/view?usp=share_link",
  },
  {
    keyword: "BSV-STR-F,Stock FIFO Value",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Imu7qq9Tbl0ThXxazESTcazJx3oH_KV9/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Returnable Challan - WIP",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1r5I6IjjATXIObs4SL3y3nH5QThEcpNiM/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Material Receipt Report - MRN with PO",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Rw6mhYPqYUQWmze3bJaKZ4Rl6obULUfK/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F, Material Receipt Report - MRN Imported",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XGZNs95qwTq9hAcdlGkPiuR-wQALkxFT/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F, Material Receipt Report - General",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1YbxBCR-jpWmMEsgTs0IWFdzPjf-rFjpB/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Material Receipt Report - Job Work",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xoAmoWdv43TJSBhIsUTwyGutkiBiUoxp/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Material Receipt Report - RRGP",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1C5Kxf1H5rCAVT3wFq6_FpRVcTBxZvePV/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Non Returnable Challan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_v1eU_9JAgg26747ChxpCbayUCVTEhkD/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Returnable Challan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1v3uQDKEZsPC3LQD-Dl1enR57YtowQbb9/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F, Material Return After Job Work",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/127TEw6Y_OIos29whxQEJQozQOCtWwCQh/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F, Store Issue Report - Non BOM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1gWIuwonAAmZVglK-DuxQ5_QJLTa5PmaI/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Store Issue Report-BOM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1D06fHWToxKz9dHT954P7ILURfDfXkCvO/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Challan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ds-kxeDOllxyb4v0_jbjvxkJpgeoiko_/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-F,Stock Assessment Report Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1_g2G7xByMTEO9JtQvpe1grRYlRkmF9gJ/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-STR-F,Material Identification Tags",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1mIp0uEQGhtKRjz2cvObs7w0Pb5cySj2X/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-F,List of Hardware",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1oTB0OONhf53XRP7v33fG9YXTv0ku3sYU/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-IT-F,New Joinee Check List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1gSNkZjSeYAAx5aM_f5DbkUxPKFSZq2aO/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-IT-F,Employee Departure Check List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1CJ0Z2AsyZqr-CQYCr-SYNzP4d2U6DEln/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-IT-F,Hardware & Software Audit Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1kPUmyu1RzyyzctWKRObk5afOMIKTOxyk/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Daily Production Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1YWHwZSh23BPUBWNYG_GTL1aOhToSbQIv/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Weld Record Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1IBedDdynk6IrSgzQqfUl7rUstWiJAvME/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Valve Completion Analysis Report - DPCV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1iDRAlETvF0RanclVSkfVlyzo58LiqvN0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Butterfly Valve (Double Eccentric) Assembly Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1qpnPP2VgFaGDBS6Wla6mFDjNrIYpKRrA/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Butterfly Valve (Concentric) Assembly Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/16Lasvq0_RWVoOLxXPGMa8IIYOwiOi6OE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, DPCV Assembly Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ADu8jF8RcwW5utDX4Cw9iW2V-b_Yrk4I/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Jig & Fixture Inspection Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ooKqbAllatbfLVZCSYzzltkH7AzmKW4i/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,igs & Fixture Validation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Bk3pBuMJ2-W-0Ug9aM1ymgl0wjni0tGZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Machining Inspection Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1GhqHsXMsC29wk3fBrS6eu7go6uEYBqS9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Job Card A, B and C",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1692ysmip6LG9krB1P9kDoRIoZktexcoh/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Monthly Production Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/19QvMqLC3plrr1FmUEt-zfVkpkKqVKIiY/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Valve Handover Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1TMFRVqV4I9ZDYHpDD4IILDID21jXMDSZ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Advance Notification",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1yGOOxTPNQmkHvpbrNUw2lG4kfSBb1CR6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Painting Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1JeV194rHfDUaswHiROroKMiEv8e8fFwG/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Work Order Review Checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1MVwisdvBMegOp39uxcVAeAk-M4Kw-7DE/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Valve Tag Allotment Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/16srfQme3LsqzBIFMRKT9LhrMza4plYtb/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Stage Tag",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1BZC_naxGKisa7KjO7yl29qBjuPyFtyby/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Heat Treatment Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/12L8-P-i3l4LrElgAJTNEEziDASnUZlbR/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Validation Report - Paint and Nylon Coating",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Qp4mpHuPmZ133G0ezpkdjR0IT-EbbWkr/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Validation Report - Heat Treatment",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1di_1hsrGuwDis1Hw1K1Je7xSjSb5ZMZJ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Assembly Rework Record for DPCV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1n8CF22YY9MnSYHJmCa_TGK50Y-q-iRdG/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Assembly Rework Record for BD",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1JwrBNoEDUNB1IC2xXxoyBjyH76ioqxws/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Assembly Rework Record for BFV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/14baD9MaJ7TYcVpt9q1KqGvftG6dilNQi/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Format for Jigs and Fixtures Indexing Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1aY3ekYCzd2NPDapEC4WtYbX1Hv18hf7g/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Decision Tree for Valve Machining",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Pxbauv31HJDf_Ai_I9QNzLkBnm_zJVCt/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Machine capability Master Matrix for Machining",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1955SIWLaWzqf5IfjO6q58pTlYTHZyObB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Flange Hole Drilling Jigs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1I4ifzFhnnkSAJtWvEpbYtQe8c9Pk-R83/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,List of Vulcanising Dies for BF Body",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1q8fuh5AXmiLSZPRoMl8BM9A42BcPoCgj/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Jigs & Fixtures Issue Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/10HFVVZ78Xx4jiEBJ7ZL8ADm8fuq6lq45/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Performance Test Data Sheet - Balancing Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1UfWkBPIlhYw4uDP0qImJUG3BDBaWxFsq/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Balancing Valve Assembly Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1K9tv_DNT5meorpNfd5CEN9GgQ1p9hZ0p/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, List of Insulation Dies for Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/19NvSL-NoHOnNuUnyJ8isRtPDVEEKV5F0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,PICV Assembly Log book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1-Eg4z4ygbIgGZulGLkn3dtsfJwPh72xx/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F, Assembly Rework Record PICV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/16dO3AkUMmVjI6Yye1sZxsmzVf-h_mqCP/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Assembly Rework Record BV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1kIw19KYsqsfNByEWgfir233nnLpGM4yg/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MFG-F,Nylon Coating Log Book",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1NxDaNZ2tK7fvhbEFTu0-194QZvwLy8cR/edit?usp=sharing&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F, Breakdown Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1nUBI01cslgnJPmiXCSJG07EhoCMWIcjL/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Master List of Machines",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1QXH8mWlD_Sy7RWj6T5VL4s7cLaYuMdJx/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Equipment or Machine History Card",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1VMKcNyDFkqavOZrVXZrrwPEcVnheFWB9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Annual Preventive Maintenance Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1oq8198sOCuTDQRDFaTwTBNUIcem4xoHy/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Annual Preventive Frequency",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1UYmUZdxcNmllJ1QfbZbVd61IDJ9J8Ysh/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Annual Machine Calibration Calendar",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/18oCX9dIQDnNXSqoVd3pDvrCznWB5Nkon/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Master List of Manuals",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ug37JVf8dze_GHoXJacZXKxit_nVCw1t/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F, Master List of Lubricants",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ayRJ3nm2vAdz6OV_yTnvMmamYFieBn_u/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Preventive Maintenance Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1pSJtvl_Hr1R-GT5-WM3xSs813z6uxDob/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Daily Preventive Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1l7xTvMWD575GJHZ8URDo6Z0Z208uhut5/edit?usp=share_link&ouid=111234337381575172030&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F, Permitted Crane Operator",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ddqJkHJeyIZqaTFSvZ04Eq_05ESkWaP4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Crane Operator Permit",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1q6dqBhSO6h8xb8emClGPtpidwYfjqHY9/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Machine Calibration Test Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1gOHGdhixEaUdAQVC382Z4kN37bIU6sR3/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Master List of Spare Parts of Machines or Equipments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/12785QP9ZPjYIJHbAn_weBCLKHxvjjKaT/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MNT-F,Daily Machine Availability vs Utilization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/18tJG-lekY9zTvjjC9fsgKdFOTDggXH68/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Context of the Organization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/128Km8iZKLL6FBlHrRiJ7Z5c0AT19w39q/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, Objective Realization Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1bneiXMIdM-XV0jjHeCfrsi6HUUJ9ixZQ/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Minutes of OHSMS Planning and MRM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1uQkTRw8_zrKyjtBCAS94ik6rJQYbSvOM/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Master List of Identified Risks and Opportunities",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1VXaxIu7VY-Ct6wr7aSyJRCH3E47Ti1Os/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Job Description Matrix",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1Pn0kBhvqSP8TQq-nj4zFIY2hnU0hT2at/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, List of Personnel",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1vKnjrR0JXuYbtH2Hfc2GJ8k2G26Ef85H/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Competence Evaluation Record",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1tk8b8_nn2CrT3XTjFDWL_HOb1Vgpi7Bn/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, Minutes of OHS Committee Meeting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1-pfRoSzKnQqktNDjgYIPJVf65HI-iV3t/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,OHSMS Hazard Identification Checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1iQms1FtMHkastpP4K7eZqCYEvTLLqdYt/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Master List of Legal Requirements and Other Requirements",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/154MchnNJVZmSnTe21KMZ30jhi_fVHjeV/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, OHS Risk Assessment Worksheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1lbQyVIWpjvwR9qAw3fOJOMjfAJVaqZ9l/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, List of Potential OHS Emergencies and Responses",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1dmQktm6FuZR9Feg3rgv5kkpLwKGZJX4G/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,OHS Monitoring Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1vMhC4A-uX-gtKjL3oHLjSnbUBfbRjxrW/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Register of Out of Calibration Events",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1pLTp0kuZRx85y55bxhhc-so49x8RMSlg/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, Master List of Internal OHSMS Auditors",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1vVcikhTG5-JVJahhcXnnf9xlnicpBF09/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Yearly OHSMS Audit Calendar",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1dyyYWEocfAQcALuWJaHs_ydUDA9X6ovu/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, Internal Audit Note",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1SqcysaQU5gaCkVXVJ84RYSDgRyqaGJC0/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, Non-conformity Investigation Repor",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1tsVfDoBG0LIVcKjmS99yBbFv7q1SGKHa/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Master List of Document Controllers",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1f0MlvP29NIU-pYjUZOIV_CmcbTK9KCrd/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Master List of OHS Documents and Records",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1hDfWPDItOuJPFfuzIqPr5Po_9XcGOt2P/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F, Document Addition or Change Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1UTmpYYdBT3n9_S4ovlYhuBeNc4ZL4Fit/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Document Issue-cum-Receipt Note",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1msPDevXRWz3_GqGLoIFR8Upvi8M3Ym8-/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Document Withdrawal Notice",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1fXHTzJjn69uVp5bKmewTHSIPYng8Brz7/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "OHS-F,Training Request Memo",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1oEyKD1cd2dHKwIwi5atngPRMLQ1aZrTs/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "MKT-C,Advance Corporate Brochure.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Yxn-SOAvICA1cnSNceovYmauiibDo6ua/view",
  },
  {
    keyword: "MKT-C, Catalogue for Dual Plate Check Valve.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18uhbK5sAqGwGQTFmxNUlZONR9RPsaPzm/view",
  },
  {
    keyword: "MKT-C,Catalogue for Concentric Butterfly Valves.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1HVq1sjoUJExKaXXSzBP7Be5fyECDZOWE/view",
  },
  {
    keyword: "MKT-C,Catalogue for Double Eccentric Butterfly Valve.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wOBf0rmC6U7ffm0kGYkqnDmEbefBgNDa/view",
  },
  {
    keyword: "MKT-C,Catalogue for Triple Eccentric Butterfly Valve.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/161XEx9_LDYHBOllE3ZR17fzuyusipJIu/view",
  },
  {
    keyword: "MKT-C,Catalogue for Balancing Valve.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qay7H-yIArWcj6AH7muV80Aan3B1LlxK/view",
  },
  {
    keyword: "MKT-C,Product Realization Capability Chart.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lgGA6j-JFsojYY8QfGy9KwWqMXhwpwWe/view",
  },
  {
    keyword:
      "QAD-C,Chart on Acceptance Criteria for Testing, Measuring, Monitoring & Detection Equipments.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13NbdBJTtmKiSIvzoH-4CXQPdv2LHsh6-/view",
  },
  {
    keyword: "QAD-C,Organogram for Quality Assurance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tnKXa_Gao6-dRts9M7km5NsVMnPKrF1W/view",
  },
  {
    keyword:
      "QAD-C,Critical Products, Component & Activity Verification Plan (CPCV).pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1v0yE6ZMfe84M83wK3rAxkvjJkKd5SM9h/view",
  },
  {
    keyword: "PUR-C,Supply Chain Control Plan.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GXy0kl5JoOwofETXsHenXyzI6E19rKxq/view",
  },
  {
    keyword: "PUR-C,SUPPLIERS RE-EVALUATION FREQUENCY PLAN",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nOoIwF8CKil0Iu-W4Sc5gwlVc5E6XBtu/view",
  },
  {
    keyword: "STR-C,Layout of Stores.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KUJM6hrtMSmFfkgD0Lwnu3aOFpNEqDf9/view",
  },
  {
    keyword: "MFG-C,Production Process Flow Chart.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vcClJvI3-iXwXVPHSQ9jwQ4LEI4RalWw/view",
  },
  {
    keyword:
      "MFG-C,Machining Sequence Chart for Dual Plate Check Valve- Body.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nzRT4Q9RwUrYHqhpNzBRi2THixn0_9cs/view?usp=sharing",
  },
  {
    keyword: "MFG-C,Machining Sequence Chart for DPCV Plate.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1k_wQ9AZponR-aDyd0WJ7kiYpJhnl7JFC/view?usp=sharing",
  },
  {
    keyword: "MFG-C,MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- BODY.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1cTwm93jhRUb4kIfPrwaBngzatU-gaIJH/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE - DISC.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qeLkt4YQ1zq0MpYz_UdmLNnyAni6hSf9/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- SEAT RING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vXgS5PMwY54HdnBL-KNsfVhX0ig9pvkz/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- SEAL RING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hwUf3o_2ftA8KAa5r97eu0bO0abBXoNA/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C, MACHINING SEQUENCE CHART FOR TRIPLE OFFSET VALVE- RETAINER RING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zU2kxcqL3D99pXLjJVM5hKu-WzmhYdxX/view?usp=sharing",
  },
  {
    keyword: "MFG-C,MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE- BODY.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KvLTKCOAZBpk6MdvvfQRYip8xskhuU4F/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE - DISC.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aRtbKmOZgrQe6unai_prt_pZQfIggBMs/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE- SEAT RING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jJCoz_rjMTbKOMY8YQbpUy9uXDbwrWFG/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING SEQUENCE CHART FOR DOUBLE OFFSET VALVE- RETAINER RING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13JslaqhM99IhMu6LKA4GRD4_-JMK6K7G/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C, MACHINING SEQUENCE CHART FOR CONCENTRIC VALVE- BODY MACHINING SEQUENCE CHART FOR CONCENTRIC VALVE- BODY.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Xzo80e3GtDZONXxhxnpBml-mqsVXzRKM/view?usp=sharing",
  },
  {
    keyword: "MFG-C, MACHINING SEQUENCE CHART FOR CONCENTRIC VALVE - DISC.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1m4argEA4-EEl8jdzCmTvjo_GRPwbyyeQ/view?usp=sharing",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET 1.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OwQUjzNvd5VEJWdVA203_nQHvDzDYeJk/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET 1.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hFCuQ463Zk6RjymBEXjMa57qTIxqbEgZ/view",
  },
  {
    keyword:
      "MFG-C,CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- BODY.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qnzM5vG5rzJJSZ65mEwMRoiKB3UAXsV0/view",
  },
  {
    keyword:
      "MFG-C, MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - GEAR BOX SIDE BORING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aA_IOfk-2MQ_CCXFIXnWxOs41SfXYrqQ/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE- BODY - END COVER SIDE BORING.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1bE5jJiV5rztfsLTTR0PTpEvCMNIpeMY1/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING INLET.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WgMyke8zYF_Q8zlulf0A4TLmejrpUSSu/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING OUTLET SIDE.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OE-B_kynu0urda3zyjE2E7kZ4OnmXR2C/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET-2.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12heND4RN8prKGDHxD6LWNnRZyPaLNUu9/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET-2.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1r2rgyTIROay2pZzhzNL2K0gKLodqusQL/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET-1.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xkVfYwb979OJ4mX-PTaNB5zOSws6OWYe/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET-1.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Gtk7h6btKrIIWyE6VdGfoRKbrpL0lw_k/view",
  },
  {
    keyword:
      "MFG-C,CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- BODY.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1y6yfHfOhNubuLAJYXoDTmMC8IvWFOR1l/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - BORING GEAR BOX SIDE.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1W3TYydiNeKEyJoPw6bCHfKRmWOGx-cfi/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - BORING GEAR BOX SIDE.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WjPKzYuPDpsT0Uc5aJ9Ec7GPCtPrJA0E/view",
  },
  {
    keyword:
      "MFG-C, MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING INLET.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1kVQR8IMPNl2HiuJptKsPyBn8H2lDBpKx/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - FLANGE DRILLING OUTLET SIDE.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1eOMrVFujgOtJFmieDP8Uwj-64rCt2bxr/view",
  },
  {
    keyword:
      "MFG-C, MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GE46IdKGcN_GNGhK6C8osPnD646k3NzD/view",
  },
  {
    keyword:
      "MFG-C, WELDING PROCESS STANDARD FOR BUTTER FLY TRIPPLE OFFSET VALVE - BODY - SEAT WELDING",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hf7E5tZKT9Ch91jZMeaNWARnOeTH9qfR/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING INLET-",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1FCSvmWy9vUCfcpu-3SYVq9q_nlvyYBHC/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KleARGFUbdTVAiQFeK9zy-C5qauRl4KZ/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTERFLY TRIPLE OFFSET VALVE - BODY - TURNING OUTLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hjYMkooORETjjnWyQujeKtTyZUi3py3N/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - DISC - TURNING OUTLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1JBmMO0MJKjooWp1DxnptyD_ZAAg7zN3y/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - DISC - TURNING INLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1U70ZerRGYlr4fVl5GZFJifEObuNwdZfP/view",
  },
  {
    keyword:
      "MFG-C,CENTRELINE MARKING PROCESS STANDRAD FOR TRIPPLE OFFSET VALVE- DISC - CENTRELINE MARKING",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-7DGJVYAcTtIhpBe6OflH6XBAfEoiHZ-/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR TRIPLE OFFSET VALVE - DISC - BORING INLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1X-kizXZh6B9ay7E2FH8olLhjsFhKO3Ni/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFSET VALVE - DISC - DRILLING INLET-",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VPXJvEQ-LjPEFbCzfzRemiKqX-9etvAP/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFSET VALVE - DISC - DRILLING OUTLET",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KVFIpxN-lCfbA7wW_5zgNy6hKOADisBD/view",
  },
  {
    keyword:
      "MFG-C,MACHINING PROCESS STANDARD FOR BUTTER FLY TRIPLE OFSET VALVE - DISC - KEY CUTTING.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1De21VZqdil3LGSPyjc0jGcZR0ziL-F5q/view",
  },
  {
    keyword: "PLN-C,Chart on Rating Criteria for Severity.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ttPsp5ScgQL025gN9rzedyEEnrux7q8b/view",
  },
  {
    keyword: "PLN-C, Rating Criteria For Occurrence.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rXOHMEVrm9_JlQdhjNvLXqdL5Mmr74UK/view",
  },
  {
    keyword: "PLN-C, Rating Criteria for Detection.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1oAMEdIb7c7SgqSplZGvWzPlweM8wJdu2/view",
  },
  {
    keyword: "BSV-MKT-C,Advance Corporate Brochure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1un9kANGDLBKHdsTiB8tCNw2JcpLmo2Sw/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-MKT-C,Catalogue for Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1e3h1frysN-PBy-hPqhvKUBxqxFsU5S55/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-C,Catalogue for Concentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lGKy0-WbQDzadJiknUS7p-eXTejmz0tz/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-C,Catalogue for Double Eccentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1J1R70r41Wj6ZyES0OsrGMJf9ibfvrLce/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-C,Catalogue for Balancing Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1pVFs8zpj8gR6SWVasLB5ENSTY7z0AE4L/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-C,Product Realization Capability Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1g74sx3iv0DzDl4zgfsJi_118L1EdaZbi/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-C,Catalogue for Motorized Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vUNurTd9C8gFnRPHkxqELVPHWLMAtYh4/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-C,Catalogue for Pre-Insulated Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aFTmlC5oLiWs167HkWU-JffPv6mQu5ne/view?usp=drive_link",
  },
  {
    keyword: "BSV-PLN-C,Chart on Rating Criteria for Severity",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dz9pZiqd7soZNGtejlbnjVAaDA9zcMEQ/view?usp=sharing",
  },
  {
    keyword: "BSV-PLN-C,Chart On Rating Criteria for Occurrence",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1EYNsyvDRsVq5P0lPOF_xlWvHswiZEtNd/view?usp=sharing",
  },
  {
    keyword: "BSV-PLN-C,Chart on Rating Criteria for Detection",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XNHvcKoh5B_4_xj2S8FXEYOdV6p-B1xx/view?usp=sharing",
  },
  {
    keyword: "BSV-HRD-C,COrg Knowledge Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QEbJmHbJiD_-xn4Pw5JDGII5U6gNE0WH/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR-C,Supply Chain Control Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KEEpWFzhRXJZTPwiXU8sli9ReVV6vWHt/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR-C,Suppliers Re-Evaluation Frequency Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yWowOwcxqM9am9HfjcCiyxhR2ZJWvoYL/view?usp=sharing",
  },
  {
    keyword: "BSV-STR-C,Layout of Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vOh6fSWkz3tmDHhUJUgUlIY5VSpbDxdA/view?usp=share_link",
  },
  {
    keyword: "BSV-IT-C,Security Architecture",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jltHd0OlbciwOjgzCjg84_H_hdCc_MQE/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-C,AV Network Diagram",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1JxiDC53uv149lrhd-RbFnY6mOKbfZbie/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-C,Production Process Flow Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11x_yjuTfiQodBTLr616IWbiecS24UuHj/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Dual Plate Check Valve - Body",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AETjstai1zKloyUi5ZOsrVtNVqQUBQoL/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Dual Plate Check Valve - Plates",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AfU9kuwBcO1tGb57tLJtXF0v4GWhtcNk/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Balancing Valve Gun Metal Body",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1prN8toYQvkRffeGwdUUKxOEi5CA-RXIF/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C, Machining Sequence Chart for Gun Metal Balancing Valve Bonnet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1cUrV64-SKNBSyOrOCT2YavMaOFEFW3UX/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C, Machining Sequence Chart for Iron Balancing Valves Bodies",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RN-9Pi5dphpbjXx2ALqj2M3k3hWYMez5/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Cast Iron Balancing Valves Discs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nMFDOoo3QwhsQ1ZEf7Ruhb2sAy6wg3yj/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C, Machining Sequence Chart for Double Offset Valve - Body",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1uVXAZN_G0xYE7YNFSDnTviLHYnwyKlpI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Double Offset Valve - Disc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1M1FKcsZRAzehdx9_Nn3Y3taRkA49JiUP/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C, Machining Sequence Chart for Double Offset Valve - Seat Ring",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MHc-PiT9GKx2wDhu2mv5p9j9-wiOJylp/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Double Offset Valve - Retainer Ring",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ELOUtudOp8BQNKs42bbFPlaRm3o2HYr3/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-C,Machining Sequence Chart for Concentric Valve - Body",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1LGTnk9ef2AJA_AS1mMy1gD27j9_KSiQI/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-C,Machining Sequence Chart for Concentric Valve - Disc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1P1O9bPJTMqlm3AUy_elYh2T9QxKt4mqb/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Pressure Independent Valves Bodies",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12voyXj9-suaRLyY-1Z5N7acUspPn0FiC/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Pressure Independent Valves Diaphragm Cover",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ro1e3uGQOVj4hRJh0OmXR8ZbgfexkxHI/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Large Size Balancing Valves Bodies",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qhlLsoXVGeSTPzGy6YI-R67AbeoeTQ5O/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C,Machining Sequence Chart for Cast Iron Balancing Valves Discs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vyZr5_7CA6OR-bAyDRERvD7QZSpYxMC6/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG-C, Machining Sequence Chart for Pressure Independent Valves Top Flange",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZxRqnC_6tHqkz-sFAQtkV-8q2MDejkr6/view?usp=sharing",
  },
  {
    keyword: "DSG-W,Drawing Numbering System.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WQC3m9w3q6AU9QCJrerCvCHEt00rOt7p/view",
  },
  {
    keyword: "DSG-W, Analysis Guidelines for SIL Certified Product.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11TByCpm8AGi9_SBPA2BbhnPra_zRT8ue/view",
  },
  {
    keyword: "DSG-W,Guidelines for Castings for Prototypes.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16dNm3ZpDTj3bfwddazKeTaCojhTDH_gT/view",
  },
  {
    keyword:
      "DSG-W,Work instruction for Design & Development review process.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DFRUpfvUb8FgQOnBbeLCreywf3KJvAa8/view",
  },
  {
    keyword: "DSG-W,Design Concept Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Jg9NBNKR5Qdu3sANQFn2SWfaBiMklx2C/view",
  },
  {
    keyword: "DSG-W,Design Concept Concentric Butterfly Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S7x6ogY_lTr4jV7QH21GYoTLXIUmtPeY/view",
  },
  {
    keyword: "DSG-W,Concept Double Eccentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nArMoqRMVue38iYzVK6BpgeBy2WVPAAG/view",
  },
  {
    keyword: "DSG-W,Design Concept Triple Eccentric Butterfly Valve.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jZqcLtWGn3ubCSv6O6HuqSfWpQKbuyB8/view",
  },
  {
    keyword: "DSG-W,Creation &Checking of GADs.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1G0NoOlnpbj597QjA9lz4j3MK7LwIC50I/view",
  },
  {
    keyword: "DSG-W,Technical Requirement Specification (TRS)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16jo8ikUOWLeKc0sTQjSQR6arna3BZngt/view",
  },
  {
    keyword:
      "DSG-W,Instructions for Storage, Installation, Operation and Maintenance of Concentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1n8YevuScoDOmr5vzfSyFp-paZrgFqv8K/view",
  },
  {
    keyword: "DSG-W,Operation and Maintenance of Double Offset Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13Ra6P8ceFjoChWdzlIqLZMjIDnAkVhOx/view",
  },
  {
    keyword:
      "DSG-W,operation and maintenance of Triple Eccentric Butterfly Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jXM3wUF0SBx92v9HIY425ZYO1C-JKP-u/view",
  },
  {
    keyword: "DSG-W,Operation & maintenance of Dual Plate Check",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/17ampwWjwGMKF2QHvmSE_ls0Q6abZfzku/view",
  },
  {
    keyword: "DSG-W, Reference Elastomer Suitability Chart.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1--3tnxVD5YoWtGrCf1Pdh0d0xWc9m-jo/view",
  },
  {
    keyword: "DSG-W,Selection of Elastomer material",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PwbzGUmaX69wLA7-KqibZzor_5b9sXP_/view",
  },
  {
    keyword: "DSG-W,Dual Plate Check Valve Sizing.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1auNxIHwKLLvBVxmjcRoA6uGQPZRszTpB/view",
  },
  {
    keyword: "DSG-W,Unspecified machining tolerances on Engineering drawings",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1u0F-j2C0erHN3FPhKGyE7vGrCJXBPHk3/view",
  },
  {
    keyword: "DSG-W,Design Concept Axial Flow Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12PGxdrGfExsmCVxaSJwi6fe_cfq6Sctx/view",
  },
  {
    keyword: "DSG-W,Operation & maintenance of Axial Flow Check valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QiojdxuUhBnkEJaf5q3ZSSd5TE90Q5DM/view",
  },
  {
    keyword:
      "DSG-W,Guidelines for identifying critical & essential dimensions and parameters in the Design Output",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GuJFAU5w0pUOnYy7lDxJwIZ-pZmpnCID/view",
  },
  {
    keyword:
      "DSG-W,Operation and Maintenance of UL Listed Concentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1CMU8-Ez-a2jtg26Fd6T4QJMqicHrIrBi/view",
  },
  {
    keyword: "MKT-W,Preparation of Sales Order Acceptance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hf9HKY5EQpFJvGjhBVmRssLh29LcEQx9/view",
  },
  {
    keyword: "MKT-W,Control of Client Documents & Data.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zObjwL1E7daITuoRE3twMHUpyZAk6ZZE/view",
  },
  {
    keyword: "QAD-W,Functional or Pressure Testing - Dual Plate Check Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14S91DJniph4a-uXLmHIa8sra6bqCBE2j/view",
  },
  {
    keyword: "QAD-W,Functional or Pressure Testing - Butterfly Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qqTlmyDAiqONlzqpG1NX6d_C-8N9BONV/view",
  },
  {
    keyword: "QAD-W,Functional or Pressure Testing - Balancing Valve G.M",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sgRwVw6P-LJC5TfEc3va8YRcS1BTIQbF/view",
  },
  {
    keyword: "QAD-W,Blasting & Painting on Valves.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1IefdgDCmhwaNKYADUtMLAm89sn8P7K0G/view",
  },
  {
    keyword: "QAD-W,Radiography Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1u8dgViwpTIc55IIcVusEqqlEM-dQU_sf/view",
  },
  {
    keyword: "QAD-W,UT procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18Vt57QNMhzywu_0XwiOJLIAYK619KG2P/view",
  },
  {
    keyword: "QAD-W,LPT Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BpWezbHtfP70rAG1l5chADD1d86p3C__/view",
  },
  {
    keyword: "QAD-W,Magnetic Particle Testing.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RrbsE0Zev8_OH-6oGdyRwCGPMBVp2VIv/view",
  },
  {
    keyword: "QAD-W,Positive Material Identification.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16Jz_xmlHtSZwIhBeYQRMaGZdopH6eABg/view",
  },
  {
    keyword: "QAD-W,Rubber Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1psC_MLtVqw75L-gvaokiQevo49CTwNTy/view",
  },
  {
    keyword: "QAD-W,Cleaning Procedure of Valves for Oxygen Service",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BK-0r_g0ccZ1AOtZxUy2Cn_r-gmo9WTB/view",
  },
  {
    keyword: "QAD-W,Cryogenic or Low Temperature Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rb3NghsNMrPYgrRH8OpWbiPbdgrjSu4l/view",
  },
  {
    keyword:
      "QAD-W,Fugitive Emission Test for Type Test & Production Test of Butterfly Valves Using Helium Gas",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15QMsUxAwPH3iUlbjFCHdWid756sI5MW4/view",
  },
  {
    keyword: "QAD-W,Marking for “CE” Marking Valves.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DV9p4-3Dgh2QtPM_VuC7RQriXsInIM67/view",
  },
  {
    keyword: "QAD-W,Casting for “CE” Marking Valves.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1IPAGZ9GhQpyJVKmwyExW7Qx7dvf9rVL9/view",
  },
  {
    keyword:
      "QAD-W,Marking for API 594 & API 609 Valves Valves for Advance Valve Global LLP.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-Vxu-qaKFqNzQjREpdxMexS5qExnj1Md/view",
  },
  {
    keyword:
      "QAD-W,Marking of API 6D and API 609 Valves for Advance Valves Pvt. Ltd. Greater Noida",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dX5BuUbc4XizwoFZf7ky5SRCf9ILRmbx/view",
  },
  {
    keyword: "QAD-W,Heat Treatment of Springs For Check Valves.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RRK9DsAFb1L_n-Uk9EMC4gdMsPHhXCj-/view",
  },
  {
    keyword: "QAD-W,Heat Treatment of Valve Components.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1u2Mp94dLd6tegw8YXNiGLItUCKQsXL6q/view",
  },
  {
    keyword: "QAD-W,Hardness Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1c6rwDqaFLPGxsLgi3Sqs4y8uGNm-vY3Z/view",
  },
  {
    keyword:
      "QAD-W,Dry Cycle Testing procedure For Springs Of Dual Plate Check Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1gwHLM6IlMrz6_AZECM1qrzABuzH8KoU1/view",
  },
  {
    keyword: "QAD-W,Colour Coding.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XX4hGi4C4Ucrd14OayOaZKHxteMSvYxu/view",
  },
  {
    keyword:
      "QAD-W,Functional/Pressure Testing Procedure-Balancing Valves-Flanged.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Q-pLyx4MbfIDBTPN-25N1xINsRCIA2-t/view",
  },
  {
    keyword: "QAD-W,EPDM Coating Procedure on Disc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AdvYy4oO4ZexeJ52fckyIz2MbE3etMmm/view",
  },
  {
    keyword: "QAD-W,Testing Procedure For Validation for ENP Coating.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15s5yWkbiyp3aA_ry5qPKVmf6jvCx666N/view",
  },
  {
    keyword:
      "QAD-W,Testing Requirements for concentric Butterfly Valves for UL Marks.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GM9tdxwRm1J2h7HW5LC5o9daKCRwE0-n/view",
  },
  {
    keyword: "QAD-W,Salt Contamination Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1iF1ufySbLEpG7J0hBdAGOZRKY7PaxJ4p/view",
  },
  {
    keyword: "QAD-W,Triple Offset Butterfly Valve (TOV) Safety Manual.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1oSLkJ4o-_ktQNpoM_1YYpmVMa1qOGgR8/view",
  },
  {
    keyword: "QAD-W,Written Practice for NDT.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sOXgUyfOMjBxqfe9pzU24tV5GsPqNros/view",
  },
  {
    keyword: "QAD-W,VT PROCEDURE.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fQK40vxxXalqDHz4nAldqhytuf22jnve/view",
  },
  {
    keyword: "QAD-W,Post Weld Heat Treatment of Valve Components.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1weNaYjNBvaVCWbZXFGfaJwkQ-3tDFuKU/view",
  },
  {
    keyword: "QAD-W,Repair Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dTiA5prims22FHfVo0W0eumtRhREY4gJ/view",
  },
  {
    keyword: "QAD-W,Welding Material Handling Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1F-9rXuV0oneH4x7yqpxUfTb6N5HDhwMB/view",
  },
  {
    keyword: "QAD-W,Pickling & Passivation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1iqSdryLeevoiGD4jNBUUmPhPz4gFAe04/view",
  },
  {
    keyword:
      "QAD-W,Cleaning Procedure of Valves for Air Separation Unit (ASU).",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-zR9up5SAnN9X_NUdKXH_UwSABE4_hVG/view",
  },
  {
    keyword: "QAD-W,Casting Inspection Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Ed1G4TxMjm00zi2S1heD6RUp59gvAc4q/view",
  },
  {
    keyword: "QAD-W,Calibration Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wIhSLvf010CdmEV0NSaJGt_jzVFT1E-I/view",
  },
  {
    keyword:
      "QAD-W,Procedure for Qalification Heat Treating Equipment (Furnace)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15WbfYBGPfonWiWWEqV0e8-aBt6PRtGEi/view",
  },
  {
    keyword:
      "QAD-W,Purchase Technical Requirements for API 6D Compliant Valve Components.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1s-leEe8ysLm4GDfaZ9B_dZVaoHxRfDp2/view",
  },
  {
    keyword:
      "QAD-W,Written Practice For Documented Program For Training And Certification of Welding Inspection Personnel",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sIib4usrNb2UlKFhpdSJbTBkYhfUVlei/view",
  },
  {
    keyword: "QAD-W,Procedure for Unique ID of Instruments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1loWHx9IL3MYaVJdpvIkVKH39qNCUP2ln/view",
  },
  {
    keyword:
      "QAD-W,Butterfly Valve Fire Test Valve Qualification and Test Report Checklist.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lnsTGdMZfvEppKF7Eory6a0I8RdaZVAI/view",
  },
  {
    keyword: "QAD-W,Valve Qualification Procedure as per API RP 591.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qeG-4wU3KW7qEY1m-JEYajJ_sNlhPcqY/view",
  },
  {
    keyword: "QAD-W,Functional or Pressure Testing - Axial Flow Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1diQ30oueg4hga0ITbWvYdfnE8zJqgEvB/view",
  },
  {
    keyword:
      "QAD-W,Functional-Pressure Testing of Pressure Indepent Control Valve.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZBKMqWMrO14BgIxfPomlIYFWNv-FScqk/view",
  },
  {
    keyword: "QAD-W,Fire Test Valve API 6FA.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KH9Rruaf2qh3ZkL4UrL5nzfz9whjfUnn/view",
  },
  {
    keyword: "QAD-W,Periodical Verification of Test Bar Sample for Castings",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qBZKUBAvxsUNBVBudu2Q84txi0ZrCY8V/view",
  },
  {
    keyword: "PUR-W,Competent Authority.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18PrqneAytb_kU9u1EbdaQI4HMmJdwsv6/view",
  },
  {
    keyword: "PUR-W,Guideline for Import of Goods",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WMPOXq2XZBbKsn5ol7V4epRTvBvZSP1k/view",
  },
  {
    keyword: "PUR-W,Pattern Management System.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11zUmXztURGpoSxWYatxP8VEt2ShCkGog/view?usp=sharing",
  },
  {
    keyword:
      "STR-W,Preservation and Shelf Life Items and Control of Welding Consumables.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1D62td9xYCgHrDEIB-aPH7688Cucd_1yS/view",
  },
  {
    keyword:
      "STR-W,Packing, Shipping, Handeling, Storage, Preservtion, Procedure, for Overseas Shipments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12HQ5vFPkaY7cW8A5hwFFM1GeP84Ph1KS/view",
  },
  {
    keyword: "STR-W,Long Term Preservation Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sQP0ctCgMrOO_FFuXdIW0TqH92gzIHnt/view",
  },
  {
    keyword: "STR-W,_Handling and Storage of Flamable ,Hazardous Items",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dvRmukUgUTJ10VlL6Q9RWnlg14-DTDFY/view",
  },
  {
    keyword: "STR-W,Packing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12ukb-hSGg-NAHQxiKD4ObL7IIBNomuQG/view",
  },
  {
    keyword: "STR-W, Procedure for Paint Storage.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1b4HyoW3UNfqfmxAZhspIG8eQuV0BE12b/view",
  },
  {
    keyword: "STR-W,Procedure on Indentification & Tracibility.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RW30Hdb4YYmqqwZknlx0ghzGylb41cqj/view",
  },
  {
    keyword: "IT-W,Work Instruction for Backup and Recovery.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15uJ_uPUZSaOxZmZU9CjQC0DTG6B5ZOCj/view",
  },
  {
    keyword: "MNT-W,Air Compressor Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DY4vebWMrW8t9T-Mbh1dWNsMs02dmONx/view",
  },
  {
    keyword: "MNT-W,Lathe Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1E-cyQcY3xyYniNDiMVBZEZJdlq9Lh87F/view",
  },
  {
    keyword: "MNT-W,Milling Machine Maintenance.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BxZqjyXD-3hbYEwKg0Wt9IJOTnFVuyHK/view",
  },
  {
    keyword: "MNT-W,Drilling Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wjKDupKUtTw_Eff5QN9tQqFfJbBFxTnM/view",
  },
  {
    keyword: "MNT-W,Generator Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/19FBSq8I2Uw1yqbgMh8OuD1gi_JAlr4OJ/view",
  },
  {
    keyword: "MNT-W,VTL Machine Maintenance.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/10Er-yhQjjIKd15HKBNLYfJpbg6L6qwHP/view",
  },
  {
    keyword: "MNT-W,Boring Machine.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Qs6TXEnOwjEGEHnGaxrsIa_rCtN64zEy/view",
  },
  {
    keyword: "MNT-W,Hydraulic Test Bed Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VCyhYi6TWY5gPfrkeMQ9ufVYyq9zBePq/view",
  },
  {
    keyword: "MNT-W,Welding Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1NxlZZzk-nFg-zrxFPX1NBPBNuvIoKVKk/view",
  },
  {
    keyword: "MNT-W,Surface grinder Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZQWlbbhfqJZwDfV2HIK345XTK4wbdK58/view",
  },
  {
    keyword: "MNT-W,CNC Machine Maintenance.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1LmU4ajqGazqziKtytB7ID906mdcmxtAj/view",
  },
  {
    keyword: "MNT-W,Shot Blasting Maintenance.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Intxbd9cEh9ulLpbq_qcuSFhgCMTxG6X/view",
  },
  {
    keyword: "MNT-W,Slotting Machine Maintenance.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sXCZwpAEmBfP6dw2aKYgdGpndQPHrAab/view",
  },
  {
    keyword: "MNT-W,Shaper Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XJwKkClnUEzXjXJDbz8FcTFnhEPV87g_/view",
  },
  {
    keyword: "BSV-SYS-W, Valve Recall or Withdrawal Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZVZRfpBaDhOt7CcvkYJYnZ0Hm6xVW6XL/view?usp=drive_link",
  },
  {
    keyword: "BSV-QAD,Quality Objectives - Quality",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1S6GbNl0Auz-oFz0KndlLhffsLBgsEfwz/view?usp=share_link",
  },
  {
    keyword: "BSV-QAD,Functional or Pressure Testing - Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rhgm0uw9OfccKetyUiHKo5eS-Q7j7uIa/view",
  },
  {
    keyword: "BSV-QAD,Functional or Pressure Testing - Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1igQRPlyW-gC_s66W2pq3L08IfdOE9O6A/view",
  },
  {
    keyword: "BSV-QAD,Functional / Pressure Testing - Screwed Balancing Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1W1hcnc8Jzi7k1QAOsFWMTyY0sLOCTBDP/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD, Radiography Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/19urzevARiB78da4RmcNyd-xalltRys6i/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Ultrasonic Testing Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13LTS6zQyVsMacsmBY3hqwXf8uuSMfKXt/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Liquid Penetrant Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AsiMttDtuGrdRsiItIKxro-cS-X180bb/view?usp=drive_link",
  },
  {
    keyword: "BSV-QAD,Magnetic Particle Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1kPhctxYEIdJhCeXQXibVLP8903TFNyND/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Positive Material Identification",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ybju7Zk-yourZchJtSeKr0xEbo7_XmtT/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Rubber Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vDWEZgH5nG7HP-O5wfS3_8yboTN_d14E/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Cleaning Procedure of Valves for Oxygen Service",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OHMVGkbk9vg-OxaE-o9e-iVyddqQOMtb/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Cryogenic / Low Temperature Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wuSjvOY7rO7ljtdZhlfQ23B1VOJHYqfC/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD, Casting for CE Marking Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/19h-fvgrrwjchZh0YqrASxrhzBGC6Z7NI/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Heat Treatment of Springs for Dual Plate Check Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1eapRyIddH4D_BsMIhK34dkz-HmpSSzrG/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Heat Treatment of Valve Components",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1e7oS9N_5xKsIpxIQDzLxsRFAqqWNt4tS/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Hardness Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ut7ay1XUMFom5M2aTe1t7tYnguLs8bAg/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD,Cycle Testing Procedure for Springs of Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ViaV7TvPOlR6clcQ_cRVQT0Sf8RqzRHN/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD, Colour Coding",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XZRNiyX4Y8TrBgTD7-HejU7T1ika9D-v/view",
  },
  {
    keyword: "BSV-QAD, Flanged Balancing Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Hg1x0TepRIavAGrhx67x19qJwzI0oBMb/view?usp=share_link",
  },
  {
    keyword: "BSV-QAD,EPDM Coating Procedure on Disc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/173rbeJOnKFd5Zhzk8ovb1UverpVxhcI_/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD, Testing Procedure for Validation for ENP Coating",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1YGalf_qu1pAVlUOn1qunaKB0N4xqxOi2/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Salt Contamination Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1k0VaKv4jR2oQnQndf0suaZfCAmtvNsVs/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Written Practice for NDT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dbyU_trYK2OBquPFBTgPvpDspnBK9Cir/view?usp=drive_link",
  },
  {
    keyword: "BSV-QAD, Visual Inspection",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AyLhaa3e0l9nCXm79sA-oAnifwKT4gWH/view?usp=drive_link",
  },
  {
    keyword: "BSV-QAD, Post Weld Heat Treatment of Valve Components",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1v5p1_nlQzQ90WKurvkyOKgh8S99Pwjm7/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Repair Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OuyLHhMxR3bGuWqIFhrhLxgOTPhlxc-E/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Welding Material Handling Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1TMFpaRSalAY7aib1XrGhm0J4ltJOUsVg/view?usp=share_link",
  },
  {
    keyword: "BSV-QAD,Pickling & Passivation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1r8fmUmSS8Q_8NciJWgDw3hNUgnCrUWt1/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD,Cleaning Procedure of Valves for Air Separation Unit (ASU)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QaDSqUhokRt5Fee8837LsghSibXUU2Ca/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Casting Inspection Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1C7IwIFjoxS9j6eh-k9ExRHU2QGqHspIE/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Calibration Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1uNwP1pYdtCkxUOLeFf-xJVonoPTY_9AJ/view?usp=sharing",
  },
  {
    keyword:
      "BSV-QAD,Procedure for Qualification of Heat-Treating Equipment (Furnaces)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1kx0Z4n9DWiCrx71zORiG-0dZ586w1fZJ/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Written Practice for Documented Program for Training",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15nH82-UmRlRu4ZMWntf_PNFqgrD72pwq/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Unique ID of Instruments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aFym7ZGBLm97UZYgSEGPWu0FI-GE_c4E/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Valve Qualification Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1en2qcDuyh_XgqbpW6NXGVx6YdxOXFH0e/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Functional / Pressure Testing Procedure - PICV",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Ik5Z0AjMh3TVe6UzCiCIlbmOQDU8OVmU/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,Fire Test Valve API 6FA",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vykcL_vAOLUb9eaZYIhNNEdekyOrtp4H/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD,YS Testing Work Instruction",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1p-t4YMMVEbORmVOtAUOYuhuZI9VeW-7X/view",
  },
  {
    keyword: "BSV-QAD,Pressure Testing Procedure – Large Flanged",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1u1nxGQmNhIjsUcg38lvIX1EJ3XZFWrGI/view",
  },
  {
    keyword: "MKT-W,Preparation of the Sales order cum Order Acceptance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1deOetRFnoqTR6u-qK3wl8Vq8EzMZVsC7/view?usp=sharing",
  },
  {
    keyword: "MKT-W,Control of Client Documents & Data",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wNqAMaObxZrK4u-hGDG8Cy6KpXKluZFj/view?usp=sharing",
  },
  {
    keyword: "MKT-W,Issue 01 Rev.00 11-Oct-2021 Servicing of Valves at Site",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1upOtWXNCxDdaWD_Q9ZWCUgNAXo21BVmW/view?usp=sharing",
  },
  {
    keyword: "BSV-SLS, Preparation of The Sales Invoice",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zPkRoit2S9yc3XQF1nZ9unP0umSVgfv5/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SLS,W,Packing, Shipping, Handling, Storage & Preservation Procedure for Overseas Shipments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WC2dsUvOeY8ciHDUnYFV58syRWLjK_Tm/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Drawing Numbering System",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Ph69I4J9Mbr15eKvLp0Elav_0whvgK3h/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Guidelines for Castings for Prototype",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xh8W3u6huaLDtBhG--lB2vtrhevtRhM-/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Design & Development Review Process",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XINnQVOyfJSUKt9WY0lUzaX3TLpkwHo-/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG, Design Concept Dual Plate Check Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Lr-hTx01kwAz5-lUY2vr-nasik2Rx1Ts/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG, Design Concept Concentric Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rBkVSKarEVdPXIuY6aJKRLbmbNieTwtA/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Design Concept Double Offset Butterfly Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wJbfuu316G4zCLnEWPH1Z5zJmTcm0fDM/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG, Creation & Checking of GADs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1gJSStesJGhATmbTDUBg-nl2eie5bqqzk/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Reference Elastomer Suitability Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11ftngLCEGOHpML-lyqOmfKfirdpnLqgb/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Selection of Elastomer material",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yG_suEf9YUzKr5RH8-Gd4IJ5_fM1VNGO/view?usp=share_link",
  },
  {
    keyword: "BSV-DSG,Dual Plate Check Valve Sizing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rREzACuvrTaNBtI9-IRxoAW075DdfZxH/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Unspecified Machining Tolerances on Engineering Drawings",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DTynkIdAkShUxj1ppPuBq2HHZpIuVxdq/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Design Concept Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XfL4moj5KDLLZYGki-fC-ke-y1wVbiRF/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG,Instructions for Storage, Installation, Operation and Maintenance of Balancing Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1g-FfGCVbf_jZ1ep5jVCSg3yN1opqrSBj/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Design Concept Y-Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DxuLfe9dOKh1HVP1bng22J234EnwV4n1/view?usp=sharing",
  },
  {
    keyword:
      "BSV-DSG,Instructions for Storage, installation, Operation and Maintenance of Y-Strainer",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1r5jYmh4fAj8QnHu4neAYn74-1K66SCZ6/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Design Concept Pre-Insulated Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1kqk8TYgNQdWSaYCaAMCu6WdDzjJ-Msj3/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Marking of Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hZty9IbVHd2rogFzXOeVowA5zWRyFqHY/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Design Outputs for Pressure Independent Control Valve",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PVtLqb4UnhZ95zLwPY6cFN-wRImMFl-4/view?usp=sharing",
  },
  {
    keyword: "BSV-DSG,Specifications & Marking for UL listed Butterfly Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AuqV3Pd-8Aewrz9u2AI_DyWo-7_8aWg1/view?usp=sharing",
  },
  {
    keyword: 'BSV-DSG,Marking for "CE" Marking Valves',
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/151PXkhVOXg9-ympLGSlYWyvxgkvDof2k/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR,Purchase Competent Authority",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rfQBVxd-ctA4IUeFVGt6myuuiLWqutvI/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR,Guidelines for Import of Goods",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zMaO_vDwQU2QSlKKqlUGyjDvn-1A68cp/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR,Pattern Management System",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1P89F4AL2y14y4WdHJEnxaqDym9ygmvBq/view?usp=sharing",
  },
  {
    keyword: "BSV-PUR,Procedure for Tag Numbers & Batch Nos. of Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RM1Spd8fEUM3khAUuI4T3ACjVVu2QMJf/view?usp=sharing",
  },
  {
    keyword:
      "BSV-STR,Preservation and Shelf Life Items and Control of Welding Consumables",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Pk4W6R8lu0aypvkQzyw2uytYjZuQ5oaK/view?usp=share_link",
  },
  {
    keyword: "BSV-STR,Long Term Preservation Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QMcBvKEEvJPlkiVnwQ7rS0w72vuFqpPo/view?usp=drive_link",
  },
  {
    keyword: "BSV-STR,Handling Storing Flammable Hazardous Items",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Iqog7DfYtkl8gugXBkuagmqmO5qnN-rw/view?usp=share_link",
  },
  {
    keyword: "BSV-STR,Procedure of Paint Storage",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Bh1yePIkOdRW3qLHvWmTzra4aUtUmta2/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-STR,Procedure on Identification & Traceability during Storage and Preservation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tqdxeq25S2nzCHInR-_G5kVslDJEUKxm/view?usp=sharing",
  },
  {
    keyword: "BSV-IT,Backup & Recovery",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1WulSv0-G78CQP-Lu_V_BorrHpOxp_2EX/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Balancing Valve Assembly - Gun Metal",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OxvCs4C_m-cGoj1cqo5qADrUKfWpKkUx/view?usp=share_link",
  },
  {
    keyword: "BSV-MFG,Balancing Valve Assembly - Cast Iron",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1HGZbLY5jUNL2X3FSLyx0LeubDN4jM-Pu/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG, Butterfly Valve Assembly (Concentric)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1UpK8f04YLAS9qrn35VNQ_fcZPhk-bUAM/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Dual Plate Check Valve Assembly",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1oxGomXeGtRTHrfPe3-fN9JervCaEf8vE/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG, Vulcanization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1y8hr6Jrd3q0SbDQGVXQdx4louw2cHXOW/view?usp=drive_link",
  },
  {
    keyword: "BSV-MFG,Codification of Rubber Chemical",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1D2nfPJnAlCUEZ_STgj0VoT0HGYRV19LT/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Rubber Composition",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1U-VDSRn6YgetZEi-B46imHlcZWhD5AYv/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Electroless Phosphorus Coating Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wmbg_SrR5MU2ZkPmU0M5RL0Po8F_ICl1/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Double Eccentric Butterfly Valve Assembly",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jZGt12GiVo2rP1UZqKiVaMdY1AP9scLg/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Surface Preparation of Casting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1d-lvS_elr0rhiCfglysysx8r_wSi2ZDx/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Electrode Baking",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zzHPfdmnop_5IX7KAbqaFaJRvJ6CWqYX/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG, Welding",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1YZmIgsMB922tXOeTHKrPivUtcMMQVmjv/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Cutting Parameters for Machining Operations",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1iaJGwz2n6AnyZjJDjvf_wnRXPgPJhF2L/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Operation Sequencing for Machining & Welding Processes",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/19Jh7V7jmlTerPZeJVzIwa94qTs2CN5Sw/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Extended Bonnet Assembly of Butterfly Concentric Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DGsJl8gz_y-nux3XenVoSb8iErKtp5hX/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG, Valve Flange Marking and Drilling",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VfsRQHmOmHp31sPC3p1pjfwTYKHv5zIn/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Painting of Steam Jacketed Valves Before Jacketing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1i5odqKaKBNuCywnlhVJPiz0Ziz_J_O_1/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Handling of BOM Drawing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18rinEXBEz0ehTC9JkLijeNHwa1ukcrQN/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG,Nylon Coating",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1G7nZIxm2D4KVC5I4vApwJQ6rXaUIRKdo/view?usp=share_link",
  },
  {
    keyword: "BSV-MFG,Jigs and Fixtures Management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DFHQpBHuUJxBImIekiqG0GfG7Vzu4S49/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG, Pressure Independent Control Valve (PICV) Assembly",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1JUZFRt7HKgBHisX7Jp-zKAm41yav5HDS/view?usp=share_link",
  },
  {
    keyword: "BSV-MFG,Blasting & Painting on Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1z0hK1mWVWgldb_w3oSYuGrn0hrA8wa6m/view?usp=share_link",
  },
  {
    keyword: "BSV-MFG,Pre-Insulation Process on Semi-Finished Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11uRz_-50Dsu6xBlkGyfwmrk3OLzngSqe/view?usp=sharing",
  },
  {
    keyword:
      "BSV-MFG,Work Instruction for Bolt Sequencing & Tightening for Valves.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hhPFFzM7_TNB7sbKVAzG5oSnsC-bJRQu/view?usp=share_link",
  },
  {
    keyword: "BSV-MNT,Air Compressor Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tDm1ssvxaVp5TCww0nWpI-G531dGkG7b/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Lathe Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Clha7GDYOfQhEVDpgLMf_kppExQmR9am/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Milling Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vTEdkSRdoOfFe77KsZSU8TLawnExSkA-/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Drilling Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1vuyji4hg87nGGLEsQ7QB3kYDDYppW5VI/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Generator Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RZeQ3WtQcCCT-WM1pzDAP-sFjWYmY-1K/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT, VTL Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SIzQQe2_5gaEI-RzGUxAO7C84j_jr8HU/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Boring Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/17PPA4AJ6b1ZrlVu2L1yYE70FeuTb9XOT/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Hydraulic Test Bed Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_naIWeq2l_PHSwd2iAfZyH0WexcdbEd4/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Welding Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PJ9qFAMP6UpMd9gQkPeK98XSLeF_RZYZ/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Surface grinder Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11HSimYvd6X-D3jCZ_ybVoOXL3JuZZmjA/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,CNC Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1n2vbnPvm1LhhTFRiN3yVCmv0exzxBGmn/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Shot Blasting Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dtUwKh76XjLm-5NOvHMpNKwcT62d4dgZ/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Slotting Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1mupAUkXdPtzbBUf3pEbjOBFAFGg3inxW/view?usp=sharing",
  },
  {
    keyword: "BSV-MNT,Shaper Machine Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1hWfgE7uQuAIduYCbQ8ezqBKRT1AAMUiT/view?usp=sharing",
  },
  {
    keyword: "OHS-W,Overhead Crane Guidelines",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1fV5YSA8rXLRVBS3Z59oitrFDJtNzaoLG/view?usp=sharing",
  },
  {
    keyword: "OHS-W,Welding Safety Guidelines",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1EBk7NsToQnh6xyPLgmTfu9o2uWhMe4Np/view?usp=sharing",
  },
  {
    keyword: "OHS-W, Painting & Grit Blasting Safety Guidelines",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yKRFt0P7EstG5XA-qVotrOHFMCk2asxF/view?usp=sharing",
  },
  {
    keyword: "OHS-W,Testing Safety",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GaecUcd-cATTdC_wjMirCdJJCmr9MhOZ/view?usp=sharing",
  },
  {
    keyword: "OHS-W,Fitness Guidelines for Office Executives",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zlmt9PuzMxd4ris34Lrjd7W1qIrHPS-k/view?usp=sharing",
  },
  {
    keyword: "Leave Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11FefnJgVMJb6Uq-ZNfYDWEfggASJ31SG/view?usp=drive_link",
  },
  {
    keyword: "Tour Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xzEQOny1lxp8cj4Sm4apxUSwK2ai53iR/view?usp=drive_link",
  },
  {
    keyword: "Employee Referral Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1pbgjXHMAN3fVgNvg8hgPzDQJJoCTrIl_/view?usp=drive_link",
  },
  {
    keyword: "Local Conveyance Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16JMDUFGmuwJEHvaqPNhGF0VJh5viL4hb/view?usp=drive_link",
  },
  {
    keyword: "Office Timing Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11FefnJgVMJb6Uq-ZNfYDWEfggASJ31SG/view?usp=drive_link",
  },
  {
    keyword: "Mobile Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1bLV8ZlQ5AWEgIM_Y_8IDldPRI2SNu8Y3/view?usp=drive_link",
  },
  {
    keyword: "SYS-P,Management Review.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zcYBxCHPgToItQVuLhcXeX5DWdM1VOTA/view",
  },
  {
    keyword: "SYS-P,Internal Audit",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1g2bkabxMxxYGDyt6CENR1ZWAXvTs65St/view",
  },
  {
    keyword: "SYS-P,Control of Internal Documents.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1__CEsRU3hSh0v1hk4uDgmfeY1FcrNQ5D/view",
  },
  {
    keyword: "SYS-P,Control of Records.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1w-UVYuxUGppwthqYvqYsPU3dbB66mx6I/view",
  },
  {
    keyword: "SYS-P,Analysis of Data.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZJcxi5oWEes_rbGZDRN7-QJAtiCiZFUZ/view",
  },
  {
    keyword: "SYS-P,Management of Change",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nz2udEhkEmVemTJqTAZiDTPyesQZ5532/view",
  },
  {
    keyword: "SYS-P,Corrective Action",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zFtXv-KL6bRaAcD2cFMarQbKprhJ7E0J/view",
  },
  {
    keyword: "SYS-P,Opportunity for improvement.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/133hxgu_Jk8BpStZfvAn8z4HLrQV-BaJY/view",
  },
  {
    keyword: "BSV-SYS,Management Review",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1eIhKuPV_TZEyfy8_-gP1Ev-mg2YigI5Z/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS,Internal Audit",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1C9PaKHpydPTubTx_9TcvePR35TSX_yK6/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS, Control of Documents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1O377V-dlnwtXxQyLB9Bfabuyg2zM4oMI/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS,Control of Records",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XV7C1SatL_HYcyGOfSYdlhikdauQeLkC/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS,Analysis of Data",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MsNKbYLya-r6nfOO_Xl2JNrDR9ykGmsE/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS,Management of Change",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1uLUsBaTAurXV6iStiFHcMHmpPvxB7cvj/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS,Corrective Action",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rGxZGf8KnUfVflSa3zk4bXQRg-j3z-qD/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS,Preventive Action",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1-lN0nZPR8gB25fXR2zslOnhiAo7vVoXo/view?usp=sharing",
  },
  {
    keyword:
      "SYS-F,Internal Audit Check list cum observation Report for TM or MR.docx",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1PHh9w9qAT7ZxpQ29HfYdSPfv_BIDO3xk/view",
  },
  {
    keyword:
      "SYS-F,nternal Audit Check list cum observation Report for Design.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1YX_j222Cy5CalbAnuPRwl0XvRH0UBKlr/view",
  },
  {
    keyword:
      "SYS-F,Internal Audit Check list cum observation Report for Marketing.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1TKpBkHMLCz-jE3wQI-DQBnTYQ7mCVZgg/view",
  },
  {
    keyword:
      "SYS-F,Internal Audit Check list cum observation Report for Purchase.docx",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/10aDcWDlXQLlRuTTeCKDi9UeYHyV97dr7/view",
  },
  {
    keyword:
      "SYS-F,Internal Audit Check list cum observation Report for Production.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18AFjpVECvu21zoiD_Q1LvcvM8QttLNUF/view",
  },
  {
    keyword: "SYS-F,Internal Audit Check list cum observation Report for QA",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yYz8IVJ6ICEnHLbhkux4e1w_aRPjblYX/view",
  },
  {
    keyword: "SYS-F,Internal Audit Check list cum observation Report for Store",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1T0_w0VcGbMxTWOXkg7fB_OqNo8XVgT-7/view",
  },
  {
    keyword: "SYS-F,Internal Audit Check list cum observation Report for C&PM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13uejkKPxSWKu00gqE7M0Xlv3Vu2g3u--/view",
  },
  {
    keyword:
      "SYS-F,Internal Audit Check list cum observation Report for Maintenance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1X2-bNRganijqrUNtkRYm8XtyAahqewy6/view",
  },
  {
    keyword: "SYS-F,Internal Audit Check list cum observation Report for IT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Zjpd2iESTkx-L1wI-SjatYFrR2xQe-ks/view",
  },
  {
    keyword: "SYS-F,Internal Audit Check list cum observation Report for HR.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1mtZNgmj0qQgJ6995A53LOxfb6g0obqhD/view",
  },
  {
    keyword: "SYS-F,_Case Study on Root Cause Analysis.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1p5EcgefXQXLAnsO4jQJvv2TL3bjSPkGM/view",
  },
  {
    keyword: "SYS-F,Internal audit NC summary report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1daOZrHHWbCAFwq60weZ5Q_q40VM0LhfA/view",
  },
  {
    keyword: "SYS-F,Filing Maintenance, Storage & Disposal of Records",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MiItjRXTE3C-1ZlXLPZ1C4FfiLkHYF1z/view",
  },
  {
    keyword: "SYS-F,_Internal Audit Non-Conformance Report Sheet(Responses).",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/140EA8DSVqrjOgBnxb7hajk8NV4c2-6N_/view",
  },
  {
    keyword: "SYS-F,Internal Document Change Request.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18ihS5D6vN1YQVUO8h-QALAnXjtkQCEnI/view",
  },
  {
    keyword: "SYS-F,Internal Audit Schedule Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1LqYAOqmydQ_TodlwPmA6_TCrsnVcKl3u/view",
  },
  {
    keyword: "SYS-F,Internal Audit Plan.doc",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15HdPNzhiz_KDbEBIXl3bCXMbidMg1j1c/view",
  },
  {
    keyword: "SYS-F,Document Release cum Amendment Note",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Z2qhALO8zDTke-SSpgCDIItapNgCTIRC/view",
  },
  {
    keyword: "SYS-F,Minutes of Management Review Meeting.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1pZ2zaksz2Sa3ADkUfF51nX8pulqCjXEe/view",
  },
  {
    keyword: "SYS-F,Preventive Action Report.docx",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1deF73llRlfcb62V6VaH8C5_5TWalNJtO/view",
  },
  {
    keyword: "SYS-F,Table of Contents.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1BjK6wOsOX27BGvXlY16KY1x2LZ7emsJT/view",
  },
  {
    keyword: "SYS-F,Management of Change Form.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18vdS9slrd-kR_RWpvhOOeNOliQUFpBI1/view",
  },
  {
    keyword: "SYS-F,Internal Audit Non-Conformance Report.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1HSjVyJr2MXmvwEfaQtS5wQm5imwfZCg-/view",
  },
  {
    keyword: "SYS-F,Trac ... for Potential Non-Conformities & OFI",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MQkyQXbujh24pJO7NBeHOvCEatgxMQ9N/view",
  },
  {
    keyword: "SYS-F,Review & Updation of Quality Certification",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1y-k_-D-d6u5-L-alEMSTbLNJz7b1iwML/view",
  },
  {
    keyword: "SYS-F,Master List of Documents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1D6Uo8WcCpcHYiZs6zSwGDPHtopR9dsvL/view",
  },
  {
    keyword: "SYS-F,Quality Objectives Achievement Repor",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1cZUBuhBzz-CUPapjaVJwcrhF3sx8g6Pa/view",
  },
  {
    keyword: "SYS-F,List of Internal Quality Auditors.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1VSxieNSMbuLO23CSD3_RvJR3SnUXMtzp/view",
  },
  {
    keyword: "SYS-F,Summary Assessment of Effectiveness of QMS for MRM Minutes",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ul_L7tXJoXBoy7T76_WXGZSP7ic6FLdJ/view",
  },
  {
    keyword: "SYS-F,Minutes of Meeting.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1emYTnJ_i2X_44h-Psm7E9h-oEQCsO-Pd/view",
  },
  {
    keyword: "SYS-F,Management Of Change Register.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dpgF39jaolu7ko8O4-svUgy4cLgpS7ql/view",
  },
  {
    keyword:
      "SYS-F,List of Support Services - Transport Facility, Communication & Information System.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/19hlEqFmHUaaWJFRfFexPzj6SRvguJyqh/view",
  },
  {
    keyword:
      "SYS-F,Internal Audit Check List for Outsourced Vendors During Product Realization Activity",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1h3xRwx2yyKVAugpq9L3pRGNCwOUG4YjJ/view",
  },
  {
    keyword: "SYS-F,Document Release cum Amendment Note Sheet (Responses)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1CXNOBFwkwb1ZrRrPQBVqa-65roiyqCn7/view",
  },
  {
    keyword: "SYS-F,Case Study on Root Cause Analysis Sheet (Responses)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QIfCzIjU3uBsWkJMxeUVGx5Wdm0H6g7o/view",
  },
  {
    keyword: "SYS-F,Feedback form for Certification Body.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1t0YMxzTJz79ZZxU3tS2p9VBJ1RQXxtZt/view",
  },
  {
    keyword: "SYS-F,Feedback for Certification Body (Responses)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/130qErDeUebfuanerRXEjM-0vAqmw8lo4/view",
  },
  {
    keyword: "SYS-F,Opportunity for improvement form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xPo5QziR9Pfb2GkaLWk5EuU4iFIsrltD/view",
  },
  {
    keyword: "SYS-F,Opportunity For improvement response.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zf2qEV2QbQ_CfR3aeTXNOfomjDYYIfNo/view",
  },
  {
    keyword: "BSV-SYS-F,Case Study Root Cause Analysis",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/139rKJ_3Lhxe-TXeuRhVC_E0ZxPnZsl9s/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-F,Internal audit NC summary report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/10BJtLXfc_5aKc0CfQwkYmfX_it0h7hrM/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Filing Maintenance, Storage & Disposal of Records",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1NpYN8T4oAvr_prQgwMm07qOBYeVIeT6_/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F,Internal Audit Non-Conformance Report Sheet (Responses)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1aHjB0ibuEMl0--oqfr0yBz4OsZEEOQ2i/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Internal Document Change Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1kc83to_-TtiYMoWG7dsxXLAyBw6BY3bP/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F, Internal Audit Schedule Repor",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1ivC7he6-ELzMjSxkn7jOR_P-OOgLv2Zg/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Internal Audit Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/14AK5RFryYPoVQURAm8S9_792OUag6seG/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Document Release Cum Amendment Note.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KMWxcNEjv44wB42DolEmwFV9VcxGal-4/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-F,Minutes of Management Review Meeting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1CQG93sHfTEinJ6J5jhR6vgSghiPrrjQI/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Preventive Action Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1BoGe79Ihd5xMHt7wefWaoOLSJQfqgCD5/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Table of Contents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1DYOYTe0CvRSW8DkSQjC0qncB6ZWskxB6/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Management of Change Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1n3Gg3bVnielQzsHIR4BB0gTJpTn7Zx4x/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-F,internal Audit Non Conformance Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XYSpilVvB3KdBOj0wCWHph3OGWyAQMzk/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-F,Tracking Sheet for Potential Non-Conformities & OFI",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1eCF9ZOv_UbfixOXC9aRIuYW0h7RwgIxM/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Review & Updation of Quality Certification",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1RAWPywiX4ICba6atdUYIuAaHLNfbiaz4/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Master List of Documents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1-ZyxjEPotk-gjOmstzKd0djlzmmnsCnB/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,List of Internal Quality Auditors",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1W31ZDJERL96iN09X7tTrvgWYb1GtLZeM/edit?usp=sharing&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F,Summary assessment on Effectiveness of QMS for MRM Minutes",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1hYgroJzdIEQ5ELZzp2ll8GbpFTwWeUja/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Minutes of Meeting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1a4yn6oB6DOQ6sx_AGbp7qUAUmEDdmR2a/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,MOC Register",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1valikXhSrAaHrHX9ZaWTaISspIsG6BV-/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-F,List of Support Services - Transport, Communication Facility",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/13yo1phHqsIS8Ph652KniJ1aTg4sYcmCe/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F,nternal Audit Check List for Outsourced Vendors during Product Realization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1BJYqHSQjraKHMJ7nVjKVa9Vf3qX32U33/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F,Internal Audit Check List cum Observation Report for Sales",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1ScHJZCL8gYWlne0c9ACFt1G_IH3RQh2d/edit?usp=sharing&ouid=104093898328100264293&rtpof=true&sd=true",
  },
  {
    keyword:
      "BSV-SYS-F,Document Release cum Amendment Note Sheet (Responses).xlsx",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1efn-ALJK62qyBYyM8f773xFzBufhPgaD/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Case Study on Root Cause Analysis Sheet (Responses)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1dSp688zPe_JMmpkg-bj6ZYgcPGhPyYxt/edit?usp=drive_link&ouid=113868542277431664471&rtpof=true&sd=true",
  },
  {
    keyword: "BSV-SYS-F,Opportunity for improvement form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zygiDvufrEJ_1X6dBdP0UKQHyCWG_Kfp/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-F,Opportunity For improvement response",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1nAdjA6khv5gkkMUMLTd67dRj3gRVW_4X/view",
  },
  {
    keyword: "SYS-C,Quality Objective Chart.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1oi01ZL4-YSLoHSMiLqonwDk13zKHoKwu/view",
  },
  {
    keyword: "SYS-C,Communication Control Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lPEU6_vmpqhfOuuQg0sT3mfzLBHCAVp_/view",
  },
  {
    keyword: "SYS-C,Company Organogram for Industrial Valves",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_sxgpmMLYgNuffH7w-Non4Sd9UKw7CgW/view",
  },
  {
    keyword: "SYS-C,Scope of QMS or Certification.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RQ101O-tyzzK0-mBIqRVeikR2Hvjzruj/view",
  },
  {
    keyword: "SYS-C,Needs & Expectations of Interested Parties+Swot",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tACfccypx-aANUWou9M_rL_ovseCqkXq/view",
  },
  {
    keyword:
      "SYS-C,Master list of Building, Work Sspace and Associated Utilities.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1G44J0tnkWugZ7WLld0yCUlEDdaD8pUCl/view",
  },
  {
    keyword: "BSV-SYS-C,Quality Objectives Chart",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1OLiHskOM6OCDEBLcvsbupeJDk1Z7yOmS/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-C,Communication Control Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XhFVr3bEoWzUMVkX3bOyL8HKXYAKQxfK/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-C,Company Organogram for Building Service Vertical",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1L_nIrCmMoVZTcdpv4uT_Ou1Jlttu8jCc/view?usp=drive_link",
  },
  {
    keyword: "BSV-SYS-C,Scope of QMS or Certification",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1286JM8Ek3pnem-_tTl8ZXHb7CwcHL8B_/view",
  },
  {
    keyword: "BSV-SYS-C,Needs & Expectations of Interested Parties",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_ogeYbuPInIw9rPm17_oFT_g2UJkDrbt/view?usp=sharing",
  },
  {
    keyword:
      "BSV-SYS-C, Master list of Building Work Space and Associated Utilities",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1lMvY_13tleL7gztxNJxrOEW3RyGOTmvM/view?usp=share_link",
  },
  {
    keyword:
      "BSV-SYS-C,Guidelines for QRL Identification based on Customer Specifications",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1EPTyIpK3koKuR9IU2TDLsHDHvEUC4euF/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-C, PFD for Customer Work Orders",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DC_87B_H68J1gtoqh7lF6ZmANSKv6R-L/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-C,PFD for Stock Work Orders - QRL 2, 3 and 4",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/17WBgw35lIDbqh3KZcCrVSUl20GtRqhdV/view?usp=sharing",
  },
  {
    keyword: "BSV-SYS-C,Details of Patents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1dGSYXaQQCMscLrHJHa4QWy4fsm_8YXGm/view?usp=sharing",
  },
  {
    keyword: "SYS-W,Valve Withdrawal or Recall Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/135xy42ySGkVvP_hlOswqaH0Dl556Z0rf/view",
  },
  {
    keyword: "AVG-M,Quality Manual.pdf",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DAy4Q320JG5H4UQH1x7ma2DhPbULD2uP/view",
  },
  {
    keyword: "BSV-M,Quality Manual",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1xkxM0eIM3_WINgPN8GO0qZzsibAXG1U2/view?usp=share_link",
  },
  {
    keyword: "OHS-M,OHS Manual",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14_jfx16aV93tkUZgEcp4FJEHH9TNgqbn/view?usp=sharing",
  },
  {
    keyword: "Mobile Request Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfeGgaQnrk6OYV57OWirUGP3MotdozszEZAJlEHq4GL_wGgng/viewform",
  },
  {
    keyword: "RFC - Noida",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeqwT6cmg97WMGxrS-EUV0zLp6kdgKsfp8Z_6jLl6PDdNVcsA/viewform",
  },
  {
    keyword: "RFC - Gagret",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfqP5Wfq0c75BwC8cku09LYKrf7MswRUUrsILknZcagrX65Eg/viewform",
  },
  {
    keyword: "Advance Tour Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFTcJres5apUXH3pT4XOWJtmUat1IGcUfX8swMR9aFy3LBrQ/viewform",
  },
  {
    keyword: "Trainier Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdwo1UkCCu8qtEON_rKza83iw-WIm0pKu1knqz5eqlJgiCyzg/viewform",
  },
  {
    keyword: "Training Attendance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfk5lK6yW_bouxeCMiE0Rn5F5qG_OWcEXAk4x0XFurAD83bAg/viewform",
  },
  {
    keyword: "Training cum Action Effectiveness",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeM2bQk-qRs0L0tyqx1RzPfvbUpSJAg3iR2HKpjAusUPrUusg/viewform",
  },
  {
    keyword: "Employee Reference Information",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/employee-reference-information",
  },
  {
    keyword: "Kaizen Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSebPUrwCHFfr_-fXDHTKtGIc00QDmVNQMCXGLP3Deecb-Osjg/viewform",
  },
  {
    keyword: "Kaizen SOPs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1JAaNQFTE5XpXFFQ42Uw_Bk87FYATpco9/view?usp=drive_link",
  },
  {
    keyword: "Resource Deployment Form (Staff)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdrYjOAP37xEO4VQ0Vd6yGzDgDrevm285eu4kKtdI1ARibWMQ/viewform",
  },
  {
    keyword: "Resource Deployment Form (Workers)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeHEnJPgm4v0pcvVj2UdfqsGAjRWh9Y5ow90kSSTj7bL2et5A/viewform",
  },
  {
    keyword: "Resource Deployment Form (HODs)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/e/1FAIpQLSfJ-kiP6uPN2MqN1mDnEtVrmeWq19f8jnxnF2ivt7szjMoBLA/viewform",
  },
  {
    keyword: "Holidays List",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1R_ebvd2-S2a8hMF58GJ8ommMbDhxebnj/view",
  },
  {
    keyword: "internal phone extension list",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1k4cOruvN6giWU2M7Kyxrn-WvaEzGmNsWp0gVCXVzVbA/edit#gid=235872177",
  },
  {
    keyword: "HOD Area",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/advancevalves.com/moc/home",
  },
  {
    keyword: "DSG-P,Design and Development",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1bnYNG37wgYnzBHxTUG_jY8VBQa-PXR9V/view",
  },
  {
    keyword:
      "DSG-P,Control and use of External Documents in Product Realization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1mbymgiwTSSZS-vBdCXeplqo2wtlQMZn4/view",
  },
  {
    keyword: "MKT-P,Contract Review.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1yXesHboavCmj6YPUSyfeXnfuIoT2-lkT/view",
  },
  {
    keyword: "MKT-P,Customer Satisfaction Measurement.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/15FLSdHpXg_1RpG6av0tUmAWwQonL_bcg/view",
  },
  {
    keyword: "MKT-P,Externally Owned Property.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/10HH8HPtoCQCLlJmxciojO-ZA9BiKelzC/view",
  },
  {
    keyword: "MKT-P,Servicing of Products",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1E0MVJMhprXQJimqG577mRgSvu8_KLah6/view",
  },
  {
    keyword: "QAD-P,Inspection, Testing & Verification.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1v5McFDOG1qUvQ25vNXXt-_WKADeRn7ea/view",
  },
  {
    keyword: "QAD-P,Verification of Purchased Products & Activities",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Q_qEE9ffti6jtHpHhOh0HTEfSEArBFtY/view",
  },
  {
    keyword: "QAD-P,Identification and Traceability Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MAMsm1TZNKoYZS50BUVCEd07-sR0RIU5/view",
  },
  {
    keyword: "QAD-P,Product Status or Test Status",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1c2PKWCuCP_h8RDuT0C94jYec6m9bBEpd/view",
  },
  {
    keyword: "QAD-P,Validation of Processes",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nomqyml2Nmj9XhvBbK8Y0-hGdonolnda/view",
  },
  {
    keyword: "QAD-P,Product Release.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZsBFkZDP0AUvU7M3xXAC-WK-Hw6fqLZM/view",
  },
  {
    keyword:
      "QAD-P,Control of Testing, Measuring, Monitoring & Detection Equipments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RjNmrWZDY784qTsK4kesZv6BCWzI_3LI/view",
  },
  {
    keyword: "QAD-P,Control of Non-Conforming Products.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1zgWJRtj_8ILoOtW4Z-pFew1tsEujlvSv/view",
  },
  {
    keyword: "QAD-P,Use of API Monogram by Licensee",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ACf9MRty6iVUH-7Z4T_7XjvxTr_kfkU8/view",
  },
  {
    keyword: "PUR-P,Purchase and Outsourcing Processes",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1_1KOWLaa6jmAQCUusSZNMdY3qP9SDuMl/view",
  },
  {
    keyword: "STR-P,Preservation of Product",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18_DCk1XHaUNCzKKC8JZO30givnQ0GybB/view",
  },
  {
    keyword: "HRD-P,Procedure Human Resource Management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1YAZl1abWvU4mEoAW9kStu0jh7j7WGZyN/view",
  },
  {
    keyword: "MFG-P,Control of Product Realization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1jvj7UCfBva7IJEUwSlTv5-Rc9SoTUlnq/view",
  },
  {
    keyword: "PLN-P,Contracts & Project Managemen",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1MX8Nbd_LFExGyhQqWLIYn4JKE2IEylu5/view",
  },
  {
    keyword: "PLN-P,Risk Assessment Management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZNza4HtptpkcF6USOj8shrk0HNCmsf-i/view",
  },
  {
    keyword: "PLN-P,Contengency Planning.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1D40VSVhx_zC6dkhGxWpXOWRZsRO8js2f/view",
  },
  {
    keyword: "IT-P,Procedure.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1crvC_ZQQTxaOWjN3NBYv768QLxvlkjBP/view",
  },
  {
    keyword: "MNT-P,Procedure for Preventive Maintenance of Equipments.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/16fEE7DuD22H9-nFYC1AN4cRJcy1ldd17/view",
  },
  {
    keyword: "BSV-QAD-P,Inspection and Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1kLP-rwAPLLe7hSGAiWwWnG2OjPVgI4Xw/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P,Verification of Purchased Products & Activities",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1RxX0rP9oDiTvHXb_Seb1_A-3JZIulQk2/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P,Identification & Traceability",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18yNrkb2t2ajnWrT9Iv84hBjeV9JABvxW/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P,Product Inspection / Test Status",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ztiI1yTv0Ml_Mlqt5gFAHXl9yo-ACREM/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P,Validation of Processes for Production and Servicing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1nY1WU6f2W3pCj2vlGNnWNOKcFyjT7uAR/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P,Product Release",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1b28Pgj1L4d-kS7SxjvU6ZRwTziHly-Sw/view?usp=share_link",
  },
  {
    keyword: "BSV-QAD-P, Control of Testing, Measuring & Monitoring Equipments",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1E5chCkpaoiXrC-LjAJZy7mtnl9b--6zy/view?usp=sharing",
  },
  {
    keyword: "BSV-QAD-P,Control of Non-conforming Products",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1aH8GMlaRHQp8gYBHwr6Tfg2VBqAKe8wi/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-P,Contract Review",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1f6hpTJKQMVJYxdFmfCuaC8JLZFUcXYSG/view",
  },
  {
    keyword: "BSV-MKT-P,Customer Satisfaction Measurement",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1KoOzxc57iX0kqynhnvXVVgsXGg5yCyYI/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-P, Customer & Suppliers Supplied Property",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1XhDsz5-Kye7eVblA1OlBKnWre7VjBzQu/view?usp=sharing",
  },
  {
    keyword: "BSV-MKT-P,Servicing of Products",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Xe-8MH-V71lxD0u6VMxRigXYOWRrs8rF/view?usp=sharing",
  },
  {
    keyword: "BSV-PLN-P,Contracts & Project Management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1qaWd0MLHWrPQvfdRhFqS46Vgy5fTlx3q/view?usp=drive_link",
  },
  {
    keyword: "BSV-PLN-P,Risk Assessment & Management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1E-d2EqsD2I3ETZUPbaLhViC_-tw6AqZ9/view?usp=drive_link",
  },
  {
    keyword: "BSV-PLN-P,Contingency Planning",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tljv4DiMEE7q5LHopP0ecfzE71DmTI9S/view?usp=drive_link",
  },
  {
    keyword: "BSV-SLS-P,Sales & Dispatch",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ozYgYhaCC4NRRWB4iW4ifPKW7uI7nARm/view?usp=sharing",
  },
  {
    keyword: "BSV-HRD-P,Human Resource Management",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1Y9rqYKBoLT-KpZjZG58lEwo-K1ion8L5/view?usp=drive_link",
  },
  {
    keyword: "BSV-DSG-P, Design and Development",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1wibF-Hn7x8yKaUJDGv60zNaI70CFgSJO/view?usp=drive_link",
  },
  {
    keyword:
      "BSV-DSG-P,Control and Use of External Documents in Product Realization",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1AtDZ6W7qwjdPtdoZKCi4g0DYgjVn5OGX/view?usp=drive_link",
  },
  {
    keyword: "BSV-STR-P,Preservation of Products",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1pqX7btHZtGSpjxmxUvPyg9MJ1T_y33h6/view?usp=sharing",
  },
  {
    keyword: "BSV-IT-P,IT Procedure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1GFGMu2hRJ28ArGAK2CFpKT8tO5yDzMP7/view?usp=sharing",
  },
  {
    keyword: "BSV-MFG-P,Production Process Control",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/117mBJm1XjO-nbZh8RyxxU3mcGLeAm_YI/view?usp=drive_link",
  },
  {
    keyword: "BSV-MNT-P, Preventive Maintenance of Equipment",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1x3Aa8TN3jpTL96KyXULuadUTTJMRhTop/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for OHSMS Planning and Management Review",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1JPPW-aaWUtzvD6-z3hyvuLcQ_CskYuEp/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO, Procedure for OHS Competence Evaluation and Training",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ZikRaOie-gxhMIobWCJWw6LlJ7SFRgoL/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO, Procedure for Consultation and Participation of Workers",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/13t1xQY5CqyxmKPjs5WL6y0sLj9GsjyzU/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO, Procedure for Internal and External Communication",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18jpYqs8xuQl-iywaosVkAn3RwdaUPMPx/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Hazard Identification etc.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1whBKop0d9gJokzFUpk_85d94p3goo_OV/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO, Procedure for Determination and Compliance Evaluation of Legal Requirements",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1pYzjhz_CHCfmNA3gzmEV9wx7ibyixW9R/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Operational Planning and Control",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1UBjAH2dAFYVVvkvOLYlLVVz7KMpwKAqW/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Eliminating Hazards and Reducing OHS Risks",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1M6vqUfLrxYi0qpOicIuUWnfgH1DcwkP2/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Management of Change",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1EY3kMNLnhmamlTwCZwnjCAZ-6QsGpGwV/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO,Procedure for Control of Procurement of Products and Services",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18jKVuOLAqT4Rdjz1VtSL-wbQW5OPa7_8/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Handling of Emergency Situations",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sqNciZbyQGLfiOTjYjE06MfXs9GCCNSO/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO,Procedure for Monitoring, Measurement, Analysis and Evaluation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1QMEYre90W0vLeeRgpwSR2-XVWGuDL_Oj/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO, Procedure for Maintenance and Calibration of Measuring Equipment",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1DB3gLLumZC-QrSBCPn73scOdwnl-7VRJ/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Internal OHSMS Audit",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1o85lWd8sETR_5VQWZVO6ZcbXHe4fp8Sw/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO,Procedure for Incident Investigation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1T624ku_re16-iTBLS07ViyLF2DpABSVn/view?usp=sharing",
  },
  {
    keyword:
      "OHS-PRO,Procedure for Non-conformity Handling and Corrective Action",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1oJicRQ4WOPNx1iL5eu8QKHoAZ8sOMI9Y/view?usp=sharing",
  },
  {
    keyword: "OHS-PRO, Procedure for Management of Documented Information",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1rSVufuAMIhwAk0PvCP5Tm_57S_QVBV2u/view?usp=sharing",
  },
  {
    keyword: "ISO 9001 Noida",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1JJdXLXTtAGWN-sSWOYeVIy0VR8v0sSWK/view",
  },
  {
    keyword: "ISO 9001 Gagret",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1iUuRPJGpvhFPDEQmKM1JqWi9wt0snU9A/view",
  },
  {
    keyword: "API 6D",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12JFm75Rvvc_ZjlioMStoMXrnbP5_YuNr/view",
  },
  {
    keyword: "API 609",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1h49RyyzSfurBr9KgTAGFsGjBFXM2F1Cx/view",
  },
  {
    keyword: "API 594",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ADGMkg97Tcp2-E9qpsaw5wChdhKAYKD1/view",
  },
  {
    keyword: "API 609",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18cuJCHDjdgaObSlFeLD3mGbStnRlXJPo/view",
  },
  {
    keyword: "CE Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1suj2gB8zi9JZAax6X30Lok-TcOGeEQD4/view",
  },
  {
    keyword: "Shell Global Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1tkz1ScCxOQdzQuSsfczyLhTcoLog2g4T/view",
  },
  {
    keyword: "SIL-3 Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1SW0z5hxXmL6de7VxsTiHZEscEScheaV4/view",
  },
  {
    keyword: "UL Certificate",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/12N13J1Ilowv_G3j-kJoPJSxnehTAOOxh/view",
  },
  {
    keyword: "ISO 45001 AVG LLP Plant",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1t86PRs5LndZiififX7yeU-B8EZuDQG6s/view",
  },
  {
    keyword: "ISO 45001 AVPL Noida & AVPL Gagret Plant",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1G5xi_Kxut0n9Ss9nysBTc8kINMFSxuTL/view",
  },
  {
    keyword: "ISO 45001 AVS Plant",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1ffMAeN2X1nFbHZtMGyKxkAx8QtAPT9Ka/view",
  },
  {
    keyword: "HR activity calender",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://www.google.com/calendar/hosted/advancevalves.com/embed?src=advancevalves.com_1r37adbitdcjurgvb6nro9vv4o%40group.calendar.google.com&ctz=Asia/Calcutta&pvttk=5e28cd3901bcef274a3685c7eab67480",
  },
  {
    keyword: "New joinee checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AteH4MsUC3C3dFRHV0Z0c05RbEtMUm83c0JGdW43SXc&hl=en",
  },
  {
    keyword: "Employee department checklist",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AteH4MsUC3C3dFRHV0Z0c05RbEtMUm83c0JGdW43SXc&hl=en",
  },
  {
    keyword: "settlement form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0Am5OGVo2PJdcdDZtVkZNRGkyUUJCVUI5dlVqZWllMXc&hl=en",
  },
  {
    keyword: "annauncement",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1iSF9kLrfz_uOW_w80AuZ9sO0mCoeO8n9YIi8ADa-zXI/edit#heading=h.gjdgxs",
  },
  {
    keyword: "Office timing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/11FefnJgVMJb6Uq-ZNfYDWEfggASJ31SG/view?usp=drive_link",
  },
  {
    keyword: "child labour policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/154zE1WXFwlOzplDDT8RK4r9Xj9yiG5za/view?usp=drive_link",
  },
  {
    keyword: "Social Accountability",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/1sygzSVwLtwy-caB99QK9rBi3DTPtHqcA/view?usp=drive_link",
  },
  {
    keyword: "Human risk",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/18POprlBW3kj71cf4ghBap_UH80EzFCVh/view?usp=drive_link",
  },
  {
    keyword: "Grievance Policy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/file/d/14UNxhRJQpjpi_AwOm8jRqtA3533gQx5P/view?usp=drive_link",
  },
  {
    keyword: "Rapid",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/drive/u/0/folders/10ip13SPJe6U2UzoFJAOzP0_nM5dj5c1r",
  },
  {
    keyword: "Employee Data",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/fileview?id=0B25OGVo2PJdcNDc5YjgzNmItYjE2NS00NGMxLWEwNzQtMjNkOGZkZWU5MmQw&hl=en",
  },
  {
    keyword: "Interviewee Evaluation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ln5eQpwQww2lPqUHbhtVSV7NujrSinyMeiWXQO_AAWY/edit#gid=543205599&vpid=A1",
  },
  {
    keyword: "No Dues",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/Doc?docid=0AdeH4MsUC3C3ZGY0cXI2ODRfNjQ5ajRyZ2No&hl=en",
  },
  {
    keyword: "Transition Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AteH4MsUC3C3dE9BSVBTaHQxTHd4OFNNS1FnRmxVSVE&hl=en",
  },
  {
    keyword: "Appraisal Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/file/d/0Bz9VXyUEqhOeZHRJQnVtTHJ1RFU/edit",
  },
  {
    keyword: "HOD Feedback",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/file/d/0Bz9VXyUEqhOeZHRJQnVtTHJ1RFU/edit",
  },
  {
    keyword: "Self Evaluation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/drive/folders/0Bz9VXyUEqhOeUlJMVUtmQnFUR0U",
  },
  {
    keyword: "Training Cum Effectiveness",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeM2bQk-qRs0L0tyqx1RzPfvbUpSJAg3iR2HKpjAusUPrUusg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628",
  },
  {
    keyword: "Training Feedback",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/1Gy_IGguFy4AAnTdMSqxhXkVmJY8zPI7-Sq9C_0X8xX8/edit",
  },
  {
    keyword: "Backup Strategy",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ApibeLTjVmekdHprTjFUazlRRlR0UTJuQ1hKNUg5WGc&authkey=CO-EzfkG&authkey=CO-EzfkG#gid=0",
  },
  {
    keyword: "MOC",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldFg5V1lHMFd6Y0FkYTFPNWVzYlprdmc#gid=0",
  },
  {
    keyword: "Master sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AtFUTpXGAKQGdF9fd2RXOEphZzAzZXV3OGZTQWpWQ3c#gid=3",
  },
  {
    keyword: "New Machine Installation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AhSExRIIZ2eldFBERlVaR2hSWEZaMzRXanBVdmltX0E#gid=0",
  },
  {
    keyword: "List of Software",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ApdA1zbxOuQvdGUxV0YzZU5kaEtibzZIeUlZX0NyekE&usp=sharing",
  },
  {
    keyword: "Computer H/w Parts",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1j4LthBy-vXinr-RnFYeD2dRtslwGg1gD8tk88cwMU28/edit?usp=sharing",
  },
  {
    keyword: "List of Hardware Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AhSExRIIZ2eldFJoMWgyVnVoamwzUHBydThZV2V0WGc&hl=en",
  },
  {
    keyword: "BSV Network",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1Ev0bi61LeNi8arUmbJruGuj4Un_63FruBdMkIOR7NTg/edit",
  },
  {
    keyword: "SEZ Network",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/a/advancevalves.com/file/d/0BxSExRIIZ2elUmNjRUU3V1F1bDQ/view?usp=sharing",
  },
  {
    keyword: "D-8 Network",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/a/advancevalves.com/file/d/0BxSExRIIZ2elc2ZxdlJ6cF9Yam8/view?usp=sharing",
  },
  {
    keyword: "CCTV & IP Camera.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1DsN0ZrJRkp_UTS6ezAAx1AvWAdNR2jov2n0G5bZmlCg/edit#gid=0",
  },
  {
    keyword: "UPS Details",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AhSExRIIZ2eldFVzMWNMekozU09DdEl2ZE5FemdrZXc&hl=en&authkey=CJquha4H",
  },
  {
    keyword: "IT Objective",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1WqgDF291K7X16vpuCLLfYj9J9WMw4Iapw5ICDWXq6fQ/edit?usp=drive_link",
  },
  {
    keyword: "Video Conference",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1OsiO-kyxZ2kjiFMqW2Tsgd4HD-G2gst6CoWHfedQBY0/edit",
  },
  {
    keyword: "EPDM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1PR0ixa5bkXjjV1OnL1TIj3mvAuKg-JF-IYGXc6lyNtI/edit",
  },
  {
    keyword: "Attendance Machine",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/attendance-machine?authuser=0",
  },
  {
    keyword: "Mobile Issue",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1T1fV9HlCfOEdZBhE2nQ_BCCiJdhmk8Dou83sr1t40dg/edit#gid=0",
  },
  {
    keyword: "Offsite Backup",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1d5y6qPtRXxkcafsKuWoeNRYu_Jx23G_v1pqaw5gr65I/edit#gid=1119604821",
  },
  {
    keyword: "EPDM Queries",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/18QCj74LTXiH6gR_Z7TJoGUrxjklmJ2IqzvPY7m8gc_g/edit#gid=0",
  },
  {
    keyword: "ISO Consolidated list",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1M8e95hpmNC3OiGu3hfDuvxEGV72SmbQwSg1PCMgAVxw/edit#gid=0",
  },
  {
    keyword: "QMS Controlled Documents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/qms-controlled-documents?authuser=0",
  },
  {
    keyword: "QMS & MRM Docs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/drive/folders/1psfUlc9IKo06Z5lEOkRx_J9XWjXSCqXX",
  },
  {
    keyword: "Restoration from Backup Server",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1iR3jJfZPSbq72spr_ZFIjQAzqChCLjByWG5ls1prjLk/edit#gid=1232142988",
  },
  {
    keyword: "Hardware Inventory",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1jyTE9gPj2KE8EO_zNGOavHNUrzwLDFxwPk5jGhbEbDU/edit#gid=1215073195",
  },
  {
    keyword: "ISPs Details",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/11rubjZOm8YFVljJSwkdRz5jmhs81YliOYz07CzUOzV0/edit#gid=1312662014",
  },
  {
    keyword: "Mapped IPs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1SwQSdhXmlnblkRnWmcUHST5iorOmiEvj3co836C_coY/edit#gid=472435293",
  },
  {
    keyword: "IDs to be deleted",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Bi6laTbF1Z7VRVbwhJw-AxuA68kTPmHXJmMOhNwJkKQ/edit#gid=1075792655",
  },
  {
    keyword: "Digital Signature",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17PVj1xtCSiuldys52vhr5RKEjsc-bAJFBKwESkAp4Vw/edit#gid=1724397257",
  },
  {
    keyword: "IT Budget",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Mbs3VB6fP7Vg8-rGc9A0y9EUJpO3w1ZvMjAF46qhFIA/edit#gid=326813488",
  },
  {
    keyword: "Google Analytics",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/17-Q_kk-ui4JU2pUlcV4txfyVlAZ9qaBSFrL03n39rCI/edit",
  },
  {
    keyword: "RF and P2P",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/rf-and-p2p-details?authuser=0",
  },
  {
    keyword: "Sophos firewall",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1vdv2NuqKKZ6HDANAx2M0SNGlkvLv0I050nO-Kk-Whd8/edit",
  },
  {
    keyword: "IT Renewals",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/10UhFHTytKpdmgBC8Y01HbwApRT88YTRdNmrQ4UhGjyw/edit#gid=1634392265",
  },
  {
    keyword: "Salesforce Dashboards",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1tL0bvpz6MuYVBvHeky_GzqonlTsCA7-owaOemaw9twk/edit?gid=807178368#gid=807178368",
  },
  {
    keyword: "Google Tracking",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ZQOm69WwfU7W_muWVKtv58K3HBp1j1aSONhKA1tCjDs/edit?usp=share_link",
  },
  {
    keyword: "Hardware and software Audit",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Q-JPNW5iczddzQ-aHW1vNnxM5eUtvQS87HcVrycMrEM/edit#gid=0",
  },
  {
    keyword: "Internal Phone Extension",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1k4cOruvN6giWU2M7Kyxrn-WvaEzGmNsWp0gVCXVzVbA/edit#gid=235872177",
  },
  {
    keyword: "Remote Access",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/13Ts4j5C-6wJzXKf63Ek1rC1cqAhIOUzmXNe0E94zY7M/edit#gid=2033260411",
  },
  {
    keyword: "FinSYS",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/finsys?authuser=0",
  },
  {
    keyword: "QA Software",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/qa-software-details?authuser=0",
  },
  {
    keyword: "GAD generation",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/gad-generation-software-details?authuser=0",
  },
  {
    keyword: "FinSYS Installation guidelines on Linux",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1_CnodFDZDSs6Q5lrWsqLEEQoxY8WtAHJOyPSEQupKWY/edit",
  },
  {
    keyword: "OS Image",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0AhSExRIIZ2eldFlGNVZKSkhfS1BaYkQtckRHT215ekE&hl=en",
  },
  {
    keyword: "Digital Certificates",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/digital-certificates?authuser=0",
  },
  {
    keyword: "Meter Reading",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdJy78e8397KC3GTB4lquyVG3v605OPSE7ng5HE8Fb7n6TGCg/viewform",
  },
  {
    keyword: "Solar Data",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17pBaKeH7tnv5QwDu4y6xY1iSNMQSYIYSvINzhR9o4Zk/edit#gid=1839859996",
  },
  {
    keyword: "DMS Documents",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1UcCZ28fBL3qB1SG-Iwb3UXYsLJXhsk7mX9OpWmoTifA/edit#gid=1081843126",
  },
  {
    keyword: "DMS Evaluations",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1GgIZZQQ9Yh5wLQx0KuYVRXpdbh8bzV7fGDfmci94tmI/edit?usp=drive_link",
  },
  {
    keyword: "IT Budget Cap Ex",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Mbs3VB6fP7Vg8-rGc9A0y9EUJpO3w1ZvMjAF46qhFIA/edit#gid=270123406",
  },
  {
    keyword: "IT Tracking",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1R5LsfVbFj1kIspcgbbkmDmvEeQR1UXc8ss5qWASmlQs/edit#gid=0",
  },
  {
    keyword: "Quality Objectives Achievement",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1-9CGT02itqkxBoujg_poZqq4NHzdAkP4cpeCeB4toag/edit?gid=1534479085#gid=1534479085",
  },
  {
    keyword: "File Server",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1EERAWArr87LW3Si4DmSUlGxz5Qvu7UJ_KuzDQ22MaSY/edit?gid=413522435#gid=413522435",
  },
  {
    keyword: "IP Address",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1l6kWG3xh12RbgRuK_lWiW-udfbNe16vL9rz58JZPX5E/edit?gid=1#gid=1",
  },
  {
    keyword: "list to download mails",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1TCjsrdt3APuOHlK3As6PZf1HuV6HTdk2533bB0cguuw/edit?gid=1121541395#gid=1121541395",
  },
  {
    keyword: "EPDM User",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1xm36RwFgJ-fCYZlNdwSSKG1pJYKPb265/edit?gid=1168712665#gid=1168712665",
  },
  {
    keyword: "Movement Plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1vcL81hxbmSgPUR4ccWqyaEUtou8YwKV-Nv10Vohdfu0/edit?gid=1428872967#gid=1428872967",
  },
  {
    keyword: "(270+6 Servers lics.)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/sophos-firewall-endpoint-protection-interceptx?authuser=0",
  },
  {
    keyword: "Google Apps",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/google-apps-details?authuser=0",
  },
  {
    keyword: "Advance valve net",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/advancevalves-net?authuser=0",
  },
  {
    keyword: "Tally",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/tally-details?authuser=0",
  },
  {
    keyword: "Payman",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/payman?authuser=0",
  },
  {
    keyword: "Solidworks",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/solidworks-driveworks-details?authuser=0",
  },
  {
    keyword: "Webhosting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/webhosting-domain-registration?authuser=0",
  },
  {
    keyword: "Hardware Insurance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/?tab=3o&pli=1#folders/0BxSExRIIZ2elRUlJWmRPWm1yemM",
  },
  {
    keyword: "Leased Lines",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/lease-lines-mpls-rf-details?authuser=0",
  },
  {
    keyword: "Go Global",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/go-global-details?authuser=0",
  },
  {
    keyword: "MS Visual Studio",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1C7jyjvjRgHrLN1RuU7lskIAWbNUmWikyKxNsyEKiQNM/edit",
  },
  {
    keyword: "Adobe photoshopCC",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/document/d/1SCfg2-D78x81g2k1hJi2qsrNr2OngxlhWkVX-ojA7qc/edit",
  },
  {
    keyword: "Software Inventory",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AhSExRIIZ2eldElJOS1Rb05yTm9id0pLbXd4S2lhZFE&usp=drive_web#gid=0",
  },
  {
    keyword: "Software Storage",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheets/d/1BPwTj8VmtDHyFPl8Zagr0Rd-ExU7-w02ANO2Qtd_1p4/edit#gid=725466893",
  },
  {
    keyword: "VMware License",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/open?id=1wvmWCQ_Iyl_G71Itc3rWrvJo4wIP81pG",
  },
  {
    keyword: "Go To Meeting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/12AO8zg4-vikA_Zq-aT1VqR-wXyfDGMmAIbNtwDQKxAc/edit?usp=sharing",
  },
  {
    keyword: "O365-Lic",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1HzucKn46era2SOhQBi2tKIpKiXuBpyKlWlZ2Y6W_qMo/edit?hl=en&hl=en#gid=52",
  },
  {
    keyword: "Team Essentials 26 lics",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1HzucKn46era2SOhQBi2tKIpKiXuBpyKlWlZ2Y6W_qMo/edit?hl=en&hl=en&gid=5#gid=5",
  },
  {
    keyword: "Realwear & Mobile",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1BrAHFu95Dqc6uGzuoQCDzq-Mb89hBt1c5jgtn5ZB6TQ/edit#gid=0",
  },
  {
    keyword: "MOVAVI Video Software",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1SeO3GUd5P2pkxSeRaG2FEfFCRhhzCuu0AVO68KyPRmU/edit",
  },
  {
    keyword: "CA ArcServe Licenses",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1zYfanQraMlH5wGbVUQaYE3_C9fyZ8hs_hWA05ob3IX8/edit",
  },
  {
    keyword: "Printing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/information?authuser=0",
  },
  {
    keyword: "Call Request Entry",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfi3BdXPOZ93Kcfqn2Na4g3pZJBEzEuWeBRvr1zep7lEemBHQ/viewform",
  },
  {
    keyword: "Scada",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/it-area/scada-citect-5-43-r0?authuser=0",
  },
  {
    keyword: "New Mobile",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/a/advancevalves.com/file/d/0B5dA1zbxOuQvdjlUM2pwSk5vbVE/edit?usp=sharing",
  },
  {
    keyword: "Tour & Travel details",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0Aj9VXyUEqhOedGlPQTZHYkJCSWR6WkU2aS12ajM2OHc&usp=sharing_eid#gid=5",
  },
  {
    keyword: "File SVR & ERP",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/document/d/1_CnodFDZDSs6Q5lrWsqLEEQoxY8WtAHJOyPSEQupKWY/edit",
  },
  {
    keyword: "ERP logs",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/14PTDrzexyEH8IE6z4CwxhxLGhNulDEHMjCgAJgXeTZM/edit#gid=382009618",
  },
  {
    keyword: "File Server User Login",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1O92JfZuGdIyFe9Lh4MX-AFF8SDIiTa_qV7SEzM27dXY/edit#gid=1876320225",
  },
  {
    keyword: "Iotosafe Inventory list",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17jJBOsIyPZ-NlKwf5FNHFKJVKAn1gULms1ABONhUxtM/edit#gid=313091668",
  },
  {
    keyword: "List of Hardware Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ckbe8EIopeQnALnV1G0kr679ZWIWbg4muOQ4U9kZioM/edit#gid=1553478372",
  },
  {
    keyword: "Monthly Review",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGV3RzZteUpzdC0xdE1kMG5VNFdOVGc#gid=0",
  },
  {
    keyword: "PMS FORM",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1_zKbuiO8exrygjwRcLfzuzxZmJ2kTrvGsHipmInT1nU/viewform",
  },
  {
    keyword: "Minutes of Monthly Review",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdDBIOVViX3Q3SEtiVE4wTWdRNTc0MEE#gid=0",
  },
  {
    keyword: "Production Action",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/production-area/production-action-tracker?authuser=0",
  },
  {
    keyword: "Lean Manufacturing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/11Vc41rADWm1hcXbsyW-8PCmkMpVt6Zq1/edit",
  },
  {
    keyword: "Form - BT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/17QscVL_Qe0ko0O-QcDlXmbY_jTV7BqABlMI6z4f8BaE/viewform",
  },
  {
    keyword: "Report - BT",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheets/d/1PU5RL1TPgTiNrEppg8EbfOBGlQ2ayiF6oLdKO_yen4M/edit#gid=307597758",
  },
  {
    keyword: "Form - DP",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/15oxSSRTNCeowO0rNW4FcYJYQDXG--PKoMrxV9iD2FJU/viewform",
  },
  {
    keyword: "Report - DP",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheets/d/1LJgr9a0ZZlP2_1nix3IXSIdAw8AFlZOqndd2NXuBV8k/edit#gid=732813300",
  },
  {
    keyword: "Daily Production Repor",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1oyCQYnXnuqwWVt4pfht93cBospukSGQi2AAtYQgI4Tw/viewform?c=0&w=1",
  },
  {
    keyword: "Machine Shop",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/12jUZUTXLILEZrUh0_mS4TEHNG4PixvS0SBGE3ZtXVUs/edit#gid=1486018918",
  },
  {
    keyword: "Daily Production Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1W3gIyCWsn5H-N_LM2VbX6_95ostYSoYawV_3hro9HCg/viewform?c=0&w=1",
  },
  {
    keyword: "BD/BT Assy.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1A9cwYdvVpoBlxvxDhnwToQaR8c8-Elh9EHT3VnjMzM0/edit#gid=1593773910",
  },
  {
    keyword: "Daily Production Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1bUUqrPCEbmjZbmJBJnnM-kQYc6gYjQC3-RiNGRq-cjA/viewform?c=0&w=1",
  },
  {
    keyword: "DPCV Assy.",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1NGhj5WDxibGQ_YvZ36H8dQ0YQ9ImBwulkJEGbRNUrSg/edit#gid=1356509910",
  },
  {
    keyword: "Daily Production Report(Welding Shop)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1LTgvqCv3UEB9Xm94mTAQLis62-tLEUEMshgLo3X_91A/viewform?c=0&w=1",
  },
  {
    keyword: "Welding Shop",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1ec97Mw1_aya2YfdQDulal7CqaZJAgvpIQpxxZNE9MJQ/edit#gid=1475959955",
  },
  {
    keyword: "Daily Production Report (Testing Shop)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1h59fNIqoBr9YRjHrIW8ScVwy21-CeBmxpquqvHIi3p8/viewform?c=0&w=1",
  },
  {
    keyword: "Testing Shop",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1X0lxUDsMPfzNQY2qbSbNZ-yI339txCGz8_9huLiQzfc/edit#gid=1087868588",
  },
  {
    keyword: "Daily Production Report Form(Shot Blasting & Painting)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/1FffMTcIvaSlwbHUKlucTHgDexwy8bXTldsYGu0I_QJo/viewform?c=0&w=1",
  },
  {
    keyword: "Shot Blasting",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1GbnETgRazjHCxE6YJ4JkvSJd77dk4Ps-Fzqj2NXUrps/edit#gid=1742504727",
  },
  {
    keyword: "BT internal testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/e/1FAIpQLSdmbDCIecfzxNd6zEmyySizs8OgNVaNyj2DjwFQ0BS16979-A/viewform?c=0&w=1",
  },
  {
    keyword: "BT internal testing report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1MPu8f7pGFS5rjCzoI-Q4-8xskz0dSBpySGOSt26rcJk/edit#gid=720888908",
  },
  {
    keyword: "DP internal testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/forms/d/e/1FAIpQLSfatL-oSbBuHlQReGwgnGJxNsQWxjrgN6sJKyF72Ymw7LdONw/viewform?c=0&w=1",
  },
  {
    keyword: "DP internal testing report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/16Fm71Tcppg1qUZD_C_Bee2__ZUYYzWXhzeJr5b0qjyY/edit#gid=937464293",
  },
  {
    keyword: "Route card tracking sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1jU655z1Db5Wdc667_4fl-0PJ2iKb_T3inbS896DGxVo/edit?ts=58c108f2#gid=0",
  },
  {
    keyword: "Route card tracking sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1jU655z1Db5Wdc667_4fl-0PJ2iKb_T3inbS896DGxVo/edit?ts=58c108f2#gid=278593468",
  },
  {
    keyword: "Request for Change",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScGOMnbENG_FYdEJWtfki7KIc-oUdqYGKX9fbVBPO4xE0RRAg/viewform",
  },
  {
    keyword: "RFC Closure",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeXNorUNxhoeV-5axJittWgVFuAmBSjm59ij0IFETmsYJHH7g/viewform",
  },
  {
    keyword: "Active Task",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/ppc-area/ppc-task-list?authuser=0",
  },
  {
    keyword: "Minutes of Monthly",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdHpiZ0tMWjdhWEZoZ2hsSXJrV0RLZFE#gid=0",
  },
  {
    keyword: "BD Tracking",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldGJqaG1GVnM0dVpmREhTMGZzWlEzdGc#gid=5",
  },
  {
    keyword: "BT Tracking",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldGJqaG1GVnM0dVpmREhTMGZzWlEzdGc#gid=5",
  },
  {
    keyword: "DPCV Tracking",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArrGa0i6obTldEtwbS1tV21Vd3g4XzF2SzdnX05La2c#gid=0",
  },
  {
    keyword: "Metric Sheets",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/?tab=3o&pli=1#folders/0B7rGa0i6obTlRUdaOG1KWklCWHc",
  },
  {
    keyword: "Assembly plan",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AmX-lBV0OSuhdHlJSm1lR0dLRlI0d09JY2U3eU1QbEE&usp=sharing",
  },
  {
    keyword: "Production Plans",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AojChAtWpcURdG1ZeGw0TDRHNW1DaFVMeWJQVTc5aXc&usp=sharing",
  },
  {
    keyword: "Leave & Tour Calender",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://www.google.com/calendar/render?tab=3c",
  },
  {
    keyword: "Working Template for client",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AgeXQKevfi--dC13cG5raFExX1lsOV83aWVpMktkcXc&pli=1#gid=0.",
  },
  {
    keyword: "Customer Care Cell-",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0AojChAtWpcURdGs3Y0dvQ3FRMjc0eWxYc20zMDRTN3c#gid=0",
  },
  {
    keyword: "PPC Task",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Lh6s48E4tCjI93rt7F-86xx-c6KvQd4T/edit",
  },
  {
    keyword: "NDT Eye Welding",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/17NnZwxKYiI1V9iad4QedM1UPNllztDpeue81Uiz9YpU/edit#gid=0",
  },
  {
    keyword: "Conversion Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1hqwDveg1rUkLh3kSeYINbcWtd642p50XkR-ijjNG_Kg/edit#gid=0",
  },
  {
    keyword: "5208 & API",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1hqwDveg1rUkLh3kSeYINbcWtd642p50XkR-ijjNG_Kg/edit#gid=0",
  },
  {
    keyword: "IBR Approved",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1eaHg7W3gZgsbdG2TfRbFTfgnWWLTmsCggWcX6I1UsEY/edit#gid=0",
  },
  {
    keyword: "External Audit",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1Jeb6S-XYpVroLCzlkE8FosOLCHnpdZ0z7zq2SQodaN4/edit",
  },
  {
    keyword: "Operating Folder",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://drive.google.com/drive/folders/0B9x8538EpFJHSXhnZi1jeEZ4UGM",
  },
  {
    keyword: "Master List of QA",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1LQSRC0NUjAaQXawPfXXp_tFYnST0J2JadAtm64Hi4-E/edit#gid=185591086",
  },
  {
    keyword: "ISO Consolidated",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1M8e95hpmNC3OiGu3hfDuvxEGV72SmbQwSg1PCMgAVxw/edit#gid=2",
  },
  {
    keyword: "QA TPI",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://www.google.com/calendar/b/1/render?tab=oc#g%7Cmonth-3+23105+23132+23105",
  },
  {
    keyword: "NCR Review Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://spreadsheets.google.com/a/advancevalves.com/ccc?key=0ArrGa0i6obTldFBZVC1oWXk0MzJjM1NGc2tDYjV5c0E&hl=en_GB",
  },
  {
    keyword: "TPI Feed Back",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/viewform?pli=1&formkey=dFRkZTdVVVJwckROSHhiMnFUMUlHcFE6MQ#gid=0",
  },
  {
    keyword: "Weekly Review",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGJhRVRRWS1ySzFKYnh0RTlrYU9yWUE#gid=0w",
  },
  {
    keyword: "Calibration List - AVG",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1mI49umy_oM7mqShh4NZ1oj55X_drlecWhMU-p8ImYS8/edit#gid=1131637780",
  },
  {
    keyword: "QA MIR Tracking Sheet",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1bOGi1a1jdDDXG0L9T7Pe7WnPw3F7D8LhTgNsx2nokEo/edit#gid=1",
  },
  {
    keyword: "Casting Rejection",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "http://goog_2019641603/Casting",
  },
  {
    keyword: "Achievement Of 90%",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/11WifRUK-fQVsypwpqQ-oXkfqIkC33VuhS4V0TSCHHRw/edit#gid=0",
  },
  {
    keyword: "Functional Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/15V9LPFaQ30ufq1iAo-YKl2ZPCH971qJgN2kg6-8s47Y/edit#gid=0",
  },
  {
    keyword: "In-Process Non Conformity",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1M9fjrTz0mouD2X4AKkjInrhynA-X7eSR7Nj8KPbmoZ0/edit#gid=1710191170",
  },
  {
    keyword: "Dossier Data",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1aelUp6YCnyBVaiVCgTsEYZXsJMjm529iRDUhG2wtSCI/edit#gid=1729472408",
  },
  {
    keyword: "Dye Penetrant",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1gvqrZ6p2c79ZwLFktW6KGCjRXdX10m4c/edit#gid=1081868118",
  },
  {
    keyword: "Magnetic Particle",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "http://goog_2019641603/Magnetic",
  },
  {
    keyword: "Ultrasonic Testing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/18wyERGd17YnYktd20EyifWVe1EYWqLBb/edit?usp=sharing&ouid=106091621934223710729&rtpof=true&sd=true",
  },
  {
    keyword: "Minutes of Monthly Review marketing",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGZWV2hDbl81a255emhZTjM1V29idVE#gid=0",
  },
  {
    keyword: "Minutes of Monthly Review HVAC",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdE5GVER2bWhLd2VYV3F3b3F4OGlNVlE#gid=0",
  },
  {
    keyword: "Customer Visit Repor",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/viewform?rm=full&formkey=dFpPYmtKN1BPdzFtRjJwOFVmLWtNaXc6MQ#gid=0t",
  },
  {
    keyword: "IBG & GBG Feedback Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc6DwNBejGVam-4f2ttCMt74Mk_AhiP1EpjKMQVwR-WNQpFhg/viewform",
  },
  {
    keyword: "ABG (HVAC) Feedback Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScOw5XpdiSwKgtxzjmVAOmo3NC3oAcA2GgurCQYAt-Me8DY0g/viewform",
  },
  {
    keyword: "PQ Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScRa_XzhQT6rcNtyDA5X7qaye6IswIY1bRp6XPBoxFRSE6OmA/viewform",
  },
  {
    keyword: "Minutes of the Monthly finance",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0ArEYKigBiqhSdGhpOVRNTHVKQkRvM0dmcE4xc3Bob3c#gid=0",
  },
  {
    keyword: "Compliance Report",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/u/0/d/1ycAIgBWWIBse_U9HnmLP7Z9vlORxmHsZFdgPFUH8sq4/edit#gid=0",
  },
  {
    keyword: "Pending C",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/a/advancevalves.com/spreadsheet/ccc?key=0Ajgyl9Bz2Hl1dEdlcXlqZ2VnNHowekJXWUt5Z2ZlQ2c#gid=10",
  },
  {
    keyword: "AVPL-SEZ BG",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/spreadsheets/d/1uFfDLOMiGX_F0O-z6wFmmZE_KyL_BlSgjzRf4gpGilI/edit#gid=1954832454",
  },
  {
    keyword: "COMPANY GOAL Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1siq14DZP87qV4YVchyeAMUeFi3h31slR/edit",
  },
  {
    keyword: "ORGANIZATION Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Z6wwNdDld8Ib4MDEev15ftaBvxlXH30m/edit",
  },
  {
    keyword: "MATERIAL Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Riw_weI9N0iafr-DDda8YORfc2lV93Jw/edit",
  },
  {
    keyword: "PRODUCTION Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1GgWuyQDfY7K6iWrW7Avn2oezJnpyI84K/edit",
  },
  {
    keyword: "PLANNING Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1e9g5n9hUxeoiGT3MpXGOxlL-vwjWw_IS/edit",
  },
  {
    keyword: "QUALITY Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1AXG0xzhJm1u453Jqa6Y0xMt8Kw060J2P/edit",
  },
  {
    keyword: "MARKETING Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/a/advancevalves.com/intranet/advance-valves-internal-site/marketing-area/mktg-main-dashboard-charts?authuser=0",
  },
  {
    keyword: "SALES Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1i61o818yNV4HywlxYXjqOAS5Ggxc0FgY/edit",
  },
  {
    keyword: "STORE Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1heM7oA6K1nCB2CqHsO_172VUUwqmEASA/edit",
  },
  {
    keyword: "HR Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1p0-IvgTKyA-WmnK4Ha5EmsUQsGKms7HJ/edit",
  },
  {
    keyword: "IT Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1IeUPjjl42OpQSU8b4i6O8g4lRl-5lYjL/edit",
  },
  {
    keyword: "DESIGN Dashboard",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://sites.google.com/d/1kRK1orfBM08H7EFBLLQRfUrnbQOvA-XP/p/1Qf3NYDeCvhYVtTQheNkEaZ1JcmjLC0Eb/edit",
  },
  {
    keyword: "Request for change document (Gagret)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfqP5Wfq0c75BwC8cku09LYKrf7MswRUUrsILknZcagrX65Eg/viewform",
  },
  {
    keyword: "Request for closure (Gagret)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScm3J9HGNXXLdAQg8-rqTwVg1IiB04cke-0_E4oIR3Dpx2glA/viewform",
  },
  {
    keyword: "Cheque Requisition",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://script.google.com/a/macros/advancevalves.com/s/AKfycbwSIRysULoEb8O66yUo4ChM-AXST5L4XnpgAT3wu7cMJCYmImO4_qqJWamQy0QTlg5D/exec",
  },
  {
    keyword: "Loan Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdCt_N48uj1bhW8g53WRX-L2u4CWN9bqicS4YnCVQ7VPTGybg/viewform",
  },
  {
    keyword: "Mobile Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfeGgaQnrk6OYV57OWirUGP3MotdozszEZAJlEHq4GL_wGgng/viewform",
  },
  {
    keyword: "Re-Work Form (Noida)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe11fyEEfPz6D2xLCjjfMnlw97X2yLlWmEFeySzjlE0lTKH5Q/viewform?vc=0&c=0&w=1&flr=0",
  },
  {
    keyword: "Re-Work Form (Gagret)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdIg7iJo3iIgR8Z_V2YEfbMDGNKch5okud7Q6WC9UdvL_qpxg/viewform",
  },
  {
    keyword: "IT Service Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfi3BdXPOZ93Kcfqn2Na4g3pZJBEzEuWeBRvr1zep7lEemBHQ/viewform",
  },
  {
    keyword: "New Item Creation Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://script.google.com/a/macros/advancevalves.com/s/AKfycbyGvK58SMsyS0Tp5eB-LrRcTXZtOTbgOewocbgOxp_mWN3HV_bOrTJoLvXbGk86i5Q2/exec",
  },
  {
    keyword: "Web finsys Issue Request",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfi3BdXPOZ93Kcfqn2Na4g3pZJBEzEuWeBRvr1zep7lEemBHQ/viewform",
  },
  {
    keyword: "Incident register form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://script.google.com/a/macros/advancevalves.com/s/AKfycbwwxp2moMAbZE1rM_CeSaBO-clCtNZA7YoeK6Azu0AzgYVacg6w90NtU0L1zOzy4MzTag/exec",
  },
  {
    keyword: "5S Score form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdXNwePP7YHXay8WWGzNTD4imHw2GLOyV9QnB4FvlnwjHNpHw/viewform",
  },
  {
    keyword: "Technical Query Form",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdrP2pwjYrc1I4_IeUEFxIKGctK58CwtJAkdtePILEve7CzEA/viewform",
  },
  {
    keyword: "5S score form (UNA)",
    outputText: "HERE IS YOUR DOCUMENT LINK",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdprO0-uyAiV1pqAM4zjz2LGcWTOsY1t7l3lOL1a2rC8WqFng/viewform",
  },
];
