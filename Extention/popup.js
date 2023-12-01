document.addEventListener('DOMContentLoaded', function () {
  var newTextBtn = document.getElementById('newTextBtn');
  var output = document.getElementById('output');
  var loveTexts = [
    "Volim te Cale",
    "Ti si najbolji Otac na svetu",
    "Mnogo sam zahvalan Bogu da mi dao toliko dobrog Oca svaki uspeh sto imam me podrzio moj otac uvek si bio uz mene da mi pomognos hvala ti puno volim te",
    "Najjaci si ",
    "Hvala da si me tako vaspitao da budem dobar decko i pametan da se nikad ne predam i da uvek dam vise i vise ",
    "Breite Siech",
    "nemogu ni da zamislim kako se dobro oseca da imas Filip Mitrovic kao sina ",
    "Ti si mi uvek bio Motivatia da budem bolji od svakoga dali u kosarku u fitness u skoli nema veze sta uvek sam zeleo da budem najbolji i da stignem moga oca da bi bio ponosan na mene",
    "Nemoj nikad da izgubis tvoj lep osmeh u lice",
    "fak ju referi fak ju referi fak ju referi",
    "Najbolji si"


  ];

  function generateRandomText() {
    var randomIndex = Math.floor(Math.random() * loveTexts.length);
    output.textContent = loveTexts[randomIndex];
  }

  newTextBtn.addEventListener('click', generateRandomText);
});
