function onOpen(){
  var sht = SpreadsheetApp.getUi();
  var menu = sht.createMenu("Google Docs Conversion");
  menu.addItem("Create Manuals", "createManual");
  menu.addToUi();
}
function createManual(){

  const destinationFolder = DriveApp.getFolderById('---Target Folder');
  const documentfile = DriveApp.getFileById('Blank and Base file')
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var logo = DriveApp.getFileById('1yr7USEHaBeN8c4QRdN2hFHBpd3FZGVcC')
  const rows = spreadsheet.getDataRange().getValues();

  rows.forEach(function(row, index){
    if (index === 0) return;
    if(row[288]) return;
    var nameOfTemplate = row[1]
    const document = documentfile.makeCopy(row[2],destinationFolder);
    const doc = DocumentApp.openById(document.getId());
    const body = doc.getBody();
    var headsty = {}
    headsty[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.RIGHT;
    headsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
    headsty[DocumentApp.Attribute.FONT_SIZE]=9;
    body.setMarginBottom(62)
    body.setMarginLeft(62)
    body.setMarginRight(62)
    body.setMarginTop(62)
    var cellStyle = {};
    cellStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.JUSTIFY;
    cellStyle[DocumentApp.Attribute.VERTICAL_ALIGNMENT]=DocumentApp.VerticalAlignment.CENTER;
    var cellStyle2 = {};
    cellStyle2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    cellStyle[DocumentApp.Attribute.VERTICAL_ALIGNMENT]=DocumentApp.VerticalAlignment.CENTER;
    var textu = body.appendParagraph("Laboratory Record\n")
    textu.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var style ={}
    style[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman'
    style[DocumentApp.Attribute.FONT_SIZE]=16;
    style[DocumentApp.Attribute.BOLD]=true;
    textu.setAttributes(style)
    var gap = body.editAsText().appendText("")
    var coursecode = body.appendParagraph((row[2]+" "+"-"+" "+row[3]).toUpperCase()+"\n");
    coursecode.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var main = {}
    main[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    main[DocumentApp.Attribute.FONT_SIZE]=18;
    main[DocumentApp.Attribute.BOLD]=true;
    main[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    coursecode.setAttributes(main)
    var degbr = body.appendParagraph(row[4]);
    degbr.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var mainy = {}
    mainy[DocumentApp.Attribute.FONT_FAMILY] = 'Times New Roman';
    mainy[DocumentApp.Attribute.FONT_SIZE]=14;
    mainy[DocumentApp.Attribute.BOLD]=true;
    mainy[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    degbr.setAttributes(mainy);
    var semester = body.appendParagraph(row[5]+" "+"-"+" "+"SEMESTER"+"\n");
    semester.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var sem = {}
    sem[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    sem[DocumentApp.Attribute.BOLD]=false;
    sem[DocumentApp.Attribute.FONT_SIZE]=13;
    semester.setAttributes(sem)
    var academicyear = body.appendParagraph("Academic Year"+" "+row[6]+"\n"+"\n");
    academicyear.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var aca = {}
    aca[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman'
    aca[DocumentApp.Attribute.FONT_SIZE]=15;
    academicyear.setAttributes(aca);
    var subm = body.appendParagraph("Submitted By"+"\n"+"\n");
    subm.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    subm.setAttributes(sem)
    var subm2 = body.appendParagraph("Reg. No"+" "+":"+" "+"...................................."+"\n");
    subm2.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    subm2.setAttributes(sem)
    var subm3 = body.appendParagraph("Name"+" "+":"+" "+"........................................ "+"\n"+"\n"+"\n");
    subm3.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    subm3.setAttributes(sem)
    var logos = body.appendImage(logo.getBlob())
    logos.setWidth(150)
    logos.setHeight(150)
    var baby = {}
    baby[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    logos.getParent().setAttributes(baby);
    var colname = body.appendParagraph("BANNARI AMMAN INSTITUTE OF TECHNOLOGY")
    colname.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    colname.setAttributes(main);
    var subma = body.appendParagraph("(An Autonomous Institution Affiliated to Anna University, Chennai)\n")
    var submastyle ={}
    submastyle[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman'
    submastyle[DocumentApp.Attribute.FONT_SIZE]=10
    submastyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    subma.setAttributes(submastyle);
    var colname2 = body.appendParagraph("SATHYAMANGALAM - 638 401\n")
    colname2.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    colname2.setAttributes(main);
    body.appendPageBreak()
    var colname = body.appendParagraph("BANNARI AMMAN INSTITUTE OF TECHNOLOGY")
    colname.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    colname.setAttributes(main);
    var subma = body.appendParagraph("(An Autonomous Institution Affiliated to Anna University, Chennai)\n")
    var submastyle ={}
    submastyle[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman'
    submastyle[DocumentApp.Attribute.FONT_SIZE]=12
    submastyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    subma.setAttributes(submastyle);
    var colname2 = body.appendParagraph("SATHYAMANGALAM - 638 401\n")
    colname2.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    colname2.setAttributes(main);
    var colname6 = body.appendParagraph("DEPARTMENT OF\n")
    colname6.setAttributes(main)
    var colname7 = body.appendParagraph(row[27]+"\n"+"\n")
    colname7.setAttributes(main);
    var logos = body.appendImage(logo.getBlob())
    logos.setWidth(200)
    logos.setHeight(200)
    var baby = {}
    baby[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    logos.getParent().setAttributes(baby);
    var eadsp = body.appendParagraph(" ");
    var cert = body.appendParagraph("BONAFIDE CERTIFICATE\n")
    cert.setAttributes(mainy);
    var certbody = body.appendParagraph("This is to Certified Bonafide Record Book of Mr. / Ms. ....................................................... Register Number .................................... Submitted for ............................................................. Laboratory during the academic year"+" "+row[6]+"\n")
    certbody.setLineSpacing(2);
    var attr ={}
    attr[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.JUSTIFY;
    attr[DocumentApp.Attribute.FONT_SIZE]=13;
    attr[DocumentApp.Attribute.BOLD]=false;
    certbody.setAttributes(attr);
    var table = body.appendTable()
    table.setBorderWidth(0)
    var tr = table.appendTableRow()
    var td = tr.appendTableCell("Faculty In-Charge")
    var td2 = tr.appendTableCell("Head of Department")
    td.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.LEFT)
    td2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
    body.appendPageBreak();
    var coursecode = body.appendParagraph(row[2]+" "+"-"+" "+row[3]+"\n");
    coursecode.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var main2 = {}
    main2[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    main2[DocumentApp.Attribute.FONT_SIZE]=15;
    main2[DocumentApp.Attribute.BOLD]=true;
    main2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    coursecode.setAttributes(main2)
    var cos = body.appendParagraph("Course Outcomes (COs):\n")
    var coos = {}
    coos[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman'
    coos[DocumentApp.Attribute.FONT_SIZE]='15'
    cos.setAttributes(coos);
    var tabl2 = body.appendTable()
    tabl2.setBorderWidth(0)
    var co1 = tabl2.appendTableRow()
    var sety = {}
    sety[DocumentApp.Attribute.BOLD]=false;
    sety[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    sety[DocumentApp.Attribute.FONT_SIZE]=12
    sety[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.JUSTIFY;
    var co2 = co1.appendTableCell('CO1:');
    co2.setWidth(50)
    var care1 = co1.appendTableCell(row[7])
    co1.setAttributes(sety)
    var co2 = tabl2.appendTableRow()
    co2.appendTableCell('CO2:').setWidth(50)
    var care2 = co2.appendTableCell(row[8])
    care2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
    co2.setAttributes(sety)
    if (row[9]){
      var co3 = tabl2.appendTableRow()
      co3.appendTableCell('CO3:').setWidth(50)
      var care3 = co3.appendTableCell(row[9]).getChild(0).asParagraph().setAttributes(cellStyle)
      co3.setAttributes(sety)
    }
    if(row[10]){
      var co4 =tabl2.appendTableRow()
      co4.appendTableCell('CO4:').setWidth(50)
      co4.appendTableCell(row[10]).getChild(0).asParagraph().setAttributes(cellStyle)
      co4.setAttributes(sety)
    }
    if(row[11]){
      var co5 = tabl2.appendTableRow()
      co5.appendTableCell('CO5:').setWidth(50)
      co5.appendTableCell(row[11]).getChild(0).asParagraph().setAttributes(cellStyle)
      co5.setAttributes(sety)

    }
    tabl2.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    tabl2.getRow(1).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)

    var por = body.appendParagraph("Program Outcomes (POs):")
    por.setAttributes(coos);
    var table3 = body.appendTable()
    table3.setBorderWidth(0);
    if (row[12]){
      var r1 = table3.appendTableRow()
      r1.appendTableCell('PO1:').setWidth(50)
      r1.appendTableCell('Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex ngineering problems');
      r1.setAttributes(sety)
      table3.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    if (row[13]){
      var r3 = table3.appendTableRow()
      r3.appendTableCell('PO2:').setWidth(50)
      r3.appendTableCell("Problem Analysis: Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences")
      r3.setAttributes(sety)
      table3.getRow(1).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    if (row[14]){
      var r4 = table3.appendTableRow()
      r4.appendTableCell('PO3:').setWidth(50)
      r4.appendTableCell('Design/ Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.').getChild(0).asParagraph().setAttributes(cellStyle)
      r4.setAttributes(sety)
      
    }
    if (row[15]){
      var r5 = table3.appendTableRow()
      r5.appendTableCell('PO4:').setWidth(50)
      r5.appendTableCell('Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.').getChild(0).asParagraph().setAttributes(cellStyle)
      r5.setAttributes(sety)
     
    }
    if (row[16]){
      var r6 = table3.appendTableRow()
      r6.appendTableCell('PO5:').setWidth(50)
      r6.appendTableCell('Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations').getChild(0).asParagraph().setAttributes(cellStyle)
      r6.setAttributes(sety)
      
    }
    if (row[17]){
      var r7 = table3.appendTableRow()
      r7.appendTableCell('PO6:').setWidth(50)
      r7.appendTableCell('The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice').getChild(0).asParagraph().setAttributes(cellStyle)
      r7.setAttributes(sety)
      
    }
    if (row[18]){
      var r8 = table3.appendTableRow()
      r8.appendTableCell('PO7:').setWidth(50)
      r8.appendTableCell('Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.').getChild(0).asParagraph().setAttributes(cellStyle)
      r8.setAttributes(sety)
    }
    if (row[19]){
      var r9 = table3.appendTableRow()
      r9.appendTableCell('PO8:').setWidth(50)
      r9.appendTableCell('Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.').getChild(0).asParagraph().setAttributes(cellStyle)
      r9.setAttributes(sety)
      
    }
    if (row[20]){
      var r10 = table3.appendTableRow()
      r10.appendTableCell('PO9:').setWidth(50)
      r10.appendTableCell('Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.').getChild(0).asParagraph().setAttributes(cellStyle)
      r10.setAttributes(sety)
      
    }
    if (row[21]){
      var r11 = table3.appendTableRow()
      r11.appendTableCell('PO10:').setWidth(50)
      r11.appendTableCell('Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.').getChild(0).asParagraph().setAttributes(cellStyle)
      r11.setAttributes(sety)
      table3.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    if (row[22]){
      var r12 = table3.appendTableRow()
      r12.appendTableCell('PO11:').setWidth(50)
      r12.appendTableCell('Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments').getChild(0).asParagraph().setAttributes(cellStyle)
      r12.setAttributes(sety)
      table3.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    if (row[23]){
      var r13 = table3.appendTableRow()
      r13.appendTableCell('PO12:').setWidth(50)
      r13.appendTableCell('. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change').getChild(0).asParagraph().setAttributes(cellStyle)
      r13.setAttributes(sety)
      table3.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    var por = body.appendParagraph("Program Specific Outcomes(PSOs):")
    por.setAttributes(coos);
    var table4 = body.appendTable()
    table4.setBorderWidth(0)
    if(row[24]){
      var ps1 = table4.appendTableRow()
      ps1.appendTableCell("PSO1:").setWidth(50)
      ps1.appendTableCell(row[24])
      ps1.setAttributes(sety)
      table4.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    if (row[25]){
      var ps2 = table4.appendTableRow()
      ps2.appendTableCell("PSO2:").setWidth(50)
      ps2.appendTableCell(row[25])
      ps2.setAttributes(sety)
      table4.getRow(1).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
    }
    if (row[26]){
      var ps3 = table4.appendTableRow()
      ps3.appendTableCell("PSO3:").setWidth(50)
      ps3.appendTableCell(row[26]).getChild(0).asParagraph().setAttributes(cellStyle)
      ps3.setAttributes(sety)
    }
    body.appendPageBreak()
    var dep = body.appendParagraph("DEPARTMENT OF "+" "+row[27]+"\n"+"\n"+"\n");
    var depstyle = {}
    depstyle[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    depstyle[DocumentApp.Attribute.FONT_SIZE]=15;
    depstyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
    dep.setAttributes(depstyle)
    var vission = body.appendParagraph("Vission:"+"\n")
    var viss = {}
    viss[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    viss[DocumentApp.Attribute.FONT_SIZE]=14;
    viss[DocumentApp.Attribute.BOLD]=true;
    vission.setAttributes(viss);
    var vissiondata = body.appendParagraph(row[28]+"\n");
    vissiondata.setLineSpacing(1.5)
    vissiondata.setIndentFirstLine(1)
    var vissiondatasty = {}
    vissiondatasty[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    vissiondatasty[DocumentApp.Attribute.FONT_SIZE]=12;
    vissiondatasty[DocumentApp.Attribute.BOLD]=false;
    vissiondatasty[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.JUSTIFY
    vissiondata.setAttributes(vissiondatasty)
    var mission = body.appendParagraph("Mission:"+"\n")
    mission.setAttributes(viss)
    var missiondata1 = body.appendParagraph("i."+" "+row[29]+"\n")
    missiondata1.setLineSpacing(1.5);
    missiondata1.setIndentFirstLine(1);
    missiondata1.setAttributes(vissiondatasty)
    var missiondata2 = body.appendParagraph("ii."+" "+row[30]+"\n")
    missiondata2.setAttributes(vissiondatasty);
    if(row[31]){
      var missiondata3 = body.appendParagraph("iii."+" "+row[31]+"\n")
      missiondata3.setAttributes(vissiondatasty);
    }
    if (row[32]){
      var missiondat4 = body.appendParagraph("iv."+" "+row[30]+"\n")
      missiondat4.setAttributes(vissiondatasty)
    }
    body.appendPageBreak();
    var toc = body.appendParagraph("Table of Contents"+"\n")
    toc.setAttributes(main2);
    var table5 = body.appendTable()
    var e1 = table5.appendTableRow()
    var tabsty = {}
    tabsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman"
    tabsty[DocumentApp.Attribute.FONT_SIZE]=12;
    tabsty[DocumentApp.Attribute.VERTICAL_ALIGNMENT]= DocumentApp.VerticalAlignment.CENTER;
    tabsty[DocumentApp.Attribute.BOLD]= true;
    tabsty[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]= DocumentApp.HorizontalAlignment.CENTER;
    var dataty = {}
    dataty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
    dataty[DocumentApp.Attribute.FONT_SIZE]= 12;
    dataty[DocumentApp.Attribute.VERTICAL_ALIGNMENT]=DocumentApp.VerticalAlignment.CENTER;
    dataty[DocumentApp.Attribute.BOLD]=false
    var ro1 = e1.appendTableCell("S.No.").setWidth(45)
    ro1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    var ro2 = e1.appendTableCell("Date").setWidth(65)
    ro2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    var ro3 =e1.appendTableCell("Name of Experiments").setWidth(200)
    ro3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    e1.appendTableCell("Page No.").setWidth(55)
    e1.appendTableCell("Marks Awarded").setWidth(69)
    e1.appendTableCell("Signature").setWidth(75)
    e1.setAttributes(tabsty)
    if(row[33]){
      var e2 = table5.appendTableRow()
      e2.appendTableCell("1").getChild(0).asParagraph().setAttributes(cellStyle2)
      e2.appendTableCell()
      var tits = e2.appendTableCell(row[33]).getChild(0).asParagraph().setAttributes(cellStyle)
      e2.appendTableCell()
      e2.appendTableCell()
      e2.appendTableCell()
      e2.setAttributes(dataty);
      
    }
     if(row[50]){
      var e3 = table5.appendTableRow()
      e3.appendTableCell("2").getChild(0).asParagraph().setAttributes(cellStyle2)
      e3.appendTableCell()
      e3.appendTableCell(row[50]).getChild(0).asParagraph().setAttributes(cellStyle)
      e3.appendTableCell()
      e3.appendTableCell()
      e3.appendTableCell()
      e3.setAttributes(dataty);
      
    }
     if(row[67]){
      var e4 = table5.appendTableRow()
      e4.appendTableCell("3").getChild(0).asParagraph().setAttributes(cellStyle2)
      e4.appendTableCell()
      e4.appendTableCell(row[67]).getChild(0).asParagraph().setAttributes(cellStyle)
      e4.appendTableCell()
      e4.appendTableCell()
      e4.appendTableCell()
      e4.setAttributes(dataty);
      
    }
     if(row[84]){
      var e5 = table5.appendTableRow()
      e5.appendTableCell("4").getChild(0).asParagraph().setAttributes(cellStyle2)
      e5.appendTableCell()
      e5.appendTableCell(row[84]).getChild(0).asParagraph().setAttributes(cellStyle)
      e5.appendTableCell()
      e5.appendTableCell()
      e5.appendTableCell()
      e5.setAttributes(dataty);
      
    }
     if(row[101]){
      var e6 = table5.appendTableRow()
      e6.appendTableCell("5").getChild(0).asParagraph().setAttributes(cellStyle2)
      e6.appendTableCell()
      e6.appendTableCell(row[101]).getChild(0).asParagraph().setAttributes(cellStyle)
      e6.appendTableCell()
      e6.appendTableCell()
      e6.appendTableCell()
      e6.setAttributes(dataty);
      
    }
     if(row[118]){
      var e7 = table5.appendTableRow()
      e7.appendTableCell("6").getChild(0).asParagraph().setAttributes(cellStyle)
      e7.appendTableCell()
      e7.appendTableCell(row[118]).getChild(0).asParagraph().setAttributes(cellStyle)
      e7.appendTableCell()
      e7.appendTableCell()
      e7.appendTableCell()
      e7.setAttributes(dataty);
      
    }
    if(row[135]){
      var e8 = table5.appendTableRow()
      e8.appendTableCell("7").getChild(0).asParagraph().setAttributes(cellStyle2)
      e8.appendTableCell()
      e8.appendTableCell(row[135]).getChild(0).asParagraph().setAttributes(cellStyle)
      e8.appendTableCell()
      e8.appendTableCell()
      e8.appendTableCell()
      e8.setAttributes(dataty);
      
    }
    if(row[152]){
      var e9 = table5.appendTableRow()
      e9.appendTableCell("8").getChild(0).asParagraph().setAttributes(cellStyle2)
      e9.appendTableCell()
      e9.appendTableCell(row[152]).getChild(0).asParagraph().setAttributes(cellStyle)
      e9.appendTableCell()
      e9.appendTableCell()
      e9.appendTableCell()
      e9.setAttributes(dataty);
      
    }
    if(row[169]){
      var e10 = table5.appendTableRow()
      e10.appendTableCell("9").getChild(0).asParagraph().setAttributes(cellStyle2)
      e10.appendTableCell()
      e10.appendTableCell(row[169]).getChild(0).asParagraph().setAttributes(cellStyle)
      e10.appendTableCell()
      e10.appendTableCell()
      e10.appendTableCell()
      e10.setAttributes(dataty);
      
    }
    if(row[186]){
      var e11 = table5.appendTableRow()
      e11.appendTableCell("10").getChild(0).asParagraph().setAttributes(cellStyle2)
      e11.appendTableCell()
      e11.appendTableCell(row[186]).getChild(0).asParagraph().setAttributes(cellStyle)
      e11.appendTableCell()
      e11.appendTableCell()
      e11.appendTableCell()
      e11.setAttributes(dataty);
      
    }
    if(row[203]){
      var e12 = table5.appendTableRow()
      e12.appendTableCell("11").getChild(0).asParagraph().setAttributes(cellStyle2)
      e12.appendTableCell()
      e12.appendTableCell(row[203]).getChild(0).asParagraph().setAttributes(cellStyle)
      e12.appendTableCell()
      e12.appendTableCell()
      e12.appendTableCell()
      e12.setAttributes(dataty);
      
    }
    if(row[220]){
      var e13 = table5.appendTableRow()
      e13.appendTableCell("12").getChild(0).asParagraph().setAttributes(cellStyle2)
      e13.appendTableCell()
      e13.appendTableCell(row[220]).getChild(0).asParagraph().setAttributes(cellStyle)
      e13.appendTableCell()
      e13.appendTableCell()
      e13.appendTableCell()
      e13.setAttributes(dataty);
      
    }
    if(row[237]){
      var e14 = table5.appendTableRow()
      e14.appendTableCell("13").getChild(0).asParagraph().setAttributes(cellStyle2)
      e14.appendTableCell(row[237]).getChild(0).asParagraph().setAttributes(cellStyle)
      e14.appendTableCell()
      e14.appendTableCell()
      e14.appendTableCell()
      e14.appendTableCell()
      e14.setAttributes(dataty);
      
    }
    if(row[254]){
      var e15 = table5.appendTableRow()
      e15.appendTableCell("14").getChild(0).asParagraph().setAttributes(cellStyle2)
      e15.appendTableCell()
      e15.appendTableCell(row[254]).getChild(0).asParagraph().setAttributes(cellStyle)
      e15.appendTableCell()
      e15.appendTableCell()
      e15.appendTableCell()
      e15.setAttributes(dataty);
      
    }
    if(row[271]){
      var e16 = table5.appendTableRow()
      e16.appendTableCell("15").getChild(0).asParagraph().setAttributes(cellStyle2)
      e16.appendTableCell()
      e16.appendTableCell(row[271]).getChild(0).asParagraph().setAttributes(cellStyle)
      e16.appendTableCell()
      e16.appendTableCell()
      e16.appendTableCell()
      e16.setAttributes(dataty);
      
    }
    var table6 = body.appendTable()
    var laste1 = table6.appendTableRow()
    var cell1 = laste1.appendTableCell("Average:").setWidth(365)
    cell1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.RIGHT)
    var cell2 = laste1.appendTableCell("/10").setWidth(142)
    cell2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    body.appendPageBreak();
    if(row[33]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[33])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var hrad = doc.getHeader().appendParagraph(row[2]+" "+"-"+" "+row[3])
      hrad.setAttributes(headsty)
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[34]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[35]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[36]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[37]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[38]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[39]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[40]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[41]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[42]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[43]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[44]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[45]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[46]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[47]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[48]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[49]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[34]){
        var c1 = copo2.appendTableCell(row[34])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[35]){
        var c2 = copo2.appendTableCell(row[35])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[36]){
        var c3 = copo2.appendTableCell(row[36])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[37]){
        var c4 = copo2.appendTableCell(row[37])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[38]){
        var c2 = copo2.appendTableCell(row[38])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[39]){
        var c2 = copo2.appendTableCell(row[39])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[40]){
        var c2 = copo2.appendTableCell(row[40])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[41]){
        var c2 = copo2.appendTableCell(row[41])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[42]){
        var c2 = copo2.appendTableCell(row[42])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[43]){
        var c2 = copo2.appendTableCell(row[43])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[44]){
        var c2 = copo2.appendTableCell(row[44])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[45]){
        var c2 = copo2.appendTableCell(row[45])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[46]){
        var c2 = copo2.appendTableCell(row[46])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[47]){
        var c2 = copo2.appendTableCell(row[47])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[48]){
        var c2 = copo2.appendTableCell(row[48])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[49]){
        var c2 = copo2.appendTableCell(row[49])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[50]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[50])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[51]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[52]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[53]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[54]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[55]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[56]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[57]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[58]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[59]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[60]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[61]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[62]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[63]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[64]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[65]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[66]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[51]){
        var c1 = copo2.appendTableCell(row[51])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[52]){
        var c2 = copo2.appendTableCell(row[52])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[53]){
        var c3 = copo2.appendTableCell(row[53])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[54]){
        var c4 = copo2.appendTableCell(row[54])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[55]){
        var c2 = copo2.appendTableCell(row[55])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[56]){
        var c2 = copo2.appendTableCell(row[56])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[57]){
        var c2 = copo2.appendTableCell(row[57])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[58]){
        var c2 = copo2.appendTableCell(row[58])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[59]){
        var c2 = copo2.appendTableCell(row[59])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[60]){
        var c2 = copo2.appendTableCell(row[60])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[61]){
        var c2 = copo2.appendTableCell(row[61])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[62]){
        var c2 = copo2.appendTableCell(row[62])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[63]){
        var c2 = copo2.appendTableCell(row[63])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[64]){
        var c2 = copo2.appendTableCell(row[64])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[65]){
        var c2 = copo2.appendTableCell(row[65])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[66]){
        var c2 = copo2.appendTableCell(row[66])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[67]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[67])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[68]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[69]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[70]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[71]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[72]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[73]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[74]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[75]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[76]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[77]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[78]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[79]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[80]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[81]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[82]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[83]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[68]){
        var c1 = copo2.appendTableCell(row[68])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[69]){
        var c2 = copo2.appendTableCell(row[69])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[70]){
        var c3 = copo2.appendTableCell(row[70])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[71]){
        var c4 = copo2.appendTableCell(row[71])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[72]){
        var c2 = copo2.appendTableCell(row[72])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[73]){
        var c2 = copo2.appendTableCell(row[73])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[74]){
        var c2 = copo2.appendTableCell(row[74])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[75]){
        var c2 = copo2.appendTableCell(row[75])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[76]){
        var c2 = copo2.appendTableCell(row[76])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[77]){
        var c2 = copo2.appendTableCell(row[77])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[78]){
        var c2 = copo2.appendTableCell(row[78])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[79]){
        var c2 = copo2.appendTableCell(row[79])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[80]){
        var c2 = copo2.appendTableCell(row[80])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[81]){
        var c2 = copo2.appendTableCell(row[81])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[82]){
        var c2 = copo2.appendTableCell(row[82])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[83]){
        var c2 = copo2.appendTableCell(row[83])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[84]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[84])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[85]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[86]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[87]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[88]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[89]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[90]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[91]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[92]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[93]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[94]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[95]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[96]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[97]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[98]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[99]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[100]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[85]){
        var c1 = copo2.appendTableCell(row[34])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[86]){
        var c2 = copo2.appendTableCell(row[35])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[87]){
        var c3 = copo2.appendTableCell(row[36])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[88]){
        var c4 = copo2.appendTableCell(row[37])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[89]){
        var c2 = copo2.appendTableCell(row[38])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[90]){
        var c2 = copo2.appendTableCell(row[39])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[91]){
        var c2 = copo2.appendTableCell(row[40])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[92]){
        var c2 = copo2.appendTableCell(row[41])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[93]){
        var c2 = copo2.appendTableCell(row[42])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[94]){
        var c2 = copo2.appendTableCell(row[43])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[95]){
        var c2 = copo2.appendTableCell(row[44])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[96]){
        var c2 = copo2.appendTableCell(row[45])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[97]){
        var c2 = copo2.appendTableCell(row[46])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[98]){
        var c2 = copo2.appendTableCell(row[47])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[99]){
        var c2 = copo2.appendTableCell(row[48])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[100]){
        var c2 = copo2.appendTableCell(row[49])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[101]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[101])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[102]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[103]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[104]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[105]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[106]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[107]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[108]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[109]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[110]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[111]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[112]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[113]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[114]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[115]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[116]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[117]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[102]){
        var c1 = copo2.appendTableCell(row[102])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[103]){
        var c2 = copo2.appendTableCell(row[103])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[104]){
        var c3 = copo2.appendTableCell(row[104])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[105]){
        var c4 = copo2.appendTableCell(row[105])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[106]){
        var c2 = copo2.appendTableCell(row[106])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[107]){
        var c2 = copo2.appendTableCell(row[107])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[108]){
        var c2 = copo2.appendTableCell(row[108])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[109]){
        var c2 = copo2.appendTableCell(row[109])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[110]){
        var c2 = copo2.appendTableCell(row[110])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[111]){
        var c2 = copo2.appendTableCell(row[111])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[112]){
        var c2 = copo2.appendTableCell(row[112])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[113]){
        var c2 = copo2.appendTableCell(row[113])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[114]){
        var c2 = copo2.appendTableCell(row[114])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[115]){
        var c2 = copo2.appendTableCell(row[115])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[116]){
        var c2 = copo2.appendTableCell(row[116])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[117]){
        var c2 = copo2.appendTableCell(row[117])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[118]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[118])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[119]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[120]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[121]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[122]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[123]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[124]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[125]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[126]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[127]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[128]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[129]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[130]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[131]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[132]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[133]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[134]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[119]){
        var c1 = copo2.appendTableCell(row[119])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[35]){
        var c2 = copo2.appendTableCell(row[35])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[120]){
        var c3 = copo2.appendTableCell(row[121])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[122]){
        var c4 = copo2.appendTableCell(row[122])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[123]){
        var c2 = copo2.appendTableCell(row[123])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[124]){
        var c2 = copo2.appendTableCell(row[124])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[125]){
        var c2 = copo2.appendTableCell(row[125])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[126]){
        var c2 = copo2.appendTableCell(row[126])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[127]){
        var c2 = copo2.appendTableCell(row[127])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[128]){
        var c2 = copo2.appendTableCell(row[128])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[129]){
        var c2 = copo2.appendTableCell(row[129])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[130]){
        var c2 = copo2.appendTableCell(row[130])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[131]){
        var c2 = copo2.appendTableCell(row[131])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[132]){
        var c2 = copo2.appendTableCell(row[132])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[133]){
        var c2 = copo2.appendTableCell(row[133])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[134]){
        var c2 = copo2.appendTableCell(row[134])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[135]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[135])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[136]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[137]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[138]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[139]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[140]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[141]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[142]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[143]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[144]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[145]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[146]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[147]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[148]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[149]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[150]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[151]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[136]){
        var c1 = copo2.appendTableCell(row[136])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[137]){
        var c2 = copo2.appendTableCell(row[137])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[138]){
        var c3 = copo2.appendTableCell(row[138])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[139]){
        var c4 = copo2.appendTableCell(row[139])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[140]){
        var c2 = copo2.appendTableCell(row[140])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[141]){
        var c2 = copo2.appendTableCell(row[141])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[142]){
        var c2 = copo2.appendTableCell(row[142])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[143]){
        var c2 = copo2.appendTableCell(row[143])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[144]){
        var c2 = copo2.appendTableCell(row[144])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[145]){
        var c2 = copo2.appendTableCell(row[145])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[146]){
        var c2 = copo2.appendTableCell(row[146])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[147]){
        var c2 = copo2.appendTableCell(row[147])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[148]){
        var c2 = copo2.appendTableCell(row[148])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[149]){
        var c2 = copo2.appendTableCell(row[149])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[150]){
        var c2 = copo2.appendTableCell(row[150])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[151]){
        var c2 = copo2.appendTableCell(row[151])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[152]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[152])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[153]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[154]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[155]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[156]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[157]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[158]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[159]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[160]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[161]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[162]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[163]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[164]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[165]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[166]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[167]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[168]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[153]){
        var c1 = copo2.appendTableCell(row[153])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[154]){
        var c2 = copo2.appendTableCell(row[154])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[155]){
        var c3 = copo2.appendTableCell(row[155])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[156]){
        var c4 = copo2.appendTableCell(row[156])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[157]){
        var c2 = copo2.appendTableCell(row[157])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[158]){
        var c2 = copo2.appendTableCell(row[158])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[159]){
        var c2 = copo2.appendTableCell(row[159])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[160]){
        var c2 = copo2.appendTableCell(row[160])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[161]){
        var c2 = copo2.appendTableCell(row[161])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[162]){
        var c2 = copo2.appendTableCell(row[162])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[163]){
        var c2 = copo2.appendTableCell(row[163])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[164]){
        var c2 = copo2.appendTableCell(row[164])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[165]){
        var c2 = copo2.appendTableCell(row[165])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[166]){
        var c2 = copo2.appendTableCell(row[166])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[167]){
        var c2 = copo2.appendTableCell(row[167])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[168]){
        var c2 = copo2.appendTableCell(row[168])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[169]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[169])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[170]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[171]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[172]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[173]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[174]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[175]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[176]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[177]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[178]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[179]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[180]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[181]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[182]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[183]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[184]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[185]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[170]){
        var c1 = copo2.appendTableCell(row[170])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[171]){
        var c2 = copo2.appendTableCell(row[171])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[172]){
        var c3 = copo2.appendTableCell(row[172])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[173]){
        var c4 = copo2.appendTableCell(row[173])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[174]){
        var c2 = copo2.appendTableCell(row[174])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[175]){
        var c2 = copo2.appendTableCell(row[175])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[176]){
        var c2 = copo2.appendTableCell(row[176])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[177]){
        var c2 = copo2.appendTableCell(row[177])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[178]){
        var c2 = copo2.appendTableCell(row[178])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[179]){
        var c2 = copo2.appendTableCell(row[179])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[180]){
        var c2 = copo2.appendTableCell(row[180])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[181]){
        var c2 = copo2.appendTableCell(row[181])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[182]){
        var c2 = copo2.appendTableCell(row[182])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[183]){
        var c2 = copo2.appendTableCell(row[183])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[184]){
        var c2 = copo2.appendTableCell(row[184])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[185]){
        var c2 = copo2.appendTableCell(row[185])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[186]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[186])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[187]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[188]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[189]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[190]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[191]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[192]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[193]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[194]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[195]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[196]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[197]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[198]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[199]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[200]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[201]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[202]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[187]){
        var c1 = copo2.appendTableCell(row[187])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[188]){
        var c2 = copo2.appendTableCell(row[188])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[189]){
        var c3 = copo2.appendTableCell(row[189])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[190]){
        var c4 = copo2.appendTableCell(row[190])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[191]){
        var c2 = copo2.appendTableCell(row[191])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[192]){
        var c2 = copo2.appendTableCell(row[192])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[193]){
        var c2 = copo2.appendTableCell(row[193])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[194]){
        var c2 = copo2.appendTableCell(row[194])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[195]){
        var c2 = copo2.appendTableCell(row[195])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[196]){
        var c2 = copo2.appendTableCell(row[196])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[197]){
        var c2 = copo2.appendTableCell(row[197])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[198]){
        var c2 = copo2.appendTableCell(row[198])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[199]){
        var c2 = copo2.appendTableCell(row[199])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[200]){
        var c2 = copo2.appendTableCell(row[200])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[201]){
        var c2 = copo2.appendTableCell(row[201])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[202]){
        var c2 = copo2.appendTableCell(row[202])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[203]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[203])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[204]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[205]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[206]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[207]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[208]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[209]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[210]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[211]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[212]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[213]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[214]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[215]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[216]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[217]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[218]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[219]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[204]){
        var c1 = copo2.appendTableCell(row[204])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[205]){
        var c2 = copo2.appendTableCell(row[205])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[206]){
        var c3 = copo2.appendTableCell(row[206])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[207]){
        var c4 = copo2.appendTableCell(row[207])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[208]){
        var c2 = copo2.appendTableCell(row[208])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[209]){
        var c2 = copo2.appendTableCell(row[209])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[210]){
        var c2 = copo2.appendTableCell(row[210])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[211]){
        var c2 = copo2.appendTableCell(row[211])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[212]){
        var c2 = copo2.appendTableCell(row[212])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[213]){
        var c2 = copo2.appendTableCell(row[213])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[214]){
        var c2 = copo2.appendTableCell(row[214])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[215]){
        var c2 = copo2.appendTableCell(row[215])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[216]){
        var c2 = copo2.appendTableCell(row[216])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[217]){
        var c2 = copo2.appendTableCell(row[217])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[218]){
        var c2 = copo2.appendTableCell(row[218])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[219]){
        var c2 = copo2.appendTableCell(row[219])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[220]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[220])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[221]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[222]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[223]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[224]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[225]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[226]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[227]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[228]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[229]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[230]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[231]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[232]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[233]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[234]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[235]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[236]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[221]){
        var c1 = copo2.appendTableCell(row[221])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[222]){
        var c2 = copo2.appendTableCell(row[222])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[223]){
        var c3 = copo2.appendTableCell(row[223])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[224]){
        var c4 = copo2.appendTableCell(row[224])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[225]){
        var c2 = copo2.appendTableCell(row[225])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[226]){
        var c2 = copo2.appendTableCell(row[226])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[227]){
        var c2 = copo2.appendTableCell(row[227])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[228]){
        var c2 = copo2.appendTableCell(row[228])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[229]){
        var c2 = copo2.appendTableCell(row[229])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[230]){
        var c2 = copo2.appendTableCell(row[230])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[231]){
        var c2 = copo2.appendTableCell(row[231])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[232]){
        var c2 = copo2.appendTableCell(row[232])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[233]){
        var c2 = copo2.appendTableCell(row[233])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[234]){
        var c2 = copo2.appendTableCell(row[234])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[235]){
        var c2 = copo2.appendTableCell(row[235])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[236]){
        var c2 = copo2.appendTableCell(row[236])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[237]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[237])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[238]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[239]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[240]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[241]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[242]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[243]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[244]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[245]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[246]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[247]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[248]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[249]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[250]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[251]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[252]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[253]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[238]){
        var c1 = copo2.appendTableCell(row[238])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[239]){
        var c2 = copo2.appendTableCell(row[239])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[240]){
        var c3 = copo2.appendTableCell(row[240])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[241]){
        var c4 = copo2.appendTableCell(row[241])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[242]){
        var c2 = copo2.appendTableCell(row[242])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[243]){
        var c2 = copo2.appendTableCell(row[243])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[244]){
        var c2 = copo2.appendTableCell(row[244])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[245]){
        var c2 = copo2.appendTableCell(row[245])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[246]){
        var c2 = copo2.appendTableCell(row[246])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[247]){
        var c2 = copo2.appendTableCell(row[247])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[248]){
        var c2 = copo2.appendTableCell(row[248])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[249]){
        var c2 = copo2.appendTableCell(row[249])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[250]){
        var c2 = copo2.appendTableCell(row[250])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[251]){
        var c2 = copo2.appendTableCell(row[251])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[252]){
        var c2 = copo2.appendTableCell(row[252])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[253]){
        var c2 = copo2.appendTableCell(row[253])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[254]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[254])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")
      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[255]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[256]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[257]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[258]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[259]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[260]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[261]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[262]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[262]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[263]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[264]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[265]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[266]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[267]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[268]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[269]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[255]){
        var c1 = copo2.appendTableCell(row[255])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[256]){
        var c2 = copo2.appendTableCell(row[256])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[257]){
        var c3 = copo2.appendTableCell(row[257])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[258]){
        var c4 = copo2.appendTableCell(row[258])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[259]){
        var c2 = copo2.appendTableCell(row[259])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[260]){
        var c2 = copo2.appendTableCell(row[260])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[261]){
        var c2 = copo2.appendTableCell(row[261])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[262]){
        var c2 = copo2.appendTableCell(row[262])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[263]){
        var c2 = copo2.appendTableCell(row[263])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[264]){
        var c2 = copo2.appendTableCell(row[264])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[264]){
        var c2 = copo2.appendTableCell(row[264])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[265]){
        var c2 = copo2.appendTableCell(row[266])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[182]){
        var c2 = copo2.appendTableCell(row[267])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[268]){
        var c2 = copo2.appendTableCell(row[268])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[269]){
        var c2 = copo2.appendTableCell(row[269])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[270]){
        var c2 = copo2.appendTableCell(row[270])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n"+"\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    if(row[271]){
      var table7 = body.appendTable()
      var exp1 = table7.appendTableRow()
      exp1.appendTableCell("Exp No.               "+"Date:").setWidth(120)
      var tit = exp1.appendTableCell(row[271])
      table7.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(cellStyle)
      exp1.setAttributes(dataty)
      var gapy = body.appendParagraph("\n"+"\n")
      var aim = body.appendParagraph("AIM/OBJECTIVE:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      var expsty = {}
      expsty[DocumentApp.Attribute.FONT_FAMILY]="Times New Roman";
      expsty[DocumentApp.Attribute.FONT_SIZE.FONT_SIZE] = 12;
      expsty[DocumentApp.Attribute.BOLD]=true;
      aim.setAttributes(expsty);
      var pri = body.appendParagraph("PRINCIPLE:/ALGORITHM"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      pri.setAttributes(expsty)
      var mat = body.appendParagraph("RESOURCE OR MATERIALS REQUIRED:"+"\n"+"\n"+"\n"+"\n")
      mat.setAttributes(expsty);
      body.appendPageBreak()
      var proced = body.appendParagraph("PROCEDURE / PROGRAM:")
      proced.setAttributes(expsty);
      body.appendPageBreak();
      var obs = body.appendParagraph("OBSERVATIONS/ INFERENCE / OUTPUT:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n");
      obs.setAttributes(expsty);
      var max = body.appendParagraph("RESULTS / DISCUSSION:"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n"+"\n")
      max.setAttributes(expsty)
      body.appendPageBreak()
      var ee = body.appendParagraph("MAPPING OF PO AND PSO: (For all the COs covered by this experiment)"+"\n")

      var table8 = body.appendTable()
      var copo1 = table8.appendTableRow()
      var tabdoc = {}
      tabdoc[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]=DocumentApp.HorizontalAlignment.CENTER;
      tabdoc[DocumentApp.Attribute.FONT_SIZE]=12;
      if(row[272]){
        var exo1 = copo1.appendTableCell("CO No.").setWidth(100)
        exo1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[273]){
        var exo2 = copo1.appendTableCell("PO1")
        exo2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if (row[274]){
      var exo3 = copo1.appendTableCell("PO2")
      exo3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }
      if(row[275]){
        var exo4 = copo1.appendTableCell("PO3")
        exo4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      }

      if(row[276]){
        var exo5 = copo1.appendTableCell("PO4")
        exo5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[277]){
        var exo6 = copo1.appendTableCell("PO5")
        exo6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[278]){
        var exo7 = copo1.appendTableCell("PO6")
        exo7.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[279]){
        var exo8 = copo1.appendTableCell("PO7")
        exo8.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[280]){
        var exo9 = copo1.appendTableCell("PO8")
        exo9.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[281]){
        var exo10 = copo1.appendTableCell("PO9")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[282]){
        var exo10 = copo1.appendTableCell("PO10")
        exo10.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[283]){
        var exo11 = copo1.appendTableCell("PO11")
        exo11.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[284]){
        var exo12 = copo1.appendTableCell("PO12")
        exo12.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[285]){
        var exo13 = copo1.appendTableCell("PSO1")
        exo13.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[286]){
        var exo14 = copo1.appendTableCell("PSO2")
        exo14.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if(row[287]){
        var exo15 = copo1.appendTableCell("PSO2")
        
      
      }
      var tabdoc2 = {}
      tabdoc2[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      tabdoc2[DocumentApp.Attribute.FONT_SIZE]=11
      tabdoc2[DocumentApp.Attribute.BOLD] = false;
      copo1.setAttributes(tabdoc)
      var copo2 = table8.appendTableRow()
      if (row[272]){
        var c1 = copo2.appendTableCell(row[272])
        c1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[273]){
        var c2 = copo2.appendTableCell(row[273])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[274]){
        var c3 = copo2.appendTableCell(row[274])
        c3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[275]){
        var c4 = copo2.appendTableCell(row[275])
        c4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[276]){
        var c2 = copo2.appendTableCell(row[276])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[277]){
        var c2 = copo2.appendTableCell(row[277])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[278]){
        var c2 = copo2.appendTableCell(row[278])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[279]){
        var c2 = copo2.appendTableCell(row[279])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[280]){
        var c2 = copo2.appendTableCell(row[280])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[281]){
        var c2 = copo2.appendTableCell(row[281])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[282]){
        var c2 = copo2.appendTableCell(row[282])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[283]){
        var c2 = copo2.appendTableCell(row[283])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[284]){
        var c2 = copo2.appendTableCell(row[284])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[285]){
        var c2 = copo2.appendTableCell(row[285])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[286]){
        var c2 = copo2.appendTableCell(row[286])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }
      if (row[287]){
        var c2 = copo2.appendTableCell(row[287])
        c2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)

      }

      copo2.setAttributes(tabdoc2)
      var asses = body.appendParagraph("ASSESMENT:\n")
      asses.setAttributes(expsty)
      var tabs = body.appendTable()
      var tabs1 = tabs.appendTableRow()
      tabs1.appendTableCell("Particulars").setWidth(300)
      var ch1 = tabs1.appendTableCell("Max Marks")
      ch1.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs1.appendTableCell("Marks Awarded")
      var tabs2 = tabs.appendTableRow()
      tabs2.appendTableCell("Preparations").setWidth(300)
      var ch2 = tabs2.appendTableCell("10")
      ch2.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs2.appendTableCell()
      var tabs3 = tabs.appendTableRow()
      tabs3.appendTableCell("Conduct of Experiment").setWidth(300)
      var ch3 = tabs3.appendTableCell("30")
      ch3.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs3.appendTableCell()
      var tabs4 = tabs.appendTableRow()
      tabs4.appendTableCell("Results and Discussion").setWidth(300)
      var ch4 = tabs4.appendTableCell("30")
      ch4.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs4.appendTableCell()
      var tabs5 = tabs.appendTableRow()
      tabs5.appendTableCell("Viva Voice").setWidth(300)
      var ch5 = tabs5.appendTableCell("20")
      ch5.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs5.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Report").setWidth(300)
      var ch6 = tabs6.appendTableCell("10")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()
      var tabs6 = tabs.appendTableRow()
      tabs6.appendTableCell("Total Marks").setWidth(300)
      var ch6 = tabs6.appendTableCell("100")
      ch6.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      tabs6.appendTableCell()

      var table9 = body.appendTable();
      var csbs = table9.appendTableRow()
      csbs.appendTableCell("Evaluator Signature:").setWidth(300)
      csbs.appendTableCell()
      var gap2 = body.appendParagraph("\n"+"\n")
      body.appendPageBreak()
    }
    var dec5 ={}
    dec5[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    dec5[DocumentApp.Attribute.FONT_SIZE]=14
    var nor = body.appendParagraph(""+"\n")
    var dec = body.appendParagraph("Declaration:"+"\n"+"\n"+"\n"+"\n")
    dec.setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    dec.setAttributes(dec5);
    var det = {}
    det[DocumentApp.Attribute.FONT_FAMILY]='Times New Roman';
    det[DocumentApp.Attribute.FONT_SIZE]=12
    var dec2 = body.appendParagraph("The students has completed all the experiments as per the course syllabus on_____________"+"\n"+"\n"+"\n")
    dec2.setAttributes(dataty);
    var dec3 = body.appendParagraph("Signature of Faculty")
    dec3.setAttributes(dataty);
    dec3.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
    doc.saveAndClose;
    var url = doc.getUrl()
    spreadsheet.getRange(index+1,289).setValue(url)
    var email = spreadsheet.getRange(index+1,2).getValue()
    doc.addEditor(email);
    GmailApp.sendEmail(email,"LAB RECORD"+" - "+row[2]+"-"+row[3],"Dear Sir\n"+"\n"+"Thank You for filling Form, The Lab Manual is Generated and the Access is Provided.\n"+"\n"+"Kindly go through the file using attached link, There are little Edits you should do kindly go through the below points:\n"+"\n"+"* Add the Header to the lab manual\n"+"\n"+"* Justify the paragraphs needed in the lab manual\n"+"\n"+"* If you want to change whole data or remake the manual, kindly meet Office Academics\n"+"\n"+"If you have any queries or questions, kindly let us know or mail to the office academics\n"+"\n"+"CLICK ON THE LINK:\n"+url)


  })








 

}
