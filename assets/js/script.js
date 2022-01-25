let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15234241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
]

let traumatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADAZ', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
]

let dental = [
    { hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ANGEL MUÑOZ', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
]



//Tabla Radiologia
document.write("<section class='container'>");
document.write("<table class='table'>");
document.write("<thead class='table-dark'>");
document.write("<tr>");
document.write("<th scope='col' class='text-center'>Hora</th>");
document.write("<th scope='col' class='text-center'>Especialista</th>");
document.write("<th scope='col' class='text-center'>Paciente</th>");
document.write("<th scope='col' class='text-center'>Rut</th>");
document.write("<th scope='col' class='text-center'>Previsión</th>");
document.write("</tr>");
document.write("</thead>");

for (i = 0; i < radiologia.length; i++) {
    document.write("<tbody>");
    document.write("<tr>");
    document.write(`<th scope="col"> ${radiologia[i].hora} </th>`);
    document.write(`<th scope="col"> ${radiologia[i].especialista} </th>`);
    document.write(`<th scope="col"> ${radiologia[i].paciente} </th>`);
    document.write(`<th scope="col"> ${radiologia[i].rut} </th>`);
    document.write(`<th scope="col"> ${radiologia[i].prevision} </th>`);
    document.write("</tr>");
}

//Radiologia
document.write(`<p class='text-center fw-bold pt-5 text-uppercase'>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>`);


//Tabla Traumatología
document.write("<section class='container'>");
document.write("<table class='table'>");
document.write("<thead class='table-dark'>");
document.write("<tr>");
document.write("<th scope='col' class='text-center'>Hora</th>");
document.write("<th scope='col' class='text-center'>Especialista</th>");
document.write("<th scope='col' class='text-center'>Paciente</th>");
document.write("<th scope='col' class='text-center'>Rut</th>");
document.write("<th scope='col' class='text-center'>Previsión</th>");
document.write("</tr>");
document.write("</thead>");

for (i = 0; i < traumatologia.length; i++) {
    document.write("<tbody>");
    document.write("<tr>");
    document.write(`<th scope="col"> ${traumatologia[i].hora} </th>`);
    document.write(`<th scope="col"> ${traumatologia[i].especialista} </th>`);
    document.write(`<th scope="col"> ${traumatologia[i].paciente} </th>`);
    document.write(`<th scope="col"> ${traumatologia[i].rut} </th>`);
    document.write(`<th scope="col"> ${traumatologia[i].prevision} </th>`);
    document.write("</tr>");
}

//Traumatología
document.write(`<p class='text-center fw-bold pt-5 text-uppercase'>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>`);


//Tabla Dental
document.write("<section class='container'>");
document.write("<table class='table'>");
document.write("<thead class='table-dark'>");
document.write("<tr>");
document.write("<th scope='col' class='text-center'>Hora</th>");
document.write("<th scope='col' class='text-center'>Especialista</th>");
document.write("<th scope='col' class='text-center'>Paciente</th>");
document.write("<th scope='col' class='text-center'>Rut</th>");
document.write("<th scope='col' class='text-center'>Previsión</th>");
document.write("</tr>");
document.write("</thead>");

for (i = 0; i < dental.length; i++) {
    document.write("<tbody>");
    document.write("<tr>");
    document.write(`<th scope="col"> ${dental[i].hora} </th>`);
    document.write(`<th scope="col"> ${dental[i].especialista} </th>`);
    document.write(`<th scope="col"> ${dental[i].paciente} </th>`);
    document.write(`<th scope="col"> ${dental[i].rut} </th>`);
    document.write(`<th scope="col"> ${dental[i].prevision} </th>`);
    document.write("</tr>");
}

//Dental
document.write(`<p class='text-center fw-bold pt-5 text-uppercase'>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>`);
