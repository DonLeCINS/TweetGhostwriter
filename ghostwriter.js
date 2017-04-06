function writeTweet()
{
  var randIndex;
  var sentence;
  var intros = ["It's a sea of possibilities", "Sleep is for the dead", "Stick with it" , "Work hard,play hard"];
  var body = ["young one", "my friend", "dude", "champ", "master"];
  var end = ["you got this", "just hang loose"];
  randIndex = randomUpTo(intros.length - 1);
  sentence = intros[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById('tweet').innerHTML = sentence;

}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
