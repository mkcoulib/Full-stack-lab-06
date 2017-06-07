var friend_name;
var weapon_name;
var location_name;
friend_name = ['Musa','Mike','Eric','Alexis','Tai'];
location_name = ['librairy','bedroom','airport','bathroom','classrom','street','closet','office', 'kitchen','lobby'];
weapon_name = ['knife','stone','sling','machine gun','AK-47','rocket launcher','IED','handgun','rpg','helicopter','guitar','dagger','i-phone','android','css','java','html','hammer','nail','kalachinikov'];
var i;
//var text = " ";


console.log(friend_name.length);
console.log(location_name.length);
console.log(weapon_name.length)

function blame (num){ 
            
            var friend_index = num % friend_name.length;
            var location_index = num % location_name.length;
            var weapon_index = num % location_name.length;

            var h3 = document.createElement('h3');
            var textFriend = document.createTextNode("Accusation " + [num]);
            // h3.innertext = 'Accusation ' + [num];
            var message = "Accusation " + [num] + ": " + "I accuse " + friend_name[friend_index] + "," + " with the " + weapon_name[weapon_index] + " in the " + location_name[location_index]
            h3.appendChild(textFriend);

            document.body.appendChild(h3);
            h3.addEventListener('click', showAlert)
             function showAlert() {
                alert(message);
            }
    
}
for (var i = 1; i <=100; i++) {
    blame (i);
}



// ".bind (i)" seems to be the best way to handle the loop problem. it was tied to the event listener