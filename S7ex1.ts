// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
//function format_message(from, to, message){
//    return "From: " + from + ", To: " + to + "Msg: " + message;
//}

let format_1 = from => to => message => "From: " + from + ", To: " + to + " Msg: " + message;

function format_message(from, to ,message){
    let format_2 = format_1(from);
    let format_3= format_2(to);
    return format_3(message);
}
console.log(format_message( "machin", "truc", "bidule"));

