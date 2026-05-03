//Singlton Objects

const user = new Object();

console.log(user);

const user1 = {};//non singlton object

user1.ID = 9;
user1.name = "Harshada";
user1.Islogin = true;

console.log(user1);

//obj inside obj

const user3 = {
    email : "keste",
    userName : {
        FullName : {
            FName : "Harshada",
            LName : "Keste"
        }
    }
}

console.log(user3);

console.log(user3.userName.FullName.FName);
